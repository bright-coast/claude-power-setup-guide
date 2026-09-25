# Working on this repo: read this before any change

This repo is the Claude Power Setup Guide (the one file clients download), its skills, and a one-page picture of the setup (`power-setup-field-guide.html`). The `stable` branch is served live at setup.brightcoast.ai, so whatever is on `stable` is live within about 5 minutes. Treat a push to `stable` as a production deploy: only with the owner's explicit yes.

## What has to change together

| You changed | Also change |
|---|---|
| The guide (`claude-code-power-setup-guide.md`) | The `> **Guide version:**` line at the top (number and date), a new entry at the top of its `## Changelog` (`**V3.x · date**`), `guide.version` and `guide.changes` in `catalog.json`, and BOTH version stamps on the page ("Guide version X.Y, date": top right and in the left outline). |
| The page (`power-setup-field-guide.html`) | `overview.version` and `overview.changes` in `catalog.json` (bump on every edit, even a small one). |
| A skill (`skills/<id>/SKILL.md`) | That skill's `version` and `changes` in `catalog.json`. |
| Anything a client would notice | A new entry at the top of `CHANGELOG.md` and the number in `VERSION`. |
| The quick start | `README.md` says the same thing; keep them in step. |

After every change to the guide, the page or a skill: run `node scripts/build-catalog.js` (it writes the sha256 fingerprints; never edit a fingerprint by hand), then `node scripts/check-release.js --names-file <file outside the repo>`. It must end with "All checks passed." Do not release without it.

## Dates and versions

- Run `date` first and use today's date in Sydney. Never guess or copy a date from a note. A version's date is the day it is finalised.
- Never leave two version stamps disagreeing (guide header, guide changelog, catalog, both page stamps, CHANGELOG, VERSION).
- Files use LF line endings (`.gitattributes`). Do not commit CRLF.

## Rules for the writing

- No em dashes and no en dashes anywhere. Use commas, colons and full stops. Do not use a hyphen as a pause.
- The company is "Bright Coast AI" (three words).
- Plain, warm, short. No jargon.
- This repo is public. Never put a client or staff name, a private email address, a phone number, a token or an internal path in it. `check-release` scans for names against a list kept outside the repo.

## What the setup instructions must NOT say

- Do not tell anyone to make a folder (there is no "ClaudeSetup"), save the guide into a folder, `cd` somewhere, "select a folder", or start Claude Code in a particular place. Do not mention where to start Claude Code at all.
- The flow is: install Claude Code, log in, download the guide, open Claude Code, start a new session, and say: "Read the claude-code-power-setup-guide.md file I just downloaded and run my setup". Claude finds the file where it was downloaded.
- Every copyable sentence names the file, so Claude can find it.
- Do not add steps to open other files or create other folders. One place, one sentence.

## The download flow: keep every way in working

- `https://setup.brightcoast.ai/claude-code-power-setup-guide.md` is always the plain file. Use it in the page's Download buttons and in links inside the notes.
- `https://setup.brightcoast.ai/guide` is the short link people share. A browser that opens it is sent to `/?download`; Claude and curl still get the plain file.
- `/?download` (and either Download button on the page) downloads the guide on a computer and shows "Your guide has been downloaded" with two copy fields. On a phone or tablet it downloads nothing and shows "Download it at your computer".
- The Worker that does the routing lives outside this repo. Do not change the address scheme without changing it too.
- After any change to the page, test every entry: pasted `/guide`, `/?download`, each Download button, and each on a phone user agent.

## Testing rules

- Work in a git worktree, never in the main checkout: other sessions edit here.
- Test the page against a local server that sends the same Content-Security-Policy and a stub download address, and count the requests on the server. Do not point a test at the live download: the test browser saves it into the owner's real Downloads folder. If a test does download something, clean up only files you can prove are yours (size and time).
- Measure layout with `getComputedStyle` and `getBoundingClientRect` instead of judging by eye. Pseudo-elements do not inherit `box-sizing: border-box` from `*`, so a "12px" circle with a border is really 16px.
- Check 320, 390 and 1100 px wide and every platform tab. The page must never scroll sideways. A long code line is cut off with a fade at the right edge, never wrapped and never allowed to widen the page.
- The outline on the left must not clip its highlighted circle, and its line must run through the circle centres.
- A modal is light (no dark box with light text), closes with Esc, a click outside, or "Got it", and moves focus to "Got it".

## Releasing

1. Commit on a branch in your worktree.
2. `node scripts/build-catalog.js`, then `node scripts/check-release.js --names-file <list>`.
3. Get the owner's explicit yes for `stable`.
4. `git fetch origin`, then `git push origin HEAD:main HEAD:stable`. Fast-forward only. Never force-push and never delete `stable`.
5. Verify live: fetch the page and the `.md` and look for the new version and the new wording (allow up to 5 minutes for the cache). A fix that is only on your machine is not fixed: say so plainly.
