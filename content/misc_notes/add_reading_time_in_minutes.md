---
title: "Hugo で生成したブログに「この記事を読むのにかかる時間」を追加する"
date: 2021-01-25T20:25:52+09:00
lastmod: 2021-01-25T20:25:52+09:00
tags: [hugo, 開発]
ogpImage: "/images/add_reading_time_in_minutes/image1.png"
customElements: [iframe]
---

よくブログサイトなんかで「この記事を読むのにかかる時間」が表示されてたりするじゃないですか。

WordPress だと [Reading Time WP](https://wordpress.org/plugins/reading-time-wp/) というプラグインがあるのですが、  
これと同じものを hugo で探してみたところ、  
ページ生成時に計算して埋め込んでしまう方法が記事になっていたのでやってみました。

{{< cards title="How to calculate the reading time of a Hugo string in minutes and seconds?" url="https://kodify.net/hugo/strings/reading-time-text/" >}}

対象記事の文字数をカウントして、220文字を読むのに1分かかるとして計算するわけですね。  
実際に実装してみたコードがこちら。

```go-html-template
{{/* 読むのにかかる時間を割り出して */}}
{{ $readTime := mul (div (countwords .Content) 220.0) 60 }}

{{/* 分と秒に分解して */}}
{{ $minutes := math.Floor (div $readTime 60) }}
{{ $seconds := mod $readTime 60 }}

{{/* 0分や0秒だったら表示しないようにする */}}
この雑記は約
{{- if gt $minutes 0 -}}{{ $minutes }}分{{- end -}}
{{- if gt $seconds 0 -}}{{ $seconds }}秒{{- end -}}
で読めます
```

そして実際に表示してみたのがこんな感じ。

![画像1](/images/add_reading_time_in_minutes/image1.png#center)

いい感じにできあがりました。

## 参考にしたサイト

* [How to calculate the reading time of a Hugo string in minutes and seconds? &middot;Kodify](https://kodify.net/hugo/strings/reading-time-text/)
