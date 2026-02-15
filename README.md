# MobiusLab

A React + TypeScript web application with Supabase authentication and resource management.

## Features

- **Authentication**: Supabase-powered login with persistent sessions
- **Dashboard**: Main workspace landing page (default after login)
- **Resources**: File management page with download links
- **Account Settings**: User profile management with name updates
- **Reusable Components**: Modular header component with profile dropdown

## Tech Stack

- React 18
- TypeScript
- React Router
- Supabase (Authentication & User Management)
- Vite
- Dracula Dark theme styling

## Project Structure

```
src/
├── components/     # Reusable components (Header)
├── pages/          # Page components (Dashboard, Resources, Account, Login)
├── lib/            # Supabase client configuration
└── App.tsx         # Main app with routing
```

## Pages

- `/` - Redirects to Dashboard (requires auth)
- `/login` - Authentication page
- `/dashboard` - Main workspace (default landing page)
- `/resources` - File downloads section
- `/account` - User profile settings

## Setup

1. Install dependencies: `npm install`
2. Create `.env` file with Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```
3. Run dev server: `npm run dev`

## Styling

Custom Dracula Dark theme with purple accents:
- Background: `#282a36`
- Cards: `#44475a`
- Primary: `#bd93f9`
- Accent: `#ff79c6`
- Text: `#f8f8f2`
- Borders: `#6272a4`

## Hosting

I'm currently hosting this application using Amplify in AWS hence the amplify.yml file (You can delete if not using Amplify). 
Amplify is reading the 'main' and  'test' branches and any changes to these branches will trigger a deployment.