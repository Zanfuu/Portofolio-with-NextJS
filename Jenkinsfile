pipeline {
    agent any
    
    // Asumsi: Variabel environment (jika ada) diatur di sini, 
    // atau di dalam stage yang sesuai.
    environment {
        // Hapus VPS_PATH karena kita tidak lagi menyalin file
        VPS_HOST = '43.129.55.182'
        VPS_USER = 'ubuntu'
        // VPS_PATH = '/home/ubuntu/portfolio' // Dihapus
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out code from repository...'
                // NOTE: Gantilah 'your-github-credentials' dengan ID kredensial GitHub yang benar di Jenkins Anda
                git branch: 'main', credentialsId: 'jenkins-server', url: 'https://github.com/Zanfuu/Portofolio-with-NextJS.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🔨 Building Docker image...'
                script {
                    // Perintah ini membangun image LANGSUNG di Docker daemon Host VPS Anda (DfD).
                    sh 'docker build -t zanfuu/portofolio:latest .'
                }
            }
        }

        stage('Test Docker Image') {
            steps {
                echo '🧪 Testing Docker image...'
                script {
                    // Test run container
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
                // Menggunakan kredensial SSH yang sudah berhasil terdeteksi (ID: jenkins-server)
                sshagent(credentials: ['jenkins-server']) {
                    // Gunakan SSH untuk menjalankan perintah di VPS Anda
                    sh """
                        # Perintah ini dieksekusi di shell Host VPS sebagai user 'ubuntu'
                        ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} << EOF
                            
                            echo "--- DEPLOYMENT START ---"

                            # 1. Hentikan dan hapus container lama jika berjalan
                            docker stop portofolio-app || true
                            docker rm portofolio-app || true

                            # 2. Jalankan container baru
                            # Image zanfuu/portofolio:latest sudah ada di cache Host.
                            # Menggunakan --network web agar bisa diakses oleh Nginx Proxy Manager (NPM)
                            docker run -d \\
                                --restart always \\
                                --name portofolio-app \\
                                --network web \\
                                zanfuu/portofolio:latest

                            echo "--- DEPLOYMENT SUCCESS ---"
                        EOF
                    """
                }
            }
        }

        stage('Health Check') {
            steps {
                echo '🏥 Performing health check...'
                script {
                    // Beri waktu container untuk start dan NPM memperbarui
                    sleep(30)
                    
                    // Check koneksi ke port 3000 (jika port ini dibuka di firewall VPS)
                    // Jika Anda menggunakan NPM, Anda mungkin perlu curl ke domain Anda
                    // Untuk sementara kita curl ke port 3000 di VPS host.
                    sh """
                        curl -f http://${VPS_HOST}:3000 || {
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
            // Optional: Send notification or rollback
        }
        always {
            echo '🧹 Cleaning up...'
            script {
                try {
                    // Menghemat ruang di Jenkins workspace
                    sh 'docker system prune -f'
                } catch (Exception e) {
                    echo "⚠️ Docker not available for cleanup: ${e.message}"
                }
            }
        }
    }
}
