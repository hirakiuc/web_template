
module.exports = (grunt) ->
  pkg = grunt.file.readJSON("package.json")

  grunt.initConfig
    bower:
      install:
        options:
          targetDir: './dst'
          layout: 'byType'
          install: true
          verbose: false
          cleanTargetDir: true
          cleanBowerDir: false
    haml:
      one:
        files: 'dst/index.html': 'src/index.haml'
    coffee:
      compile:
        expand: true
        cwd: 'src/'
        src: ['**/*.coffee']
        dest: 'dst/js'
        ext: '.js'
    watch:
      options:
        livereload: true
      html:
        files: ['html/**/*.html']
        tasks: ['']
      haml:
        tasks: 'haml:one'
        files: ['src/**/*.haml']
      coffee:
        tasks: 'coffee'
        files: ['src/**/*.coffee']
    connect:
      server:
        options:
          port: 9000
          base: 'dst'

  for t of pkg.devDependencies
    if t.substring(0, 6) is 'grunt-'
      grunt.loadNpmTasks t

  grunt.registerTask 'default', ['bower:install']
