# Wrate Bloody
###### a [Write Bloody](http://writebloody.com/) (w)rating app

---

##### Dev. Notes:
1. Start with Yeoman's webapp generator (minus sass-bootstrap).
2. Install usereplace via `npm install grunt-usereplace --save-dev`
3. Install normalize-css via `bower install normalize-css --save`
4. Update the Gruntfile's `'copy'` task and `index.html` like this [Stack Overflow post](http://stackoverflow.com/questions/18785984/grunt-include-bower-components-in-usemin-block).
5. Remove the vendor usemin block from `index.html`, and run everything through RequireJS as described in [my-new-everything](https://github.com/mysterycommand/my-new-everything).
6. Move the Gruntfile's `'modernizr'` task up to right after the `'require'` task, and update the `'modernizr'` task to build into `.tmp`.
7. Push up to GitHub.
8. Run the travis-ci:gh-pages generator.
