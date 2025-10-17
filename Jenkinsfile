pipeline {
    agent any

    environment {
        // Mendapatkan nomor build unik dari Jenkins
        BUILD_NUMBER = "${BUILD_ID}"
    }

    stages {
        stage('Clone') {
            steps {
                // Pastikan credentialsId digunakan jika repo private
                git branch: 'main', url: 'https://github.com/Zanfuu/Portofolio-with-NextJS.git' 
            }
        }

        stage('Build & Deploy (Via Docker)') {
            steps {
                // 1. Beri izin eksekusi pada skrip deploy yang baru saja di-clone
                sh 'chmod +x deploy_portofolio.sh'

                // 2. Jalankan skrip deployment
                sh './deploy_portofolio.sh'
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