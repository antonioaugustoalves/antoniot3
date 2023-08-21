import styles from './index.module.css'


export function Post(){
  return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://github.com/antonioaugustoalves.png" alt="" />
            <div className={styles.authorInfo}>
              <strong>Antonio A. Alves</strong>
              <span>Educator</span>
            </div>
          </div>
          <time
          title='14 de agosto de 2023 as 17:50:00'
          dateTime="2023-08-14 17:50:00">
            Publicado a 1h
            </time>
        </header>
        <div className={styles.content}>
            <p>Fala galera! Tudo beleza? 👍</p>
            <p>Hoje vamos aprender algo novo</p>
            <p>Nosso novo projeto está saindo do forno</p>
            <p><a href="#">#SouDuque</a></p>
           <p><a href="#">#Tecnico</a></p>
        </div>
      </article>
  )
}