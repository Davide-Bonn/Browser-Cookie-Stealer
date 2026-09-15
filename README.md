<p align="center">
  <img src="logo.svg" alt="Cookie Stealer Logo" width="200"/>
</p>

<h1 align="center">Browser Cookie Stealer</h1>
<p align="center"><strong>Chrome Extension for Cookie Extraction & Exfiltration</strong></p>

---

> **Disclaimer:** This tool is intended for **educational and authorized penetration testing purposes only**. Unauthorized use of this software against systems you do not own or have explicit permission to test is illegal. The author assumes no liability for misuse.

## Overview

A Chrome browser extension that extracts document cookies from visited websites and exfiltrates them via Discord webhook. Demonstrates how malicious browser extensions can abuse broad permissions to harvest authentication data.

## Features

- Extracts `document.cookie` from active tabs
- Exfiltrates cookies as file attachments via Discord webhook
- Manifest v2 Chrome extension with broad permission requests
- Single-click activation via browser action icon
- Minimal footprint background script

## Components

| File | Description |
|------|-------------|
| `manifest.json` | Extension manifest requesting broad permissions (`cookies`, `all_urls`, `history`, `downloads`, etc.) |
| `background.js` | Background script that captures cookies and sends to Discord webhook |

## How It Works

1. The extension is installed in Chrome with extensive permissions
2. When the user clicks the extension icon, `background.js` fires
3. The script reads `document.cookie` from the current page
4. Cookies are formatted as a text file and sent to a Discord webhook via `XMLHttpRequest`
5. The attacker receives the cookies in their Discord channel

## Requirements

- Google Chrome or Chromium-based browser
- Developer mode enabled for extension sideloading

## Installation (Lab Use)

1. Open `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked** and select this directory
4. The extension icon appears in the toolbar

## Detection & Defense

- Audit Chrome extensions for excessive permission requests
- Monitor outbound traffic to Discord webhook endpoints
- Use browser policies to whitelist approved extensions
- Implement Content Security Policy headers

## Legal Notice

This software is provided for educational purposes and authorized security assessments only. Using this tool to steal cookies or access accounts without authorization is a criminal offense in most jurisdictions. Always obtain proper written authorization before conducting any security testing.

## License

MIT License - See [LICENSE](LICENSE) for details.
