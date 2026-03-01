import styles from "./Toggle.module.css";

interface ToggleProps {
  value: boolean;
  onChange: () => void;
}

export const Toggle = ({ value, onChange }: ToggleProps) => {
  return (
    <button
      className={`${styles.toggle} ${value ? styles.active : ""}`}
      onClick={onChange}
      type="button"
    >
      <span className={styles.circle} />
    </button>
  );
};