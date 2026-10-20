import styles from "./Navbar.module.css";

export default function Navbar({
  search,
  onSearch,
  onMenuToggle,
  darkMode,
  onThemeToggle,
  activePage,
}) {
  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
        <button
          className={styles.menuButton}
          onClick={onMenuToggle}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div>
          <h1>{activePage}</h1>
          <p>Welcome back! Here is your overview.</p>
        </div>
      </div>

      <div className={styles.actions}>
        <label className={styles.searchBox}>
          <span>⌕</span>
          <input
            type="search"
            placeholder="Search students..."
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            aria-label="Search students"
          />
        </label>

        <button
          className={styles.iconButton}
          onClick={onThemeToggle}
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          {darkMode ? "☀" : "☾"}
        </button>

        <button
          className={styles.iconButton}
          aria-label="Notifications"
          title="Notifications"
        >
          ♧
          <span className={styles.notificationDot} />
        </button>

        <div className={styles.profile}>
          <div className={styles.avatar}>SS</div>
          <div className={styles.profileInfo}>
            <strong>Sudaba Solaiman Khil</strong>
            <span>Administrator</span>
          </div>
          <span className={styles.chevron}>⌄</span>
        </div>
      </div>
    </header>
  );
}
