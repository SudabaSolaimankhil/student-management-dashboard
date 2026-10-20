import { useState } from "react";
import styles from "./StudentTable.module.css";

export default function StudentTable({ students }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <section className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <div>
          <h2>Recent Students</h2>
          <p>Manage and monitor your students</p>
        </div>

        <span className={styles.studentCount}>{students.length} students</span>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>STUDENT</th>
              <th>COURSE</th>
              <th>STATUS</th>
              <th>ENROLLED</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className={styles.studentInfo}>
                    <div className={styles.studentAvatar}>
                      {student.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </div>

                    <div>
                      <strong>{student.name}</strong>
                      <span>{student.email}</span>
                    </div>
                  </div>
                </td>

                <td>{student.course}</td>

                <td>
                  <span
                    className={`${styles.status} ${
                      styles[student.status.toLowerCase()]
                    }`}
                  >
                    <span className={styles.statusDot} />
                    {student.status}
                  </span>
                </td>

                <td>{student.enrolled}</td>

                <td>
                  <div className={styles.actionWrapper}>
                    <button
                      className={styles.actionButton}
                      onClick={() =>
                        setOpenMenu(openMenu === student.id ? null : student.id)
                      }
                      aria-label={`Actions for ${student.name}`}
                      aria-expanded={openMenu === student.id}
                    >
                      •••
                    </button>

                    {openMenu === student.id && (
                      <div className={styles.dropdown}>
                        <button
                          onClick={() => {
                            alert(
                              `Student: ${student.name}\nEmail: ${student.email}\nCourse: ${student.course}\nStatus: ${student.status}`,
                            );
                            setOpenMenu(null);
                          }}
                        >
                          View details
                        </button>

                        <button
                          onClick={() => {
                            navigator.clipboard
                              .writeText(student.email)
                              .catch(() => {});
                            setOpenMenu(null);
                          }}
                        >
                          Copy email
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan="5" className={styles.empty}>
                  No students found. Try another search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.tableFooter}>
        Showing {students.length} students
        <span>Updated just now</span>
      </div>
    </section>
  );
}
