# Wrate Bloody
###### a [Write Bloody](http://writebloody.com/) (w)rating app

### Dev. Notes:

### Start with Yeoman's webapp generator (minus sass-bootstrap).
- [x] Install usereplace via `npm install grunt-usereplace --save-dev`
- [x] Install normalize-css via `bower install normalize-css --save`
- [x] Update the Gruntfile's `'copy'` task and `index.html` like this [Stack Overflow post](http://stackoverflow.com/questions/18785984/grunt-include-bower-components-in-usemin-block).
- [x] Remove the vendor usemin block from `index.html`, and run everything through RequireJS as described in [my-new-everything](https://github.com/mysterycommand/my-new-everything).
- [x] Move the Gruntfile's `'modernizr'` task up to right after the `'require'` task, and update the `'modernizr'` task to build into `.tmp`.
- [x] Push up to GitHub.
- [ ] Run the travis-ci:gh-pages generator.
