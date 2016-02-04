var envify = require('envify');

module.exports = function(grunt) {

  grunt.initConfig({
    //CONCURRENT
    concurrent: {
      dev: {
        tasks: ['shell:launch'],
        options: {
          logConcurrentOutput: true
        }
      },
      prod: {
        options: {
          limit: 1
        },
        tasks: ['shell:launch']
      }
    },
    //END

    shell: {
      launch: {
        command: 'node node_modules/react-native/local-cli/cli.js start --dev'
      }
    }
  });

  // Import du package
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-shell');
  // Redéfinition de la tâche `default` qui est la tâche lancée dès que vous lancez Grunt sans rien spécifier.
  // Note : ici, nous définissons sass comme une tâche à lancer si on lance la tâche `default`.
  grunt.registerTask('default', ['concurrent:prod']);
  grunt.registerTask('build', ['concurrent:prod']);
  grunt.registerTask('dev', ['concurrent:dev']);
  grunt.registerTask('prod', ['concurrent:prod']);
}