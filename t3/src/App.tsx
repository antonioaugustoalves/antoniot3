import { Header } from "./components/Header";
import { Post } from "./components/Post";
import './global.css';
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          <Post title="Meu post"
            content="Este é o meu primeiro post" />

          <Post title="Novo post"
            content="Apenas para atualizar o feed." />
        </main>
      </div>
    </div>
  )
}


