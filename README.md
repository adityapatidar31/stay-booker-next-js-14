# Stay Booker

Stay Booker is a comprehensive room booking platform designed to streamline the process of finding and managing accommodations. With intuitive features for users and hosts alike, Stay Booker offers a modern, accessible, and feature-rich experience.

## Features

- **Room Favorites**: Save your preferred rooms to a favorites list for quick and easy access.
- **Booking Management**: Seamlessly view past bookings and manage upcoming reservations.
- **Rental Creation**: Host your property by creating rentals that others can explore and book.
- **User Profile Management**: Update your personal details and preferences anytime.
- **Reviews and Ratings**: Post reviews for properties, and watch ratings dynamically update based on user feedback.
- **Responsive Design**: Enjoy a seamless experience across desktop and mobile devices.

---

## Libraries Used and Their Purpose

### Core Frameworks and Tools

- **[Next.js](https://nextjs.org/)**: A React-based framework for building server-side rendered and statically generated web applications.
- **[React](https://reactjs.org/)**: A powerful library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Adds type safety to JavaScript for better development and maintainability.

### Database and Backend

- **[Prisma](https://www.prisma.io/)**: ORM for efficient database management and querying.
- **[Supabase](https://supabase.com/)**: A backend-as-a-service tool providing authentication, storage, and real-time APIs.

### Authentication

- **[Clerk](https://clerk.dev/)**: Handles user authentication and account management with ease.

### UI and Design

- **[Radix UI](https://radix-ui.com/)**: A library of accessible, high-quality UI components.
- **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for crafting modern, responsive designs.
- **[Lucide React](https://lucide.dev/)**: Customizable, open-source icons for the web.
- **[React-Day-Picker](https://react-day-picker.js.org/)**: A lightweight date-picker component for user-friendly calendar selection.

### Maps and Charts

- **[Leaflet](https://leafletjs.com/)**: Interactive maps for showcasing property locations.
- **[React-Leaflet](https://react-leaflet.js.org/)**: A React wrapper for Leaflet.
- **[Recharts](https://recharts.org/)**: Simple, composable charts for visualizing data.

### State Management and Utilities

- **[Zustand](https://zustand-demo.pmnd.rs/)**: A lightweight state management solution.
- **[Zod](https://zod.dev/)**: Schema validation for ensuring safe data handling.
- **[clsx](https://github.com/lukeed/clsx)** and **[class-variance-authority](https://github.com/joe-bell/cva)**: Manage class names for conditional styling.

---

## Environment Variables

### `.env.local`

These variables are required for Clerk and app URLs:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk's publishable API key for authentication.
- `CLERK_SECRET_KEY`: Clerk's secret API key for server-side operations.
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`: Fallback URL after sign-in.
- `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL`: Fallback URL after sign-up.

### `.env`

These variables configure the backend and database:

- `ADMIN_USER_ID`: Admin user identifier for managing administrative tasks.
- `NEXT_PUBLIC_WEBSITE_URL`: The base URL of the website.
- `SUPABASE_KEY`: API key for Supabase services.
- `SUPABASE_URL`: Base URL for the Supabase project.
- `DIRECT_URL`: Direct URL for database access.
- `DATABASE_URL`: Connection URL for the database.
- `DB_PASSWORD`: Password for the database connection.

---

## Getting Started

### Prerequisites

1. Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
2. Configure the `.env` and `.env.local` files with the appropriate variables.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stay_booker.git
   ```
