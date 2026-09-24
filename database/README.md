# NEXSTEP Database

This directory contains the database schema and related documentation for NEXSTEP.

## Core Tables

| Table | Purpose |
|---|---|
| `profiles` | Stores student profile, learning goal and current level |
| `assessments` | Stores assessment results |
| `topic_mastery` | Tracks mastery of individual topics |
| `roadmaps` | Stores the personalized learning sequence |
| `practice_attempts` | Tracks individual practice performance |
| `learning_events` | Stores learning behaviour/events used for adaptation |

## Security

All user-specific tables use Supabase Row Level Security (RLS).

Users can only access records associated with their own authenticated user ID.

## Schema

The complete SQL schema is available in [`schema.sql`](./schema.sql).