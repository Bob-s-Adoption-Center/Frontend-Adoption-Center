// tests/global-setup.ts
const path = require("path");
const cli = require("next/dist/cli/next-build");
async function globalSetup() {
  process.env.PLAYWRIGHT = "1";
  if (process.env.SKIP_BUILD === "1") {
    console.log("skipping build as SKIP_BUILD is set");
  } else {
    await cli.nextBuild([path.join(__dirname, "..")]);
  }
}
module.exports = globalSetup;

//need to check if this is the correct way to do this
//  "test:skipbuild": "SKIP_BUILD=1 playwright test", may not be working