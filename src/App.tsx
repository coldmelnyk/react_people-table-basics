import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { PeoplePage } from './pages/PeoplePage';
import classNames from 'classnames';

const isActiveNav = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', {
    'has-background-grey-lighter': isActive,
  });
};

export const App = () => (
  <div data-cy="app">
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink className={isActiveNav} to="/">
            Home
          </NavLink>

          <NavLink className={isActiveNav} to="/people">
            People
          </NavLink>
        </div>
      </div>
    </nav>

    <main className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace={true} />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:personId" element={<PeoplePage />} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </main>
  </div>
);
