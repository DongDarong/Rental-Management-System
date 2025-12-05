# 🏠 Rental Management System (Admin Dashboard)

A modern, responsive web application built with **React** and **Vite** for managing rental properties, tenants, lease contracts, and payment records. Designed for landlords and property managers to streamline their administrative tasks.

## 🚀 Features

* **📊 Dashboard:** Overview of total properties, tenants, vacancies, and financial summaries.
* **🏢 Properties:** Add, edit, delete, and list rental units (Apartments, Houses, Villas, etc.).
* **👥 Tenants:** Manage tenant profiles, contact info, rental history, and ID card attachments.
* **📝 Contracts:** Create lease agreements, track duration, and **generate/download PDF contracts**.
* **💰 Payments:** Track rent payments, filter by status (Paid, Pending, Overdue), and date ranges.
* **🛠️ Maintenance:** Create and manage maintenance requests, set priorities, and track resolution status.
* **📈 Reports:** View annual financial summaries, monthly breakdowns, and **download PDF reports**.
* **🔐 User Management:** Manage system users, view roles (Admin, Tenant), and access rights.
* **⚙️ Profile & Settings:** Update account details, change passwords securely, and toggle **Dark/Light mode**.
* **🔔 Notifications:** System alerts for overdue payments or expiring contracts.
* **📱 Responsive Design:** Fully optimized layout for Desktop, Tablet, and Mobile devices.

## 🛠️ Tech Stack

* **Framework:** [React.js](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** Tailwind CSS
* **PDF Generation:** jsPDF & jspdf-autotable
* **Icons:** Heroicons / SVG
* **Routing:** React Router

## 🚦 Getting Started / Installation

Follow these steps to run the project locally.

**Prerequisites:**
- Node.js 16+ (Node 18+ recommended)
- npm (bundled with Node) or Yarn

**1. Clone the repository**
```bash
git clone <your-repo-url>
cd Rental-Management-System

# Install dependencies
npm install

# Start dev server (Vite)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

Notes:
- If you use `yarn`, replace `npm install` with `yarn` and `npm run <script>` with `yarn <script>`.
- Environment variables: if your app requires a `.env` file, create one at the project root and add your keys. The project does not include sensitive env files in the repo.
- Linting: run `npm run lint` to check for ESLint issues.


## 📂 Project Structure

```text
RENTAL-MANAGEMENT-SYSTEM
├── node_modules/       # Dependencies
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # Reusable UI components
│   │   ├── contracts/  # Contract tables, forms, PDF logic
│   │   ├── dashboard/  # Dashboard widgets
│   │   ├── maintenance/# Maintenance requests, forms, and tables
│   │   ├── modals/     # Shared Modals (Alert, Success, Error, Loading)
│   │   ├── notifications/
│   │   ├── paginations/# Shared pagination component
│   │   ├── payments/   # Payment tracking components
│   │   ├── profile/    # Account settings, password forms
│   │   ├── properties/ # Property management components
│   │   ├── reports/    # Financial summaries and PDF export
│   │   ├── tenant/     # Tenant forms and tables
│   │   ├── users/      # User management tables and forms
│   │   ├── Drawer.jsx  # Slide-out sidebar for forms
│   │   ├── Layout.jsx  # Main page layout wrapper
│   │   └── Sidebar.jsx # Navigation sidebar
│   ├── pages/          # Main view pages (Tenants, Payments, Reports, etc.)
│   ├── utils/          # Helper functions (e.g., PDF generator)
│   ├── App.jsx         # Main application entry and Routing
│   └── main.jsx        # DOM rendering
├── .gitignore
├── eslint.config.js    # Linting configuration
├── index.html          # HTML entry point
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration
└── README.md           # Documentation