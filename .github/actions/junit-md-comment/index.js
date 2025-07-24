const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const xml2js = require('xml2js');

(async () => {
  try {
    const junitPath = core.getInput('junit_path');
    const githubToken = core.getInput('github_token');
    const commentTag = core.getInput('comment_tag') || 'junit-report';

    const xmlData = fs.readFileSync(junitPath, 'utf-8');
    const parser = new xml2js.Parser();
    const results = await parser.parseStringPromise(xmlData);

    const testCases = results.testsuites.testsuite[0].testcase;
    let markdownTable = `| Test | Status |\n|------|--------|\n`;
    let failedTests = [];
    
    testCases.forEach(test => {
      const testName = test.$.name;
      if (test.failure) {
        markdownTable += `| ${testName} | ❌ | \n`;
        failedTests.push({ name: testName, message: test.failure[0]._ });
      } else {
        markdownTable += `| ${testName} | ✅ | \n`;
      }
    });

    let failureDetails = "";
    if (failedTests.length > 0) {
      failureDetails = "\n<details>\n <summary>❌ Failed Tests (Click to Expand)</summary>\n\n";
      failedTests.forEach(test => {
        failureDetails += `**${test.name}**\n\`\`\`\n${test.message.trim()}\n\`\`\`\n\n`;
      });
      failureDetails += "</details>\n";
    }

    const commentBody = `### Pytest Results 🧪\n\n${markdownTable}${failureDetails}`;
    const octokit = github.getOctokit(githubToken);
    const { owner, repo } = github.context.repo;
    const prNumber = github.context.payload.pull_request.number;

    const { data: comments } = await octokit.rest.issues.listComments({
      owner,
      repo,
      issue_number: prNumber,
    });

    const previous = comments.find(c => c.body.includes(`<!-- ${commentTag} -->`));

    if (previous) {
      await octokit.rest.issues.updateComment({
        owner,
        repo,
        comment_id: previous.id,
        body: commentBody,
      });
    } else {
      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: prNumber,
        body: commentBody,
      });
    }

  } catch (error) {
    core.setFailed(error.message);
  }
})();
