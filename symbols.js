var symbols = function(code) {
  return code.replace(/@+(?=(?:(?:[^"]*"){2})*[^"]*$)/g, "this").replace(/#+(?=(?:(?:[^"]*"){2})*[^"]*$)/g, ".prototype.");
};
