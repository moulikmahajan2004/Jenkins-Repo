pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'building my code using the npm for react'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit test and integration'
            }
        }
        
        stage('Code Analysis') {
            steps {
                echo 'Executing code analysis using Findbugs'
            }
        }
        
        stage('Security Scan') {
            steps {
                echo 'OWASP ZAP is used to perfomr the security scan..'
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                echo 'Uploading and deploying to the stagin server example AWs E2C'
            }
        }
        
        stage('Integration Tests on Staging') {
            steps {
                echo 'Executing the integration test on staging environment '
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Production and deploying is done using server such as AWS service which is E2C'
            }
        }
    }
    post {
        success {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}'ssuccessfull",
                      body: 'This was  a successfull bulild executed!!!',
                      to: 'moulikmahajan2004@gmail.com',
                      attachLog: true
        }
        failure {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}' Failed!!",
                      body: 'This was failed please recheck!!',
                      to: 'moulikmahajan2004@gmail.com',
                      attachLog: true
        }
    }
}
