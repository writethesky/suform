module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n * suform.js v0.1.0 \n * (c) 2017 writethesky（撰天）\n * Released under the MIT License. \n * https://github.com/writethesky \n * https://github.com/writethesky/application.js */'
      },
      build: {
        src: 'dist/<%=pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
	babel: {
		options: {
			sourceMap: false,
			presets: ['babel-preset-es2015']
			
		},
		dist: {
			files: [{
			   src: 'src/<%=pkg.name %>.js',
			   dest: 'dist/<%=pkg.name %>.js'
			 }] 
		}
	}
  });
  // 加载提供"uglify"任务的插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  // 默认任务
  grunt.registerTask('default', ['babel', 'uglify']);
}