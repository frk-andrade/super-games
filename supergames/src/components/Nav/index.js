import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <img src='../images/logo.svg' alt='Logo'></img>
      <button>
        Login
      </button>
      <img className='search' src='../images/Icone.svg' alt='Buscar'></img>
    </nav>
  )
};

export default Nav;