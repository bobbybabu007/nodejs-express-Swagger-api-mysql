pipeline {
    agent any

    tools {
      nodejs 'NodeJS 4.8.6'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install && npm i --save mysql2 && npm i --save express && npm i swagger-jsdoc@6.0.1 && npm i swagger-ui-express@4.1.6'
            }
            }

        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm test'
            }
        }
        stage('Package') {
            steps {
                echo 'Packaging....'
                sh 'npm run package'
                archiveArtifacts artifacts: '**/distribution/*.zip', fingerprint: true
            }
        }
    }
}