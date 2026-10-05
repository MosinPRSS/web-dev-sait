import { Outlet } from 'react-router';
import NavigationBar from './Nav';
import Footer from './Footer';
import '../styles/App.css';

export default function Layout() {
    return (
        <>
            <header className="header">
                <NavigationBar />
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
}
