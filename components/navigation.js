import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();
    
  return (
    <>
      <nav
        className={`navbar py-0 navbar-dark navbar-expand-xl`}
      >
        <div className="container-fluid justify-content-start">
          <Link href="/">
            <a className="navbar-brand d-flex w-50 me-auto py-1">
              Moises Figueroa
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse collapse w-100"
            id="collapsingNavbar3"
          >
            <ul
              className={`navbar-nav ms-auto w-100 justify-content-end main-nav`}
            >
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
              <li className="nav-item pt-2 smaller-pipes" id="#pipes">|</li>
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
              <li className="nav-item pt-2 smaller-pipes" id="#pipes">|</li>
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
