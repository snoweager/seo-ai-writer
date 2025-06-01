import openai
import os
from fastapi import HTTPException

# Set your API key from environment
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_keywords(seed_keyword: str):
    try:
        prompt = f"""
        Suggest 5 SEO-friendly keywords that are closely related to: "{seed_keyword}"
        """
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful SEO assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message['content'].strip().split("\n")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def generate_titles(keyword: str):
    try:
        prompt = f"""
        Create 3 professional and engaging blog post titles using the keyword: "{keyword}"
        """
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful SEO assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message['content'].strip().split("\n")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def generate_topics(title: str):
    try:
        prompt = f"""
        Provide a detailed blog topic outline based on the title: "{title}"
        """
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful SEO assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message['content'].strip().split("\n")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def generate_content(topic: str, keyword: str):
    try:
        prompt = f"""
        Write a compelling 100–200 word blog introduction or meta description for the topic: "{topic}" using the keyword: "{keyword}". Ensure it's clear, concise, and optimized for SEO.
        """
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful SEO assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message['content'].strip()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
