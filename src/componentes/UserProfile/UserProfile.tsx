import styles from "./UserProfile.module.css";
import { Toggle } from "../Toggle/Toggle";
import type { User } from "./types";
import { useState } from "react";

interface Props {
  user: User;
}

export const UserProfile = ({ user }: Props) => {
  const [active, setActive] = useState(user.active);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
            <div className={styles.avatar} />
          <div className={styles.status}>
            <span className={styles.activeText}>Activo</span>
            <Toggle value={active} onChange={() => setActive(!active)} />
          </div>
        </div>          
      </div>

      <div className={styles.card}>
        <h2 className={styles.name}>{user.name}</h2>

        <div className={styles.row}>
          <strong><span className={styles.value}>Filial/centro habitual</span></strong>
          <span className={styles.value}>{user.branch}</span>
        </div>

        <div className={styles.row}>
          <strong><span className={styles.value}>E-mail</span></strong>
          <span className={styles.value}>{user.email}</span>
        </div>

        <div className={styles.row}>
          <strong><span className={styles.value}>Teléfono</span></strong>
          <span className={styles.value}>{user.phone}</span>
        </div>

        <div className={styles.row}>
          <strong><span className={styles.value}>Registrado</span></strong>
          <span className={styles.value}>{user.registeredAt}</span>
        </div>

        <div className={styles.row}>
          <strong><span className={styles.value}>Fecha de nacimiento</span></strong>
          <span className={styles.value}>{user.birthDate}</span>
        </div>

        <div className={styles.row}>
          <strong><span className={styles.value}>Sexo</span></strong>
          <span className={styles.value}>{user.gender}</span>
        </div>

        <div className={styles.row}>
          <strong><span className={styles.value}>Objetivo</span></strong>
          <span className={styles.value}>{user.goal}</span>
        </div>
      </div>

      <div className={styles.card}>
        <h3 className={styles.name}>Etiquetas</h3>
        <label className={styles.label} >Cliente</label>
        <select className={styles.select} defaultValue={user.tag}>
          <option value="Prueba">Prueba</option>
          <option value="Premium">Premium</option>
        </select>
      </div>
    </div>
  );
};