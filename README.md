# NEXSTEP

### AI-Powered Adaptive Learning Navigator

NEXSTEP is an AI-powered personalized learning platform designed to help students understand **what to learn, how to learn it, and what to do next**.

Instead of treating every learner the same, NEXSTEP builds an evolving learner profile using assessment performance, topic mastery, practice attempts, learning behavior, and interaction patterns. This information is used to create a personalized learning journey that adapts as the learner progresses.

---

## Overview

Students today have access to thousands of learning resources, but having more resources does not necessarily make learning easier.

The real challenge is knowing:

- What should I learn first?
- Which topics am I weak in?
- What should I practice next?
- Why am I making the same mistakes?
- Which explanation style works better for me?
- Am I actually improving?

NEXSTEP addresses this problem by combining **learner profiling, adaptive learning, performance analysis, and AI-powered teaching** into a single learning journey.

The platform continuously uses learner activity and performance signals to understand the learner and personalize what comes next.

---

## How NEXSTEP Works

```text
                    ┌──────────────────────┐
                    │       Learner        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Diagnostic Assessment│
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Learner Profile    │
                    │  Skills & Mastery     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Personalized Roadmap│
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Learn & Practice     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Performance Analysis │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Adaptive AI Teaching  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Updated Learner      │
                    │ Profile & Mastery    │
                    └──────────┬───────────┘
                               │
                               └──────────► Next Learning Step
````

The learning cycle continuously evolves as the learner interacts with the platform.

---

## Core Features

### 1. Diagnostic Assessment

NEXSTEP begins by understanding the learner's current knowledge level through a diagnostic assessment.

The assessment helps identify:

* Existing knowledge
* Topic-level strengths
* Topic-level weaknesses
* Areas requiring additional practice

---

### 2. Personalized Learner Profile

Each learner has a dynamic profile containing learning-related information such as:

* Learning goals
* Current level
* Topic mastery
* Practice performance
* Attempts
* Time spent
* Hints used
* Mistake patterns
* Learning activity

The profile evolves as the learner continues using NEXSTEP.

---

### 3. Personalized Learning Roadmap

Instead of providing the same learning sequence to everyone, NEXSTEP generates a structured learning path based on the learner's current state.

The roadmap determines:

* Which topic to study
* The order of topics
* Topics requiring additional practice
* Why a particular topic is recommended

This creates a clear **"what should I do next?"** experience.

---

### 4. Adaptive Learning

NEXSTEP adapts the learning experience based on learner performance.

For example, if a learner repeatedly struggles with a concept, the system can provide additional explanation, practice, or a different way of presenting the concept.

The goal is to adapt the **learning experience**, rather than simply displaying a fixed collection of resources.

---

### 5. AI-Powered Teaching

NEXSTEP uses an LLM-based AI layer to provide personalized learning assistance.

The AI receives structured learner context such as:

* Current topic
* Mastery level
* Previous attempts
* Mistake patterns
* Learning history
* Relevant learning context

This allows explanations and learning interactions to be generated according to the learner's current needs.

---

### 6. Practice & Performance Analysis

Learners can practice topics through questions and quizzes.

NEXSTEP records learning signals such as:

* Correct and incorrect answers
* Time taken
* Attempts
* Hints used
* Mistake types

These signals contribute to topic mastery and help determine subsequent learning recommendations.

---

### 7. Topic Mastery Tracking

NEXSTEP tracks learner progress at the topic level.

Each topic can maintain information such as:

* Mastery score
* Number of attempts
* Average time
* Last updated state

This allows the system to understand not just overall progress, but **where the learner actually stands**.

---

### 8. Exam Intelligence

NEXSTEP can analyze learning material such as:

* Notes
* Presentations
* Previous-year questions

The system identifies important and repeatedly occurring topics from the provided material and organizes them into an evidence-based study priority.

---

### 9. Learning Behavior Analysis

NEXSTEP considers learning behavior in addition to simple quiz scores.

Signals such as attempts, time taken, hints, and mistake patterns help build a richer representation of the learner.

This allows the platform to move beyond a simple **right/wrong** learning model.

---

## AI & Personalization

NEXSTEP does not depend on training a separate machine-learning model for every individual learner.

Instead, the platform maintains a structured learner context that evolves with learner activity.

```text
Learner Activity
       │
       ▼
Learning Signals
       │
       ▼
Learner Profile
       │
       ▼
Structured AI Context
       │
       ▼
LLM
       │
       ├──────────────► Explanation
       │
       ├──────────────► Practice
       │
       ├──────────────► Analysis
       │
       └──────────────► Recommendations
```

This allows the AI layer to provide responses based on the learner's current learning state.

---

## System Architecture

```text
┌─────────────────────────────────────────────┐
│                 NEXSTEP UI                  │
│            React + Vite + Tailwind          │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│              FastAPI Backend                │
│        API & Application Orchestration      │
└───────────────┬─────────────────┬───────────┘
                │                 │
                ▼                 ▼
