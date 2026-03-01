import { useState } from "react";
import styles from "./RoomDetailCard.module.css";
import type { RoomDetail } from "./types";

interface Props {
  data: RoomDetail;
}

export const RoomDetailCard = ({ data }: Props) => {
  const [roomOpen, setRoomOpen] = useState(true);
  const [itemsOpen, setItemsOpen] = useState(true);

  return (
    <aside className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <strong><span>Detalle de la sala</span></strong>
        <button className={styles.close}>×</button>
      </header>

      {/* ===== SALA FITNESS ===== */}
      <section className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => setRoomOpen(!roomOpen)}
        >
          <span>Sala Fitness</span>
          <span className={styles.chevron}>{roomOpen ? "˄" : "˅"}</span>
        </button>

        {roomOpen && (
          <div className={styles.innerCard}>
            <div className={styles.infoRow}>
              <span>Planta</span>
              <span>1</span>
            </div>

            <div className={styles.infoRow}>
              <span>QR</span>
              <span>S-001</span>
            </div>

            <div className={styles.infoRow}>
              <span>Estado</span>
              <span className={styles.status}>En revisión</span>
            </div>
          </div>
        )}
      </section>

      {/* ===== LISTADO ITEMS ===== */}
      <section className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => setItemsOpen(!itemsOpen)}
        >
          <span>Listado de items en la sala</span>
          <div className={styles.headerActions}>
            <span className={styles.add}>＋</span>
            <span className={styles.chevron}>{itemsOpen ? "˄" : "˅"}</span>
          </div>
        </button>

        {itemsOpen && (
          <div className={styles.innerCard}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Ítem</th>
                  <th>Categoría</th>
                  <th>Estado</th>
                  <th>Último PM</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>
                      <span
                        className={`${styles.badge} ${
                          item.status === "OK"
                            ? styles.ok
                            : styles.fail
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{item.lastPM}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.innerCard}>
          <button className={styles.secondary}>＋ Añadir ítem</button>
          <button className={styles.primary}>Crear incidencia</button>
        </div>
      </footer>
    </aside>
  );
};