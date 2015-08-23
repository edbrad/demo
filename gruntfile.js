/**
 * Grunt Task Runner - configuration
 */
module.exports = function(grunt) {

  // initialize each plugin
  grunt.initConfig({
    // Javascript Minification
    uglify: {
      options: {
        mangle: true,
        compress: true,
        sourceMap: "dist/demo.map",
        banner: "/* Edward Bradley 2013 */\n"
      },
      target: {
        src: "dist/demo.js",
        dest: "dist/demo.min.js"
      }
    },
    // Javascript Linting
    jshint: {
      options:{
        jshintrc: ".jshintrc"
      },
      target:{
        src: "js/*.js"
      }
    },
    // Javascript File Concatination
    concat:{
      options: {
        separator: ";",
        banner: "/* Edward Bradley 2013 */\n"
      },
      target:{
        src:"js/*.js",
        dest: "dist/demo.js"
      }
    },
    // File Change Watcher - On Change, Run Task(s)
    watch: {
      scripts: {
        files: ["js/*.js"],
        tasks: ["jshint"]
      }
    }
  });

  // load grunt plugins (individual tasks)
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // default multi-task
  grunt.registerTask("default",['jshint', 'concat', 'uglify']);

};
