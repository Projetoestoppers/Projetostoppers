import { Link } from 'react-router-dom'
import styles from "../../components/Header/Headersupport.module.css";
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
        <nav>
          <ul>
            <li><a href="/premium">Premium</a></li>
            <li><a href="/download">Instalar Aplicativo</a></li>
          </ul>
        </nav>
      </div>
      {/* DIREITA: ações de conta */}
      <nav className={styles.right}>
        <ul>
          <li><a href="signup">Inscrever-se</a></li>
          <li><a href="login" className={styles.btn_login}>Entrar</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header