pipeline {
    agent any
    
    environment {
        // Hapus VPS_PATH karena kita tidak lagi menyalin file
        VPS_HOST = '43.129.55.182'
        VPS_USER = 'ubuntu'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out code from repository...'
                // Asumsi: Kredensial SSH juga dipakai untuk Git
                git url: 'https://github.com/Zanfuu/Portofolio-with-NextJS.git', branch: 'main', credentialsId: 'jenkins-server'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🔨 Building Docker image...'
                script {
                    sh 'docker build -t zanfuu/portofolio:latest .'
                }
            }
        }

        stage('Test Docker Image') {
            steps {
                echo '🧪 Testing Docker image...'
                script {
                    sh 'docker run -d --name test-container -p 3001:3000 zanfuu/portofolio:latest'
                    sleep(10)
                    sh 'docker stop test-container'
                    sh 'docker rm test-container'
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                echo '🚀 Deploying to VPS (DfD Strategy)...'
                sshagent(credentials: ['jenkins-server']) {
                    // *** PERUBAHAN KRITIS ADA DI SINI ***
                    // Menggunakan satu string perintah yang dieksekusi via SSH
                    sh """
                        ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
                            echo "--- DEPLOYMENT START ---" &&
                            docker stop portofolio-app || true &&
                            docker rm portofolio-app || true &&
                            
                            # Jalankan container baru
                            docker run -d --restart always --name portofolio-app --network web zanfuu/portofolio:latest &&
                            
                            echo "--- DEPLOYMENT SUCCESS ---"
                        '
                    """
                }
            }
        }

        stage('Health Check') {
            steps {
                echo '🏥 Performing health check...'
                script {
                    // Tambahkan sedikit waktu tunggu setelah deploy
                    sleep(15) 
                    
                    // Cek koneksi ke port 3000 di VPS host
                    sh """
                        curl -f http://portofolio-app:3000 || {
                            echo "❌ Health check failed! (Check firewall dan container log)"
                            exit 1
                        }
                    """
                    echo '✅ Health check passed!'
                }
            }
        }
    }
    
    post {
        success {
            echo '🎉 Deployment successful!'
            echo "🌐 Application is available at: http://${VPS_HOST}:3000 (atau domain Anda jika menggunakan NPM)"
        }
        failure {
            echo '❌ Deployment failed!'
        }
        always {
            echo '🧹 Cleaning up...'
            script {
                try {
                    sh 'docker system prune -f'
                } catch (Exception e) {
                    echo "⚠️ Docker not available for cleanup: ${e.message}"
                }
            }
        }
    }
}
