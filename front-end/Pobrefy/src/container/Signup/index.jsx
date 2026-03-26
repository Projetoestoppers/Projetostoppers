import { Link } from 'react-router-dom'
import styles from "../../components/Body/signup.module.css";
import logo from '../../assets/spotifyfavicon.png'

function Signup() {
  return (
        <div className={styles.login}>
          <div className={styles.left}>
            <Link to="/"> 
              <img src={logo} alt="pobrefy" className={styles.logo} />
            </Link>
          </div>
    <div className={styles.container}>
      <h1 className='title'>
      Se inscreva <br/>
      e comece <br/>
      a curtir
    </h1>
  </div>
  </div> 
  );
}
export default Signup