import { Link } from "react-router-dom";

const NavBar = () => {

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/alljewelry">All jewelry</Link>
      </li>
      <li>
        <Link to="/myjewelry">My Jewelry</Link>
      </li>
      <li>
        <Link to="/addjewelry">Add jewelry</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="navbar py-3 md:px-16 z-10 bg-base-100 bg-opacity-20 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm font-body font-medium dropdown-content mt-3 p-2 tracking-widest shadow bg-base-100 text-base-content bg-opacity-20 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="font-display font-bold text-primary text-2xl md:text-3xl normal-case">Dazzly</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu tracking-widest text-base-content font-medium menu-horizontal font-body px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="py-2 px-5 rounded-md text-sm font-semibold text-base-200  bg-accent  border-0  tracking-wider">Log in</button>
      </div>
    </div>
  );
};

export default NavBar;
