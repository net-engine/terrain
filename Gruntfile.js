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
      files : ['docs/docs.css']
    },
    watch: {
      css: {
        files: ['terrain/**/*.scss', 'docs/css/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssbeautifier'],
        options: {
          livereload: true
        }
      }
    },
    autoprefixer: {
      dist: {
        src: 'docs/css/docs.css',
        dest: 'docs/css/docs.css'
      },
    },
    sass: {
      dist: {
        files: {
          'docs/css/docs.css': 'docs/css/docs.scss'
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

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['connect', 'sass', 'autoprefixer', 'watch']);
  grunt.registerTask('build',   ['sass', 'autoprefixer', 'cssbeautifier', 'gh-pages']);
}
