# 問題の作り方

google spreadsheet で問題を作成できます。
1列目は問題 (表示されるだけ)
2列目は入力する答えになります。
答えはひらがなのみ使用可能です。 `shi` `si` などの表記揺れには自動的に対応します。

問題ができたら、「ファイル」「共有」「Webに公開」で、「シート1」「カンマ区切り形式(.csv)」の設定にして公開ボタンを押します。
以下のようなURLが表示されるので、それをコピーしてください。

```
https://docs.google.com/spreadsheets/d/e/2PACX-1vTKZUKL8O5YSXNzl5OtdUDy6e8mnoyCOHOcSSXs9l9CUOrrHkO-py-Z02YyTDAz1PgKvZOesySHxAh4/pub?gid=0&single=true&output=csv
```

コピーしたら、 https://typing.kbn.one/# の後にそのURLをくっつけてアクセスしてください。

```
https://typing.kbn.one/#https://docs.google.com/spreadsheets/d/e/2PACX-1vTKZUKL8O5YSXNzl5OtdUDy6e8mnoyCOHOcSSXs9l9CUOrrHkO-py-Z02YyTDAz1PgKvZOesySHxAh4/pub?gid=0&single=true&output=csv
```

このURLをブックマークしたり、SNSにシェアすることが出来ます。

※注意 CSV のURLへのアクセス権限を持った方しか開くことはできません。

## 設定値
1列目が : で始まる行は2列目が設定値として扱われます。
例:
```csv
:title,百人一首
:timelimit,120
```

設定できる値は以下の通りです。
- :title タイトル (画面に表示されます)
- :timelimit 制限時間(秒)
- :shuffle true にすると出題がシャッフルされます。
