# Contributing to NEXSTEP

Thank you for contributing to NEXSTEP.

NEXSTEP is developed collaboratively across frontend, backend, AI, database, and infrastructure components. This guide keeps development organized and helps maintain a clean and stable codebase.

---

## Development Workflow

NEXSTEP follows a feature-branch workflow:

```text
feature branch
      ↓
   Pull Request
      ↓
   develop
      ↓
Integration & Testing
      ↓
   Pull Request
      ↓
     main
````

### Branch Responsibilities

| Branch       | Purpose                        |
| ------------ | ------------------------------ |
| `main`       | Stable project branch          |
| `develop`    | Integration and testing branch |
| `feature/*`  | General feature development    |
| `frontend/*` | Frontend development           |
| `backend/*`  | Backend development            |
| `database/*` | Database development           |

Do not directly develop or push feature changes to `main` or `develop`.

---

## Creating a New Feature

Always start from the latest `develop` branch.

```bash
git checkout develop
git pull origin develop
git checkout -b feature/<feature-name>
```

For area-specific work, use the appropriate branch naming convention:

```text
frontend/<feature-name>
backend/<feature-name>
database/<feature-name>
```

---

## Making Changes

Before committing:

1. Understand the existing code and project structure.
2. Keep changes limited to the feature you are working on.
3. Reuse existing components and utilities where possible.
4. Avoid unnecessary changes to unrelated files.
5. Keep frontend, backend, AI, and database responsibilities separated.
6. Never commit secrets or credentials.

---

## Commit Guidelines

Use clear and meaningful commit messages.

Recommended format:

```text
type: short description
```

Examples:

```text
feat: add diagnostic assessment flow
fix: resolve roadmap loading issue
docs: update project architecture
refactor: simplify profile repository
test: add assessment API tests
chore: update dependencies
```

Common commit types:

| Type       | Usage                     |
| ---------- | ------------------------- |
| `feat`     | New functionality         |
| `fix`      | Bug fix                   |
| `docs`     | Documentation             |
| `refactor` | Code restructuring        |
| `test`     | Tests                     |
| `chore`    | Maintenance/configuration |

Keep commits focused on a single logical change.

---

## Pull Requests

All feature changes should be submitted through a Pull Request.

Before opening a PR:

```bash
git status
git pull --rebase origin <your-branch>
```

Run the relevant tests, build commands, and validation for your changes.

A Pull Request should include:

* Clear title
* Short description of the changes
* Relevant implementation details
* Testing performed
* Any important integration notes

### PR Title Examples

```text
feat: add adaptive roadmap generation
fix: resolve authentication error
docs: improve project documentation
```

---

## Pull Request Flow

Feature branches are merged into `develop`:

```text
feature branch → develop
```

After integration and testing, stable changes are merged into `main`:

```text
develop → main
```

Do not bypass the Pull Request workflow for feature changes.

---

## Code Organization

Keep responsibilities separated across the project.

### Frontend

Frontend code should handle:

* User interface
* Navigation
* User interactions
* Reusable components
* Learning experience presentation

### Backend

Backend code should handle:

* API endpoints
* Application logic
* Authentication context
* Communication with external services
* AI orchestration

### AI

AI-related logic should handle:

* Learner analysis
* Personalized explanations
* Learning recommendations
* Practice generation and evaluation
* Adaptive learning interactions

### Database

Database-related code should handle:

* Database schema
* Supabase configuration
* Repositories
* Data access
* Row Level Security

Avoid placing database queries throughout unrelated application code.

---

## Database Changes

Database changes must be coordinated before implementation.

When modifying the database:

* Update the appropriate schema documentation.
* Keep relationships and constraints consistent.
* Preserve existing Row Level Security policies.
* Do not disable RLS to bypass an issue.
* Coordinate changes that affect backend repositories or APIs.

---

## Environment Variables & Secrets

Never commit sensitive information.

Do not commit:

```text
.env
.env.*
API keys
private keys
service-role keys
access tokens
passwords
credentials
```

Use environment variables for sensitive configuration.

Example:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

Check `.gitignore` before committing configuration files.

---

## Frontend Guidelines

When working on the frontend:

* Reuse existing components.
* Maintain consistent UI patterns.
* Avoid unnecessary redesigns.
* Keep responsive behavior in mind.
* Keep API calls separated from presentation logic.
* Do not duplicate existing functionality.

Before submitting frontend changes, verify that the application builds successfully.

```bash
npm run build
```

Run linting when available:

```bash
npm run lint
```

---

## Backend Guidelines

When working on the backend:

* Keep API routes organized.
* Separate business logic from database access.
* Use the existing repository layer for database operations.
* Preserve authentication and authorization boundaries.
* Handle errors explicitly.
* Avoid exposing secrets or internal credentials.

---

## Testing

Before opening a Pull Request:

* Test the feature locally.
* Verify affected frontend flows.
* Verify affected backend endpoints.
* Check database interactions when applicable.
* Run available automated checks.

A change should not be considered complete until the affected functionality has been verified.

---

## Working With Other Contributors

NEXSTEP is developed by multiple contributors.

Before modifying shared files or interfaces:

* Check whether another contributor is working on the same area.
* Coordinate changes that affect shared APIs, database schemas, routing, or global configuration.
* Avoid overwriting another contributor's work.
* Communicate breaking changes before merging them.

---

## What Not To Do

Do not:

* Force-push shared branches without coordination.
* Push directly to `main` for feature work.
* Disable RLS to solve authentication problems.
* Commit `.env` or secrets.
* Rewrite unrelated code while implementing a feature.
* Duplicate existing repositories or utilities.
* Delete another contributor's work without coordination.
* Merge conflicting implementations without understanding their purpose.

---

## Keeping Your Branch Updated

Before starting new work:

```bash
git checkout develop
git pull origin develop
```

Then create your feature branch.

If your existing feature branch needs the latest `develop` changes:

```bash
git fetch origin
git rebase origin/develop
```

Resolve conflicts carefully and test the project after the rebase.

---

## Final Checklist

Before creating a Pull Request:

* [ ] Code is formatted and readable
* [ ] No unnecessary files are included
* [ ] No secrets are committed
* [ ] Existing functionality still works
* [ ] Relevant tests/build checks pass
* [ ] Commit messages are meaningful
* [ ] Branch is based on the latest relevant code
* [ ] PR description explains the changes
* [ ] Shared changes have been coordinated

---

## Contribution Principle

Keep NEXSTEP **clean, understandable, secure, and maintainable**.

Every contribution should improve the project without unnecessarily increasing complexity.