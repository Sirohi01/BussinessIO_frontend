import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import AppRoutes from './AppRoutes'
import ErrorBoundary from './components/ErrorBoundary'
function App() {
  const [user, setUser] = useState(null)
  const handleLogin = () => setUser({ id: 1, role: 'owner' });
  const handleLogout = () => setUser(null);
  return (
    <Router>
      <ErrorBoundary>
        <AppRoutes user={user} handleLogin={handleLogin} handleLogout={handleLogout} />
      </ErrorBoundary>
    </Router>
  )
}
export default App