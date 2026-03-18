# Hiring Project - Associate Role at Slow Ventures

## Prompt
You are helping build a hiring website for the Analyst/Associate role at Slow Ventures (NY). Update and maintain this CLAUDE.md file over time to capture important context on the project overall — decisions made, design direction, technical choices, content updates, and anything else that matters for continuity across sessions.

## Project Overview
- **Role:** Analyst/Associate, Slow Ventures
- **Location:** New York City, in-office only
- **Reports to:** Yoni Rechtman (NY partner)
- **Source document:** `associate_jd_v3.docx` — the canonical job description

## Website Goals
- Present the job description publicly
- Include an application form for candidates (later phase)
- Reflect the tone and brand of Slow Ventures / Yoni's voice

## Key Decisions
- Phase 1: JD page only, no application form yet
- JD content must be easily editable by Yoni without Claude Code — stored as a markdown file that renders on the site
- Application form to be added later as a separate phase

## Technical Stack
- Next.js + Vercel
- JD content stored as a `.md` file in the repo, rendered at build/runtime
- Yoni edits the markdown file directly, pushes to main, Vercel auto-deploys

## Design Notes
- Dark mode — dark background, light text
- Minimal, clean, good typography
- Mobile-responsive
- No nav/footer clutter

## Content Notes
- The JD has a conversational, direct tone — the site should match
- The application/interview process section is currently a placeholder in the doc
- Comp structure and amount are TBD in the doc
- The `[placeholder for now]` interview process section should be omitted or noted as "coming soon"
