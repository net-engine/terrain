'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 3030,
          base: '',
          livereload: 35729
        }
      }
    },
    cssbeautifier : {
      files : ['style.css']
    },
    watch: {
      css: {
        files: ['trove/**/*.scss', '*.scss'],
        tasks: ['sass', 'cssbeautifier'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'trove.css': 'trove.scss',
          'docs/trove.css': 'trove.scss'
        },
        outputStyle: 'compressed'
      }
    },
    'gh-pages': {
      options: {
        base: 'docs',
      },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['connect', 'sass', 'watch']);
  grunt.registerTask('build', ['sass', 'gh-pages']);
}
