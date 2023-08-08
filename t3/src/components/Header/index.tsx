import styles from './index.module.css'
import logoIgnite from '../../assets/ignite-logo.svg'
export function Header() {
  return(
   <div className={styles.header}>
    <img src={logoIgnite} alt="Logo do Ignite Feed" />
     <h1>T3: Clone do X</h1>
   </div>
  )
}