┌───────────────────────┐   ┌─────────────────┐
│   Supabase /          │   │   AI / LLM      │
│   PostgreSQL          │   │     Layer       │
│                       │   │                 │
│ • Profiles            │   │ • Analysis      │
│ • Assessments         │   │ • Explanations  │
│ • Topic Mastery       │   │ • Roadmaps      │
│ • Roadmaps            │   │ • Practice      │
│ • Practice Attempts   │   │ • Adaptation    │
│ • Learning Events     │   │                 │
└───────────────────────┘   └─────────────────┘
```

---

## Technology Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Lucide React

### Backend

* Python
* FastAPI
* REST APIs

### AI

* Large Language Model (LLM)
* AI-powered learner analysis
* Personalized explanations
* Adaptive learning interactions

### Database & Authentication

* Supabase
* PostgreSQL
* Supabase Authentication
* Row Level Security (RLS)

### Development & Deployment

* Git
* GitHub
* GitHub Actions
* Vercel
* Environment-based configuration

---

## Database Architecture

NEXSTEP uses Supabase PostgreSQL for persistent learner data.

The core data model contains:

```text
profiles
   │
   ├──────────► assessments
   │
   ├──────────► topic_mastery
   │
   ├──────────► roadmaps
   │
   ├──────────► practice_attempts
   │
   └──────────► learning_events
```

### Core Tables

| Table               | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| `profiles`          | Stores learner profile information             |
| `assessments`       | Stores assessment results                      |
| `topic_mastery`     | Tracks mastery for individual topics           |
| `roadmaps`          | Stores personalized learning sequences         |
| `practice_attempts` | Stores practice performance                    |
| `learning_events`   | Stores learner activity and behavioral signals |

Row Level Security is used to ensure learner data is accessed within the appropriate authenticated context.

---

## Backend Repository Layer

The backend contains a repository layer for database operations.

```text
backend/
└── database/
    └── supabase/
        ├── supabase_client.py
        └── repositories/
            ├── profile_repository.py
            ├── assessment_repository.py
            ├── topic_mastery_repository.py
            ├── roadmaps_repository.py
            ├── practice_attempts_repository.py
            └── learning_events_repository.py
```

The repository layer keeps database operations separated from API and application logic.

---

## Project Structure

```text
NEXSTEP/
│
├── backend/
│   ├── database/
│   │   └── supabase/
│   │       ├── supabase_client.py
│   │       └── repositories/
│   │
│   └── ...
│
├── frontend/
│   ├── src/
│   └── ...
│
├── database/
│   ├── schema.sql
│   └── README.md
│
├── docs/
│   └── ARCHITECTURE.md
│
├── .gitignore
├── README.md
└── CONTRIBUTING.md
```

---

## Development Setup

### Clone the repository

```bash
git clone https://github.com/naveenmohanka/NEXSTEP.git
cd NEXSTEP
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

Create and activate a Python virtual environment:

```bash
cd backend
python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

---

## Environment Variables

Sensitive configuration is kept outside the repository using environment variables.

Example:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Never commit `.env` files, private keys, service-role keys, API keys, or other secrets to Git.

---

## Git Workflow

NEXSTEP follows a feature-based Git workflow.

```text
feature/<name>
       │
       ▼
     PR
       │
       ▼
    develop
       │
       ▼
 integration & testing
       │
       ▼
      PR
       │
       ▼
     main
```

### Branches

* `main` — stable project branch
* `develop` — integration branch
* `feature/*` — individual feature development
* `backend/*` — backend-specific development
* `frontend/*` — frontend-specific development
* `database/*` — database-specific development

Changes are developed on dedicated branches and integrated through pull requests.

---

## Code Quality

The project follows a clean and maintainable development approach:

* Keep frontend, backend, AI, and database responsibilities separated.
* Prefer reusable components and modules.
* Keep database operations inside the repository layer.
* Keep secrets outside source control.
* Use meaningful commit messages.
* Test changes before creating a pull request.
* Avoid unnecessary duplication and generated boilerplate.
* Keep `main` stable.

---

## Learning Intelligence

The core idea behind NEXSTEP is the **learner feedback loop**:

```text
        ┌─────────────────────┐
        │      Learn          │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │     Practice        │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │   Observe Results   │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │ Update Learner      │
        │ Profile & Mastery   │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │ Adapt Next Step     │
        └──────────┬──────────┘
                   │
                   └──────────────► Learn Again
```

The learner is therefore not treated as a static profile. Their learning state evolves through interaction with the platform.

---

## Team

NEXSTEP is developed collaboratively across frontend, backend, AI, database, and infrastructure components.

### Responsibilities

| Area                      | Responsibility                                                        |
| ------------------------- | --------------------------------------------------------------------- |
| Frontend                  | Learning experience, UI, navigation and learner interaction           |
| Backend & AI              | APIs, AI orchestration, learner analysis and adaptive intelligence    |
| Database & Infrastructure | Supabase, PostgreSQL, RLS, repositories and data architecture         |
| UX & Supporting Features  | AI presentation, Exam Intelligence, reusable UI and experience polish |

---

## NEXSTEP

**Learn smarter. Know what to learn next.**

NEXSTEP brings together learner data, adaptive learning, AI, and structured learning paths to create a personalized learning experience that evolves with every learner interaction.