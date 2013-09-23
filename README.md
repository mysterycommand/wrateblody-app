# Wrate Bloody [![Build Status](https://travis-ci.org/mysterycommand/wrateblody.app.png?branch=master)](https://travis-ci.org/mysterycommand/wrateblody.app)
#### a [Write Bloody](http://writebloody.com/) (w)rating app

---

##### Dev. Notes:
###### Getting Started
 1. Start with Yeoman's webapp generator (minus sass-bootstrap).
 2. Install grunt-usereplace via `npm install grunt-usereplace --save-dev`
 3. Install normalize-css via `bower install normalize-css --save`
 4. Update the Gruntfile's `'copy'` task and `index.html` like this [Stack Overflow post](http://stackoverflow.com/questions/18785984/grunt-include-bower-components-in-usemin-block).
 5. Remove the vendor usemin block from `index.html`, and run everything through RequireJS as described in [my-new-everything](https://github.com/mysterycommand/my-new-everything).
 6. Move the Gruntfile's `'modernizr'` task up to right after the `'require'` task, and update the `'modernizr'` task to build into `.tmp`.
 7. Push up to GitHub.
 8. Setup the Travis CI hook.
 9. Run the travis-ci:gh-pages generator.
10. Install grunt-contrib-handlebars via `npm install git://github.com/gruntjs/grunt-contrib-handlebars --save-dev` (It's not up to date on NPM).
  - Add handlebars task to `Gruntfile.js` like:
    ```javascript
    handlebars: {
        compile: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.app %>/scripts/',
                dest: '.tmp/scripts/',
                src: [
                    'templates/**/*.hbs'
                ],
                ext: '.js',
                rename: function(dest, src) {
                    return dest + src.replace('_', '');
                }
            }],
            options: {
                namespace: false,
                amd: true
            }
        }
    }
    ```
  - Add `'handlebars'` task to `'watch'`, and `'concurrent'` tasks.
  - Add `paths: {'templates': '../../.tmp/scripts/templates'},` to `'requirejs'` task, so that mapping to compiled templates works during build.
11. Install handlebars via `bower install handlebars --save`.
  - Add `handlebars: '../bower_components/handlebars/handlebars.runtime',` to the main Require JS config file.

###### Dummy Data
1. Assume we'll use something like [JSON API](http://wordpress.org/plugins/json-api/).
2. Build up a dummy data file, in `scripts/data/products.json`.
3. Dummy data's too verbose for now, just go with an array of objects with id, title, and author. Randomly generate star numbers.
4. Get `position: sticky;` to work.
