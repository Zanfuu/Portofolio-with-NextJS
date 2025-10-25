pipeline {
    agent any

    environment {
        VPS_HOST = '43.129.55.182'
        VPS_USER = 'ubuntu'
        VPS_PATH = '/home/ubuntu/portfolio'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out code from repository...'
                git url: 'https://github.com/Zanfuu/Portofolio-with-NextJS.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🔨 Building Docker image...'
                script {
                    // Build image locally untuk testing
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
                echo '🚀 Deploying to VPS...'
                sshagent(['jenkins-server']) {
                    script {
                        // Copy files to VPS
                        sh """
                            rsync -avz --delete \
                                --exclude='.git' \
                                --exclude='node_modules' \
                                --exclude='.next' \
                                ./ ${VPS_USER}@${VPS_HOST}:${VPS_PATH}/
                        """
                        
                        // Execute deployment script on VPS
                        sh """
                            ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} '
                                cd ${VPS_PATH} && 
                                chmod +x deploy.sh && 
                                ./deploy.sh
                            '
                        """
                    }
                }
            }
        }

        stage('Health Check') {
            steps {
                echo '🏥 Performing health check...'
                script {
                    // Wait for application to start
                    sleep(30)
                    
                    // Check if application is responding
                    sh """
                        curl -f http://${VPS_HOST}:3000 || {
                            echo "❌ Health check failed!"
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
            echo "🌐 Application is available at: http://${VPS_HOST}:3000"
        }
        failure {
            echo '❌ Deployment failed!'
            // Optional: Send notification or rollback
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