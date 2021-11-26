pipeline {
  agent any
  stages {
    stage('Document') {
      when {
        branch 'main' 
      }
      steps {
        sh 'docfx.exe'
        sh 'rm -rf /var/www/tinylifedocs/*'
        sh 'cp _site/** /var/www/tinylifedocs/ -r'   
      }
    }
  }
}