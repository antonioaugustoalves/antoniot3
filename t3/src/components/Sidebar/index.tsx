import React from 'react'
import styles from './index.module.css'
import { PencilLine } from 'phosphor-react'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/antonioaugustoalves.png" alt="" />
        <strong>Antonio A. Alves</strong>
        <span>educator</span>
      </div>
      <footer>

        <a href="#">
          <PencilLine size={20}/>
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}