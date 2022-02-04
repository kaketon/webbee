function Header() {
    return (
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Make Anime List  </h1>
          </div>
        </div>
      </header>
    );
  }
  
  function Image(props) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.src} alt="cute dog!" />
          </figure>
        </div>
      </div>
    );
  }
  
  function Gallery(props) {
    const { urls } = props;
    return (
      <div className="columns is-vcentered is-multiline">
        {urls.map((url) => {
          return (
            <div key={url} className="column is-3">
              <Image src={url} />
            </div>
          );
        })}
        </div>
    );
  }
  
  function Main() {
    const urls = [
      "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
    ];
        return (
         <main>
        <section className="section">
          <div className="container">
            <ul>
                <li><p><strong>5420074 筧 直人 日本大学文理学部情報科学科 Webプログラミングの演習課題
                </strong></p></li>
                <br></br>
                <li><p><strong>はじめに</strong></p>
                <p>今回はアニメのリストを作るAPIを紹介します。自分の好きなアニメのリストを作ることができます。そこで私は今まで200種類以上見てきた中でお勧めのアニメを5つ紹介します。アニメに詳しい方ならば知っているかもしれませんね。面白いと思っているものが出たらぜひ一人で騒いでください。知らなかったという方は是非とも見ていただければ一緒に騒げると思います。ぜひご覧ください。
                </p></li>
                <br></br>
                <li><p>アニメってどうやって見ればいいの？という方もいるかもしれません。世の中にはアニメを無料で見ることが出来るというサイトがあったりしますが、基本それは違法サイトですのでお勧めはしません。アニメ制作会社にも還元されませんのでぜひ「dアニメストア」や「U-NEXT」など有名な有料のサブスクを使用してみてください。初月無料で1ヶ月以内に解約すればお金はかからないなどのお試しがあったりしますので軽い気持ちで試すのもありだと思います。下に有名なサブスクサイトのURLを貼っておきます。
                </p></li>
                <br></br>
                <li><p><strong>dアニメストア(初月無料：毎月440円、アニメだけが見たいという方にお勧め)</strong></p>
                </li>
                <a href="https://anime.dmkt-sp.jp/animestore/tp_nm">dアニメストア</a>
                <br></br>
                <br></br><li><p><strong>U-NEXT(31日間無料：毎月2189円だが毎月ポイント1200円分の付与、映画、ドラマ、韓流、アニメ、漫画と種類が豊富)</strong></p>
                </li>
                <a href="https://video.unext.jp">U-NEXT</a>
                <br></br>
                <br></br><li><p><strong>hulu(2週間無料：毎月1026円、映画、日本ドラマ、海外ドラマ、アニメ、バラエティが見放題)</strong></p>
                </li>
                <a href="https://www.hulu.jp">hulu</a>
                <br></br>
                <br></br><li><p><strong>Amazon prime video(30日間無料：毎月500円、映画、ドラマ、韓流、アニメと種類が豊富)</strong></p>
                </li>
                <a href="https://www.amazon.co.jp/Prime-Video/b?node=3535604051">Amazon prime video</a>
                <br></br>
                <br></br><li><p><strong>NETFLIX(無料体験はなし：毎月990円~1980円と３段階のプランあり、映画、TVドラマ、NETFLIXオリジナルのドラマ、アニメと種類豊富)</strong></p>
                </li>
                <a href="https://www.netflix.com/jp/">NETFLIX</a>
                <br></br>
                <br></br><li><p>さて、ここまでアニメを見るための下準備を紹介してきましたがここからは私がお勧めするアニメの紹介です。たくさんお勧めはあるので絞って紹介することが心苦しいですが、ジャンルごとに紹介していこうと思います。どんなアニメか知りやすいように各アニメごとにYouTubeにあるPVのURLを貼っておきます。
                </p></li>
                <br></br>
                <li><p><strong>無職転生</strong></p>
                <p>まず、ファンタジー作品から「無職転生」です。この作品は主人公である引きこもりニートがある理由から死んでしまいます。そして、魔法と剣の世界に赤ん坊として転生していることに気付き、前世では失敗しかなかったから今世は本気で生きてみせると努力をして魔法と剣の世界を生き抜いていく作品です。かなり作画に力を入れており、映像は綺麗ですし音楽に対してもかなりの本気具合です。ほとんど毎回アニメが始まる時のオープニング曲が変わります。シリーズ累計販売部数が最近1000万部を突破したとしてもかなり面白いということが伝わると思います。ぜひ見てみてください。
                </p></li>
                <a href="https://youtu.be/Qx01pn9l-6g">無職転生PV</a>
                <br></br>
                <li><br></br><p><strong>Re:ゼロから始める異世界生活</strong></p>
                <p>同じくファンタジー作品ですが、詳しくない方でも聞いたことがあるかもしれませんね。「Re:ゼロから始める異世界生活」です。この作品も主人公が異世界に迷い込むジャンルではありますが根本が違い、「無職転生」では転生なのがこのアニメ通称「リゼロ」では転移をして迷い込みます。その転移の仕方も謎に包まれており、ある理由から引きこもりになってしまった高校生男子がコンビニで買い物をして帰る時瞬きをしたら目の前には異世界が広がっていました。主人公は戸惑いますが、異世界来たということはいわゆるチート能力があるんじゃないかと考えますが、身体能力は特段向上してる感じもなければ魔法も別に使えませんし、特に超能力のようなものが使えるようになったわけでもありませんでした。そんな主人公には「死に戻り」という力だけが与えられており、死んだときにセーブポイントのようなある時点に生き返るという能力でした。この能力はもちろん死なないと発動しないので主人公は何度も死んでしまう運命にあります。第１話は１時間ありますがそれを全部見たときにはもう手が止まらなくなっていることでしょう。
                </p></li>
                <a href="https://youtu.be/vFfXjuVA1Jk">制作決定のRe:ゼロから始める異世界生活PV</a>
                <br></br><a href="https://youtu.be/Bwq7HxrHiZU">新編集版PV</a>
                <li><br></br><p><strong>デート・ア・ライブ</strong></p>
                <p>続いてラブコメ作品ですが、「デート・ア・ライブ(DATE A LIVE)」です。精霊という謎に包まれた存在は空間震という呼ばれる凄惨な災害を伴って出現するのですが、そんな精霊は人知を超えた災害さえも比較にならない力を有しています。それまで普通の高校生活を送っていた主人公、五河士道は妹を探していたとき空間震の中心でひとりの美しい少女に出会います。望まぬ争いを強いられ、欲さぬ破壊を繰り返す彼女こそ、精霊と呼ばれる存在でした。彼女を苦しみから解放する方法、それは、武力をもって殲滅するか、もしくはデートしてデレさせること！という神作品です。なぜデレさせるのかという理由は主人公の持つ能力が鍵になっています。もうすぐ４期もやるという超人気作品です。ぜひご覧ください。
                </p></li>
                <a href="https://youtu.be/c4xH8yzY3Pw">デート・ア・ライブPV</a>
                <br></br>
                <li><br></br><p><strong>ようこそ実力至上主義の教室へ</strong></p>
                <p>頭脳戦系の主人公最強作品から「ようこそ実力至上主義の教室へ」です。この世界の日本には進学率・就職率１００％と言われる全国屈指の進学校・東京都高度育成高等学校があり、そこに入学した主人公の綾小路清隆。その学校は外界との関わりを一切遮断する代わりに高校自体が一つの町のようになっており、あらゆるモノをポイントで買うことができます。そんなポイントを入学式で1ポイント=1円のポイントを10万ポイントもらった主人公のいるDクラスの生徒たち。湯水の如く消費する者もいれば節約して使う者もいました。そして、担任は超放任主義で居眠り・私語・欠席何をしても注意はされない環境で問題児の集まるDクラスは少数を除いてほとんどまともに授業を受けていませんでした。翌月になりポイントがもらえず慌てる生徒たち。そして先生は、この学校は実力で全てを決める、よってまともに授業も受けないようなクズに与えるポイントは０だ。と、この学校のシステムを初めてここで理解します。本作品は才能を隠している主人公が暗躍し無双するアニメです。この作品は見た方が早いかもしれないですね！
                </p></li>
                <a href="https://youtu.be/iYsx6w5PNno">ようこそ実力至上主義の教室へPV</a>
                <br></br>
                <li><br></br><p><strong>かぐや様は告らせたい　〜天才たちの恋愛頭脳戦〜</strong></p>
                <p>家柄も人柄も良い将来を期待された秀才が集う秀知院学園。その生徒会の副会長・四宮かぐやと会長・白銀御行は互いに惹かれているはずなのに何もないまま半年が経過してしまいます。プライドが高く素直になれない2人は、面倒臭いことに“如何に相手に告白させるか”ばかりを考えるようになってしまい、告白した方が負けという戦いが始まります。このアニメはラブコメとしてもかなり面白いのですが、日常のギャグとしてもかなり面白いです。笑いなし、涙なしでは見られないそんなアニメです。オープニング曲も鈴木雅之さんが歌っており、かなり珍しいと思います。しかし、非常にマッチしておりとてもいい曲になっています。ぜひご覧ください。
                </p></li>
                <a href="https://youtu.be/5Jxw_ZMn-10">かぐや様は告らせたい　〜天才たちの恋愛頭脳戦〜PV</a>
                <br></br>
                <li><br></br><p><strong>さいごに</strong></p>
                <p>以上ここまでどうでしたでしょうか？面白いアニメばかりなのでぜひご覧いただきたいです。人を笑顔にできるいいものです。そして、アニメをここまで見てくれた方の中には自分もいいアニメをたくさん知ってると思ってくれている方もいることでしょう。ぜひ少しでも自分のお勧めリストを作ってみようかなと思ったときにはこの下にある「自分のアニメリストを作ってみよう！」というリンクをクリックしてみてください。
                </p></li>
            </ul>
          </div>
          
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>URL taken from Youtube</p>
          <p>
            <a href="https://chandan-02.github.io/anime-facts-rest-api/">自分のアニメリストを作ってみよう！</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;