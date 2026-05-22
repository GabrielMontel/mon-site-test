import { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0)

  // Fausses données pour tester l'affichage dynamique
  const projets = [
    { id: 1, name: "Site Portfolio", status: "En cours", tech: "React / Vite" },
    { id: 2, name: "Application Web", status: "Terminé", tech: "JavaScript" },
    { id: 3, name: "Test Déploiement Vercel", status: "En ligne", tech: "React" }
  ]

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>LAB / TEST LAB</h1>
        <p style={styles.subtitle}>Statut du serveur : <span style={styles.badgeOnline}>En ligne</span></p>
      </header>

      <hr style={styles.divider} />

      {/* Section Compteur Interactif */}
      <section style={styles.section}>
        <h2>Section Interactive</h2>
        <p>Clique sur le bouton pour tester l'état (State) de React :</p>
        <button style={styles.button} onClick={() => setLikes(likes + 1)}>
          ✨ Expérience + {likes}
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 — Mode Test React v18</p>
      </footer>
    </div>
  )
}

// Styles en ligne (CSS-in-JS) pour éviter d'avoir à toucher au fichier CSS pour l'instant
const styles = {
  container: {
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: 'system-ui, sans-serif',
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    letterSpacing: '2px',
    margin: '0 0 10px 0',
  },
  subtitle: {
    color: '#888',
    fontSize: '1rem',
  },
  badgeOnline: {
    color: '#00ff66',
    fontWeight: 'bold',
  },
  divider: {
    borderColor: '#222',
    margin: '30px 0',
  },
  section: {
    marginBottom: '40px',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'transform 0.1s ease',
    marginTop: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginTop: '15px',
  },
  card: {
    backgroundColor: '#141414',
    border: '1px solid #222',
    borderRadius: '6px',
    padding: '20px',
  },
  cardTitle: {
    margin: '0 0 10px 0',
    fontSize: '1.2rem',
  },
  cardTech: {
    color: '#666',
    fontSize: '0.9rem',
    margin: '0 0 15px 0',
  },
  badge: {
    fontSize: '0.8rem',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: '500',
  },
  footer: {
    textAlign: 'center',
    marginTop: '60px',
    color: '#444',
    fontSize: '0.85rem',
  }
}

export default App