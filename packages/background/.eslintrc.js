module.exports = {
  // Indicates that this is the root ESLint configuration for your project.
  root: true,
  
  // Extends a custom ESLint configuration named "custom."
  extends: ["custom"],
  
  // Specifies options related to TypeScript parsing.
  parserOptions: {
    // Sets the directory where ESLint should look for tsconfig.json.
    tsconfigRootDir: __dirname,
    
    // Specifies the path to your TypeScript project configuration file.
    project: ["./tsconfig.json"],
  },
};
