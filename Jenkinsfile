pipeline {
    agent any

    tools {
        nodejs 'NodeJS_26' // Jo bhi aapka Node tool name hai
    }

    environment {
        CI = 'true'
        // SSL Certificate error skip karne ke liye ye line add karein
        NODE_TLS_REJECT_UNAUTHORIZED = '0' 
    }

    stages {
        stage('Checkout Code') {
            steps {
                cleanWs()
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: true, // Report missing hone par build crash na ho
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Execution Report'
            ])
        }
    }
}