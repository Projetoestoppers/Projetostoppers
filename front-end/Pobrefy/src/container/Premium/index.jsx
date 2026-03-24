import styles from "../../components/Header/Headerpremium.module.css";
import { Link } from 'react-router-dom'
import logo from '../../assets/spotifyfavicon.png'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
      <Link to="/">
        <img src={logo} alt="pobrefy" className={styles.logo} />
      </Link>
      </div>
      <nav className={styles.right}>
        <ul>
          <li><a href="#">Planos Premium</a></li> {/* Não é link, alterar como o do spotify original */}
          <li><a href="#">Suporte</a></li>
          <li><a href="#">Baixar</a></li>
          <span className={styles.divider}>|</span>
          <li><a href="#">Inscrever-se</a></li>
          <li><a href="#">Entrar</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header