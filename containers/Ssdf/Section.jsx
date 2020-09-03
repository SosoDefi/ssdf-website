import React from 'react';

import { useLanguage } from '../../shared/providers/Language';

const Section = {
  one: () => {
    const { messages, lang } = useLanguage();
    const section = messages[lang].ssdf.sections[0];

    return (
      <section id="two" className="wrapper style1 special">
        <div className="inner">
          <header>
            <h2>{section.title}</h2>
            <p>{section.desc}</p>
          </header>
          <div className="flex flex-4">
            <div className="box person">
              <a className="icon fa-buysellads"></a>
              <h3>{section.content[0]}</h3>
            </div>
            <div className="box person">
              <a className="icon fa-cc-diners-club"></a>
              <h3>{section.content[1]}</h3>
            </div>
            <div className="box person">
              <a className="icon fa-deviantart"></a>
              <h3>{section.content[2]}</h3>
            </div>
            <div className="box person">
              <a className="icon fa-sitemap"></a>
              <h3>{section.content[3]}</h3>
            </div>
            <style jsx>{`
              a {
                color: white;
                font-size: 4em;
              }
            `}</style>
          </div>
        </div>
      </section>
    );
  },
  two: () => {
    const { messages, lang } = useLanguage();
    const section = messages[lang].ssdf.sections[1];

    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>{section.title}</h2>
            <p>{section.desc}</p>
          </header>
          <div className="flex flex-3">
            <article>
              <p>{section.content[0]}</p>
            </article>
            <article>
              <p>{section.content[1]}</p>
            </article>
            <article>
              <p>{section.content[2]}</p>
            </article>
          </div>
        </div>
      </section>
    );
  },
  three: () => {
    const { messages, lang } = useLanguage();
    const section = messages[lang].ssdf.sections[2];

    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>{section.title}</h2>
          </header>
          <div className="flex flex-3">
            <article>
              <p>{section.content[0]}</p>
            </article>
            <article>
              <p>{section.content[1]}</p>
            </article>
            <article>
              <p>{section.content[2]}</p>
            </article>
          </div>
        </div>
      </section>
    );
  },
  four: () => {
    const { messages, lang } = useLanguage();
    const section = messages[lang].ssdf.sections[3];

    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>{section.title}</h2>
            <p>{section.desc}</p>
          </header>
          <div className="flex flex-3">
            <article>
              <p>{section.content[0]}</p>
            </article>
            <article>
              <p>{section.content[1]}</p>
            </article>
            <article>
              <p>{section.content[2]}</p>
            </article>
          </div>
        </div>
      </section>
    );
  },
};

export default Section;
