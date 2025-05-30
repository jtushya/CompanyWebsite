# Planckk Website Technical Documentation

## Technology Stack

### Core Technologies
- React 18.3.1
- TypeScript
- Vite
- Tailwind CSS

### Key Dependencies
- framer-motion: Animation framework
- react-router-dom: Navigation
- react-intersection-observer: Scroll animations
- lucide-react: Icon system
- react-helmet-async: SEO management

## Architecture

### Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
│   ├── services/  # Individual service pages
│   │   ├── VideoEditing.tsx
│   │   ├── WebsiteCreation.tsx
│   │   ├── DigitalTransformation.tsx
│   │   ├── SocialMediaManagement.tsx
│   │   ├── DigitalMarketing.tsx
│   │   ├── SeoServices.tsx
│   │   ├── MobileAppDevelopment.tsx
│   │   └── CustomSoftware.tsx
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Blog.tsx
│   ├── Careers.tsx
│   └── Contact.tsx
├── main.tsx       # Application entry
└── App.tsx        # Root component
```

### Component Architecture
- Modular component design
- Separation of concerns
- Props interface definitions
- State management using React hooks
- SEO optimization with react-helmet-async
- Intersection Observer for scroll animations
- Framer Motion for enhanced animations

## Key Components

### UI Components
- BlogCard: Blog post display
- ContactForm: Form handling with Google Forms
- JobCard: Job listing display
- Navbar: Responsive navigation
- ProjectCard: Portfolio item display
- Footer: Site-wide footer
- SEOHead: SEO management component

### Page Components
- Home: Landing page with animations
- Services: Service listings with detailed pages
- Portfolio: Project showcase
- About: Company information
- Blog: Article listings
- Careers: Job postings
- Contact: Contact information

### Service Pages
Each service page follows a consistent structure:
- Hero section with engaging visuals
- Feature highlights
- Process breakdown
- Portfolio showcase
- Call-to-action section
- SEO optimization
- Animations and transitions

## Features Implementation

### Animation System
- Framer Motion for component animations
- Intersection Observer for scroll-based animations
- CSS transitions for hover effects
- Consistent animation patterns across service pages

### SEO Implementation
- React Helmet Async for meta tags
- Schema.org markup for rich snippets
- Breadcrumb navigation
- Service-specific meta descriptions
- Open Graph tags
- Twitter Card support

### Form Handling
- Google Forms integration
- File upload validation
- Success/error feedback
- Form reset functionality

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints
- Flexible grid systems
- Dynamic navigation
- Responsive images and layouts

### Performance Optimization
- Code splitting
- Lazy loading
- Image optimization
- CSS purging
- Bundle size optimization

## Styling

### Design System
- Consistent color palette
- Typography scale
- Spacing system
- Component variants
- Animation patterns

### CSS Architecture
- Tailwind utility classes
- Custom animations
- Gradient backgrounds
- Shadow system
- Responsive utilities

## Build and Deployment
- Vite build system
- ESLint configuration
- TypeScript compilation
- Production optimization
- Performance monitoring