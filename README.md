# [gulp](https://github.com/wearefractal/gulp)-nunjucks-render

> Render [Nunjucks](http://mozilla.github.io/nunjucks/) templates

*Issues with the output should be reported on the Nunjucks [issue tracker](https://github.com/mozilla/nunjucks/issues).*


## Install

Install with [npm](https://www.npmjs.com/package/gulp-nunjucks-render)

```
npm install --save-dev gulp-nunjucks-render
```

## Using Dart Sass

There are a few different ways to install and run Dart Sass, depending on your
environment and your needs.

### From Chocolatey (Windows)

If you use [the Chocolatey package manager](https://chocolatey.org/) for
Windows, you can install Dart Sass by running

```cmd
choco install sass -prerelease
```

That'll give you a `sass` executable on your command line that will run Dart
Sass.

### From Homebrew (OS X)

If you use [the Homebrew package manager](https://brew.sh/) for Mac OS X, you
can install Dart Sass by running

```sh
brew install sass/sass/sass
```

That'll give you a `sass` executable on your command line that will run Dart
Sass.

### Standalone

You can download the standalone Dart Sass archive for your operating
system—containing the Dart VM and the snapshot of the Sass library—from
[the release page][releases]. Extract it, add the directory to your path, and
the `dart-sass` executable is ready to run!

[releases]: https://github.com/sass/dart-sass/releases/

To add the directory to your path on Windows, open the Control Panel, then
search for and select "edit environment variables". Find the variable named
`PATH`, click Edit, add `;C:\path\to\dart-sass` to the end of the value, then
click OK.

On more Unix-y systems, edit your shell configuration file (usually `~/.bashrc`
or `~/.profile`) and add at the end:

```sh
export PATH=$PATH:/path/to/dart-sass
```

Regardless of your OS, you'll need to restart your terminal in order for this
configuration to take effect.

### From npm

Dart Sass is available, compiled to JavaScript, [as an npm package][npm]. You
can install it globally using `npm install -g sass` which will provide access to
the `sass` executable. You can also add it to your project using
`npm install --save-dev sass`. This provides the executable as well as a
library:

[npm]: https://www.npmjs.com/package/sass

```js
var sass = require('sass');

sass.render({file: scss_filename}, function(err, result) { /* ... */ });

// OR

var result = sass.renderSync({file: scss_filename});
```

### From Pub

If you're a Dart user, you can install Dart Sass globally using `pub global
activate sass ^1.0.0-alpha`, which will provide a `dart-sass` executable. You
can also add it to your pubspec and use it as a library. We strongly recommend
importing it with the prefix `sass`:

```dart
import 'package:sass/sass.dart' as sass;

void main(List<String> args) {
  print(sass.compile(args.first));
}
```

See [the Dart API docs][api] for details.

[api]: https://www.dartdocs.org/documentation/sass/latest/sass/sass-library.html

### From Source

Assuming you've already checked out this repository:

1. [Install Dart](https://www.dartlang.org/install). If you download an archive
   manually rather than using an installer, make sure the SDK's `bin` directory
   is on your `PATH`.

2. In this repository, run `pub get`. This will install Dart Sass's
   dependencies.

3. Run `dart bin/sass.dart path/to/file.scss`.

That's it!