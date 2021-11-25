const { transformFromAstSync } = require("@babel/core");
const parser = require("@babel/parser");
const autoTrackPlugin = require("./15_test.js");
const fs = require("fs");
const path = require("path");

const sourceCode = fs.readFileSync(
  path.join(__dirname, "../15_sourceCode.js"),
  {
    encoding: "utf-8",
  }
);

const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous",
});

const { code } = transformFromAstSync(ast, sourceCode, {
  plugins: [
    [
      autoTrackPlugin,
      {
        trackerPath: "tracker",
      },
    ],
  ],
});

console.log(code);
