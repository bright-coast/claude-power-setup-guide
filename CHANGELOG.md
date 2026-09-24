# Changelog

## 1.0.0 (24 Sep 2026)

First release of the repo.

- The Claude Power Setup Guide moves here as version 3.0. It now asks what you use, lists the available skills, installs the ones you pick, and can check for updates. It keeps a small progress file so a restart of Claude Code does not lose your place.
- Installing, updating and removing skills asks first: nothing is installed, updated or removed without your yes, and you are shown what it will do, or what changed, before you give it. Before a new skill is written, Claude reads you what it will do (web addresses, commands, folders, logins and its main rules) from the file itself. Every download is compared with a fingerprint in the catalog, which confirms it arrived complete and is the file the catalog names. It does not protect you if the repo itself were ever compromised, so you are in the end trusting Bright Coast AI's releases. A skill you already had with the same name is never overwritten.
- Seven skills ready: Startup, Skill Updates, Health Check, Process Recordings, Ask Rob, WhatsApp and Explain Like I'm Non-Technical.
- Seven more planned: Email Drafting, Meeting Prep, Debrief, Respond To This, Instagram Saves, YouTube Capture and Blog.
- Every skill keeps your own settings in a separate `local.md` that updates never touch.
- The guide's settings example starts in Manual mode and blocks Claude from reading secret folders (SSH keys, `.env` files and similar). The Google Workspace tool is registered read-only by default.
- Optional parts of the guide (semantic memory search and plugins) are marked as optional, and the guide says plainly what "run my setup" does and what it leaves for later.
- The guide and skills are licensed under the Bright Coast AI Client Skills Licence: for Bright Coast AI clients and anyone Bright Coast AI has given the guide, or a link to it, directly. Setup starts by asking how you got the guide.
