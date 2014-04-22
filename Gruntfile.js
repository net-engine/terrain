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
      files : ['docs/trove.css']
    },
    watch: {
      css: {
        files: ['trove/**/*.scss', '*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssbeautifier'],
        options: {
          livereload: true
        }
      }
    },
    autoprefixer: {
      dist: {
        src: 'docs/trove.css',
        dest: 'docs/trove.css'
      },
    },
    sass: {
      dist: {
        files: {
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

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['connect', 'sass', 'autoprefixer', 'watch']);
  grunt.registerTask('build',   ['sass', 'autoprefixer', 'cssbeautifier', 'gh-pages']);
}
