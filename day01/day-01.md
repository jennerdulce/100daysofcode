# MODULARITY
- we want to modularize our code so that we can run tests and import/export into other files
- making things into modules makes code cleaner, allows us to run tests, changes are easier to navigate and make.
- smaller, clearer, more concise

## MODULE EXPORTS
- a module is a javascript file that can be imported/exported and used in other files.
- browser:
  - `this` keyword refers to outermost layer WINDOWS
- terminal/REPL/javaruntime
  - `this` keyword refers to outermost layer GLOBAL
  - node has a database built in where you can store modules
    - *module.exports*
- the be able to export a file.. you need to add a `module.exports` to the end of the file.
  - see `export.js`

## MODULE IMPORTS
- first import the file by doing a statement like this:
  - `const someName = require('/filepath/export.js')`
- `export.js` should have a 'module.exports' in it
- what you choose to name is the object and this object = module.exports from the file that you 'required'
- go check in 'export.js' and see the value of 'module.exports'
- server is now an object that has .app and .start properties