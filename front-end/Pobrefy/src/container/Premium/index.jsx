import styles from "../../components/Header/Headerpremium.module.css";
import { Link } from 'react-router-dom'
import logo from '../../assets/spotifyfavicon.png'

function Header() {
  return (
    <header className={styles.header}>
      {/* ESQUERDA: logo + links de navegação */}
      <div className={styles.left}>
      <Link to="/" className={styles.brand}>
        <img src={logo} alt="pobrefy" className={styles.logo} />
         <span className={styles.brandText}>pobrefy</span>
      </Link>
      </div>
      <nav className={styles.right}>
        <ul>
          <li><a href="#">Planos Premium</a></li> {/* Não é link, alterar como o do spotify original */}
          <li><a href="/suporte">Suporte</a></li>
          <li><a href="/download">Baixar</a></li>
          <span className={styles.divider}>|</span>
          <li><a href="signup">Inscrever-se</a></li>
          <li><a href="login">Entrar</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header