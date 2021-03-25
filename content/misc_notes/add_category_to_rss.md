---
title: "Hugo の RSS に category タグを追加する"
date: 2021-03-04T17:06:39+09:00
lastmod: 2021-03-04T17:06:39+09:00
tags: [hugo,開発]
customElements: [script]
---

Hugo は自動で RSS を吐き出してくれる便利機能があるわけですが、  
この RSS には `<category>` タグが入っていません。

必ずしもタグがある場所の XML を吐くわけではないから、というのが理由っぽいですが、  
自分のように日記の RSS を吐き出したい人にとってはカテゴリ出してほしいなあというのが本音のところです。

というわけで追加していこうと思います。

まず、hugo のデフォルトテンプレートがどうなっているかというと、こういう感じになっています。

{{<gistit src="/gohugoio/hugo/blob/6d21559fb55cda39c7b92bb61fd8e65a84465fe5/tpl/tplimpl/embedded/templates/_default/rss.xml" >}}

このコードの下側にある `<item>` タグの中が各ページの内容を吐き出す場所になってるみたいですね。  
というわけで、この部分にコードを追加していきます。  
自分は tags にタグを配列で入れているので、以下のようなコードを追加します。

```go-html-template
{{ range .Params.tags }}
  <category>{{.}}</category>
{{ end }}
```

そして完成したのがこちら。

{{<gistit src="kyohsuke/kyohsuke.github.io/blob/b0f799f6e2dfae2a8eea4481246051320ed8afb3/layouts/_default/rss.xml" >}}

これを layouts/_default/rss.xml として保存して、あとは生成すればおっけー。

## 参考
* [Hugo の rss.xml](https://github.com/gohugoio/hugo/blob/6d21559fb55cda39c7b92bb61fd8e65a84465fe5/tpl/tplimpl/embedded/templates/_default/rss.xml)
