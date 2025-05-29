# Next.js TikTok Clone

A TikTok clone built with Next.js, featuring a modern UI and real-time interactions.

## Table of Contents
- [Next.js TikTok Clone](#nextjs-tiktok-clone)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Repository Structure](#repository-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Development](#development)
    - [Build](#build)
  - [Project Structure](#project-structure)
    - [API Routes](#api-routes)
    - [Components](#components)
    - [Styling](#styling)
    - [State Management](#state-management)
    - [Authentication](#authentication)
    - [Database](#database)
    - [Real-time Features](#real-time-features)
    - [Testing](#testing)
    - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)
  - [Preview](#preview)
  - [Resource](#resource)

## Features
- 🎥 Video upload and playback
- 👥 User authentication
- 💬 Comments and likes
- 🔍 Search functionality
- 📱 Responsive design
- 🌐 Internationalization
- 🔄 Real-time updates

## Tech Stack
- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **Real-time**: Socket.io
- **State Management**: SWR
- **Testing**: Jest
- **Deployment**: Vercel

## Repository Structure
```
├── .github/              # GitHub Actions workflows
├── app/                  # Next.js 13 app directory
│   ├── api/             # API routes
│   ├── (auth)/          # Authentication routes
│   ├── (site)/          # Public routes
│   └── layout.tsx       # Root layout
├── components/          # React components
├── lib/                 # Utility functions
├── models/              # Database models
├── public/             # Static assets
├── styles/             # Global styles
└── types/              # TypeScript types
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- Yarn package manager

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/next-tiktok.git
cd next-tiktok
```

2. Install dependencies:
```bash
yarn install
```

### Environment Variables
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### Development
Run the development server:
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
Build the application:
```bash
yarn build
```

## Project Structure

### API Routes
- `/api/auth/*` - Authentication endpoints
- `/api/videos/*` - Video management
- `/api/comments/*` - Comment system
- `/api/users/*` - User management

### Components
- `VideoCard` - Video display component
- `CommentSection` - Comments and interactions
- `UserProfile` - User information display
- `Navigation` - Site navigation
- `UploadModal` - Video upload interface

### Styling
- SCSS Modules for component-specific styles
- Global styles in `styles/globals.scss`
- Responsive design with mobile-first approach

### State Management
- SWR for data fetching and caching
- React Context for global state
- Local state with React hooks

### Authentication
- NextAuth.js for authentication
- JWT for session management
- OAuth providers support

### Database
- MongoDB for data storage
- Mongoose for data modeling
- Indexed fields for performance

### Real-time Features
- Socket.io for real-time updates
- WebSocket connections for live interactions
- Event-based communication

### Testing
- Jest for unit testing
- React Testing Library for component testing
- API route testing

### Deployment
- Vercel for hosting
- GitHub Actions for CI/CD
- Environment variable management

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Preview

![Homepage](https://user-images.githubusercontent.com/68579816/220102664-c7d8ebba-7be8-4faf-902f-fd398ca20002.png "Homepage")

![Modal Auth](https://user-images.githubusercontent.com/68579816/220102799-d41fffe2-f6f0-4956-83ba-0e17d4c9fe33.png "Modal Auth")

![Homepage when login](https://user-images.githubusercontent.com/68579816/220103059-803b325b-21bf-48ad-826f-c7a8f2becfa0.png "Homepage when login")

![Home page with white mode and vietnamese](https://user-images.githubusercontent.com/68579816/220100887-c65345b2-536d-4a5f-9d76-df3d2951bb3e.png "Home page with white mode and vietnamese")

![Video detail page](https://user-images.githubusercontent.com/68579816/231850236-5117e426-29b2-46a4-95e8-0c1b9f99b0e6.png "Video detail page")

![Upload video](https://user-images.githubusercontent.com/68579816/220103541-f9f6e9b8-d7d5-468c-8852-c43bbb9cb36c.png "Upload video")

![Upload video with white mode and vietnamese](https://user-images.githubusercontent.com/68579816/220103802-2903e92c-8554-4c6b-a81a-fe97d8d9e75b.png "Upload video with white mode and vietnamese")

![Search accounts](https://user-images.githubusercontent.com/68579816/220105569-2b7ff898-2fc6-49a4-aa96-d49529f3588a.png "Search accounts")


## Resource

    NextJs 13: https://beta.nextjs.org/docs
    
    Socket.IO: https://socket.io/get-started/

    SWR: https://swr.vercel.app/docs/getting-started
    
    next-intl: https://next-intl-docs.vercel.app/docs/getting-started
    
    react-hook-form: https://react-hook-form.com/get-started/
    
    next-auth: https://next-auth.js.org/getting-started/example

    Search accounts API: https://tiktok.fullstack.edu.vn/api
    
    Video API: https://next-tiktok.onrender.com/api/discover
    
    Following accounts API: https://next-tiktok.onrender.com/api/follow-account
    
    Suggest accounts API: https://next-tiktok.onrender.com/api/suggest-account
    
    Upload Video API: https://next-tiktok.onrender.com/api/upload
    
