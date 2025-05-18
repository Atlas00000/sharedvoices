Below is a lightweight version of the Product Requirements Document (PRD) for a simplified **Shared Voices** prototype, focusing on core functionality for showcasing and prototyping. The revised PRD prioritizes a visually engaging client-side experience with mock data, basic user authentication, a simplified server-side backend, and a local database setup. The folder structure is streamlined to minimize dependency and version issues, and the development process is optimized for fast feedback by running everything locally before Dockerizing for deployment.

---

# **Product Requirements Document (PRD): Shared Voices Lightweight Prototype**

## **1\. Overview**

**Shared Voices Lightweight Prototype** is a simplified, web-based news and media platform designed for showcasing and prototyping. It focuses on delivering a visually engaging homepage and dashboard with high-quality widgets, illustrations, and SVGs, while providing basic user authentication (signup/signin). The prototype prioritizes core functionality, rapid development, and a streamlined tech stack to ensure fast feedback loops during development. Inspired by the UI of the provided homepage and reference platforms (UNDP, UN SDG, UNICEF), this version is a showcase tool, with plans to enhance features in future iterations.

### **1.1 Purpose**

* Deliver a lightweight MVP for showcasing a visually appealing homepage and dashboard with mock data.
* Implement basic user authentication (signup/signin) to demonstrate core functionality.
* Simplify the tech stack and folder structure to minimize dependency and version conflicts.
* Optimize for local development with fast feedback, using Docker only for final deployment.

### **1.2 Target Audience**

* **Primary**: Stakeholders, investors, and potential users for showcase purposes.
* **Secondary**: Developers and designers for prototyping and feedback.

## **2\. Functional Requirements**

