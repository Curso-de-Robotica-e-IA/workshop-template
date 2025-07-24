/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 153:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 657:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 410:
/***/ ((module) => {

module.exports = eval("require")("xml2js");


/***/ }),

/***/ 896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = __nccwpck_require__(153);
const github = __nccwpck_require__(657);
const fs = __nccwpck_require__(896);
const xml2js = __nccwpck_require__(410);

(async () => {
  try {
    const junitPath = core.getInput('junit_path');
    const githubToken = core.getInput('github_token');
    const commentTag = core.getInput('comment_tag') || 'junit-report';

    const xml = fs.readFileSync(junitPath, 'utf-8');
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
        body: md,
      });
    }

  } catch (error) {
    core.setFailed(error.message);
  }
})();

module.exports = __webpack_exports__;
/******/ })()
;