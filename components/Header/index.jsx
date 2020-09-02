import React from 'react';
import Link from 'next/link';

import { useViewport } from '../../shared/providers/Viewport';

const Header = ({ subpage = false }) => {
  const { width } = useViewport();

  const config = [
    {
      href: '/',
      child: 'Home',
    },
    {
      href: '/ssdf',
      child: 'SSDF',
    },
    {
      href: '/',
      child: 'Whitepaper',
    },
    {
      href: '/',
      child: 'Github',
    },
  ];

  if (width <= 980) {
  }

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleClick = () => {
      setVisible(false);
    };

    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <header
        id="header"
        style={
          subpage
            ? {
                background: '#5385c1',
                top: 0,
                height: 44,
                lineHeight: '44px',
                position: 'fixed',
              }
            : undefined
        }
      >
        <div className="inner">
          <a href="index.html" className="logo">
            SosoDefi
          </a>
          <nav id="nav">
            {config.map(({ href, child }, index) => (
              <Link key={index} href={href}>
                <a>{child}</a>
              </Link>
            ))}
          </nav>
          <a className="navPanelToggle" onClick={() => setVisible(true)}>
            <span className="fa fa-bars"></span>
          </a>
        </div>
      </header>
      <nav id="navPanel" className={visible && 'visible'}>
        {config.map(({ href, child }, index) => (
          <a key={index} href={href}>
            {child}
          </a>
        ))}
        <a className="close" />
      </nav>
      {/* header */}
      <style jsx>{`
        #header {
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

        #header .inner {
          margin: 0 auto;
          position: relative;
        }

        #header .logo {
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

        #header a {
          transition: color 0.2s ease-in-out;
          display: inline-block;
          padding: 0 0.75em;
          color: inherit;
          text-decoration: none;
          font-size: 0.8em;
        }

        #header a:hover {
          color: #ffffff;
        }

        #header a:last-child {
          padding-right: 0;
        }

        #header a.navPanelToggle {
          display: none;
          text-decoration: none;
          height: 4em;
          width: 4em;
          z-index: 10003;
        }

        #header a.navPanelToggle .fa {
          font-size: 1.25em;
        }

        @media screen and (max-width: 980px) {
          #header a.navPanelToggle {
            display: inline-block;
          }
        }

        @media screen and (max-width: 736px) {
          #header a {
            padding: 0 0.5em;
          }
        }

        @media screen and (max-width: 980px) {
          #header {
            top: 3em;
            height: 44px;
            line-height: 44px;
          }
        }

        @media screen and (max-width: 736px) {
          #header {
            top: 2em;
          }
        }

        @media screen and (max-width: 480px) {
          #header {
            top: 1em;
            min-width: 320px;
          }
        }
      `}</style>
      {/* nav */}
      <style jsx>{`
        @media screen and (max-width: 980px) {
          #nav {
            display: none;
          }
        }

        #navPanel {
          transform: translatex(20em);
          transition: transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
          visibility: hidden;
          overflow-y: auto;
          position: fixed;
          right: 0;
          top: 0;
          background: #5385c1;
          color: #d4e0ef;
          height: 100%;
          max-width: 80%;
          width: 20em;
          padding: 0.5em 1.25em;
          z-index: 10003;
        }

        #navPanel.visible {
          transform: translatex(0);
          box-shadow: 0 0 1.5em 0 rgba(0, 0, 0, 0.2);
          visibility: visible;
        }

        #navPanel a:not(.close) {
          border-top: solid 1px rgba(255, 255, 255, 0.25);
          color: #d4e0ef;
          font-weight: 600;
          display: block;
          padding: 0.75em 0;
          text-decoration: none;
          font-weight: 300;
        }

        #navPanel a:not(.close):first-child {
          border: none;
        }

        #navPanel .close {
          text-decoration: none;
          transition: color 0.2s ease-in-out;
          border: 0;
          color: #d4e0ef;
          cursor: pointer;
          display: block;
          height: 4em;
          padding-right: 1.25em;
          position: absolute;
          right: 0;
          text-align: right;
          top: 0;
          vertical-align: middle;
          width: 5em;
        }

        #navPanel .close:before {
          font-family: FontAwesome;
          font-style: normal;
          font-weight: normal;
          text-transform: none !important;
          content: '\f00d';
          width: 3em;
          height: 3em;
          line-height: 3em;
          display: block;
          position: absolute;
          right: 0;
          top: 0;
          text-align: center;
        }

        #navPanel .close:hover {
          color: inherit;
        }
      `}</style>
    </>
  );
};

export default Header;
