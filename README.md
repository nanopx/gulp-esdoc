# gulp-esdoc
Gulp plugin for [ESDoc](https://esdoc.org/)

## Installation

** !! not published in npm yet **

```
npm install gulp-esdoc --save-dev
```

## Usage

```JavaScript
var esdoc = require("gulp-esdoc");

// document "./src" folder and output at "./docs" folder
gulp.src("./src")
  .pipe(esdoc({ destination: "./docs" });
```

## API

### esdoc(options)

`options.destination` is **required**.
See [here](https://esdoc.org/config.html) for more options.

## License
MIT
