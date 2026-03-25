import { useState } from 'react'
import styles from './SearchBar.module.css'

function SearchBar() {
  const [focused, setFocused] = useState(false)

  return (
    <div className={`${styles.searchBar} ${focused ? styles.focused : ''}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.searchIcon}>
        <circle cx="11" cy="11" r="7" stroke="#b3b3b3" strokeWidth="2"/>
        <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round"/>
      </svg>

      <input
        type="text"
        placeholder="O que você quer ouvir?"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={styles.input}
      />

      <div className={styles.divider} />

      <button className={styles.browseBtn} title="Navegar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="9" height="9" rx="2" fill="#b3b3b3"/>
          <rect x="13" y="3" width="9" height="9" rx="2" fill="#b3b3b3"/>
          <rect x="2" y="14" width="9" height="9" rx="2" fill="#b3b3b3"/>
          <rect x="13" y="14" width="9" height="9" rx="2" fill="#b3b3b3"/>
        </svg>
      </button>
    </div>
  )
}

export default SearchBar