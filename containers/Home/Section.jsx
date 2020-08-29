import React from 'react';

const Section = {
  one: () => {
    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>什么是SosoDefi</h2>
          </header>
          <div className="flex flex-3">
            <article>
              <header>
                <h3>SSDF Bags</h3>
              </header>
              <p>
                SSDF
                Bags由两部分组成，其中一个是预言机和SSRoi模型、PIPELINE、AMM等智能算法匹配之后生成的最优资产比例组合打包之后形成的SSDF
                Bags
                <br />
                SosoDefi支持期权模型，因此另一种SSDF
                Bags是由SSDF-OPM模型和Chainlink预 言机经过算法匹配而打包产生
              </p>
            </article>
            <article>
              <header>
                <h3>Auto Rates & Rebalancing</h3>
              </header>
              <p>
                Auto
                Rates是自动调节，主要是负责协议层智能合约的利率优化自动调节、更新的实现
                <br />
                Rebalancing是稳定利率模型的最后一个也是最重要的约束是利率再平衡。这是为了解决市场条件变化或SosoDefi
                Engine Pool中Token成本增加的问题。
              </p>
            </article>
            <article>
              <header>
                <h3>sTokens & sDao</h3>
              </header>
              <p>
                sTokens是每做一次LP会生成一个对应的sTokens，sTokens可以在平台做二次流通，比如垮链挖矿、拍卖、质押、闪兑、期权、铸币等
                <br />
                sDao是每做一次LP会生成一个对应的sDao，主要功能是投票权（创建自主sDao组织），铸币权，更新汇率模型、收费结构、储备池金额回报变动、更新惩罚溢价率模式、更新或提出新的质押策略等
              </p>
            </article>
          </div>
        </div>
      </section>
    );
  },
  two: () => {
    return (
      <section id="two" className="wrapper style1 special">
        <div className="inner">
          <header>
            <h2>产品功能介绍</h2>
          </header>
          <div className="flex flex-4">
            <div className="box person">
              <div className="image round">
                <img src="/images/pic03.jpg" alt="Person 1" />
              </div>
              <h3>存款挖矿</h3>
            </div>
            <div className="box person">
              <div className="image round">
                <img src="/images/pic04.jpg" alt="Person 2" />
              </div>
              <h3>闪电借贷</h3>
            </div>
            <div className="box person">
              <div className="image round">
                <img src="/images/pic05.jpg" alt="Person 3" />
              </div>
              <h3>跨链流动挖矿</h3>
            </div>
            <div className="box person">
              <div className="image round">
                <img src="/images/pic06.jpg" alt="Person 4" />
              </div>
              <h3>预言机期权</h3>
            </div>
          </div>
        </div>
      </section>
    );
  },
  three: () => {
    return (
      <section id="three" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>合作伙伴</h2>
          </header>
          <div className="align-center">
            <img
              style={{ width: '100%', maxWidth: 722 }}
              src="/images/partner.png"
            />
          </div>
        </div>
      </section>
    );
  },
  four: () => {
    return (
      <section id="three" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>Roadmap</h2>
          </header>
          <div className="align-center">
            <img
              style={{ width: '100%', maxWidth: 926 }}
              src="/images/roadmap.png"
            />
          </div>
        </div>
      </section>
    );
  },
};

export default Section;
