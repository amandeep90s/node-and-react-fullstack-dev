import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const navItems = () =>
    user ? (
      <>
        <li>
          <Link to='/surveys'>Dashboard</Link>
        </li>
        <li>
          <Link to='/surveys/new'>Create Survey</Link>
        </li>
        <li>
          <Link to='/auth/logout'>Logout</Link>
        </li>
      </>
    ) : (
      <li>
        <a href='/auth/google'>Login with Google</a>
      </li>
    );

  return (
    <nav>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col s12'>
            <div className='nav-wrapper'>
              <Link to='/' className='brand-logo'>
                Emaily
              </Link>
              <a
                href='/'
                onClick={(e) => e.preventDefault()}
                data-target='mobile-demo'
                className='sidenav-trigger'
              >
                <i className='material-icons'>menu</i>
              </a>
              <ul id='dropdown1' className='right hide-on-med-and-down'>
                {navItems()}
              </ul>

              <ul className='sidenav' id='mobile-demo'>
                {navItems()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
