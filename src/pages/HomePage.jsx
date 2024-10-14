import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <section className={styles.homepage}>
      <div>
        <h1>אתר המבצעים של מערך הבקרה</h1>
        <p>hello from הסעות</p>
        <p>hello from שריוני מכלולים</p>
      </div>
    </section>
  );
}
