---
title: あそびかた
layout: layout.vto
---

# たいぴすたんのあそびかた

せいげんじかんのうちに たいぴんぐしよう！

れんぞくで せいかいすると どんどんとくてんが あがるよ！

じかんないに すべてのもんだいを とくと のこりじかんも とくてんに！

- [えいご](/#/csv/english.csv) えいごが とくいなひとは ちゃれんじしてね
- [都道府県](/#/csv/todoufuken.csv)
- [県庁所在地](/#/csv/kenchou.csv)
- [百人一首](/#/csv/hyakunin.csv)
- [typescript](/#/csv/typescript.csv)

# 問題の作り方

csv ファイルを作成して適当な場所にアップロードし、その URL
を入力することで、自分で作った問題で遊ぶことができます。 csv
やアップロードがよくわからない方は以下の手順を参考にしてください。

# google sheet で問題を作成する

1列目は問題 (表示されるだけ) 2列目は入力する答えになります。
答えはひらがなのみ使用可能です。 `shi` `si`
などの表記揺れには自動的に対応します。

問題ができたら、「ファイル」 「共有」 「Webに公開」で、「シート1」
「カンマ区切り形式(.csv)」の設定にして公開ボタンを押します。
以下のようなURLが表示されるので、それをコピーしてください。

```
https://docs.google.com/spreadsheets/d/e/xxxx/pub?gid=0&single=true&output=csv
```

コピーしたら、 https://typing.kbn.one/#
の後にそのURLをくっつけてアクセスしてください。

```
https://typing.kbn.one/#https://docs.google.com/spreadsheets/d/e/xxx/pub?gid=0&single=true&output=csv
```

プレイ中にURLを変更してもすぐには切り替わりません。F5キー等でリロードしてください。

このURLをブックマークしたり、SNSにシェアすることが出来ます。

## 設定値

1列目が : で始まる行は2列目が設定値として扱われます。 例:

```csv
:title,百人一首
:timelimit,120
```

設定できる値は以下の通りです。

- :title タイトル (画面に表示されます)
- :timelimit 制限時間(秒)
- :shuffle false にすると出題がシャッフルされず、必ず上から順になります

# ソースコード

- [github](https://github.com/kuboon/typing-game)
