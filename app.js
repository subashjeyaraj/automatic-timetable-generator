/* ==========================================================================
   TIME TABLE STUDIO - CORE ARCHITECTURE & LOGIC (app.js)
   100% Client-Side, Zero-Backend, Standalone LocalStorage Engine
   ========================================================================== */

(function (global) {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. DEFAULT SEED DATA
  // -------------------------------------------------------------------------
  const DEFAULT_STAFF = [
    { staffId: "admin", name: "Administrator", pass: "admin" },
    { staffId: "staff1", name: "Prof. Ramesh", pass: "1234" }
  ];

  const DEFAULT_TEACHERS = [
    // --- Computer Science (CS) Year 1 ---
    { id: 1, dept: "CS", year: "1", teacherName: "Dr. A. Ramesh", subject: "C Programming", type: "Theory", hours: 5 },
    { id: 2, dept: "CS", year: "1", teacherName: "Prof. S. Priya", subject: "Digital Logic", type: "Theory", hours: 5 },
    { id: 3, dept: "CS", year: "1", teacherName: "Dr. A. Ramesh", subject: "C Programming Lab", type: "Lab", hours: 4 },
    { id: 4, dept: "CS", year: "1", teacherName: "Prof. K. Kumar", subject: "Communicative English", type: "Theory", hours: 4 },
    { id: 5, dept: "CS", year: "1", teacherName: "Prof. M. Meena", subject: "Mathematics I", type: "Theory", hours: 5 },
    { id: 6, dept: "CS", year: "1", teacherName: "Faculty Dept", subject: "Library & Sports", type: "Theory", hours: 2 },

    // --- Computer Science (CS) Year 2 ---
    { id: 7, dept: "CS", year: "2", teacherName: "Dr. K. Anita", subject: "Data Structures", type: "Theory", hours: 5 },
    { id: 8, dept: "CS", year: "2", teacherName: "Prof. R. Karthik", subject: "Operating Systems", type: "Theory", hours: 5 },
    { id: 9, dept: "CS", year: "2", teacherName: "Dr. K. Anita", subject: "Data Structures Lab", type: "Lab", hours: 4 },
    { id: 10, dept: "CS", year: "2", teacherName: "Prof. V. Suresh", subject: "Database Systems", type: "Theory", hours: 5 },
    { id: 11, dept: "CS", year: "2", teacherName: "Prof. D. Divya", subject: "Discrete Mathematics", type: "Theory", hours: 4 },
    { id: 12, dept: "CS", year: "2", teacherName: "Faculty Dept", subject: "Aptitude & Soft Skills", type: "Theory", hours: 2 },

    // --- Computer Science (CS) Year 3 ---
    { id: 13, dept: "CS", year: "3", teacherName: "Dr. P. Vimal", subject: "Web Technologies", type: "Theory", hours: 5 },
    { id: 14, dept: "CS", year: "3", teacherName: "Prof. N. Deepa", subject: "Computer Networks", type: "Theory", hours: 5 },
    { id: 15, dept: "CS", year: "3", teacherName: "Dr. P. Vimal", subject: "Web Dev Lab", type: "Lab", hours: 4 },
    { id: 16, dept: "CS", year: "3", teacherName: "Prof. B. Rajesh", subject: "Software Engineering", type: "Theory", hours: 4 },
    { id: 17, dept: "CS", year: "3", teacherName: "Prof. N. Deepa", subject: "Cloud Computing", type: "Theory", hours: 4 },
    { id: 18, dept: "CS", year: "3", teacherName: "Project Guide", subject: "Capstone Project", type: "Lab", hours: 3 },

    // --- Bachelor of Computer Applications (BCA) Year 1 ---
    { id: 19, dept: "BCA", year: "1", teacherName: "Prof. T. Anjali", subject: "Python Programming", type: "Theory", hours: 5 },
    { id: 20, dept: "BCA", year: "1", teacherName: "Prof. G. Vignesh", subject: "Office Automation", type: "Theory", hours: 4 },
    { id: 21, dept: "BCA", year: "1", teacherName: "Prof. T. Anjali", subject: "Python Lab", type: "Lab", hours: 4 },
    { id: 22, dept: "BCA", year: "1", teacherName: "Prof. S. Lakshmi", subject: "Mathematical Foundation", type: "Theory", hours: 5 },
    { id: 23, dept: "BCA", year: "1", teacherName: "Prof. C. Mohan", subject: "General English", type: "Theory", hours: 4 },
    { id: 24, dept: "BCA", year: "1", teacherName: "Faculty Dept", subject: "Digital Literacy", type: "Theory", hours: 3 },

    // --- Bachelor of Computer Applications (BCA) Year 2 ---
    { id: 25, dept: "BCA", year: "2", teacherName: "Prof. M. Saravanan", subject: "Java Programming", type: "Theory", hours: 5 },
    { id: 26, dept: "BCA", year: "2", teacherName: "Prof. L. Revathi", subject: "Data Communication", type: "Theory", hours: 4 },
    { id: 27, dept: "BCA", year: "2", teacherName: "Prof. M. Saravanan", subject: "Java OOP Lab", type: "Lab", hours: 4 },
    { id: 28, dept: "BCA", year: "2", teacherName: "Prof. K. Murugan", subject: "RDBMS & SQL", type: "Theory", hours: 5 },
    { id: 29, dept: "BCA", year: "2", teacherName: "Prof. L. Revathi", subject: "Financial Accounting", type: "Theory", hours: 4 },
    { id: 30, dept: "BCA", year: "2", teacherName: "Faculty Dept", subject: "Reasoning Skills", type: "Theory", hours: 3 },

    // --- Bachelor of Computer Applications (BCA) Year 3 ---
    { id: 31, dept: "BCA", year: "3", teacherName: "Prof. E. Balaji", subject: "Full Stack Web Dev", type: "Theory", hours: 5 },
    { id: 32, dept: "BCA", year: "3", teacherName: "Prof. S. Soundarya", subject: "Mobile App Dev", type: "Theory", hours: 4 },
    { id: 33, dept: "BCA", year: "3", teacherName: "Prof. E. Balaji", subject: "Full Stack Lab", type: "Lab", hours: 4 },
    { id: 34, dept: "BCA", year: "3", teacherName: "Prof. S. Soundarya", subject: "Information Security", type: "Theory", hours: 4 },
    { id: 35, dept: "BCA", year: "3", teacherName: "Prof. R. Gopinath", subject: "Data Mining & BI", type: "Theory", hours: 4 },
    { id: 36, dept: "BCA", year: "3", teacherName: "Project Lead", subject: "Mini Project & Viva", type: "Lab", hours: 4 }
  ];

  const DAY_ORDERS = ["Day Order 1", "Day Order 2", "Day Order 3", "Day Order 4", "Day Order 5", "Day Order 6"];

  // Normalize faculty object properties so teacherName & teacher are always synced
  function normalizeTeacher(t) {
    const name = t.teacherName || t.teacher || "Faculty";
    return {
      id: t.id || Date.now() + Math.random(),
      dept: t.dept,
      year: String(t.year),
      teacherName: name,
      teacher: name,
      subject: t.subject,
      type: t.type || "Theory",
      hours: Number(t.hours) || 3
    };
  }

  // -------------------------------------------------------------------------
  // 2. DATA STORE INITIALIZATION
  // -------------------------------------------------------------------------
  function initDataStore(forceReset = false) {
    if (forceReset || !localStorage.getItem("staff")) {
      localStorage.setItem("staff", JSON.stringify(DEFAULT_STAFF));
    }

    if (forceReset || !localStorage.getItem("teachers")) {
      const normalized = DEFAULT_TEACHERS.map(normalizeTeacher);
      localStorage.setItem("teachers", JSON.stringify(normalized));
    }

    // Auto-generate master timetable if absent
    if (forceReset || !localStorage.getItem("timetable")) {
      generateAndStoreMasterTimetable();
    }
  }

  // -------------------------------------------------------------------------
  // 3. AUTHENTICATION & SESSION
  // -------------------------------------------------------------------------
  function getStaffList() {
    try {
      return JSON.parse(localStorage.getItem("staff")) || DEFAULT_STAFF;
    } catch (e) {
      return DEFAULT_STAFF;
    }
  }

  function registerStaff(id, name, pass) {
    if (!id || !name || !pass) {
      showToast("Please fill all registration fields", "error");
      return false;
    }

    const staff = getStaffList();
    if (staff.some(s => s.staffId.toLowerCase() === id.toLowerCase())) {
      showToast("Staff ID already exists. Try another ID.", "error");
      return false;
    }

    staff.push({ staffId: id, name: name, pass: pass });
    localStorage.setItem("staff", JSON.stringify(staff));
    showToast("Registration successful! You can now log in.", "success");
    return true;
  }

  function login(id, pass) {
    if (!id || !pass) {
      showToast("Please enter Staff ID and Password", "error");
      return false;
    }

    const staff = getStaffList();
    const user = staff.find(s => s.staffId.toLowerCase() === id.toLowerCase() && s.pass === pass);

    if (user) {
      localStorage.setItem("loggedStaff", JSON.stringify({
        id: user.staffId,
        name: user.name || user.staffId
      }));
      showToast(`Welcome back, ${user.name}!`, "success");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 500);
      return true;
    } else {
      showToast("Invalid Staff ID or Password", "error");
      return false;
    }
  }

  function demoLogin() {
    const demoUser = { id: "admin", name: "Administrator" };
    localStorage.setItem("loggedStaff", JSON.stringify(demoUser));
    showToast("Logged in as Administrator (Demo Mode)", "success");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 400);
  }

  function logout() {
    localStorage.removeItem("loggedStaff");
    showToast("Logged out successfully", "info");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 400);
  }

  function getLoggedUser() {
    try {
      const data = localStorage.getItem("loggedStaff");
      if (!data) return null;
      if (data.startsWith("{")) {
        return JSON.parse(data);
      }
      return { id: data, name: data };
    } catch (e) {
      return null;
    }
  }

  function checkAuth(redirect = true) {
    const user = getLoggedUser();
    if (!user && redirect) {
      window.location.href = "index.html";
      return false;
    }
    return true;
  }

  // -------------------------------------------------------------------------
  // 4. TEACHER MANAGEMENT
  // -------------------------------------------------------------------------
  function getTeachers(deptFilter = null, yearFilter = null) {
    try {
      let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
      teachers = teachers.map(normalizeTeacher);
      if (deptFilter) {
        teachers = teachers.filter(t => t.dept === deptFilter);
      }
      if (yearFilter) {
        teachers = teachers.filter(t => String(t.year) === String(yearFilter));
      }
      return teachers;
    } catch (e) {
      return [];
    }
  }

  function addTeacher(dept, year, teacherName, subject, type, hours) {
    if (!dept || !year || !teacherName || !subject || !type || !hours) {
      showToast("Please fill all teacher details", "error");
      return false;
    }

    const teachers = getTeachers();
    const newTeacher = normalizeTeacher({
      id: Date.now(),
      dept,
      year,
      teacherName,
      subject,
      type,
      hours: Number(hours)
    });

    teachers.push(newTeacher);
    localStorage.setItem("teachers", JSON.stringify(teachers));
    showToast(`Added ${subject} (${teacherName})`, "success");
    return true;
  }

  function deleteTeacher(index) {
    const teachers = getTeachers();
    if (index >= 0 && index < teachers.length) {
      const removed = teachers.splice(index, 1)[0];
      localStorage.setItem("teachers", JSON.stringify(teachers));
      showToast(`Deleted ${removed.subject}`, "info");
      return true;
    }
    return false;
  }

  function deleteAllTeachers() {
    localStorage.setItem("teachers", JSON.stringify([]));
    showToast("All teachers cleared", "info");
  }

  function resetSampleData() {
    initDataStore(true);
    showToast("Sample curriculum & faculty data reloaded!", "success");
  }

  // -------------------------------------------------------------------------
  // 5. TIMETABLE GENERATION ALGORITHM
  // -------------------------------------------------------------------------
  function createTimetableForClass(dept, year, teachersList) {
    const periodsPerDay = 6;
    const timetable = {};

    // 1. Build weighted subject pool based on allocated weekly hours
    const subjectPool = [];
    teachersList.forEach(t => {
      const hrs = parseInt(t.hours, 10) || 1;
      for (let i = 0; i < hrs; i++) {
        subjectPool.push({
          subject: t.subject,
          teacherName: t.teacherName,
          teacher: t.teacherName,
          type: t.type || "Theory"
        });
      }
    });

    // 2. Shuffle pool evenly using Fisher-Yates
    for (let i = subjectPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [subjectPool[i], subjectPool[j]] = [subjectPool[j], subjectPool[i]];
    }

    // Clone available pool
    const availablePool = [...subjectPool];

    // 3. Populate each Day Order (Day Order 1 to 6)
    DAY_ORDERS.forEach(day => {
      timetable[day] = [];
      const usedSubjectsToday = [];

      for (let p = 0; p < periodsPerDay; p++) {
        // Find subject in pool not already used today to avoid repetitive periods
        let candidateIndex = availablePool.findIndex(s => !usedSubjectsToday.includes(s.subject));

        // If all subjects were already used today or pool empty, allow re-use or fallback
        if (candidateIndex === -1 && availablePool.length > 0) {
          candidateIndex = 0;
        }

        if (candidateIndex !== -1) {
          const picked = availablePool.splice(candidateIndex, 1)[0];
          timetable[day].push({
            subject: picked.subject,
            teacherName: picked.teacherName,
            teacher: picked.teacherName,
            type: picked.type
          });
          usedSubjectsToday.push(picked.subject);
        } else {
          // Free period slot
          timetable[day].push({
            subject: "FREE",
            teacherName: "Self-Study / Library",
            teacher: "Self-Study / Library",
            type: "Free"
          });
        }
      }
    });

    return timetable;
  }

  function generateAndStoreMasterTimetable() {
    const depts = ["CS", "BCA"];
    const years = ["1", "2", "3"];
    const teachers = getTeachers();
    const masterTimetable = {};

    depts.forEach(dept => {
      years.forEach(year => {
        const classTeachers = teachers.filter(t => t.dept === dept && String(t.year) === String(year));
        if (classTeachers.length > 0) {
          const tt = createTimetableForClass(dept, year, classTeachers);
          DAY_ORDERS.forEach(day => {
            const key = `${dept}-${year}-${day}`;
            masterTimetable[key] = tt[day];
          });
          // Also save per-class storage
          localStorage.setItem(`tt_${dept}_${year}`, JSON.stringify(tt));
        }
      });
    });

    localStorage.setItem("timetable", JSON.stringify(masterTimetable));
    return masterTimetable;
  }

  // -------------------------------------------------------------------------
  // 6. ABSENT ADJUSTMENT ALGORITHM
  // -------------------------------------------------------------------------
  function generateAbsentAdjustment(dept, yearsArray, dayOrder, absentSubjects) {
    let master = {};
    try {
      master = JSON.parse(localStorage.getItem("timetable")) || {};
    } catch (e) {
      master = {};
    }

    if (Object.keys(master).length === 0) {
      master = generateAndStoreMasterTimetable();
    }

    const allTeachers = getTeachers();
    const adjustments = [];

    yearsArray.forEach(year => {
      const key = `${dept}-${year}-${dayOrder}`;
      const periods = master[key];
      if (!periods) return;

      const adjustedPeriods = periods.map(p => {
        if (!p || p.subject === "FREE") {
          return {
            subject: "FREE",
            teacherName: "Open Slot",
            isFree: true,
            isSub: false
          };
        }

        if (absentSubjects.includes(p.subject)) {
          // Find replacement faculty from same dept and year not absent
          const replacement = allTeachers.find(t =>
            t.dept === dept &&
            String(t.year) === String(year) &&
            !absentSubjects.includes(t.subject) &&
            t.teacherName !== p.teacherName
          );

          if (replacement) {
            return {
              subject: p.subject,
              originalTeacher: p.teacherName,
              teacherName: replacement.teacherName,
              subSubject: replacement.subject,
              isSub: true,
              isFree: false
            };
          } else {
            return {
              subject: p.subject,
              originalTeacher: p.teacherName,
              teacherName: "Self-Study (No Sub)",
              isSub: false,
              isFree: true
            };
          }
        }

        return {
          subject: p.subject,
          teacherName: p.teacherName,
          type: p.type,
          isSub: false,
          isFree: false
        };
      });

      adjustments.push({
        dept,
        year,
        dayOrder,
        periods: adjustedPeriods
      });
    });

    return adjustments;
  }

  // -------------------------------------------------------------------------
  // 7. TOAST NOTIFICATION & CANVAS DOWNLOAD
  // -------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    let box = document.getElementById("toast-box");
    if (!box) {
      box = document.createElement("div");
      box.id = "toast-box";
      document.body.appendChild(box);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "error") icon = "⚠️";

    toast.innerHTML = `<span>${icon}</span> <div>${message}</div>`;
    box.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function downloadCanvasImage(elementId, filename = "timetable.png") {
    const area = document.getElementById(elementId);
    if (!area) {
      showToast("Nothing to download. Please generate first.", "error");
      return;
    }

    if (typeof html2canvas === "undefined") {
      showToast("Downloading library... please click again in a second", "info");
      return;
    }

    showToast("Rendering high-res image export...", "info");

    html2canvas(area, {
      scale: 2,
      backgroundColor: "#0f172a",
      useCORS: true,
      logging: false
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = filename;
      link.href = canvas.toDataURL("image/png");
      link.click();
      showToast("Download started!", "success");
    }).catch(err => {
      console.error(err);
      showToast("Failed to render image. Try browser Print (Ctrl+P)", "error");
    });
  }

  // -------------------------------------------------------------------------
  // 8. UNIFIED NAVIGATION BAR INJECTION
  // -------------------------------------------------------------------------
  function renderNavbar(activePage) {
    const header = document.querySelector(".app-header");
    if (!header) return;

    const user = getLoggedUser() || { name: "Guest Staff", id: "staff" };

    const navItems = [
      { id: "dashboard", label: "Dashboard", href: "dashboard.html", icon: "📊" },
      { id: "teachers", label: "Faculty & Subjects", href: "teachers.html", icon: "👩‍🏫" },
      { id: "weekly", label: "Weekly Timetable", href: "weekly.html", icon: "📅" },
      { id: "allyears", label: "All Years Master", href: "allyears.html", icon: "📚" },
      { id: "absent", label: "Absent Adjustment", href: "absent.html", icon: "🚫" }
    ];

    const linksHtml = navItems.map(item => `
      <li>
        <a href="${item.href}" class="nav-link ${activePage === item.id ? 'active' : ''}">
          <span>${item.icon}</span>
          <span>${item.label}</span>
        </a>
      </li>
    `).join("");

    header.innerHTML = `
      <div class="nav-container">
        <a href="dashboard.html" class="nav-brand">
          <span style="font-size: 1.5rem;">⏱️</span>
          <span>TimeTable Studio</span>
          <span class="brand-badge">PRO</span>
        </a>

        <ul class="nav-links">
          ${linksHtml}
        </ul>

        <div class="nav-actions">
          <button onclick="TimeTableApp.resetSampleData(); setTimeout(()=>location.reload(), 400);" class="btn btn-secondary btn-sm" title="Reload sample faculty & timetable data">
            🔄 Load Demo
          </button>
          
          <div class="user-chip">
            <span class="user-avatar">${user.name.charAt(0).toUpperCase()}</span>
            <span>${user.name}</span>
          </div>

          <button onclick="TimeTableApp.logout()" class="btn btn-danger btn-sm" title="Sign out">
            🚪 Logout
          </button>
        </div>
      </div>
    `;
  }

  // Auto-initialize storage on script load
  initDataStore();

  // Export public API to window.TimeTableApp
  global.TimeTableApp = {
    DAY_ORDERS,
    initDataStore,
    registerStaff,
    login,
    demoLogin,
    logout,
    getLoggedUser,
    checkAuth,
    getTeachers,
    addTeacher,
    deleteTeacher,
    deleteAllTeachers,
    resetSampleData,
    createTimetableForClass,
    generateAndStoreMasterTimetable,
    generateAbsentAdjustment,
    showToast,
    downloadCanvasImage,
    renderNavbar
  };

  // Legacy global bindings for existing button onclick handlers
  global.goHome = () => { window.location.href = "dashboard.html"; };
  global.registerStaff = () => {
    const id = document.getElementById("staffId")?.value.trim();
    const name = document.getElementById("staffName")?.value.trim();
    const pass = document.getElementById("staffPass")?.value.trim();
    if (global.TimeTableApp.registerStaff(id, name, pass)) {
      document.getElementById("staffId").value = "";
      document.getElementById("staffName").value = "";
      document.getElementById("staffPass").value = "";
    }
  };
  global.login = () => {
    const id = document.getElementById("loginId")?.value.trim();
    const pass = document.getElementById("loginPass")?.value.trim();
    global.TimeTableApp.login(id, pass);
  };
  global.logout = global.TimeTableApp.logout;

})(window);