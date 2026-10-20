import { useMemo, useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import StudentTable from "./components/StudentTable";

import styles from "./App.module.css";

const initialStudents = [
  {
    id: 1,
    name: "Amina Rahimi",
    email: "amina@example.com",
    course: "React Development",
    status: "Active",
    enrolled: "Sep 12, 2026",
  },
  {
    id: 2,
    name: "Maryam Ahmadi",
    email: "maryam@example.com",
    course: "UI/UX Design",
    status: "Active",
    enrolled: "Sep 15, 2026",
  },
  {
    id: 3,
    name: "Fatima Noori",
    email: "fatima@example.com",
    course: "JavaScript",
    status: "Pending",
    enrolled: "Sep 18, 2026",
  },
  {
    id: 4,
    name: "Zahra Hamidi",
    email: "zahra@example.com",
    course: "Frontend Development",
    status: "Active",
    enrolled: "Sep 20, 2026",
  },
  {
    id: 5,
    name: "Laila Ahmadi",
    email: "laila@example.com",
    course: "React Development",
    status: "Inactive",
    enrolled: "Sep 22, 2026",
  },
  {
    id: 6,
    name: "Nadia Mohammadi",
    email: "nadia@example.com",
    course: "UI/UX Design",
    status: "Pending",
    enrolled: "Sep 25, 2026",
  },
];

const statistics = [
  {
    title: "Total Students",
    value: "248",
    icon: "♙",
    change: "+12.5%",
    description: "from last month",
    color: "purple",
  },
  {
    title: "Active Students",
    value: "186",
    icon: "✓",
    change: "+8.2%",
    description: "from last month",
    color: "green",
  },
  {
    title: "Courses",
    value: "12",
    icon: "▤",
    change: "+2",
    description: "new this month",
    color: "orange",
  },
  {
    title: "Completion Rate",
    value: "92%",
    icon: "↗",
    change: "+4.3%",
    description: "from last month",
    color: "blue",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return initialStudents.filter((student) =>
      [student.name, student.email, student.course, student.status].some(
        (value) => value.toLowerCase().includes(query),
      ),
    );
  }, [search]);

  function handleNavigate(page) {
    setActivePage(page);
    setSidebarOpen(false);

    if (page === "Students") {
      document
        .getElementById("students")
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (page === "Dashboard") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : ""}`}>
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
      />

      {sidebarOpen && (
        <button
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
          aria-label="Close navigation"
        />
      )}

      <main className={styles.main}>
        <Navbar
          search={search}
          onSearch={setSearch}
          onMenuToggle={() => setSidebarOpen((open) => !open)}
          darkMode={darkMode}
          onThemeToggle={() => setDarkMode((mode) => !mode)}
          activePage={activePage}
        />

        <div className={styles.content}>
          <section className={styles.welcome}>
            <div>
              <h2>Dashboard Overview</h2>
              <p>Here is what's happening with your students today.</p>
            </div>

            <button
              className={styles.primaryButton}
              onClick={() => alert("Add student form coming soon!")}
            >
              <span>＋</span> Add New Student
            </button>
          </section>

          <section className={styles.statsGrid} aria-label="Student statistics">
            {statistics.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </section>

          <section id="students" className={styles.studentsSection}>
            <StudentTable students={filteredStudents} />
          </section>

          <footer className={styles.footer}>
            <span>© 2026 StudentHub Dashboard</span>
            <span>Designed with React and CSS Modules</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
