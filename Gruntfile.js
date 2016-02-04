var envify = require('envify');

module.exports = function(grunt) {

  grunt.initConfig({
    //CONCURRENT
    concurrent: {
      dev: {
        tasks: ['watch', 'shell:cssToJs', 'shell:launch'],
        options: {
          logConcurrentOutput: true
        }
      },
      prod: {
        options: {
          limit: 1
        },
        tasks: ['shell:cssToJs', 'shell:launch']
      },
      build: {
        options: {
          limit: 1
        },
        tasks: ['shell:cssToJs']
      }
    },
    //END

    //WATCH
    watch: {
      scripts: {
        files: 'public/css/*.css',
        tasks: ['shell:cssToJs']
      }
    },
    //END

    shell: {
      cssToJs: {
        command: 'react-native-css -i public/css/style.css -o ./css.js'
      },
      launch: {
        command: 'node node_modules/react-native/local-cli/cli.js start'
      }
    }
  });

  // Import du package
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  // Redéfinition de la tâche `default` qui est la tâche lancée dès que vous lancez Grunt sans rien spécifier.
  // Note : ici, nous définissons sass comme une tâche à lancer si on lance la tâche `default`.
  grunt.registerTask('default', ['concurrent:prod']);
  grunt.registerTask('build', ['concurrent:build']);
  grunt.registerTask('dev', ['concurrent:dev']);
  grunt.registerTask('prod', ['concurrent:prod']);
}