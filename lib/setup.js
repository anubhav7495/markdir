exports.init = function(fs, home) {
  var line = "\n" + "### Added by markdir\n" +
              "if [ -f ~/.path_aliases ]; then" + "\n" +
              "    " + ". ~/.path_aliases" + "\n" +
              "fi" + "\n";

  fs.appendFileSync(home + '/.bashrc', line, 'utf-8');
};
