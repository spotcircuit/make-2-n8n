# Make to n8n Workflow Converter Website

This is a Next.js application for the Make to n8n workflow converter service, designed to be deployed on Vercel.

## Features

- Upload Make.com workflow JSON files
- Analyze workflow complexity and calculate conversion price
- Professional design with responsive UI
- Detailed breakdown of node categorization

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Vercel

The easiest way to deploy the application is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project to Vercel
3. Vercel will detect it's a Next.js app and use the optimal build settings

## Project Structure

- `/components` - Reusable UI components
- `/pages` - Pages and API routes
- `/public` - Static assets
- `/styles` - Global CSS styles

## Node Categorization

Nodes are categorized into three price tiers:

- **Simple Nodes ($25)**: Basic triggers and simple operations
- **Moderate Nodes ($50)**: API integrations and data transformation
- **Complex Nodes ($100)**: Custom code, complex routing, and media processing

## API Routes

- `/api/analyze-workflow` - Analyzes uploaded Make.com workflow files
