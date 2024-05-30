# empty-point
a next js project

# deploy
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

## 2.复制id_rsa到github
https://github.com/zhongxw2rich/empty-point/settings/secrets/actions

# action

