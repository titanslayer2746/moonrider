# Moonrider - Modern Dashboard Application

A modern, responsive dashboard application built with React, Vite, and Tailwind CSS, featuring Clerk authentication and a beautiful UI.

## 🚀 Features

### Authentication & Security

- **Clerk Authentication**: Secure user authentication with Google OAuth
- **Protected Routes**: Dashboard access restricted to authenticated users
- **User Profile Management**: Display user information and profile pictures
- **Sign Out Functionality**: Secure logout with proper session management

### Dashboard Interface

- **Modern UI Design**: Clean, professional interface with purple theme
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Statistics**: Live dashboard metrics with growth indicators
- **Interactive Charts**: Beautiful data visualization with Recharts

### Navigation & User Experience

- **Sidebar Navigation**: Clean navigation with icons and hover effects
- **Search Functionality**: Global search bar in the header
- **Notification System**: Bell icon with notification indicators
- **User Profile Display**: Shows user avatar and information

### Statistics Dashboard

- **Total Revenue**: $2,129,430 with +2.5% growth
- **Total Transactions**: 1,520 with +1.7% growth
- **Total Likes**: 9,721 with +1.4% growth
- **Total Users**: 9,721 with +4.2% growth
- **Visual Indicators**: Color-coded icons and percentage badges

### Profile Management

- **Add Profile Modal**: Interactive modal with tabbed interface
- **Basic Information**: Name, email, and phone number fields
- **Contact Information**: Email and phone number management
- **Form Validation**: Proper input types and validation

### Sidebar Navigation

- **Dashboard**: Main dashboard view
- **Transactions**: Transaction management
- **Schedules**: Schedule management
- **Users**: User management
- **Settings**: Application settings
- **Help & Contact**: Support links

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.17
- **Authentication**: Clerk (@clerk/clerk-react)
- **Routing**: React Router DOM 6.22.0
- **Charts**: Recharts 3.1.2
- **Icons**: Lucide React 0.400.0

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd moonrider-assignment/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the frontend directory:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Setup Instructions

### Clerk Authentication Setup

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Get your publishable key from the Clerk dashboard
4. Configure Google OAuth in your Clerk dashboard
5. Add redirect URLs for your domain

### Google OAuth Configuration

1. Go to Google Cloud Console
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add Clerk redirect URLs to authorized redirect URIs

## 🎨 UI Components

### Color Scheme

- **Primary Color**: #6661fd (Purple)
- **Secondary Colors**: Green, Blue, Pink, Orange for statistics
- **Background**: Light gray (#f9fafb)
- **Text**: Dark gray (#111827)

### Typography

- **Headings**: Bold, large fonts for hierarchy
- **Body Text**: Clean, readable fonts
- **Labels**: Medium weight for form labels

### Interactive Elements

- **Buttons**: Rounded corners with hover effects
- **Input Fields**: Clean borders with focus states
- **Cards**: Subtle shadows and rounded corners
- **Modals**: Overlay with backdrop blur

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full dashboard layout with sidebar
- **Tablet**: Adaptive layout with collapsible elements
- **Mobile**: Mobile-first design with touch-friendly interfaces

## 🔒 Security Features

- **Protected Routes**: Authentication required for dashboard access
- **Session Management**: Proper session handling with Clerk
- **Input Validation**: Form validation and sanitization
- **Secure Authentication**: OAuth 2.0 with Google

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
