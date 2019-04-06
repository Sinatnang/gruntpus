module.exports = function (grunt){
//     grunt.registerTask('speak',function(){
//         console.log('I am speaking');
//     });
//     grunt.registerTask('sing',function(){
//         console.log('I am singing');
//     });
//     grunt.registerTask('default',['speak','sing']);


grunt.initConfig({
    concat: {
      js: {
        src: ['js/1.js', 'js/2.js'],
        dest: 'build/js/scripts.js',
      },
      cess: {
        src: ['css/main.css', 'css/theme.css'],
        dest: 'build/css/styles.css',
      },
      watch: {
        js: {
          files: ['js/**/*.js'],
          tasks: ['concat:js'],
        },
        css: {
            files: ['css/**/*.css'],
            tasks: ['concat:css'],
          },
      },
    },
  });


grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('default',['concat','watch']);
}