# Claude Power Setup Guide

By Rob Lee, [Bright Coast AI](https://www.brightcoast.ai).

Copyright 2026 Bright Coast AI. For Bright Coast AI clients and anyone Bright Coast AI has given this guide to. See [LICENSE](LICENSE).

A guide and a library of skills that take Claude Code from "just installed" to properly set up around how you actually work. You download one file. Claude reads it, asks what you use, shows you what is available, installs what you pick, and keeps it up to date without ever overwriting your own changes.

## Start here (one file)

1. Install Claude Code on your own computer. The first sections of the guide show the exact steps for Mac and Windows. You need a paid Claude plan (Pro, Max, Team or Enterprise), and note that `claude.ai/code` is the web version, which is not what this guide sets up.
2. Download the guide: right-click **[claude-code-power-setup-guide.md](https://raw.githubusercontent.com/bright-coast/claude-power-setup-guide/stable/claude-code-power-setup-guide.md)** and choose **Save link as** (in Safari: **Download Linked File As**), and keep the file name ending in `.md`. Save it into a plain new folder inside your user folder, for example one named `ClaudeSetup`. Please don't use your Desktop or Documents folder: on Windows they are often inside OneDrive, which can crash Claude Code. This page is the repo, and it lives at [github.com/bright-coast/claude-power-setup-guide](https://github.com/bright-coast/claude-power-setup-guide).
3. Open Claude Code in that folder and say: **"Read this guide and run my setup."**

At the start of setup Claude also shows you a one-page picture of what you are building, [power-setup-field-guide.html](power-setup-field-guide.html). It is a plain file saved on your own computer, and you can open it in any browser.

Claude walks you through it one step at a time and asks before it changes anything. "Run my setup" connects the tools you use, helps you choose how much Claude asks first, and installs the skills you pick. It does not build your rules, memory or hooks: those sections of the guide (3 to 9) are optional reading that you can do later, with Claude's help, if you want. One or two restarts of Claude Code are normal along the way, and Claude tells you exactly what to say afterwards so it can carry on where it stopped.

## What you get

Skills ready now:

| Skill | What it does |
|---|---|
| **Startup** | Asks you a few questions once (email, calendars, where your information lives, what you want to know each morning), then gives you a short daily briefing. |
| **Health Check** | A quick check-up of your Claude Code setup, with plain-English fixes. |
| **Process Recordings** | Turns meeting transcripts and notes into clean notes, decisions and follow-ups. It works on text, not audio. |
| **WhatsApp** | Connects your own WhatsApp so Claude can read chats and draft replies, and it only sends when you say so. Unofficial: WhatsApp can restrict or ban an account that uses it. Needs the Claude Code Desktop app. An early version: the full setup has not been run end to end yet, and the Mac steps are untested. |
| **Explain Like I'm Non-Technical** | Explains anything as a simple picture page: big visuals, very few words. Every page carries a small Bright Coast AI credit, and you can add your own name above it. |
| **Ask Rob** | For Bright Coast AI clients: sends a question to Rob straight from Claude and brings the reply back. |
| **Skill Updates** | Checks for newer versions, shows what changed, updates only what you approve. It also installs and removes skills. |

Coming soon: Email Drafting, Meeting Prep, Debrief, Respond To This, Instagram Saves, YouTube Capture and Blog.

The full, current list is in [`catalog.json`](catalog.json).

## Your changes are safe

Every skill has two parts. The skill itself comes from this repo and can be updated. A small file called `local.md` next to it holds your own answers and tweaks, and updates never touch it. If you edited a skill directly anyway, an update is merged into your version instead of replacing it. Nothing is installed, updated or removed without your yes, and you are shown what it will do, or what changed, before you give it. A skill you already had with the same name is never overwritten.

**What the fingerprint check does and does not do.** Every download is compared with a fingerprint in the catalog, which confirms it arrived complete and is the file the catalog names, but the catalog and the files live in the same repo, so it does not protect you if the repo itself were ever compromised. What does protect you is that Claude shows you what a skill will do, or what changed, before anything is written, anything risky needs a second yes from you, and Bright Coast AI runs release checks before it moves the `stable` branch, so in the end you are trusting Bright Coast AI's releases, the same way you trust any software you install.

To check for updates, tell Claude: **"check for updates."** To check the guide itself, say: **"check the guide."** A newer guide is saved next to the old one under a new name, and the old one is never replaced. To take a skill off your computer, say **"remove"** and its name. It is moved to a backup folder, never deleted, and Claude tells you how to put it back.

The details are in [`docs/UPDATE-PROTOCOL.md`](docs/UPDATE-PROTOCOL.md). The rules every skill follows are in [`docs/SKILL-FORMAT.md`](docs/SKILL-FORMAT.md).

## Found a problem?

If something does not work, or a download ever fails its fingerprint check, please open an issue at [github.com/bright-coast/claude-power-setup-guide/issues](https://github.com/bright-coast/claude-power-setup-guide/issues), or write to support@brightcoast.ai.

## Licence

The Bright Coast AI Client Skills Licence. The guide and skills are for Bright Coast AI clients and for anyone Bright Coast AI has given the guide, or a link to it, directly (for example Rob, an email, a meeting or the client portal). This repo is public so you can download it in one click, but being able to see it does not give you the right to use, copy or share it. Please do not copy, republish or resell it. To ask for permission, write to support@brightcoast.ai. The full terms are in [LICENSE](LICENSE).
