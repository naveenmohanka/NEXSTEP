QUESTIONS = {
    1: {
        "topic": "Programming Basics",
        "correct_answer": "A"
    },
    2: {
        "topic": "Arrays",
        "correct_answer": "B"
    },
    3: {
        "topic": "Strings",
        "correct_answer": "C"
    },
    4: {
        "topic": "Linked List",
        "correct_answer": "A"
    },
    5: {
        "topic": "Complexity",
        "correct_answer": "B"
    }
}


def evaluate_assessment(answers):
    total = len(answers)
    correct = 0
    topic_results = {}

    for answer in answers:
        question_id = answer.question_id

        if question_id not in QUESTIONS:
            continue

        question = QUESTIONS[question_id]
        topic = question["topic"]

        if topic not in topic_results:
            topic_results[topic] = {
                "correct": 0,
                "total": 0
            }

        topic_results[topic]["total"] += 1

        if answer.answer.upper() == question["correct_answer"]:
            correct += 1
            topic_results[topic]["correct"] += 1

    score = (correct / total * 100) if total > 0 else 0

    strengths = []
    weaknesses = []
    topic_mastery = {}

    for topic, result in topic_results.items():
        mastery = result["correct"] / result["total"] * 100
        topic_mastery[topic] = round(mastery, 2)

        if mastery >= 70:
            strengths.append(topic)
        else:
            weaknesses.append(topic)

    current_focus = weaknesses[0] if weaknesses else None

    recommended_next = (
        f"{current_focus} fundamentals"
        if current_focus
        else "Next level practice"
    )

    return {
        "total_questions": total,
        "correct_answers": correct,
        "score": round(score, 2),
        "strengths": strengths,
        "weaknesses": weaknesses,
        "topic_mastery": topic_mastery,
        "current_focus": current_focus,
        "recommended_next": recommended_next,
        "topic_results": topic_results
    }