const typescriptLint = require('@garron/standard/dist/typescriptLint')

 module.exports = {
   ...typescriptLint,
  extends: ['standard', 'prettier'],
  rules: {
    // your rules
  },
};