This lightweight prototype focuses on core features to create a visually engaging showcase while ensuring basic functionality for user authentication. Features are prioritized using the MoSCoW method (Must Have, Should Have, Could Have, Won't Have).

### **2.1 Lightweight Features**

| Feature              | Description                                                                 | Priority   | Dependencies         |
|----------------------|-----------------------------------------------------------------------------|------------|----------------------|
| **Homepage**         | Visually engaging homepage with mock data, widgets, illustrations, and SVGs. | Must Have  | React.js, Tailwind CSS |
| **Dashboard**        | User dashboard with mock widgets (e.g., stats, recent articles) post-login. | Must Have  | React.js, Tailwind CSS |
| **User Authentication** | Email-based signup/signin with basic user profiles.                   | Must Have  | Node.js, MongoDB     |
| **Responsive Design**| Mobile, tablet, and desktop compatibility with a clean UI.             | Must Have  | Tailwind CSS         |
| **Mock Data**        | Static JSON or hardcoded mock data for articles, widgets, and visuals.  | Must Have  | None                 |
| **Social Media Links**| Static social media icons (Twitter, LinkedIn, Instagram) in footer.    | Should Have| None                 |
| **Newsletter Signup**| Static email input field (non-functional for prototype).               | Could Have | None                 |

### **2.2 Feature Details**

* **Homepage**:
  * Display a visually engaging layout inspired by the provided UI (e.g., hero section, featured cards, category grid).
  * Use mock data (JSON or hardcoded) for articles, categories, and widgets.
  * Include high-quality illustrations and SVGs (e.g., for empty states, icons).
  * Hero section with a static background image, headline, and CTA button (non-functional).
  * Featured articles as cards with mock thumbnails, titles, and descriptions.
  * Category grid with SDG-inspired colors and icons (non-clickable for now).

* **Dashboard**:
  * Accessible post-login, displaying a user-friendly layout with mock widgets.
  * Mock widgets include: user greeting, stats (e.g., “5 Articles Read”), and recent articles (mock data).
  * Use illustrations/SVGs for visual appeal (e.g., stats icons, empty states).
  * Include a logout button to return to the homepage.

* **User Authentication**:
  * Email-based signup (name, email, password) and signin (email, password).
  * Basic user profile stored in MongoDB (name, email, password hash).
  * JWT-based session management for authenticated routes (e.g., dashboard).
  * Simple login/signup forms with Tailwind CSS styling.

* **Responsive Design**:
  * Mobile-first design with Tailwind CSS (breakpoints: sm, md, lg).
  * 8px grid system for consistent spacing.
  * Swipeable carousels (mock functionality) for featured content on mobile.

* **Mock Data**:
  * Hardcoded JSON file or inline data for articles, categories, and widgets.
  * Example: `{ "title": "Clean Water Initiatives", "category": "SDG 6", "thumbnail": "mock-image.svg" }`.
  * Use placeholder SVGs for thumbnails and illustrations (e.g., from unDraw or Heroicons).

* **Social Media Links**:
  * Static icons in the footer for Twitter, LinkedIn, Instagram (non-functional links).
  * Styled with hover effects for visual appeal.

* **Newsletter Signup**:
  * Static input field in the footer with a “Subscribe” button (non-functional).
  * Styled to match the UI (e.g., blue CTA button, frosted-glass effect).

## **3\. Non-Functional Requirements**

Optimized for fast development, local testing, and minimal complexity.

### **3.1 Performance**

* **Page Load Time**: Initial load < 3 seconds locally using Vite.
* **Optimization**:
  * Use static mock data to avoid API latency.
  * Minify CSS/JS with Vite.
  * Inline critical CSS for above-the-fold content.

### **3.2 Scalability**

* **Local Setup**: Run client, server, and database locally for fast feedback.
* **Docker**: Dockerize only for final deployment to ensure consistency.
* **Future Consideration**: Add scalability features (e.g., caching, load balancing) in later iterations.

### **3.3 Security**

* **Authentication**: Use JWT tokens for session management.
* **Password Storage**: Hash passwords with bcrypt before storing in MongoDB.
* **Input Validation**: Basic client-side validation for forms (e.g., email format).
* **Future Consideration**: Add GDPR compliance, XSS prevention in later iterations.

### **3.4 Error Handling**

* **Client-Side**:
  * Display user-friendly error messages for login/signup (e.g., “Invalid email”).
  * Use React error boundaries for fallback UI (e.g., “Something went wrong”).
* **Server-Side**:
  * Return standardized error responses (e.g., `{ error: "User not found", code: 404 }`).
  * Log errors to console for local debugging.
* **Optimization**:
  * Implement error handling early to catch issues during local development.

### **3.5 Development Ease and Debugging**

* **Simplified Folder Structure**:
  * Avoid monorepo complexity by using a flat structure with single `package.json`.
  * Separate `client/`, `server/`, and `db/` directories for clarity.
* **TypeError Prevention**:
  * Use TypeScript with minimal configuration (`"strict": false` for speed).
  * Validate API payloads with Joi on the server side.
* **Testing and Debugging**:
  * Basic unit tests for authentication (Jest for client, Mocha for server).
  * Debug locally with VS Code and Chrome DevTools.
  * Skip integration tests for prototype to prioritize speed.
* **Dependency Consistency**:
  * Single `package.json` and `package-lock.json` at root.
  * Pin dependency versions to avoid conflicts.
  * Avoid workspace tools (e.g., Lerna) for simplicity.

### **3.6 Local Development**

* **Setup**:
  * Run client (React.js), server (Node.js), and database (MongoDB) locally.
  * Use `npm run dev` scripts for client and server.
  * MongoDB runs on `localhost:27017` with a simple `shared-voices` database.
* **Fast Feedback**:
  * Hot reloading with Vite for client-side changes.
  * Nodemon for server-side auto-restart on changes.
  * Mock data eliminates API setup delays.

### **3.7 Dockerization**

* **Implementation**:
  * Dockerize for deployment only, not local development.
  * Single `docker-compose.yml` for client, server, and MongoDB.
* **Optimization**:
  * Use lightweight Node.js base image (`node:18-alpine`).
  * Include health checks for containers.

### **3.8 UI/UX Requirements**

* **Design Philosophy**:
  * **Clarity**: Clean layouts with ample negative space (UNDP-inspired).
  * **Visual Appeal**: High-quality SVGs, illustrations, and SDG-inspired colors (UNICEF-inspired).
  * **Engagement**: Subtle hover effects, neumorphic buttons, frosted-glass elements.
* **Key Components**:
  * **Navigation Bar**: Fixed, with logo, login/signup links, and hamburger menu (mobile).
  * **Hero Section**: Edge-to-edge mock image with headline and CTA (non-functional).
  * **Featured Cards**: Mock article cards with SVGs, titles, and descriptions.
  * **Category Grid**: SDG-colored cards with icons (non-clickable).
  * **Dashboard Widgets**: Mock stats, recent articles, and greeting with SVGs.
  * **Footer**: Social media icons, newsletter signup (static), and mock links.

## **4\. Technical Requirements**

### **4.1 Tech Stack**

* **Frontend**: React.js, TypeScript (minimal), Tailwind CSS, Vite.
* **Backend**: Node.js, Express.js (single service, no microservices).
* **Database**: MongoDB (local instance, single database).
* **Deployment**: Docker for final deployment (local dev without Docker).
* **Assets**: SVGs and illustrations from free sources (e.g., unDraw, Heroicons).

### **4.2 Simplified Folder Structure**

shared-voices/  
├── client/                   # Frontend (React.js)  
│   ├── src/  
│   │   ├── assets/          # SVGs, illustrations, mock images  
│   │   │   ├── svgs/       # SVGs for icons, illustrations  
│   │   │   └── images/     # Mock hero image, placeholders  
│   │   ├── components/      # Reusable UI components  
│   │   │   ├── NavigationBar.tsx  
│   │   │   ├── HeroSection.tsx  
│   │   │   ├── ArticleCard.tsx  
│   │   │   ├── DashboardWidget.tsx  
│   │   │   └── Footer.tsx  
│   │   ├── pages/           # Page-level components  
│   │   │   ├── Home.tsx    # Homepage  
│   │   │   ├── Login.tsx   # Login page  
│   │   │   ├── Signup.tsx  # Signup page  
│   │   │   └── Dashboard.tsx # User dashboard  
│   │   ├── data/            # Mock data  
│   │   │   └── mockData.json # Static JSON for articles, widgets  
│   │   ├── styles/          # Tailwind CSS  
│   │   │   └── tailwind.css  
│   │   ├── App.tsx          # Main app entry  
│   │   └── index.tsx        # Root rendering  
│   ├── public/              # Static assets  
│   │   └── favicon.ico  
│   ├── package.json  
│   ├── tsconfig.json  
│   └── vite.config.ts  
├── server/                   # Backend (Node.js)  
│   ├── src/  
│   │   ├── controllers/     # Route handlers  
│   │   │   └── authController.js  
│   │   ├── routes/          # Express routes  
│   │   │   └── authRoutes.js  
│   │   ├── models/          # MongoDB models  
│   │   │   └── User.js  
│   │   ├── middleware/      # Middleware  
│   │   │   └── authMiddleware.js  
│   │   └── server.js        # Express server entry  
│   ├── package.json  
│   └── .env                 # Environment variables  
├── db/                       # Database setup  
│   ├── config/              # MongoDB connection  
│   │   └── mongodb.js  
│   └── seeds/               # Seed data  
│       └── users.json       # Sample user data  
├── docker-compose.yml        # For deployment  
├── package.json              # Root dependencies  
├── README.md  
├── .gitignore  
├── .eslintrc.json  
└── .prettierrc  

### **4.3 Deployment**

* **Local**: Run client (`npm run dev`), server (`npm run dev`), and MongoDB locally.
* **Docker**: Single `docker-compose.yml` for deployment:
  * Client: Build React app and serve with Nginx.
  * Server: Node.js app.
  * MongoDB: Official MongoDB image.
* **Optimization**:
  * Use `node:18-alpine` for smaller images.
  * Include health checks for server and MongoDB.

## **5\. Optimization and Best Practices**

* **Simplified Structure**:
  * Single `package.json` at root, no workspaces.
  * Flat structure to avoid dependency conflicts.
* **Local Development**:
  * Vite for fast client-side reloading.
  * Nodemon for server-side reloading.
  * Mock data for rapid iteration.
* **TypeScript**:
  * Minimal TypeScript setup for speed (`"strict": false`).
  * Basic types for props and API responses.
* **Testing**:
  * Basic unit tests for authentication (Jest for client, Mocha for server).
  * Skip integration tests for prototype.
* **Error Handling**:
  * Client-side: User-friendly messages for login/signup errors.
  * Server-side: Log errors to console, return JSON error responses.
* **UI Best Practices**:
  * Use Tailwind CSS for rapid styling.
  * Follow 8px grid system for consistency.
  * High-contrast colors (WCAG AA) for accessibility.

## **6\. Success Criteria**

* **Visual Appeal**: Homepage and dashboard match the provided UI with high-quality widgets and SVGs.
* **Authentication**: Users can signup, signin, and access the dashboard.
* **Performance**: Local page load < 3 seconds with mock data.
* **Development**: Prototype delivered within 2-3 months by a small team (2-3 developers).

## **7\. Risks and Mitigations**

* **Risk**: Dependency conflicts.
  * **Mitigation**: Single `package.json`, pinned versions.
* **Risk**: Slow local development.
  * **Mitigation**: Use Vite, Nodemon, and mock data.
* **Risk**: UI inconsistencies.
  * **Mitigation**: Follow Tailwind CSS and 8px grid system.

## **8\. Timeline**

* **Phase 1: Setup & Design (Weeks 1-3)**:
  * Folder structure, local setup, mock data, UI design.
* **Phase 2: Development (Weeks 4-8)**:
  * Build homepage, dashboard, authentication.
* **Phase 3: Testing & Deployment (Weeks 9-10)**:
  * Local testing, Dockerize, deploy for showcase.

## **9\. Stakeholders**

* **Product Owner**: Defines scope, validates UI.
* **Frontend Developer**: Builds React.js UI.
* **Backend Developer**: Implements authentication.
* **Designer**: Provides SVGs, illustrations, and UI feedback.

## **10\. Assumptions**

* Small team (2-3 developers).
* Access to free SVGs/illustrations (e.g., unDraw, Heroicons).
* No major scope changes during development.

---

This lightweight PRD focuses on a visually engaging prototype with core authentication functionality, streamlined for rapid development and showcasing. Future iterations can build on this foundation to add more features.