---
title: "Python"
lang: "python"
locale: "ja"
localeLabel: "日本語"
filename: "learnpython.py"
codeLang: "python"
---

```python
# 1行コメントは # から始まります
""" 複数行の文字列は " を3つ並べて書けます。
    ドキュメント（説明文）としてもよく使われます。
"""

####################################################
## 1. 基本の型と演算子
####################################################

# 数値はそのまま書けます
3  # => 3

# 四則演算は想像通りに動きます
1 + 1   # => 2
8 - 1   # => 7
10 * 2  # => 20
35 / 5  # => 7.0（割り算の結果は常に浮動小数点数）

# 切り捨て除算は「負の無限大方向」に丸められます
5 // 3       # => 1
5.0 // 3.0   # => 1.0
-5 // 3      # => -2

# % は余りを求める演算子です
10 % 3  # => 1

# べき乗は ** で書きます（x**y は x の y 乗）
2 ** 4  # => 16

# 丸括弧で優先順位を明示できます
(1 + 3) * 2  # => 8

# 真偽値も基本の型です（先頭が大文字なので注意）
True
False

# not で否定できます
not True   # => False
not False  # => True

# 論理演算子
# "and" と "or" は小文字であることに注意
True and False  # => False
False or True   # => True

# 等しいかどうかは ==、等しくないかは !=
1 == 1  # => True
2 != 1  # => True

# 比較演算子は連結できます
1 < 2 < 3  # => True

# 文字列は " でも ' でも作れます
"これは文字列です。"
'これも文字列です。'

# 文字列同士は + で連結できます
"Hello " + "world!"  # => "Hello world!"

# f-string を使うと式を文字列に埋め込めます
name = "World"
f"Hello, {name}!"  # => "Hello, World!"

# None はオブジェクトです（他言語の null に相当）
None  # => None


####################################################
## 2. 変数とコレクション
####################################################

# Python には print 関数があります
print("私は Python です。よろしく！")

# 変数の宣言は不要で、代入するだけで使えます
some_var = 5
some_var  # => 5

# リストは値の並びを保持します
li = []
other_li = [4, 5, 6]

# append で末尾に要素を追加できます
li.append(1)     # li は [1] になる
li.append(2)     # li は [1, 2] になる

# 配列のようにインデックスでアクセスできます
li[0]   # => 1
li[-1]  # => 2（最後の要素）

# スライスは [開始:終了:間隔] のように書きます
li = [1, 2, 3, 4, 5]
li[1:3]   # => [2, 3]
li[2:]    # => [3, 4, 5]
li[:3]    # => [1, 2, 3]
li[::2]   # => [1, 3, 5]

# in で要素の存在確認ができます
1 in li  # => True

# タプルはリストに似ていますが、後から変更できません
tup = (1, 2, 3)
tup[0]      # => 1
# tup[0] = 3  # TypeError になります

# 辞書はキーと値の対応を保持します
empty_dict = {}
filled_dict = {"one": 1, "two": 2, "three": 3}

# [] でキーから値を取り出せます
filled_dict["one"]  # => 1

# キー一覧・値一覧の取得
list(filled_dict.keys())    # => ["one", "two", "three"]
list(filled_dict.values())  # => [1, 2, 3]

# 集合（set）は重複のない値の集まりです
empty_set = set()
some_set = {1, 1, 2, 2, 3, 4}  # => {1, 2, 3, 4}


####################################################
## 3. 制御構文と反復処理
####################################################

some_var = 5

# if 文の例
if some_var > 10:
    print("some_var は 10 よりずっと大きいです。")
elif some_var < 10:
    print("some_var は 10 より小さいです。")
else:
    print("some_var はちょうど 10 です。")


"""
for 文はリストなどを反復処理できます。
実行結果:
    dog is a mammal
    cat is a mammal
    mouse is a mammal
"""
for animal in ["dog", "cat", "mouse"]:
    print(f"{animal} is a mammal")

# range(数値) は 0 から指定した数値未満までの反復可能オブジェクトを返します
for i in range(4):
    print(i)  # 0, 1, 2, 3

# while 文は条件を満たす間くり返します
x = 0
while x < 4:
    print(x)
    x += 1  # x = x + 1 の省略形


####################################################
## 4. 関数
####################################################

# def で新しい関数を定義します
def add(x, y):
    print(f"x is {x} and y is {y}")
    return x + y  # return で戻り値を返します

add(5, 6)  # => 11

# デフォルト引数
def add_with_default(x, y=10):
    return x + y

add_with_default(5)  # => 15

# 可変長引数を受け取る関数も定義できます
def varargs(*args):
    return args

varargs(1, 2, 3)  # => (1, 2, 3)

# lambda を使うとその場で無名関数を作れます
add_lambda = lambda x, y: x + y
add_lambda(5, 3)  # => 8


####################################################
## 5. クラス
####################################################

class Human:
    # クラス属性。このクラスの全インスタンスで共有されます
    species = "H. sapiens"

    # __init__ は特別なメソッドで、コンストラクタにあたります
    def __init__(self, name):
        self.name = name

    # インスタンスメソッドは第一引数に self を取ります
    def say(self, msg):
        return f"{self.name}: {msg}"


# クラスからインスタンスを作成します
i = Human(name="Ian")
print(i.say("hi"))  # "Ian: hi" と表示されます


####################################################
## 6. モジュール
####################################################

import math
print(math.sqrt(16))  # => 4.0

# モジュール名を短く別名づけできます
import math as m
m.sqrt(16) == math.sqrt(16)  # => True

# モジュールから特定の関数だけを取り込むこともできます
from math import ceil, floor
print(ceil(3.7))   # => 4
print(floor(3.7))  # => 3
```
