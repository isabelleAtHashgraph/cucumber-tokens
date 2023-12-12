module.exports = {
  default: [
    'features/**/*.feature',
    '--require-module ts-node/register',
    '--require features/step_definitions/**/*.ts',
    '--format progress-bar',
    '--publish-quiet',
    '--format-options \'{"snippetInterface": "synchronous"}\'',
  ].join(' '),
};
