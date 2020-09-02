import React from 'react';

export default function Banner() {
  return (
    <section id="banner">
      <h1>SSDF</h1>
      <p>
        SSDF是SOSODEFI平台的通证，平台通过SSDF实现defi资产的流通和使之发生经济作用、用户通过SSDF实现defi资产的抵押借贷理财等功能，同时SSDF也将作为权益类通证带来极高的价值。
      </p>
      <style jsx>{`
        #banner {
          padding: 12em 0 10em 0;
          background-image: url('/images/banner2.jpg');
          background-size: cover;
          background-position: top;
          background-attachment: fixed;
          background-repeat: no-repeat;
          text-align: center;
          border-top: 0.5em solid #5385c1;
        }

        #banner h1 {
          font-size: 3.5em;
          font-weight: 100;
          color: #fff;
          line-height: 1em;
          margin: 0 0 0.5em 0;
          padding: 0;
        }

        #banner p {
          font-size: 1em;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 1.75em;
          line-height: 1.5;
        }

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
          #banner {
            background-attachment: scroll;
          }
        }

        @media screen and (max-width: 1280px) {
          #banner {
            padding: 10em 2em 8em 2em;
          }
        }

        @media screen and (max-width: 980px) {
          #banner {
            background-attachment: scroll;
          }
        }

        @media screen and (max-width: 736px) {
          #banner {
            padding: 8em 1.5em 6em 1.5em;
          }

          #banner h1 {
            font-size: 2.5em;
          }

          #banner p {
            font-size: 0.9em;
          }
        }

        @media screen and (max-width: 480px) {
          #banner {
            padding: 6em 1.5em 4em 1.5em;
          }
        }
      `}</style>
    </section>
  );
}
