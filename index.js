// const { transformSync } = require("@babel/core");
// const insertParametersPlugin = require("./plugins/5_test");

// const path = require("path");

// const { code } = transformSync(path.join(__dirname, "./sourceCode.js"), {
//   plugins: [insertParametersPlugin],
//   parserOpts: {
//     sourceType: "unambiguous",
//     plugins: ["jsx"],
//   },
// });

// console.log(code);

const { transformFileSync } = require("@babel/core");
const insertParametersPlugin = require("./plugins/5_test");
const path = require("path");

const { code } = transformFileSync(path.join(__dirname, "./sourceCode.js"), {
  plugins: [insertParametersPlugin],
  parserOpts: {
    sourceType: "unambiguous",
    plugins: ["jsx"],
  },
});

console.log(code);
