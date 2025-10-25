# Setup Jenkins Self-Hosted untuk CI/CD

## Prerequisites di Jenkins Server

### 1. Install Required Plugins
Di Jenkins Dashboard:
1. **Manage Jenkins** > **Manage Plugins**
2. Install plugins berikut:
   - ✅ **SSH Agent Plugin**
   - ✅ **Docker Pipeline Plugin** 
   - ✅ **Docker Plugin**
   - ✅ **Git Plugin**
   - ✅ **Pipeline Plugin**

### 2. Setup Docker di Jenkins Server
```bash
# Install Docker (jika belum ada)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add jenkins user to docker group
sudo usermod -aG docker jenkins

# Restart Jenkins service
sudo systemctl restart jenkins
```

### 3. Setup SSH Key untuk VPS
```bash
# Generate SSH key sebagai jenkins user
sudo -u jenkins ssh-keygen -t rsa -b 4096 -C "jenkins@your-server"

# Copy public key ke VPS
sudo -u jenkins ssh-copy-id ubuntu@43.129.55.182

# Test connection
sudo -u jenkins ssh ubuntu@43.129.55.182 "echo 'SSH connection successful'"
```

### 4. Setup Jenkins Credentials
Di Jenkins Dashboard:
1. **Manage Jenkins** > **Manage Credentials**
2. **Add Credentials**:
   - **Kind**: SSH Username with private key
   - **ID**: `jenkins-server`
   - **Description**: SSH key for VPS deployment
   - **Username**: `ubuntu`
   - **Private Key**: 
     - Select "Enter directly"
     - Copy isi file `/var/lib/jenkins/.ssh/id_rsa`

### 5. Create New Pipeline Job
1. **New Item** > **Pipeline**
2. **Job Name**: `zanfuu-portfolio-deploy`
3. **Pipeline**:
   - **Definition**: Pipeline script from SCM
   - **SCM**: Git
   - **Repository URL**: `https://github.com/Zanfuu/Portofolio-with-NextJS.git`
   - **Branch**: `master`
   - **Script Path**: `Jenkinsfile`

## Testing Pipeline

### 1. Manual Test
```bash
# Test di Jenkins server
cd /tmp
git clone https://github.com/Zanfuu/Portofolio-with-NextJS.git
cd Portofolio-with-NextJS

# Test Docker build
docker build -t zanfuu/portofolio:test .

# Test container
docker run -d --name test -p 3001:3000 zanfuu/portofolio:test
sleep 10
curl http://localhost:3001
docker stop test && docker rm test
```

### 2. Run Pipeline
1. Go to your pipeline job
2. Click **Build Now**
3. Monitor build logs

## Troubleshooting

### Jika SSH connection gagal:
```bash
# Check SSH key permissions
sudo chmod 600 /var/lib/jenkins/.ssh/id_rsa
sudo chmod 644 /var/lib/jenkins/.ssh/id_rsa.pub

# Check Jenkins user
sudo -u jenkins whoami
sudo -u jenkins ssh -v ubuntu@43.129.55.182
```

### Jika Docker build gagal:
```bash
# Check Docker daemon
sudo systemctl status docker

# Check Jenkins user in docker group
groups jenkins

# Test Docker as jenkins user
sudo -u jenkins docker ps
```

### Jika rsync gagal:
```bash
# Install rsync di Jenkins server
sudo apt install rsync

# Test rsync
sudo -u jenkins rsync --version
```

## Pipeline Monitoring

### Build Logs
- Monitor real-time: **Build** > **Console Output**
- Check each stage execution

### VPS Monitoring
```bash
# Check deployment status di VPS
ssh ubuntu@43.129.55.182 "cd /home/ubuntu/portfolio && docker-compose ps"

# Check application logs
ssh ubuntu@43.129.55.182 "cd /home/ubuntu/portfolio && docker-compose logs -f"
```

## Automation Tips

### 1. Webhook untuk Auto-Deploy
Di GitHub repository:
1. **Settings** > **Webhooks**
2. **Add webhook**:
   - **Payload URL**: `http://your-jenkins-server:8080/github-webhook/`
   - **Content type**: `application/json`
   - **Events**: Push events

### 2. Build Triggers
Di Jenkins job:
- ✅ **GitHub hook trigger for GITScm polling**
- ✅ **Poll SCM** (optional backup)

### 3. Notifications
Setup email/Slack notifications di **Post-build Actions**

## Security Best Practices

1. **Firewall**: Restrict Jenkins port (8080) access
2. **HTTPS**: Setup SSL certificate
3. **Authentication**: Enable Jenkins security
4. **SSH**: Use key-based authentication only
5. **Docker**: Run containers as non-root user
