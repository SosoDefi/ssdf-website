import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="inner">
          <a href="index.html" className="logo">
            SosoDefi
          </a>
          <nav className="nav">
            <a href="index.html">Home</a>
            <a href="generic.html">Whitepaper</a>
            <a href="elements.html">Github</a>
          </nav>
          <a href="#navPanel" className="navPanelToggle">
            <span className="fa fa-bars"></span>
          </a>
        </div>
      </header>
      <style jsx>{`
        .header {
          color: #d4e0ef;
          cursor: default;
          height: 3.25em;
          left: 0;
          line-height: 3.25em;
          position: absolute;
          text-align: right;
          top: 4em;
          width: 100%;
          z-index: 10001;
        }

        .header .inner {
          margin: 0 auto;
          position: relative;
        }

        .header .logo {
          color: #ffffff;
          display: inline-block;
          font-weight: 600;
          height: inherit;
          left: 0;
          line-height: inherit;
          margin: 0;
          padding: 0;
          position: absolute;
          top: 0;
          font-size: 1em;
        }

        .header a {
          -moz-transition: color 0.2s ease-in-out;
          -webkit-transition: color 0.2s ease-in-out;
          -ms-transition: color 0.2s ease-in-out;
          transition: color 0.2s ease-in-out;
          display: inline-block;
          padding: 0 0.75em;
          color: inherit;
          text-decoration: none;
          font-size: 0.8em;
        }

        .header a:hover {
          color: #ffffff;
        }

        .header a:last-child {
          padding-right: 0;
        }

        .header a.navPanelToggle {
          display: none;
          text-decoration: none;
          height: 4em;
          width: 4em;
          z-index: 10003;
        }

        .header a.navPanelToggle .fa {
          font-size: 1.25em;
        }

        @media screen and (max-width: 980px) {
          .header a.navPanelToggle {
            display: inline-block;
          }
        }

        @media screen and (max-width: 736px) {
          .header a {
            padding: 0 0.5em;
          }
        }

        @media screen and (max-width: 980px) {
          .header {
            top: 3em;
            height: 44px;
            line-height: 44px;
          }
        }

        @media screen and (max-width: 736px) {
          .header {
            top: 2em;
          }
        }

        @media screen and (max-width: 480px) {
          .header {
            top: 1em;
            min-width: 320px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
