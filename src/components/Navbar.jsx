import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let theme = document.getElementById("theme");
  const btnDark = useRef();
  const btnLight = useRef();
  const navigate = useNavigate("");

  useEffect(() => {
    let dataTheme = localStorage.getItem("theme");
    if (!dataTheme) {
      dataTheme = "light";
    }
    theme.setAttribute("data-theme", dataTheme);
  });

  const darkMode = () => {
    theme.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    btnLight.current.classList.remove("hidden");
    btnDark.current.classList.add("hidden");
  };

  const lightMode = () => {
    theme.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    btnDark.current.classList.remove("hidden");
    btnLight.current.classList.add("hidden");
  };
  return (
    <div>
      <div className="navbar shadow-md w-full">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => navigate("/")}>
                  <i className="bi bi-house"></i>Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/about")}>
                  <i className="bi bi-file-earmark-person"></i>About
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/skill")}>
                  <i className="bi bi-kanban"></i>skill
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/project")}>
                  <i className="bi bi-kanban"></i>Project
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")}>
                  <i className="bi bi-person-lines-fill"></i>Contact
                </button>
              </li>
            </ul>
          </div>
          <button className="btn btn-ghost dark:text-red-600 normal-case text-xl">
            Yayan Faturrohman
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button onClick={() => navigate("/")}>
                <i className="bi bi-house"></i>Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/about")}>
                <i className="bi bi-file-earmark-person"></i>About
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/skill")}>
                <i className="bi bi-kanban"></i>Skill
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/project")}>
                <i className="bi bi-kanban"></i>Project
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/contact")}>
                <i className="bi bi-person-lines-fill"></i>Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            className="btn font-bold"
            onClick={() => darkMode()}
            ref={btnDark}
          >
            <i className="bi bi-moon-stars-fill"></i>
          </button>
          <button
            className="btn font-bold hidden text-white"
            onClick={() => lightMode()}
            ref={btnLight}
          >
            <i className="bi bi-sun"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
