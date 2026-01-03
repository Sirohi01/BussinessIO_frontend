import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Issues from './pages/Issues';
import Copilot from './pages/Copilot';
import Sales from './pages/Sales';
import Expenses from './pages/Expenses';
import Team from './pages/Team';
import Alerts from './pages/Alerts';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

const AppRoutes = ({ user, handleLogin, handleLogout }) => {
    return (
        <Routes>
            <Route
                path="/login"
                element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
            />

            <Route path="/*" element={
                user ? (
                    <Layout onLogout={handleLogout}>
                        <Routes>
                            <Route index element={<Navigate to="/dashboard" />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="analytics" element={<Analytics />} />
                            <Route path="issues" element={<Issues />} />
                            <Route path="copilot" element={<Copilot />} />
                            <Route path="sales" element={<Sales />} />
                            <Route path="expenses" element={<Expenses />} />
                            <Route path="team" element={<Team />} />
                            <Route path="alerts" element={<Alerts />} />
                            <Route path="reports" element={<Reports />} />
                            <Route path="settings" element={<Settings />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Layout>
                ) : (
                    <Navigate to="/login" />
                )
            } />
        </Routes>
    );
};

export default AppRoutes;
