function readfile(path, callback) {
  // do something aspect before ..
  fs.readFile('/path/to/file', callback);
  // do something aspect after ..
}

readfile(‘/etc/passwd’, callback);