import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './index.module.css';
import React from 'react';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/antonioaugustoalves.png" alt=""/>
      <div className={styles.commentBox}>
         <div className={styles.commentContent}>
         <header>
            <div className={styles.authorAndTime}>
              <strong>Antonio A. Alves</strong>
              <time title="21 de agosto de 2023" dateTime="2023-08-21 19:00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Excluir comentário">
                <Trash size={20}/>
            </button>
          </header>
         </div>
          <p>Seu trabalho é inspirador. Obrigado por compartilhar</p>
      </div>
      <footer>
        <button>
          <ThumbsUp size={20}/>{' '} Aplaudir <span>06</span>
        </button>
      </footer>
    </div>
  )
}