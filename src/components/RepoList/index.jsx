import { useEffect, useState } from "react"

import styles from './RepoList.module.css'

const RepoList = () => {
  const [repos, setRepos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    setCarregando(true)

    fetch('https://api.github.com/users/Jonatan1103/repos')
    .then(res => res.json())
    .then(resJson => {
      setTimeout(() => {
        setCarregando(false)
        setRepos(resJson)
      }, 3000)
    })
  }, [])

  return (
    <div className="container">
      {carregando ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map((repositorio) => (
            <li className={styles.listItem} key={repositorio.id}>
              <div className={styles.listItemName}>
                <b>Nome:</b> {repositorio.name}
              </div>

              <div className={styles.listItemLanguage}>
                <b>Nome:</b> {repositorio.language}
              </div>
              <a className={styles.listItemLink} target="_blank" href={repositorio.html_url} rel="noreferrer">
                Visitar no github
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RepoList