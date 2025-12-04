# 🏠 Rental Management System (Admin Dashboard)

A modern, responsive web application built with **React** and **Vite** for managing rental properties, tenants, lease contracts, and payment records. Designed for landlords and property managers to streamline their administrative tasks.

## 🚀 Features

* **📊 Dashboard:** Overview of total properties, tenants, and financial summaries.
* **🏢 Properties:** Add, edit, delete, and list rental units (Apartments, Houses, etc.).
* **👥 Tenants:** Manage tenant profiles, contact info, and upload/view ID cards.
* **📝 Contracts:** Create lease agreements, view terms, and **generate/download PDF contracts**.
* **💰 Payments:** Track rent payments, filter by status (Paid, Pending, Overdue), and date.
* **🔔 Notifications:** System alerts and updates.
* **🛠️ Maintenance:** Create and manage maintenance requests, set priorities and statuses, filter/search requests, and view request history.
* **📱 Responsive Design:** Fully optimized for Desktop, Tablet, and Mobile devices.

## 🛠️ Tech Stack

* **Framework:** [React.js](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** Tailwind CSS
* **PDF Generation:** jsPDF
* **Icons:** Heroicons / SVG
* **Routing:** React Router (implied)

## 🚦 Getting Started / Installation

Follow these steps to run the project locally. Commands are shown for Windows PowerShell (use the same commands on macOS/Linux shells without the PowerShell-specific notes).

Prerequisites:
- Node.js 16+ (Node 18+ recommended)
- npm (bundled with Node) or Yarn

Quick start (PowerShell):

```powershell
# Clone the repository (replace <repo-url> with your repo)
git clone <repo_url>
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
│   │   ├── contracts/  # Contract tables, forms, modals
│   │   ├── dashboard/  # Dashboard widgets
│   │   ├── notifications/
│   │   ├── paginations/# Shared pagination component
│   │   ├── payments/   # Payment tracking components
│   │   ├── properties/ # Property management components
│   │   ├── tenant/     # Tenant forms and tables
│   │   ├── maintenance/ # Maintenance requests, forms and tables
│   │   ├── Drawer.jsx  # Slide-out sidebar for forms
│   │   ├── Layout.jsx  # Main page layout wrapper
│   │   └── Sidebar.jsx # Navigation sidebar
│   ├── pages/          # Main view pages (Tenants, Payments, etc.)
│   ├── utils/          # Helper functions (e.g., PDF generator)
│   ├── App.jsx         # Main application entry
│   └── main.jsx        # DOM rendering
├── .gitignore
├── eslint.config.js    # Linting configuration
├── index.html          # HTML entry point
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration
└── README.md           # Documentation