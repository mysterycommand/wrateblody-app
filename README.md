# The [Write Bloody App](http://writebloodyapp.heroku.com) [![Build Status](https://travis-ci.org/mysterycommand/writebloodyapp.svg?branch=master)](https://travis-ci.org/mysterycommand/writebloodyapp)

> by [Matt Hayes](https://github.com/mysterycommand) and [Ashley Siebels](https://github.com/Thinkinggood)

The Write Bloody app lets you explore and rate the latest titles from the fine poets writing for [Write Bloody Publishing](http://writebloody.com).

### Development Notes

To force update Heroku (the deploy task seems flaky), after a succesful build do (see [this Heroku article](https://devcenter.heroku.com/articles/git)):

```bash
$ git clone https://github.com/mysterycommand/writebloodyapp dist
$ cd dist/
$ git checkout heroku
$ heroku git:remote -a writebloodyapp
$ git push -f heroku heroku:master
```

To bump the version, run find replace with these arguments:

| Option    | Value                                         |
|-----------|-----------------------------------------------|
| Find:     | `v(ersion)?(.*)0.1.x`                         |
| Where:    | `-node_modules/*,-bower_components/*,-dist/*` |
| Replace:  | `v${1}${2}0.1.y`                              |
