pipeline {
  agent none
  stages {
    stage('Build') {
      agent any
      stages {
        stage('Site') {
          steps {
            sh '''cd web
                  bundle
                  bundle exec jekyll build'''
            stash includes: "web/_site/**", name: "site"
          }
        }
        stage('Docs') {
          steps {
            sh '''cd docs
                  dotnet tool restore
                  dotnet docfx'''
            stash includes: "docs/_site/**", name: "docs"
          }
        }
      }
    }
    stage('Publish') {
      when { branch 'main' }
      agent { label 'web' }
      options { skipDefaultCheckout() }
      steps {
        unstash 'site'
        sh 'rm -rf /var/www/tinylifegame/*'
        sh 'cp -r web/_site/. /var/www/tinylifegame/'

        unstash 'docs'
        sh 'rm -rf /var/www/tinylifedocs/*'
        sh 'cp -r docs/_site/. /var/www/tinylifedocs/'
      }
    }
  }
}
