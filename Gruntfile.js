//running npm install will install all the components used mainly for grunt
module.exports = function(grunt){
	
	//project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		karma:  {
			unit: {
				configFile: 'config/karma.conf.js'
			},
			e2e: {
				configFile: 'config/karma-e2e.conf.js'
			},
			 //continuous integration mode: run tests once in PhantomJS browser.
			continuous: {
			    configFile: 'config/karma.conf.js',
			    singleRun: true,
			    browsers: ['PhantomJS']
			}
		},

		watch: {
			//run unit tests with karma (server needs to be already running)
			karma: {
			    files: ['app/js/**/*.js', 'test/unit/**/*.js'],
			    tasks: ['karma:unit:run'] //NOTE the :run flag
			}
		},

		clean: {
			build: ['app/js/main.js']
		},

		concat: {
			app:{
				src: ['src/file1.js', 'src/file2.js', 'src/file3.js'],
				dest: 'app/js/main.js'
			}
		}

	});

	//Load the plugin that provides the tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s)
	// Run grunt test:unit watch, will watch the file change
	grunt.registerTask('minify', ['clean', 'concat']);
	grunt.registerTask('test:unit', 'Run unit test with Karma', ['karma:unit']);
	grunt.registerTask('test:e2e', 'Run end to end test with Karma', ['karma:e2e'])
	grunt.registerTask('test:continuous', 'Run unit test with Karma in phantomJS browser', ['karma:continuous'])
};