import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/IgorGMendonca.png',
      name: 'Igor Gabriel',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Um novo projeto para inserção do portifólio!' },
      { type: 'paragraph', content: 'Projeto realizado nas aulas intensivas do ignite da Rocketseat melhorando cada vez mais minhas habilidades em React.js.' },
      { type: 'paragraph', content: 'Desta vez utilizando module styles para estilização.' },
      { type: 'link', content: 'https://github.com/IgorGMendonca/project-feed' },
    ],
    publishedAt: new Date('2023-02-13 12:55:12')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/vbuarque.png',
      name: 'Vinicius Buarque',
      role: 'Web/Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'Novo projeto do meu colega Web Developer Igor!' },
      { type: 'paragraph', content: 'Um feed com comentários e outras funcionalidades' },
      { type: 'paragraph', content: 'Segue o link' },
      { type: 'link', content: 'https://github.com/IgorGMendonca/project-feed' },
    ],
    publishedAt: new Date('2023-02-13 12:55:12')
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (<Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
