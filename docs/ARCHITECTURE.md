
# NEXSTEP Architecture

NEXSTEP is an AI-powered adaptive learning navigator that analyzes a student's
knowledge, learning behaviour, and performance to generate a personalized
learning path.

## 1. High-Level Architecture

```text
                    ┌─────────────────────┐
                    │      Student        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │   Vite + Tailwind   │
                    └──────────┬──────────┘
                               │
                         REST API / JSON
                               │
                               ▼
                    ┌─────────────────────┐
                    │    FastAPI Backend  │
                    │                     │
                    │  Business Logic     │
                    │  Assessment Engine  │
                    │  AI Orchestration   │
                    └───────┬───────┬─────┘
                            │       │
                  ┌─────────┘       └──────────┐
                  ▼                            ▼
        ┌──────────────────┐          ┌──────────────────┐
        │   AI Engine      │          │     Supabase     │
        │                  │          │                  │
        │ LLM + Rules      │          │ PostgreSQL       │
        │ Analysis         │          │ Authentication   │
        │ Recommendations  │          │ Row Level Security│
        └──────────────────┘          └──────────────────┘
                                             │
                                             ▼
                                    Student Learning Data
````

## 2. Frontend

The frontend provides the student's primary interaction layer.

### Technology

* React
* Vite
* Tailwind CSS

### Responsibilities

* Landing page
* Authentication interface
* Initial assessment
* Student dashboard
* Learning roadmap
* Topic practice
* Progress visualization
* AI recommendations
* Learning feedback

The frontend communicates with the backend through REST APIs.

---

## 3. Backend

The backend acts as the main application and orchestration layer.

### Technology

* Python
* FastAPI

### Responsibilities

* API endpoints
* Authentication-related integration
* Assessment processing
* Student performance analysis
* Learning-event processing
* AI service orchestration
* Personalized roadmap generation
* Communication with Supabase
* Input validation and error handling

The backend should keep business logic separate from frontend implementation.

---

## 4. AI Engine

The AI engine is responsible for understanding the student's learning
behaviour and generating personalized recommendations.

### Initial AI capabilities

* Analyze assessment performance
* Identify weak and strong topics
* Analyze learning patterns
* Generate topic explanations
* Recommend learning resources
* Generate personalized learning sequences
* Adapt recommendations based on previous interactions

### Adaptive Learning Loop

```text
Assessment
    ↓
Performance Analysis
    ↓
Topic Mastery Estimation
    ↓
Learning Recommendation
    ↓
Student Practices
    ↓
Learning Events Recorded
    ↓
AI Re-evaluates Student
    ↓
Roadmap Adapted
```

The system should continuously improve its understanding of a student's
learning preferences through recorded learning events.

---

## 5. Database

NEXSTEP uses Supabase PostgreSQL for persistent application data.

### Core Tables

| Table               | Purpose                                           |
| ------------------- | ------------------------------------------------- |
| `profiles`          | Student profile, learning goal and current level  |
| `assessments`       | Assessment results                                |
| `topic_mastery`     | Topic-level mastery and performance               |
| `roadmaps`          | Personalized learning sequence                    |
| `practice_attempts` | Individual practice performance                   |
| `learning_events`   | Student learning behaviour and interaction events |

### Security

User-specific data is protected using Supabase Row Level Security (RLS).

Students should only be able to access records belonging to their own
authenticated account.

---

## 6. Data Flow

A typical learning flow is:

```text
Student
   │
   ▼
Initial Assessment
   │
   ▼
Frontend
   │
   ▼
FastAPI
   │
   ├──────────────► Assessment Analysis
   │
   ├──────────────► AI Engine
   │
   └──────────────► Supabase
                          │
                          ▼
                    Student Profile
                    Topic Mastery
                    Practice History
                    Learning Events
                          │
                          ▼
                    Personalized Roadmap
                          │
                          ▼
                       Student
```

---

## 7. Adaptive Personalization

NEXSTEP should not treat every student identically.

The system considers factors such as:

* Current knowledge
* Assessment performance
* Topic mastery
* Accuracy
* Time taken
* Number of attempts
* Hints used
* Mistake patterns
* Learning history
* Previously completed topics

These signals are used to adapt future recommendations.

For example:

```text
Student struggles with Linked Lists
        ↓
System detects repeated mistakes
        ↓
Learning event recorded
        ↓
Mastery score updated
        ↓
Roadmap adjusted
        ↓
Additional prerequisite material recommended
```

---

## 8. Resource Recommendation

NEXSTEP may recommend external learning resources based on the student's
current learning path.

The system should prioritize:

1. The student's current prerequisite level
2. Topic relevance
3. Learning difficulty
4. Student's observed learning pattern
5. Resource suitability

The goal is to reduce the problem of students receiving dozens of conflicting
learning recommendations without knowing which path to follow.

---

## 9. Engineering Principles

The project follows these principles:

* Keep frontend, backend, AI, and database responsibilities separated.
* Prefer small, understandable modules over large files.
* Validate API inputs and outputs.
* Never commit secrets or environment variables.
* Keep user-specific database access protected with RLS.
* Record meaningful learning events for adaptive personalization.
* Use clear naming conventions.
* Keep business logic testable.
* Document important architectural decisions.

---

## 10. Development Workflow

Development should follow a feature-branch workflow.

```text
main
 │
 ├── feature/<feature-name>
 │
 ├── fix/<issue-name>
 │
 └── docs/<documentation-name>
```

Changes should be:

1. Developed on a dedicated branch
2. Committed with meaningful commit messages
3. Pushed to GitHub
4. Submitted through a Pull Request
5. Reviewed and checked
6. Merged into `main`

The `main` branch should remain stable and demo-ready.

---

## 11. Environment and Secrets

Environment-specific values must not be committed to Git.

Examples include:

* API keys
* Database credentials
* Secret tokens
* Private service credentials

These values should be stored in environment variables and excluded through
`.gitignore`.

---

## 12. Future CI/CD

The repository will use GitHub Actions for automated checks.

Planned checks include:

* Frontend build
* Backend dependency/install check
* Backend tests
* Linting/format checks
* Basic integration checks

CI should run on pull requests before changes are merged into `main`.