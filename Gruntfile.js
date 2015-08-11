
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', '/**/*.js', '/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["app/styles"]
        },
        files: {
          "app/styles/main.css": "app/styles/main.less"
        }
      }
    },
    watch: {
      files: ['app/styles/*.less'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less']);

};
