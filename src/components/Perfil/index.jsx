/* eslint-disable react/prop-types */
import styles from './Perfil.module.css'

const Perfil = (props) => {
  const { nomeUsuario, avatar } = props

  return (
    <header className={styles.header}>
      <img className={styles.avatar} src={avatar} alt="" />
      <h1 className={styles.name}>{nomeUsuario}</h1>
    </header>
  )
}

export default Perfil