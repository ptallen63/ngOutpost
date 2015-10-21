module.exports = function(grunt) {
  require('jit-grunt')(grunt);
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

/*
  ~~~~~~~~~~~~~~~~~
  Notify Hooks
  ~~~~~~~~~~~~~~~~~
*/ 
  notify_hooks: {
    options: {
      enabled: true,
      max_jshint_notifications: 5, // maximum number of notifications from jshint output 
      title: "ngOutpost", // defaults to the name in package.json, or will use project directory's name 
      success: false, // whether successful grunt executions should be notified automatically 
      duration: 3 // the duration of notification in seconds, for `notify-send only 
    }
  },

  
/*
  ~~~~~~~~~~~~~~~~~
  Watch
  ~~~~~~~~~~~~~~~~~
*/ 


    watch: {
      styles: {
        files: ['src/**/*.js','Gruntfile.js'], // which files to watch
        tasks: ['jshint'],
        options: {
          nospawn: true
        }
      }
    },

/*
  ~~~~~~~~~~~~~~~~~
  Uglify
  ~~~~~~~~~~~~~~~~~
*/ 
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/scripts.min.js': 'src/*.js',
        }
      }
    },





      /*
    ================
        JShint
    ================
     */

     // configure jshint to validate js files -----------------------------------
    jshint: {

       options: {
            reporter: 'node_modules/jshint-stylish'
        },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js',]
    }


  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-notify');
 
 
 

  grunt.registerTask('default', ['jshint', 'watch']);
  grunt.registerTask('build', ['jshint','uglify']);


  grunt.task.run('notify_hooks');

};


/*fffffffffffffffffffffffffffffffffffffffffff*/