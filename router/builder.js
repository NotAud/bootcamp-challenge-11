const path = require("path");

// Util for building paths for the view routes
function build(route) {
  return path.join(process.cwd(), `/public/${route}`);
}

module.exports = build;
