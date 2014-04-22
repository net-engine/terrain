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
        tasks: ['sass:docs', 'autoprefixer','cssbeautifier'],
        options: {
          livereload: true
        }
      }
    },
    autoprefixer: {
      dist: {
        src: 'docs/style.css',
        dest: 'docs/style.css'
      },
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
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['connect', 'autoprefixer', 'sass', 'watch']);
  grunt.registerTask('build', ['sass', 'gh-pages']);
}
