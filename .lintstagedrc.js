const { quote } = require('shell-quote');
const { ESLint } = require('eslint');

const eslint = new ESLint();
const isWin = process.platform === 'win32';

function escape(str) {
  const escaped = quote(str);
  return escaped.replace(/\\@/g, '@');
}

module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => (isWin ? filename : escape([filename])))
      .join(' ');

    return [
      `prettier --with-node-modules --ignore-path .prettierignore_staged --write ${escapedFileNames}`,
      `eslint --no-ignore --max-warnings=0 --fix ${filenames
        .filter((file) => !eslint.isPathIgnored(file))
        .map((f) => `"${f}"`)
        .join(' ')}`,
    ];
  },
};
