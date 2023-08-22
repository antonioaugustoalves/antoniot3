import { Header } from "./components/Header";
import { Post } from "./components/Post";
import './global.css';
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";
import React from "react";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          <Post title="Meu post"
            content="Este é o meu primeiro post" 
            date="2023-08-21 18:00:00"/>

          <Post title="Novo post"
            content="Apenas para atualizar o feed."
            date="2023-08-21 18:11:00" />
        </main>
      </div>
    </div>
  )
}


