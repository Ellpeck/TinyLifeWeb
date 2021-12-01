pipeline {
  agent any
  stages {
    stage('Site') {
      when {
        branch 'main'
      }
      steps {
        sh 'rm -rf /var/www/tinylifegame/*'
        sh 'cp web/. /var/www/tinylifegame/ -r'
      }
    }
    stage('Docs') {
      when {
        branch 'main' 
      }
      steps {
        sh 'cd docs; docfx.exe'
        sh 'rm -rf /var/www/tinylifedocs/*'
        sh 'cp docs/_site/. /var/www/tinylifedocs/ -r'   
      }
    }
  }
}