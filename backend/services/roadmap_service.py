ROADMAP = {
    "Programming Basics": [
        "Programming Basics",
        "Arrays",
        "Strings",
        "Linked List",
        "Stack and Queue",
        "Recursion",
        "Trees",
        "Graphs",
        "Dynamic Programming"
    ],
    "Arrays": [
        "Arrays",
        "Strings",
        "Linked List",
        "Stack and Queue",
        "Recursion",
        "Trees",
        "Graphs",
        "Dynamic Programming"
    ],
    "Strings": [
        "Strings Fundamentals",
        "String Operations",
        "String Problems",
        "Linked List Fundamentals",
        "Stack and Queue",
        "Recursion",
        "Trees",
        "Graphs",
        "Dynamic Programming"
    ],
    "Linked List": [
        "Linked List Fundamentals",
        "Linked List Operations",
        "Linked List Problems",
        "Stack and Queue",
        "Recursion",
        "Trees",
        "Graphs",
        "Dynamic Programming"
    ],
    "Complexity": [
        "Time Complexity",
        "Arrays",
        "Strings",
        "Linked List",
        "Stack and Queue",
        "Recursion",
        "Trees",
        "Graphs",
        "Dynamic Programming"
    ]
}


def generate_roadmap(topic_mastery):
    if not topic_mastery:
        return {
            "current_topic": None,
            "roadmap": []
        }

    weakest_topic = min(topic_mastery, key=topic_mastery.get)

    roadmap = ROADMAP.get(
        weakest_topic,
        [weakest_topic]
    )

    return {
        "current_topic": weakest_topic,
        "roadmap": roadmap
    }