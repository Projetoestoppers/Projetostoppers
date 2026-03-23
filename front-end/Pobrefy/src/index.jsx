import { Link } from 'react-router-dom'
import styles from 'components/Header/Header.module.css'
import logo from '../../assets/spotifyfavicon.png'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
      <Link to="/">
        <img src={logo} alt="pobrefy" className={styles.logo} />
      </Link>
      <button className={styles.btn_home}>
        <img src={""} alt="home" />
      </button>
      </div>
      <nav className={styles.right}>
        <ul>
          <li><a href="#">Premium</a></li>
          <li><a href="#">Suporte</a></li>
          <li><a href="#">Baixar</a></li>
          <span className={styles.divider}>|</span>
          <li><a href="#">Instalar Aplicativo</a></li>
          <li><a href="#">Inscrever-se</a></li>
          <li><a href="#" className={styles.btn_login}>Entrar</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header