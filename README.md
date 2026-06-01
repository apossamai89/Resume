# Alessandra Possamai — Resume Site

A warm, creative resume visualization built with Next.js + Claude AI.

## Local development

```bash
npm install
cp .env.local.example .env.local
# Add your Anthropic API key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. In Vercel project settings → Environment Variables, add:
   - `ANTHROPIC_API_KEY` = your key from [console.anthropic.com](https://console.anthropic.com)
4. Deploy — every push to `main` auto-deploys

## Get an Anthropic API key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up / log in
3. API Keys → Create Key
4. Copy and paste into Vercel environment variables
