import { Comment } from '../Comment';
import styles from './index.module.css'
interface PostProps{
  title: string;
  content: string;
  date: string;
}
export function Post(props: PostProps){
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
          title='21 de agosto de 2023 as 17:50:00'
          dateTime={props.date}>
            Publicado a 1h
            </time>
        </header>
        <div className={styles.content}>
            <h3>{props.title}👍</h3>
            <p>{props.content}</p>
           <p>👍{' '}<a href="#">#Tecnico</a></p>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu comentário</strong>
          <textarea placeholder="Deixe seu comentário."/>
          <footer>
          <button type="submit">Comentar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
      </article>
  )
}