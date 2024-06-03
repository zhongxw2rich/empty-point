## Getting Started

run the development server:

```bash
uvicorn main:app --reload
```

run the development server:

```bash

python -m venv fast-api-app
source venv fast-api-app/bin/active
cd fast-api-app
pip install -r requirements.txt
pm2 start main.py --name "fast-api-app"
```