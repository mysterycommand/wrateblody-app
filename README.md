# Wrate Bloody
###### a [Write Bloody](http://writebloody.com/) (w)rating app

### Dev. Notes:

### Start with Yeoman's webapp generator (minus sass-bootstrap).
- Install usereplace via `npm install grunt-usereplace --save-dev`
- Install normalize-css via `bower install normalize-css --save`
- Update the Gruntfile's `'copy'` task and `index.html` like this [Stack Overflow post](http://stackoverflow.com/questions/18785984/grunt-include-bower-components-in-usemin-block).
- Remove the vendor usemin block from `index.html`, and run everything through RequireJS as described in [my-new-everything](https://github.com/mysterycommand/my-new-everything).
- Move the Gruntfile's `'modernizr'` task up to right after the `'require'` task, and update the `'modernizr'` task to build into `.tmp`.
- Push up to GitHub.
- Run the travis-ci:gh-pages generator.
