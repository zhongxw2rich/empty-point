#!/bin/bash

cd /home/deploy/empty-point/fast-api-app
python3 -m venv .
source bin/activate
pip install -r requirements.txt
pm2 stop "fast-api-app"; pm2 delete "fast-api-app"; pm2 start main.py --name "fast-api-app"
deactivate

cd /home/deploy/empty-point/next-js-app
npm install
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 stop "next-js-app"; pm2 delete "next-js-app"; pm2 start npm --name "next-js-app" -- start