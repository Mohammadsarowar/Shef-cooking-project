import { Link } from "react-router-dom";
import { AuthContext } from "../Auth-Provider/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home pages</a>
              </li>
              <li tabIndex={0}>
                <Link to="/blog" className="justify-between">
                  Blog
                </Link>
                <ul className="p-2">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/shop">Shef</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Cookiteer
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/shop">Shef</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
                {user.photoURL ? (
                  <div className=" rounded-full">
                    <img className="" src={user.photoURL}></img>
                  </div>
                ) : (
                  <div className="avatar">
                    <div className="m-1 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        className=""
                        src="https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=1024x1024&w=is&k=20&c=BPwoWgCpnJwha8xmMWUzHu0-Z762901IzRetXBanHjU="
                      />
                    </div>
                  </div>
                )}
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
               { user.displayName? <li>
                  <a className="justify-between">
                    {user.displayName}
                    <span className="badge">New</span>
                  </a>
                </li> : <li><a>Profile</a> </li>}
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <button onClick={LogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            {" "}
            <Link to="/singUp" className="btn">
              SignUp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
