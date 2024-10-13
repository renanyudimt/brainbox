/* eslint-disable @typescript-eslint/no-require-imports, no-undef*/

require("@makes-front/eslint-config");

module.exports = {
  extends: ["@front/eslint-config"],
  parserOptions: { tsconfigRootDir: __dirname },
  ignorePatterns: ["node_modules", "dist"],
};
