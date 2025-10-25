# Setup VPS untuk CI/CD Deployment

## Prerequisites di VPS (43.129.55.182)

### 1. Install Docker
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker ubuntu

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 2. Setup SSH Key untuk Jenkins
```bash
# Di Jenkins server, generate SSH key jika belum ada
ssh-keygen -t rsa -b 4096 -C "jenkins@your-server"

# Copy public key ke VPS
ssh-copy-id ubuntu@43.129.55.182

# Atau manual copy
cat ~/.ssh/id_rsa.pub | ssh ubuntu@43.129.55.182 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### 3. Setup Directory di VPS
```bash
# Create project directory
mkdir -p /home/ubuntu/portfolio
cd /home/ubuntu/portfolio

# Clone repository (optional, akan di-sync oleh Jenkins)
git clone https://github.com/Zanfuu/Portofolio-with-NextJS.git .
```

### 4. Setup Jenkins SSH Agent
Di Jenkins:
1. Go to **Manage Jenkins** > **Manage Credentials**
2. Add new credential:
   - Kind: SSH Username with private key
   - ID: jenkins-server
   - Username: ubuntu
   - Private Key: Copy dari Jenkins server (~/.ssh/id_rsa)

### 5. Test Connection
```bash
# Test SSH connection dari Jenkins server
ssh ubuntu@43.129.55.182 "echo 'Connection successful'"

# Test Docker di VPS
docker --version
docker-compose --version
```

## Troubleshooting

### Jika deployment gagal:
1. Check logs: `docker-compose logs`
2. Check container status: `docker-compose ps`
3. Check disk space: `df -h`
4. Check memory: `free -h`

### Jika port 3000 tidak accessible:
1. Check firewall: `sudo ufw status`
2. Open port: `sudo ufw allow 3000`
3. Check if container running: `docker ps`

### Jika SSH connection gagal:
1. Check SSH service: `sudo systemctl status ssh`
2. Check SSH logs: `sudo tail -f /var/log/auth.log`
3. Verify key: `ssh-keygen -l -f ~/.ssh/authorized_keys`
