pipeline {
    agent any

    tools {
        // Jenkins Tools mein 'NodeJS_22' naam se Node.js configured hona chahiye
        nodejs 'NodeJS_26'
    }

    environment {
        // Headless execution aur CI detection enforce karne ke liye
        CI = 'true'
    }

    stages {
        stage('Checkout Code') {
            steps {
                cleanWs()     // Purana workspace clean karein
                checkout scm  // Git se latest code pull karein
            }
        }

        stage('Install Dependencies') {
            steps {
                // Windows Server ke liye 'bat', Linux/Docker/Mac server ke liye 'sh'
                bat 'npm ci'
                // sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
                // sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
                // sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            // HTML Publisher Plugin ke zariye Playwright Report attach karein
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Execution Report'
            ])
        }
    }
}