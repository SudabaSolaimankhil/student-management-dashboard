import styles from "./StatCard.module.css";

export default function StatCard({
  title,
  value,
  icon,
  change,
  description,
  color,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardText}>
          <p className={styles.title}>{title}</p>
          <h2>{value}</h2>
        </div>

        <div
          className={`${styles.iconBox} ${styles[color]}`}
          aria-hidden="true"
        >
          {icon}
        </div>
      </div>

      <div className={styles.cardBottom}>
        <span className={styles.change}>{change}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </article>
  );
}
