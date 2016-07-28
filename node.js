#!/usr/bin/env node

const generator = require("./generator.js");

const result = generator.keyWordGenerator(process.argv.slice(2).join(" "));

console.log(result.join("\n"));
