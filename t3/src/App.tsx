import { Header } from "./components/Header";
import { Post } from "./components/Post";
export function App() {
  return (
    <>
    <Header/>
    <Post 
    title="Férias de inverno" 
    content="Foi bem legal. Fiz muitas coisas divertidas"/>

<Post 
    title="De volta ao trabalho" 
    content="Hoje iniciamos uma nova etapa. Novas turmas estão começado hoje 👍"/>
    </>
  )
}


