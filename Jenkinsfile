pipeline {
  agent any
  stages {
    stage('Submodules') {
      steps {
        sh 'git submodule update --init --recursive --force'
      }  
    }
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