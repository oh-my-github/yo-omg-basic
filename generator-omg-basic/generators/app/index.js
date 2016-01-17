'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var path = require("path");

var GENERATOR_APP_DIR = path.dirname(__dirname);
var GENERATOR_DIR = path.join(GENERATOR_APP_DIR, "../");
var PROJECT_DIR = path.join(GENERATOR_DIR, "../");

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the swell ' + chalk.red('generator-omg-basic') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    this.directory(
      this.templatePath(),
      this.destinationPath()
    );
  },

  install: function () {
    this.installDependencies();
  }
});