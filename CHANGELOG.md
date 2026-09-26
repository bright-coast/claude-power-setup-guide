# Changelog

## 1.0.2 (26 Sep 2026)

- The guide is now version 3.2. The sentence you tell Claude now says to read the newest copy of the guide, so a second download saved with "(1)" in its name, or an older copy under the plain name, is not used by mistake. The sentence Claude gives you to say after a restart names the file the same way, and the one-page picture (now 1.5) shows the same sentence.
- Setup no longer asks how you got the guide. The licence itself has not changed. Setup opens with the permission-mode check and one line about restarts, then goes straight to Step 1.
- An old `claude-power-setup` folder left over from the earlier setup tool is ignored.

## 1.0.1 (25 Sep 2026)

- The guide is now version 3.1. There is no setup folder any more: download the guide, open Claude Code, start a new session and tell it to read the file you just downloaded. The one-page picture (now 1.4) says the same, and its Download buttons show a "Your guide has been downloaded" note with copy-and-paste sentences (on a phone or tablet it asks you to download at your computer instead).

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
