import { useState } from "react";
import styles from "./CreatePlanCard.module.css";
import type { CreatePlanData } from "./types";

interface Props {
  data: CreatePlanData;
}

export const CreatePlanCard = ({ data }: Props) => {
  const [open, setOpen] = useState({
    general: true,
    price: true,
    access: true,
    notes: true,
  });

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>Crear nuevo plan</h2>
        <span className={styles.close}>×</span>
      </div>

      {/* DATOS GENERALES */}
      <section className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => setOpen({ ...open, general: !open.general })}
        >
          <span>Datos generales</span>
          <span>{open.general ? "˄" : "˅"}</span>
        </button>

        {open.general && (
          <div className={styles.card}>
            <div className={styles.field}>
              <label className={styles.label}>
                Nombre del plan <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                Descripción <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                placeholder="Descripción"
                className={styles.input}
              />
            </div>

            <div className={styles.statusRow}>
              <span className={styles.label}>Estado</span>

              <div className={styles.statusRight}>
                <span className={styles.activeText}>Activo</span>
                <div className={styles.switch} />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* PRECIO */}
      <section className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => setOpen({ ...open, price: !open.price })}
        >
          <span>Precio y condiciones</span>
          <span>{open.price ? "˄" : "˅"}</span>
        </button>

        {open.price && (
          <div className={styles.card}>
            <label>
              Precio base
              <input defaultValue={data.priceBase} />
            </label>

            <div className={styles.grid}>
              <label>
                Ciclo
                <input value={data.cycle} readOnly />
              </label>

              <label>
                Periodicidad
                <input value={data.periodicity} readOnly />
              </label>
            </div>

            <label>
              Límite de usuarios
              <input defaultValue={data.userLimit} />
            </label>

            <div className={styles.switchRow}>
              <span>Permite prorrateo en alta</span>
              <span className={styles.switch}>Sí</span>
            </div>

            <div className={styles.grid}>
              <label>
                Duración descuento
                <input defaultValue={data.discountDuration} />
              </label>

              <label>
                Descuento
                <input defaultValue={`${data.discountPercent}%`} />
              </label>
            </div>

            <label>
              Matrícula por defecto
              <input defaultValue={data.enrollmentFee} />
            </label>
          </div>
        )}
      </section>

      {/* ACCESOS */}
      <section className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => setOpen({ ...open, access: !open.access })}
        >
          <span>Accesos y beneficios</span>
          <span>{open.access ? "˄" : "˅"}</span>
        </button>

        {open.access && (
          <div className={styles.card}>
            <label>
              Centros permitidos
              <input value={data.centers} readOnly />
            </label>

            <label>
              Acceso a instalaciones
              <input value={data.facilities} readOnly />
            </label>

            <div className={styles.scheduleHeader}>
              <span>Días</span>
              <span>Hora inicio</span>
              <span>Hora fin</span>
            </div>

            {data.schedule.map((d) => (
              <div key={d.day} className={styles.scheduleRow}>
                <span className={styles.day}>{d.day}</span>
                <input value={d.start} readOnly />
                <input value={d.end} readOnly />
              </div>
            ))}

            <div className={styles.switchRow}>
              <span>Planes de entrenamiento</span>
              <span className={styles.switch}>Sí</span>
            </div>

            <div className={styles.switchRow}>
              <span>Planes de nutrición</span>
              <span className={styles.switchOff}>No</span>
            </div>

            <label>
              Invitaciones a terceros
              <input defaultValue={data.guestInvites} />
            </label>

            <label>
              Accesos al centro
              <input defaultValue={data.centerAccesses} />
            </label>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Evento</th>
                  <th>Accesos</th>
                </tr>
              </thead>
              <tbody>
                {data.events.map((e) => (
                  <tr key={e.code}>
                    <td>{e.code}</td>
                    <td>{e.name}</td>
                    <td>{e.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* OBSERVACIONES */}
      <section className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => setOpen({ ...open, notes: !open.notes })}
        >
          <span>Observaciones internas</span>
          <span>{open.notes ? "˄" : "˅"}</span>
        </button>

        {open.notes && (
          <div className={styles.card}>
            <textarea placeholder="Notas internas sobre el plan..." />
          </div>
        )}
      </section>

      {/* FOOTER */}
      <div className={styles.footer}>
        <button className={styles.cancel}>Cancelar</button>
        <button className={styles.submit}>Crear plan</button>
      </div>
    </div>
  );
};