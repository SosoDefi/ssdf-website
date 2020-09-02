import React from 'react';

const Section = {
  one: () => {
    return (
      <section id="two" className="wrapper style1 special">
        <div className="inner">
          <header>
            <h2>SosoDefi Coin (SSDF)</h2>
            <p>总量：10亿</p>
          </header>
          <div className="flex flex-4">
            <div className="box person">
              <a className="icon fa-buysellads"></a>
              <h3>10%用于销售，资金支撑项目运营和开发</h3>
            </div>
            <div className="box person">
              <a className="icon fa-cc-diners-club"></a>
              <h3>65%给到矿工</h3>
            </div>
            <div className="box person">
              <a className="icon fa-deviantart"></a>
              <h3>15%给到技术社区</h3>
            </div>
            <div className="box person">
              <a className="icon fa-sitemap"></a>
              <h3>10%给到sDAO组织</h3>
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
    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>SSDF如何流通</h2>
            <p>
              简单说就是SOSODeFi使用了智能投顾算法，在其他DeFi平台使用时可以对接SSDF的插槽模式，直接接入智能投顾算法，或者直接使用SOSODeFi更省手续费和VM网络消耗。
            </p>
          </header>
          <div className="flex flex-3">
            <article>
              <p>
                持有SSDF的人会有sTokens，可以参与竞拍获得铸币权用来抵扣Gas消耗。
              </p>
            </article>
            <article>
              <p>
                在SSDF平台上违反智能合约策略、闪兑攻击都会在sDao的治理下受到惩罚，惩罚的CDP账户SSDF会被直接摧毁，以此保证SSDF通缩性。
              </p>
            </article>
            <article>
              <p>
                用户未开启智能防清仓，而被合约清算之后，被清算的资产80%用于摧毁，20%用户奖励开启智能防清仓的CDP账户，以此增加SSDF的流通和使用率。
              </p>
            </article>
          </div>
        </div>
      </section>
    );
  },
  three: () => {
    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>SSDF盈利模式</h2>
          </header>
          <div className="flex flex-3">
            <article>
              <p>
                SSDF是SOSODeFi在VM上的原生代币，SSDF的创作是在主网启动时铸造，并存储在合约池内，作为奖励分发给SSDF开发团队、CDP用户、sDao组织，简单说就是流动性挖矿会奖励给每个参与在SSDF生态中的CDP用户。
              </p>
            </article>
            <article>
              <p>
                SSDF中每增加一笔流动性（质押、期权、借贷），生成对应的sTokens后，合约内就会收到一些固定的稳定费放入奖励池中，流动性产生的稳定费将会根据智能合约分比例返回给当前持所有的CDP账户、开发团队、sDao组织。
              </p>
            </article>
            <article>
              <p>
                SSDF在流动性达到一定锁仓后，智能合约会自动触发原生代币竞拍系统，任何拥有sTokens的CDP账户都可以参与竞拍（也可以自主加入sDao组织，赢得铸币权后会按sTokens分配原生代币），赢得最终的铸币权，得到铸币权的用户可以使用铸造的原生代币作为矿工费（gas
                fee）来交易，竞拍产生的稳定费将放入奖励池中。
              </p>
            </article>
          </div>
        </div>
      </section>
    );
  },
  four: () => {
    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>联合挖矿和sDAO激励</h2>
            <p>
              SSDF流动性挖矿为「联合挖矿」形式，所有CDP用户参与挖矿的用户都可以更大化增加收益。
            </p>
          </header>
          <div className="flex flex-3">
            <article>
              <p>
                另一种联合挖矿形式是用户参加已经成立的sDao组织，共同参与平台的流动性挖矿，流动性挖矿并不会根据单一的CDP头寸和sToken持有量去产生不同的权重，同样会考量每个用户时间参与度、信用度、借贷抵押、sDAO模式参与治理等一系列维度，让sToken排名并不会直接影响每个人的挖矿权益，SSDF为每个人都度量了一份适合的利率策略，在智能合约的模式下每个人都可以公平的参与流动性挖矿。最终产生的收益由以上属性分别分发给当前参与sDao的CDP账户。
              </p>
            </article>
            <article>
              <p>
                流动性联合挖矿使用了PIPELINE模型算法，根据当前最优的资产组合联合打包出Bags，然后供给用户选择，用户选择不同的联合挖矿产品，会得到不同的TOKEN奖励，对于奖励的程度会根据动态平衡算法调控。
              </p>
            </article>
            <article>
              <p>
                SSDF使用动态利率模型，每增加一定的CDP会提升奖励，初始合约每个区块奖励20个SSDF，随着LP的增加单位区块奖励的SSDF增加20%～80%浮动奖励，以当前20个为例，未来可能出现单位区块奖励数量：24
                SSDF～36 SSDF，流动性挖矿没有上限，流动性越强CDP账户奖励越高。
              </p>
            </article>
          </div>
        </div>
      </section>
    );
  },
};

export default Section;
