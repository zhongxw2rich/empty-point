import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/hello")
async def hello():
    return "hello world!"


if __name__ == '__main__':
    uvicorn.run('main:app', log_level="warn")