import './App.scss';
import { People } from './components/Loader/People/People';

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
          <a className="navbar-item" href="#/">
            Home
          </a>

          <a
            className="navbar-item has-background-grey-lighter"
            href="#/people"
          >
            People
          </a>
        </div>
      </div>
    </nav>

    <main className="section">
      <div className="container">
        <h1 className="title">Home Page</h1>
        <h1 className="title">People Page</h1>
        <h1 className="title">Page not found</h1>

        <div className="block">
          <div className="box table-container">
            <People />
          </div>
        </div>
      </div>
    </main>
  </div>
);
