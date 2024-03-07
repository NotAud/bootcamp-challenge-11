const path = require("path");

function build(route) {
  return path.join(process.cwd(), `/public/${route}`);
}

module.exports = build;
