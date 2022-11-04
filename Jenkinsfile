pipeline {
    environment {
        registry = "Jakub-Kintama/jenkins-docker-test"
        DOCKERHUB_CREDENTIALS = credentials('docker-login-pwd')
    }
    agent {
        docker {
            image 'mmiotkug/node-curl'
            args '-p 3000:3000'
            args '-w /app'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage("Build"){
            steps {
                echo 'ok'
            }
        }
        stage("Test"){
            steps {
                echo 'ok'
            }
        }
        stage("Build & Push Docker image") {
            steps {
                echo 'ok'
            }
        }
        stage('Deploy and smoke test') {
            steps{
                echo 'ok'
            }
        }
        stage('Cleanup') {
            steps{
                echo 'ok'
            }
        }
    }
}