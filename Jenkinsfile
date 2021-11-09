pipeline {
  agent any
  stages {
    stage('Document') {
      when {
        branch 'main' 
      }
      steps {
        sh 'docfx.exe'
        sh 'cp _site/** /var/www/tinylifedocs/ -r'   
      }
    }
  }
}