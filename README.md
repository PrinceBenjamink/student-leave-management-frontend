# Student Leave Management System

A complete frontend-only React application for managing student leave requests with role-based dashboards for Students, Faculty, and HOD.

## 🎯 Features

### 1. **Login Page**
- Role selection (Student / Faculty / HOD)
- Email and password authentication
- Clean and professional UI

### 2. **Student Dashboard**
- Welcome message with personalized greeting
- Quick access button to apply for leave
- Leave history table showing all past applications
- Status indicators (Pending / Approved / Rejected)

### 3. **Apply Leave Page**
- Comprehensive leave application form
- Fields: Name, Register Number, From Date, To Date, Leave Type, Reason
- Form validation
- Submit and Cancel actions

### 4. **Faculty Approval Dashboard**
- View all student leave requests
- Approve or Reject buttons for each request
- Real-time status updates
- Responsive table layout

### 5. **HOD Grant Dashboard**
- Review faculty-approved leave requests
- Final approval authority (Grant Leave / Reject)
- Dual status display (Faculty Status & HOD Status)

### 6. **Additional Features**
- Responsive Navbar with logout functionality
- Footer component
- 404 Not Found page
- Fully responsive design (Mobile, Tablet, Desktop)

## 🎨 Design Features

- **Color Theme**: Professional blue-based academic palette
- **Layout**: Card-based design with clean spacing
- **Responsive**: Flexbox and Media Queries for all screen sizes
- **Typography**: Modern, readable fonts
- **Status Badges**: Color-coded status indicators

## 📁 Project Structure

```
student-leave-management/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── ApplyLeave.jsx
│   │   ├── FacultyDashboard.jsx
│   │   ├── HODDashboard.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Login.css
│   │   ├── StudentDashboard.css
│   │   ├── ApplyLeave.css
│   │   ├── FacultyDashboard.css
│   │   ├── HODDashboard.css
│   │   └── NotFound.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd student-leave-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📱 Usage

### Login
1. Open the application
2. Select your role (Student / Faculty / HOD)
3. Enter email and password
4. Click "Login"

### Student Flow
1. Login as Student
2. View your dashboard with leave history
3. Click "Apply for Leave"
4. Fill in the leave application form
5. Submit the application
6. View status in the dashboard

### Faculty Flow
1. Login as Faculty
2. View all pending leave requests
3. Review student details and leave information
4. Click "Approve" or "Reject" for each request

### HOD Flow
1. Login as HOD
2. View faculty-approved requests
3. Review all details
4. Click "Grant Leave" or "Reject" for final approval

## 🛠️ Technologies Used

- **React 18.2.0** - UI Library
- **React Router DOM 6.20.0** - Navigation and Routing
- **Vite** - Build Tool
- **CSS3** - Styling (Flexbox, Media Queries)
- **JavaScript ES6+** - Programming Language

## 📊 Mock Data

The application uses mock data stored in component state:
- Student leave history
- Faculty leave requests
- HOD approval requests

No backend or database is required.

## 🎯 Key Features Implementation

### State Management
- Uses React `useState` hook for local state management
- Mock data initialization in component state

### Routing
- React Router for navigation between pages
- Protected routes based on user role
- 404 page for invalid routes

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 480px
  - Tablet: 481px - 768px
  - Desktop: > 768px

### Status Management
- Color-coded status badges
- Real-time status updates on approval/rejection
- Visual feedback for user actions

## 🎨 Color Palette

- **Primary Blue**: #1e3a8a
- **Secondary Blue**: #3b82f6
- **Success Green**: #22c55e
- **Warning Yellow**: #fef3c7
- **Error Red**: #ef4444
- **Background**: #f5f7fa
- **Text**: #334155

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔒 Note

This is a **frontend-only** academic project. No backend integration or database is included. All data is stored in component state and will reset on page refresh.

## 📄 License

This project is created for academic purposes.

## 👨‍💻 Author

Student Leave Management System - Frontend Project

---

**Happy Coding! 🚀**
