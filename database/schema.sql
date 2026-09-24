-- NEXSTEP Database Schema

-- 1. Profiles
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  learning_goal text,
  current_level text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can insert their own profile"
on public.profiles
for insert
with check (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
using (auth.uid() = id);


-- 2. Assessments
create table public.assessments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  score integer,
  total_questions integer,
  completed_at timestamptz default now()
);

alter table public.assessments enable row level security;

create policy "Users can view their own assessments"
on public.assessments
for select
using (auth.uid() = user_id);

create policy "Users can insert their own assessments"
on public.assessments
for insert
with check (auth.uid() = user_id);


-- 3. Topic Mastery
create table public.topic_mastery (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  topic text not null,
  mastery_score integer default 0,
  attempts integer default 0,
  average_time numeric default 0,
  last_updated timestamptz default now()
);

alter table public.topic_mastery enable row level security;

create policy "Users can view their own topic mastery"
on public.topic_mastery
for select
using (auth.uid() = user_id);

create policy "Users can insert their own topic mastery"
on public.topic_mastery
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own topic mastery"
on public.topic_mastery
for update
using (auth.uid() = user_id);


-- 4. Roadmaps
create table public.roadmaps (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  topic text not null,
  sequence integer not null,
  status text default 'locked',
  reason text,
  created_at timestamptz default now()
);

alter table public.roadmaps enable row level security;

create policy "Users can view their own roadmap"
on public.roadmaps
for select
using (auth.uid() = user_id);

create policy "Users can insert their own roadmap"
on public.roadmaps
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own roadmap"
on public.roadmaps
for update
using (auth.uid() = user_id);


-- 5. Practice Attempts
create table public.practice_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  topic text not null,
  question_id text not null,
  is_correct boolean default false,
  time_taken integer default 0,
  hints_used integer default 0,
  mistake_type text,
  created_at timestamptz default now()
);

alter table public.practice_attempts enable row level security;

create policy "Users can view their own practice attempts"
on public.practice_attempts
for select
using (auth.uid() = user_id);

create policy "Users can insert their own practice attempts"
on public.practice_attempts
for insert
with check (auth.uid() = user_id);


-- 6. Learning Events
create table public.learning_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  event_type text not null,
  topic text,
  metadata jsonb,
  created_at timestamptz default now()
);

alter table public.learning_events enable row level security;

create policy "Users can view their own learning events"
on public.learning_events
for select
using (auth.uid() = user_id);

create policy "Users can insert their own learning events"
on public.learning_events
for insert
with check (auth.uid() = user_id);