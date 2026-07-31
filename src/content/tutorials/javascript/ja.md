---
title: "JavaScript"
lang: "javascript"
locale: "ja"
localeLabel: "日本語"
filename: "learnjavascript.js"
codeLang: "javascript"
---

```javascript
// 1行コメントは // から始まります
/* 複数行コメントは スラッシュ+アスタリスク で始めて
   アスタリスク+スラッシュ で終わります */

////////////////////////////////////////////////
// 1. 数値・文字列・演算子
////////////////////////////////////////////////

// JavaScript の数値は1種類だけです（64bit の浮動小数点数）
3;      // => 3
1.5;    // => 1.5

// 四則演算は想像通りに動きます
1 + 1;    // => 2
8 - 1;    // => 7
10 * 2;   // => 20
35 / 5;   // => 7
5 % 2;    // => 1（余り）
2 ** 4;   // => 16（べき乗）

// 丸括弧で優先順位を明示できます
(1 + 3) * 2;  // => 8

// 文字列は '、"、バッククォートのいずれでも作れます
"これは文字列です。";
'これも文字列です。';

// テンプレートリテラル（バッククォート）は式を埋め込めます
const name = "World";
`Hello, ${name}!`;  // => "Hello, World!"

// 真偽値
true;
false;

// ! で否定できます
!true;   // => false

// === は型と値の両方を比較、== は型変換してから比較します
1 === 1;   // => true
1 === "1"; // => false
1 == "1";  // => true（== は基本的に避けましょう）

// undefined と null はどちらも「値がない」ことを表します
undefined; // まだ値が代入されていない変数の状態
null;      // 意図的に「値がない」ことを表す


////////////////////////////////////////////////
// 2. 変数・配列・オブジェクト
////////////////////////////////////////////////

// 再代入する変数は let、しない変数は const を使います
let age = 25;
const pi = 3.14159;

// console.log でコンソールに出力できます
console.log("私は JavaScript です。よろしく！");

// 配列は値の並びを保持します
const arr = [1, 2, 3];
arr.push(4);       // arr は [1, 2, 3, 4] になる
arr[0];             // => 1
arr[arr.length - 1]; // => 4（最後の要素）

// .slice(開始, 終了) で部分配列を取り出せます
arr.slice(1, 3);  // => [2, 3]

// includes で要素の存在確認ができます
arr.includes(2);  // => true

// オブジェクトはキーと値の対応を保持します
const person = {
  name: "Ada",
  age: 36,
};

// ドット記法・ブラケット記法でプロパティにアクセスできます
person.name;      // => "Ada"
person["age"];    // => 36

// キー一覧・値一覧の取得
Object.keys(person);    // => ["name", "age"]
Object.values(person);  // => ["Ada", 36]

// 分割代入で配列やオブジェクトから値を取り出せます
const { name: personName } = person;
const [first, second] = arr;


////////////////////////////////////////////////
// 3. 制御構文とループ
////////////////////////////////////////////////

const someVar = 5;

// 基本的な if 文
if (someVar > 10) {
  console.log("someVar は 10 よりずっと大きいです。");
} else if (someVar < 10) {
  console.log("someVar は 10 より小さいです。");
} else {
  console.log("someVar はちょうど 10 です。");
}

// for...of は配列などの反復可能な値をループできます
for (const animal of ["dog", "cat", "mouse"]) {
  console.log(`${animal} is a mammal`);
}

// 古典的な for 文
for (let i = 0; i < 4; i++) {
  console.log(i);  // 0, 1, 2, 3
}

// while 文は条件が false になるまでくり返します
let x = 0;
while (x < 4) {
  console.log(x);
  x++;
}


////////////////////////////////////////////////
// 4. 関数
////////////////////////////////////////////////

// 関数宣言
function add(x, y) {
  console.log(`x is ${x} and y is ${y}`);
  return x + y;
}

add(5, 6);  // => 11

// デフォルト引数
function addWithDefault(x, y = 10) {
  return x + y;
}

addWithDefault(5);  // => 15

// レストパラメータで残りの引数を配列として受け取れます
function varargs(...args) {
  return args;
}

varargs(1, 2, 3);  // => [1, 2, 3]

// アロー関数は簡潔に関数を書ける記法です
const addArrow = (x, y) => x + y;
addArrow(5, 3);  // => 8


////////////////////////////////////////////////
// 5. クラス
////////////////////////////////////////////////

class Human {
  // static プロパティはクラス自体が持つ値です
  static species = "H. sapiens";

  // constructor はインスタンス生成時に実行されます
  constructor(name) {
    this.name = name;
  }

  // インスタンスメソッドはすべてのインスタンスから呼び出せます
  say(msg) {
    return `${this.name}: ${msg}`;
  }
}

// new でクラスからインスタンスを作成します
const i = new Human("Ada");
console.log(i.say("hi"));  // "Ada: hi" と表示されます


////////////////////////////////////////////////
// 6. モジュール
////////////////////////////////////////////////

// math.js
// export function square(x) { return x * x; }
// export const PI = 3.14159;

// main.js
// import { square, PI } from "./math.js";
// square(4); // => 16

// Promise は非同期処理の「いずれ得られる値」を表します
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async/await を使うと非同期処理を上から下に読める形で書けます
async function run() {
  await delay(100);
  console.log("Done waiting!");
}
```
