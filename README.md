# empty-point
a next js project

# 环境
```shell
apt install nodejs npm -y
npm install pm2 -g

apt install nginx -y
echo '
<< nginx config >>
'> /etc/nginx/conf.d/@.conf

nginx -t
nginx -s reload
```

# 部署
## 1.新建deploy用户

```shell
adduser /home/deploy deploy
su deploy
cd
mkdir .ssh
chmod 700 .ssh
cd .ssh
ssh-keygen -t rsa -C "deploy"
cat id_rsa.pub >> authorized_keys
chmod 600 authorized_keys
exit
```

## 2.机密以及变量存储Github

```shell
Settings >> Secrets and variables >> Repository secrets >> EMPTY_POINT_ENV
Settings >> Secrets and variables >> Repository secrets >> EMPTY_POINT_REMOTE_KEY
Settings >> Secrets and variables >> Repository variables >> EMPTY_POINT_REMOTE_HOST
```
