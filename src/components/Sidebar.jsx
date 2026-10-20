import styles from "./Sidebar.module.css";

const menuItems = [
  { icon: "▦", label: "Dashboard" },
  { icon: "♙", label: "Students" },
  { icon: "▤", label: "Courses" },
  { icon: "▥", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

export default function Sidebar({ activePage, onNavigate, isOpen }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>S</span>
        <span>StudentHub</span>
      </div>

      <p className={styles.menuTitle}>MAIN MENU</p>

      <nav className={styles.navigation}>
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`${styles.navLink} ${
              activePage === item.label ? styles.active : ""
            }`}
            onClick={() => onNavigate(item.label)}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.sidebarFooter}>
        <div className={styles.helpIcon}>?</div>
        <div>
          <strong>Need help?</strong>
          <p>Contact our support team</p>
        </div>
      </div>
    </aside>
  );
}
