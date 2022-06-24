import React, { useState } from "react";
import './App.css';

const members = ["set", "map", "deque", "tuple", "bitset", "list", "UnionFind", "scc", "DAG", "dijkstra", "segtree", "template", "string"];

const content =

[
  "順序付き集合。multisetなら重複するデータを保持できる。データの追加・削除・検索の処理速度は O(log N)。データの追加にはinsert。削除はerase。検索はfind。",
  "連想配列クラス。２分木（実装に依るけど、たいていは赤黒木）で実装されている。unordered_mapはハッシュ を使っているために、キーから要素を取り出す処理時間が O(1) とさらに高速。multimapは各キーに対する値を複数持てる。",
  "末尾だけでなく先頭への要素追加・削除も O(1)。vector と違い、deque の要素は連続したアドレスに保存されているとは限らないので、要素のアドレスを取り出して、 それをポインタとして他の関数に渡すと問題が発生することがあるので、要注意。先頭付近での挿入削除に優れる。",
  "構造化束縛でタプルを分解して、それぞれの要素を代入する、もしくはget<index>(タプル名)で指定した値を取り出す。型推論により、std::tuple<> の <> の部分を、初期値から自動的に推論してくれるが、非推奨。文字列リテラルは std::string 型ではなく const char* 型になる。",
  "Nビットのビット集合を表すクラス。文字列と整数値との相互変換が可能。固定サイズで後からサイズ変更できない。",
  "双方向リストクラス。どの位置への挿入・削除でも O(1) 。ランダム・アクセスの処理速度が O(N) 。vectorとはランダムアクセスと挿入時間が相補的になっている。",
  "要素xと要素yが同じグループに属するかどうかの判定と, 要素xと要素yが同じグループに属する場合要素xの属するグループと要素yの属するグループの併合する、の2点を高速で行うことができる。ならし計算量はアッカーマン関数の逆関数。増加がとても遅くほぼ定数とみなせる。",
  "強連結成分のこと。有向グラフにおいて互いに行き来が可能な頂点の集合。この成分に分解するには深さ優先探索を繰り返し行う。計算量は O(V+E)。",
  "ある頂点から出発して、その頂点に戻ってくる道がない有向グラフ。有向非巡回グラフという。トポロジカルソートを行うことができる。",
  "計算量は O(|E|log|V|)。優先度付きキューを用いて実装する。",
  "区間に対する操作を対数時間で行える。例えば区間上の値を更新する、任意の区間上の最小値や合計値などを取得する。遅延評価セグ木なら区間更新、区間加算を対数時間で行える。通常は O(n log n)。 ",
  "あらゆる型に対して適応できる万能のコード。特定の型だけ違う処理をするテンプレートの特殊化も可能。関数テンプレート、クラステンプレートなどがある。",
  "数値に変換する際はstoiやstollなど。逆に数値から変換する際は to_string。char*からstringはコンストラクタを利用し、string(変数)でOK。"
];

//メインのコンポーネント
function App(){
  return (
    <div className="App">
          <LikeButton />
          <ul className="parts">
            {members.map((member, i)=><li key={i}><Part member={member} content={content[i]} /></li>) }
          </ul>
    </div>
  );
}

// 各要素のボタン。
function Part(props) {
  const [show, setShow] = useState(false)

  return (
    <div className="part">
        <button id="openbtn" onClick={() => setShow(true)}>{props.member}</button> 
        <Modalapp show={show} setShow={setShow} member={props.member} content={props.content}/>
    </div>
  );
}

//モーダル
function Modalapp(props) {
  if(props.show){
    return (
      <div>
        <div id="overlay" onClick={() => props.setShow(false)}>
            <div id="content" onClick={(e) => e.stopPropagation()}>
              <div id="sentence">
                <h3>{props.member}</h3>
                <br></br>
                <p>
                  {props.content}
                </p>
              </div>
              <button id="closebtn" onClick={() => props.setShow(false)}>Close</button>
            </div>        
        </div>
      </div>
    )  
  }
  else{
    return null;
  }
}

//いいねボタン
function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return <span className="likeButton" onClick={handleClick}>
    ♥ {count}
  </span>;
}

export default App;