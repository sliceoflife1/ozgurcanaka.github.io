# Portfolio Site Plan (Özgür Can Aka)

## Overview

This plan defines the tasks required to convert the existing `c:\Oxword\Web\web` directory into a professional, static portfolio website for Özgür Can Aka (Senior Cybercrime Investigator & AI Strategist), moving away from the old OxWord app web wrapper setup. The new focus is a "Landing Page" highlighting his credentials, OSINT/AI/Cybersecurity skills, and OxWord as a project.

## Project Type

WEB (Static HTML/CSS)

## Success Criteria

- Root folder has `index.html` and `app-ads.txt` side-by-side.
- Old unused files (`index.html`, `style.css`, `script.js` from the app web-wrapper) deleted.
- UI is highly professional, dark-mode prioritized, utilizing modern aesthetic principles (Tailwind or Vanilla CSS).
- Structure contains: Hero, About, Skills, Projects (OxWord card), Contact.
- Ready for GitHub Pages / Azure Static Web Apps.

## Tech Stack

- HTML5 (Semantic Structure)
- Tailwind CSS (via CDN) or Vanilla CSS (Modern dark theme, responsive)
- Vanilla Javascript (if needed for minor interactions/animations)

## File Structure (Planned)

```text
c:\Oxword\Web\web\
├── index.html
├── style.css
├── app-ads.txt
├── assets/
│   └── (images/icons)
└── portfolio-site.md
```

## Task Breakdown

1. **Task 1: Clean Directory**
   - **Agent/Skill**: `orchestrator` / `bash-linux` (or powershell)
   - **Goal**: Delete existing `index.html`, `style.css`, `script.js` and non-essential files.
   - **Verify**: `list_dir` confirms files are deleted.

2. **Task 2: Create Core Structure**
   - **Agent/Skill**: `backend-specialist` (or `orchestrator`) / `clean-code`
   - **Goal**: Create `app-ads.txt` with AdMob credentials.
   - **Verify**: File content exactly matches required string.

3. **Task 3: Develop Portfolio UI**
   - **Agent/Skill**: `frontend-specialist` / `frontend-design`
   - **Goal**: Create `index.html` and `style.css` adhering to professional cybersecurity/AI branding. Read CV PDF if possible for extra details.
   - **Verify**: Files are present, valid HTML, responsive design implemented.

## Phase X: Verification

- [ ] Run `ux_audit.py` if available.
- [ ] Manual browser check.
- [ ] Validate `app-ads.txt` content.
