module.exports = function(config){
	config.set({

		basePath: '../',

		frameworks: ['ng-scenario'],

		files: [
		  'test/e2e/**/*.js'
		],

		autoWatch: false,

		browsers: ['Chrome'],

		singleRun: true,

		urlRoot: '/_karma_/',

		proxies: {
		  '/': 'http://localhost:8000/'
		},

		junitReporter: {
		  outputFile: 'test_out/e2e.xml',
		  suite: 'e2e'
		}

	});
};





