import { Link } from 'react-router-dom'
import styles from "./Header.module.css";
import logo from '../../assets/spotifyfavicon.png'
import homeIcon from '../../assets/homeicon.png'
import SearchBar from '../Header/searchbar.jsx'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <img src={logo} alt="pobrefy" className={styles.logo} />
        </Link>
        <button className={styles.btn_home}>
          <img src={homeIcon} alt="home" />
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', paddingLeft: '16px' }}>
        <SearchBar />
      </div>

      <nav className={styles.right}>
        <ul>
          <li><a href="/premium">Premium</a></li>
          <li><a href="/suporte">Suporte</a></li>
          <li><a href="/download">Baixar</a></li>
          <span className={styles.divider}>|</span>
          <li><a href="/download">Instalar Aplicativo</a></li>
          <li><a href="signup">Inscrever-se</a></li>
          <li><a href="login" className={styles.btn_login}>Entrar</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header