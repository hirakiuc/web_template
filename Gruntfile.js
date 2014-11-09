
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    bower: {
      install: {
        options: {
          targetDir: './lib',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },
    coffee: {
      compile: {
        file: {
          'dst/sample.js': ['src/sample.coffee']
        }
      }
    }
    //},
    //watch: {
    //  options: {
    //    livereload: true
    //  },
    //  html: {
    //    files: ['html/**/*.html'],
    //    tasks: ['']
    //  }
    //},
    //connect: {
    //  server: {
    //    options: {
    //      port: 9000,
    //      base: 'html'
    //    }
    //  }
    //}
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.registerTask('default', ['bower:install']);
  grunt.registerTask('coffee', ['coffee']);
};

