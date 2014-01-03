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
      files : ['docs/style.css']
    },
    watch: {
      css: {
        files: ['source/sass/**/*'],
        tasks: ['sass:docs', 'cssbeautifier'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'dist/stylesheets/style.css': 'source/sass/style.scss'
        },
        outputStyle: 'compressed'
      },
      docs: {
        files: {
          'docs/style.css': 'source/sass/style.scss'
        }
      }
    },
    'gh-pages': {
      options: {
        base: 'docs'
      },
      src: ['**']
    },
    styleguide: {
      dist: {
        options: {
          framework: {
            name: 'styledocco',
          },
          template: {
            include: ['dist/stylesheets/style.css']
          }
        },
        files: {
          'docs': 'source/sass/'
        }
      }
    },
    webfont: {
      icons: {
        src: 'source/icons/svg/*',
        dest: 'dist/icons',
        destCss: 'source/sass/icons',
        options: {
          font: 'trove-icons',
          stylesheet: 'scss',
          syntax: 'bootstrap',
          relativeFontPath: '/dist/icons'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-styleguide');
  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['connect', 'sass:docs', 'cssbeautifier', 'watch']);
  grunt.registerTask('build', ['sass', 'gh-pages']);
}
