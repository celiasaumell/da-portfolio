import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();

  const [isFullHeight, setFullHeight] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const contentclassname = isFullHeight ? "h-100" : "bg-clear";
  const isHiddenClass = isHidden ? "hidden" : null;
  return (
    <>
      <nav
        className={`${contentclassname} navbar py-0 navbar-dark navbar-expand-xl fixed-top`}
      >
        <div className="container-fluid justify-content-start">
          <Link href="/">
            <a class="navbar-brand d-flex w-50 me-auto py-1">Moises Figueroa</a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
            onClick={() => {
              setFullHeight(!isFullHeight);
              setHidden(!isHidden);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse collapse w-100"
            id="collapsingNavbar3"
          >
            <ul
              className={`${isHiddenClass} navbar-nav w-100 justify-content-center`}
            >
              <li className="nav-item">
                <a
                  className="nav-link py-1"
                  href="https://www.linkedin.com/in/moises--figueroa"
                  target="_blank"
                >
                  <svg
                    xml
                    ns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>{" "}
                  LinkedIn
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link py-1"
                  href="https://github.com/mf11y"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>{" "}
                  GitHub
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link py-1"
                  href="https://public.tableau.com/profile/moises.figueroa#!/"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                  >
                    <path d="M 11.5 2 L 11.5 3.5 L 10 3.5 L 10 4.5 L 11.5 4.5 L 11.5 6 L 12.5 6 L 12.5 4.5 L 14 4.5 L 14 3.5 L 12.5 3.5 L 12.5 2 L 11.5 2 z M 6 4 L 6 6 L 4 6 L 4 7 L 6 7 L 6 9 L 7 9 L 7 7 L 9 7 L 9 6 L 7 6 L 7 4 L 6 4 z M 17 4 L 17 6 L 15 6 L 15 7 L 17 7 L 17 9 L 18 9 L 18 7 L 20 7 L 20 6 L 18 6 L 18 4 L 17 4 z M 11 8 L 11 11 L 8 11 L 8 13 L 11 13 L 11 16 L 13 16 L 13 13 L 16 13 L 16 11 L 13 11 L 13 8 L 11 8 z M 3.5 10 L 3.5 11.5 L 2 11.5 L 2 12.5 L 3.5 12.5 L 3.5 14 L 4.5 14 L 4.5 12.5 L 6 12.5 L 6 11.5 L 4.5 11.5 L 4.5 10 L 3.5 10 z M 19.5 10 L 19.5 11.5 L 18 11.5 L 18 12.5 L 19.5 12.5 L 19.5 14 L 20.5 14 L 20.5 12.5 L 22 12.5 L 22 11.5 L 20.5 11.5 L 20.5 10 L 19.5 10 z M 6 15 L 6 17 L 4 17 L 4 18 L 6 18 L 6 20 L 7 20 L 7 18 L 9 18 L 9 17 L 7 17 L 7 15 L 6 15 z M 17 15 L 17 17 L 15 17 L 15 18 L 17 18 L 17 20 L 18 20 L 18 18 L 20 18 L 20 17 L 18 17 L 18 15 L 17 15 z M 11.5 18 L 11.5 19.5 L 10 19.5 L 10 20.5 L 11.5 20.5 L 11.5 22 L 12.5 22 L 12.5 20.5 L 14 20.5 L 14 19.5 L 12.5 19.5 L 12.5 18 L 11.5 18 z" />
                  </svg>{" "}
                  Tableau
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav ms-auto w-100 justify-content-end main-nav" >
              <li className="nav-item ">
                <Link href="/">
                  <a
                    className={`nav-link px-0 mx-2 py-1 ${
                      router.asPath === "/" ? "active" : null
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio">
                  <a
                    className={`nav-link px-0 mx-2 py-1 ${
                      router.asPath === "/portfolio" ? "active" : null
                    }`}
                  >
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/resume">
                  <a
                    className={`nav-link px-0 mx-2 py-1 ${
                      router.asPath === "/resume" ? "active" : null
                    }`}
                  >
                    Resume
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
