def score_content(content: str, keyword: str) -> str:
    if not content or not keyword:
        return "No content or keyword provided."

    # Normalize case and strip punctuation
    content_lower = content.lower()
    keyword_lower = keyword.lower()

    # Count exact keyword matches (can be improved with regex/stemming later)
    count = content_lower.count(keyword_lower)

    return f"Keyword used: {count} time{'s' if count != 1 else ''}"
