pipeline {
  agent any
  stages {
    stage('Site') {
      when {
        branch 'main'
      }
      steps {
        sh '''cd web
              bundle
              bundle exec jekyll build'''
        sh 'rm -rf /var/www/tinylifegame/*'
        sh 'cp -r web/_site/. /var/www/tinylifegame/'
      }
    }
    stage('Docs') {
      when {
        branch 'main'
      }
      steps {
        sh '''cd docs
              dotnet tool restore
              dotnet docfx'''
        sh 'rm -rf /var/www/tinylifedocs/*'
        sh 'cp -r docs/_site/. /var/www/tinylifedocs/'
      }
    }
  }
}
