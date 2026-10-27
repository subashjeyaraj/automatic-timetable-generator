# ⏱️ TimeTable Studio — Automated Academic Scheduling & Faculty Adjustment

> **A high-performance, lightweight, zero-backend web application engineered for college timetable scheduling, faculty workload allocation, 6-day order rotation, and automated absent faculty substitution.**

---

## 🌟 Overview

**TimeTable Studio** eliminates the headache of manual academic scheduling. Designed for colleges and universities operating on a **Day Order System (Day Orders 1 to 6)** with **6 Periods Daily**, it automatically balances course hour quotas, distinguishes theory lectures from practical lab sessions, and features an algorithmic **Absent Faculty Adjustment Engine** that assigns conflict-free peer substitutes when professors take leave.

### ⚡ Why TimeTable Studio is Ultra-Lightweight & Original:
- **100% Client-Side & Zero-Backend:** Runs directly in any modern web browser. No Node.js server, no Python/Django backend, no complex SQL databases, and zero npm dependencies.
- **Instant LocalStorage Persistence:** All faculty rosters, subject allocations, and generated timetables are persisted in browser memory.
- **Pre-Configured Demo Curriculum:** Comes pre-seeded with full CS and BCA faculty and schedules across 1st, 2nd, and 3rd academic years.
- **GitHub Pages Ready:** Deploys instantly to GitHub Pages with zero build step.

---

## 🚀 Key Modules & Capabilities

### 1. 🔐 Staff Authentication Gateway (`index.html`)
- **1-Click Quick Demo Login:** Instant administrative access without typing credentials.
- **Multi-Staff Authentication:** Local sign-in and new staff account registration.
- **Session Protection:** Automatic session checking and secure logout.

### 2. 📊 Command Center HUD (`dashboard.html`)
- **Live Institutional Telemetry:** Real-time counters for Active Faculty, Unique Courses, Departments, and Day Orders.
- **Glassmorphic Navigation Cards:** Micro-animated routing to all primary modules.
- **One-Click Sample Data Reset:** Easily restore or reload default college curriculum data anytime.

### 3. 👩‍🏫 Faculty & Subject Allocation (`teachers.html`)
- **Multi-Department Support:** Structured for Computer Science (CS) and Computer Applications (BCA) across Years 1, 2, and 3.
- **Theory vs Lab Classification:** Colored distinction tags for lecture blocks vs practical laboratory sessions.
- **Workload Management:** Set weekly period limits (e.g. 4 hrs, 5 hrs) used by the algorithmic generator.
- **Real-Time Search & Filtering:** Filter by department, academic year, or search by professor name.

### 4. 📅 6-Day Order Weekly Generator (`weekly.html`)
- **Balanced Hour Allocation:** Shuffles subjects using Fisher-Yates distribution proportional to allocated hours.
- **Repetition Minimization:** Prevents same-day consecutive theory clashes.
- **High-Res PNG Export:** Generates downloadable schedule images powered by `html2canvas`.
- **Print Optimization:** Dedicated print styles (`Ctrl+P`) for official physical notices.

### 5. 📚 All Years Institutional Master Matrix (`allyears.html`)
- **Full Campus Schedule:** Simultaneously compiles and displays schedules for CS and BCA across 1st, 2nd, and 3rd years.
- **Synchronized Master Storage:** Syncs all class slots to the central matrix required by the substitution engine.
- **Batch PNG Export:** 1-Click high-resolution image export for university department archives.

### 6. 🚫 Smart Absent Faculty & Substitution Engine (`absent.html`)
- **Automated Substitute Matching:** When a teacher takes leave, the engine searches the faculty roster for free staff within the department/year to assign as a designated substitute.
- **Visual Status Badges:** Clearly highlights substituted periods in Amber (`Sub: Prof. Name`) and free periods in Slate.
- **Staff Notice Board Export:** Instant PNG download ready to be pinned to faculty communication boards.

---

## 🛠️ Project Structure

```text
TIME TABLE/
├── index.html        # Main Entry Point & Authentication Portal
├── dashboard.html    # Command Center & Telemetry HUD
├── teachers.html     # Faculty & Subject Management Module
├── weekly.html       # Weekly Day Order Timetable Generator
├── allyears.html     # All Years Institutional Master Timetable
├── absent.html       # Automated Absent Faculty Adjustment Engine
├── timetable.html    # Forwarding alias to Master Schedule
├── login.html        # Forwarding alias to index.html
├── register.html     # Forwarding alias to index.html
├── style.css         # Unified Design System (Glassmorphism & Tokens)
├── dashboard.css     # Compatibility CSS wrapper
├── global.css        # Compatibility CSS wrapper
├── app.js            # Central Logic Engine (Storage, Auth, Timetable Algorithms)
├── script.js         # Compatibility wrapper
├── timetable.js      # Compatibility wrapper
├── absent.js         # Compatibility wrapper
├── .gitignore        # Clean git exclusions
└── README.md         # Comprehensive documentation
```

---

## 💻 Quick Start (Local Run)

No installations or build processes needed!

1. Clone or download this repository.
2. Double-click **`index.html`** to open the app directly in Chrome, Edge, Safari, or Firefox.
3. Click **"⚡ 1-Click Demo Login (Admin)"** to explore immediately.

---

## 🌐 Deploy to GitHub & GitHub Pages

To publish this project to GitHub and host it live on the web:

### Step 1: Initialize Git and Commit
```bash
git init -b main
git add .
git commit -m "feat: complete lightweight client-side TimeTable Studio"
```

### Step 2: Push to Your GitHub Repository
1. Create a new empty repository on [GitHub](https://github.com/new) named `TIME-TABLE`.
2. Link your remote repository and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/TIME-TABLE.git
git push -u origin main
```

### Step 3: Enable Free GitHub Pages Hosting
1. On GitHub, navigate to **Settings** > **Pages** (under "Code and automation").
2. Under **Build and deployment** > **Branch**, select `main` and `/ (root)`.
3. Click **Save**.
4. In under 60 seconds, your site is live at:
   `https://YOUR_USERNAME.github.io/TIME-TABLE/`

---

## 📄 License
Open source and released under the **MIT License**. Free for academic and institutional use.
