
import { Header } from './components/Header';

import styles from './App.module.css';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';
import './global.css';

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
        <Post author="John Doe" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias velit porro veniam tempora nesciunt atque impedit aliquid amet natus fugit? Velit sint itaque doloribus. Voluptatibus saepe facilis minus quibusdam accusamus!" />
        <Post author="Jane Doe" content="Novo post no seu feed" />
        </main>

      </div>
    </div>
  )
}

export default App


