pipeline {
  agent any
  stages {
    stage('Document') {
      when {
        branch 'main' 
      }
      steps {
        sh 'dotnet tool restore'
        sh 'dotnet cake'
        sh 'cp _site/** /var/www/tinylifedocs/ -r'   
      }
    }
  }
}