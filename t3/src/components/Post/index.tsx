import styles from './index.module.css'

interface PostProps {
  title: string;
  content: string;
}
export function Post(props: PostProps){
  return (
      <div className={styles.container}>
        <strong className={styles.title}>{props.title}</strong>
        <p>{props.content}</p>
      </div>
  )
}