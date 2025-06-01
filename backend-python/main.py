from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from llm_service import generate_keywords, generate_titles, generate_topics, generate_content


app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class KeywordRequest(BaseModel):
    seed_keyword: str

class KeywordResponse(BaseModel):
    keywords: List[str]

@app.post("/keyword-suggestions", response_model=KeywordResponse)
async def get_keyword_suggestions(request: KeywordRequest):
    seed = request.seed_keyword
    # Dummy suggestions for now
    return {"keywords": [
        f"{seed} tips",
        f"best {seed} tools",
        f"{seed} guide",
        f"{seed} for beginners",
        f"{seed} 2025"
    ]}

class TitleRequest(BaseModel):
    title: str

class TopicResponse(BaseModel):
    topics: List[str]

@app.post("/topic-suggestions", response_model=TopicResponse)
async def get_topic_suggestions(request: TitleRequest):
    title = request.title
    return {"topics": [f"Intro to {title}", f"Why {title} matters", f"How to implement {title}"]}

class ContentRequest(BaseModel):
    keyword: str
    title: str
    topic: str

class ContentResponse(BaseModel):
    content: str

@app.post("/generate-content", response_model=ContentResponse)
async def generate_content(request: ContentRequest):
    return {
        "content": f"""Here's an introduction to "{request.topic}" using the keyword "{request.keyword}" and title "{request.title}".
This blog post provides a beginner-friendly guide and actionable insights tailored for SEO."""
    }
