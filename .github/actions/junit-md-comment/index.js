const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const xml2js = require('xml2js');

(async () => {
  try {
    const junitPath = core.getInput('junit_path');
    const githubToken = core.getInput('github_token');
    const commentTag = core.getInput('comment_tag') || 'junit-report';

    const xml = fs.readFileSync(junitPath, 'utf-8');
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xml);

    const testsuite = result.testsuite || result.testsuites.testsuite[0];
    const total = testsuite.$.tests;
    const failures = testsuite.$.failures;
    const time = testsuite.$.time;

    let md = `### 🧪 JUnit Test Results\n`;
    md += `**Tests:** ${total}  |  **Failures:** ${failures}  |  **Time:** ${time}s\n\n`;

    for (const testcase of testsuite.testcase) {
      const name = testcase.$.name;
      if (testcase.failure) {
        md += `❌ **${name}**\n\`\`\`\n${testcase.failure[0]._}\n\`\`\`\n`;
      } else {
        md += `✅ **${name}**\n`;
      }
    }

    md += `\n<!-- ${commentTag} -->`;

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
        body: md,
      });
    } else {
      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: prNumber,
        body: md,
      });
    }

  } catch (error) {
    core.setFailed(error.message);
  }
})();
