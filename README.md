# Instagram Video Downloader API

## Introduction

This repository houses an API for effortlessly downloading Instagram videos using JavaScript. It is structured for Vercel Node.js Functions, while still providing a small local Node server for development.

## Features

- Retrieve video URLs from Instagram posts.
- Download videos from Instagram.

## Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/milancodess/Instagram-Video-Downloader-API.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the local Node.js server:**
   ```bash
   npm start
   ```

## Endpoints

- `/igdl?url=`

## Vercel Deployment

- `/` rewrites to `/api/index`
- `/igdl` rewrites to `/api/igdl`
- Vercel will detect this project as Node.js Functions instead of Express because it no longer depends on `express` or starts an Express app

# Usage

- `http://localhost:3000/igdl?url=https://www.instagram.com/p/DLHQfPiyucu/`

**Note:** Please respect Instagram's terms of service and privacy while using this API. This tool is intended for educational and personal use only.
