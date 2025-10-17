pipeline {
    agent any

    environment {
        // Mendapatkan nomor build unik dari Jenkins
        BUILD_NUMBER = "${BUILD_ID}"
    }

    stages {
        stage('Clone') {
            steps {
                // GANTI DENGAN URL REPOSITORI PORTOFOLIO ANDA
                git branch: 'main', url: 'https://github.com/Zanfuu/Portofolio-with-NextJS.git' 
            }
        }

        stage('Build & Deploy (Via Docker)') {
            steps {
                // Pastikan file deploy_portfolio.sh sudah ada di root repository Anda
                sh """
                chmod +x deploy_portfolio.sh
                ./deploy_portfolio.sh
                """
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Deployment Berhasil!'
        }
        failure {
            echo 'Deployment GAGAL! Periksa log Jenkins.'
        }
    }
}