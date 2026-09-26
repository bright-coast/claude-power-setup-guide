# Changelog

## 1.0.3 (26 Sep 2026)

- The guide is now version 3.3, with about half the permission prompts. Installing a skill takes about four prompts instead of about ten (one command downloads and checks, one makes the folder and copies and verifies, then two small files), so a full setup is roughly thirty prompts. Startup's quiet update check runs at most once a week, and the first check is a silent baseline. Setup no longer offers a settings file, and the separate Ask Rob step is gone because the skill explains its token itself on first use.
- Skill Updates is now 1.1.0 and Ask Rob 1.1.0 (the saved token is readable only by its owner on Mac and Linux, and the token file is checked before anything is moved or deleted). Startup and Health Check are 1.0.2. The other skills are unchanged.

## 1.0.2 (26 Sep 2026)

- The guide is now version 3.2, a smoother and more open start with no added steps. The sentence you tell Claude asks for the newest copy of the guide, so a second download saved with "(1)" in its name, or an older copy under the plain name, is not used by mistake, and the sentence Claude gives you to say after a restart names the file the same way. Setup no longer asks how you got the guide (the licence itself has not changed), opens with the permission-mode check and one line about restarts, and gives you a link to the one-page picture (now 1.5) instead of downloading it.
- Setup no longer offers to change your starting permission mode. The optional settings file only blocks Claude from reading secret files, and the Windows PowerShell change is only offered if you actually see a scripts-disabled error. Claude keeps its messages short, says plainly what it will do before a download or a file write, checks the catalog by reading it, and never reports a tool as missing until it has looked at the real error. There are fewer replies and prompts: Step 1 is one message, the progress file is written twice instead of after every step, the mode is not re-checked unless Claude Code restarted, and the Skill Updates file that was just checked is reused instead of downloaded again.
- The guide says more plainly what is being trusted: Skill Updates is the one downloaded file Claude follows to install the rest, after your yes, and the fingerprint text says what it does and does not protect. Optional parts (Homebrew, connectors, the GitHub backup, Microsoft and Google setup) say what they touch and ask first. An old `claude-power-setup` folder is left alone.
- The seven skills are now version 1.0.1. Each says more plainly what it reads, writes and sends. The WhatsApp skill now stops on a failed fingerprint check and asks before opening media, and Ask Rob shows attachments in full before sending.

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
- The guide and skills are licensed under the Bright Coast AI Client Skills Licence: for Bright Coast AI clients and anyone Bright Coast AI has given the guide, or a link to it, directly. Setup starts by asking how you got the guide (removed in 1.0.2).
