from fastapi import FastAPI
import os
from dotenv import load_dotenv
import requests

load_dotenv()

app = FastAPI()

API_KEY = os.getenv("YOUR_API_KEY")

@app.post("/ask")
async def ask_ai(query: str):
    response = requests.post(
        "https://api.example.com/ask",
        headers={"Authorization": f"Bearer {API_KEY}"},
        json={"query": query}
    )
    return response.json()
