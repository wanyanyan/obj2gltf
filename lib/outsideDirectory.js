"use strict";
import path from "path";

/**
 * Checks if a file is outside of a directory.
 *
 * @param {String} file Path to the file.
 * @param {String} directory Path to the directory.
 * @returns {Boolean} Whether the file is outside of the directory.
 *
 * @private
 */
function outsideDirectory(file, directory) {
  return path.relative(directory, file).indexOf("..") === 0;
}

export default outsideDirectory;
