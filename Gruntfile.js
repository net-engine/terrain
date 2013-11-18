module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: ['source/sass/**'],
        tasks: ['compass'],
        options: {
          livereload: true,
          force: true
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'source/sass',
          cssDir: 'dist/css',
          environment: 'production'
        }
      },
      dev: {
        options: {
          sassDir: 'source/sass',
          cssDir: 'dist/css'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  grunt.registerTask('default', ['compass', 'watch']);
}
