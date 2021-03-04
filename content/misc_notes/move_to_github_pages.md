---
title: "Github にサイトを置くためにやったこと"
date: 2020-07-13T05:42:00+09:00
lastmod: 2021-01-12T08:29:37+09:00
tags: [hugo, 開発]
---

Github Pages で About サイトを作るためにやったことと、  
そのために検索で見つけて有用だった記事の紹介など。

---
* [いきさつ](#いきさつ)
* [構築したもの](#構築したもの)
* [困ったことと解決手段](#困ったことと解決手段)
  * [1. A link が _blank にできない](#1-a-link-が-_blank-にできない)
  * [2. 画像のセンタリングができない](#2-画像のセンタリングができない)
  * [3. Google Analytics を仕込みづらい](#3-google-analytics-を仕込みづらい)
  * [4. OGP に対応していない](#4-ogp-に対応していない)
  * [5. Recent とか uBlog など表題が英語になっている](#5-recent-とか-ublog-など表題が英語になっている)
  * [6. 作成日時は表示されるけど更新日時が表示されない](#6作成日時は表示されるけど更新日時が表示されない)
* [結局これで楽になったのか？](#結局これで楽になったのか？)
* [索引](#索引)
---


## いきさつ

つい最近まで linktree というサービスを使って、自分の関連コンテンツを紐付けた自己紹介がわりにしていた。

{{< cards title="linktree" url="https://linktr.ee/" >}}

サービスの名前から想像つくように、linktree は自己紹介ではなく "自分のリンク集" になっている。

色々なサービスを繋ぎ合わせるハブとして利用するのであればこれ以上なく便利なサービスではあるものの、  
「ちょっとしたコメントを入れたいな」といった小さなニーズが出てきた場合、  
サブスクリプションを購入しなければならない。

購入といっても少額なのでそれはそれで構わないのだけど、  
元々がリンク集なのであまり手の込んだことはできないし、  
ちょっと凝ったことをやろうと思えばすぐ頭打ちになってしまうのは目に見えている。

そういった理由から、Github Pages を利用して自分の About サイトを作ることにした。


## 構築したもの

そうして作ったものがこのサイト。

やった事といえば、[hugo](https://gohugo.io/)に[npq-hugo](https://git.sr.ht/~saad/npq-hugo)のデザインを適用して、  
Github Actions で動くようにした程度。  
具体的に何をしたかは、[このあたり](https://www.blog.danishi.net/2019/04/05/post-107/)を読めば分かると思う。


## 困ったことと解決手段

パパっと作ってみたものの、このあたりの事で困ってしまった。

* A link が _blank にできない
* 画像のセンタリングができない
* Google Analytics を仕込みづらい
* OGP に対応していない
* Recent とか uBlog とか全部英語
* 作成日時は表示されるけど更新日時が表示されない


### 1. A link が _blank にできない

Markdown 形式で記述していると外部へのリンクを _blank にできないので html 形式で書かなければいけない。

そんなのめんどくさい。  

そこで hugo の render hook 機能を使って A link を生成する時に http で始まるかどうかを判定し、  
http 開始していた場合に _blank をつけるようにした。
```go-html-template
<a href="{{ $url }}"
    {{ if hasPrefix .Destination "http" }}
        target="_blank"
    {{ end }}
>{{ .Text | safeHTML }}</a>
```


### 2. 画像のセンタリングができない

こちらも A link と同様、render hook を利用してセンタリングの指定を渡せるようにした。
```go-html-template
{{- $url := strings.TrimSuffix "#center" .Destination -}}
{{ if in .Destination "#center"}}<center>{{end}}
 <img src="{{ $url }}" alt="{{ .PlainText }}"{{ with .PlainText }} title="{{ . }}"{{ end }}>
{{ if in .Destination "#center"}}</center>{{end}}
```


### 3. Google Analytics を仕込みづらい

今回利用したテンプレートでは仕込む手段がなかったのと、  
Hugo から提供されている機能では古かったので、  
現行の gtag 方式で仕込めるように以下のようなコードを header に追加した。
```go-html-template
{{ if not .Site.IsServer }}
 {{ with .Site.GoogleAnalytics }}
   <!-- Global site tag (gtag.js) - Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id={{ . }}"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', '{{ . }}');
   </script>
 {{ end }}
{{ end }}
```


### 4. OGP に対応していない

これもテンプレート起因の問題だけど、  
OGP (Twitter とかにリンク貼ると概要や画像がでるアレ) に対応していない。  
しょうがないので header にベタ書きで仕込むようにした。
```go-html-template
<!-- Twitter Card data -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="{{ .Title }}" />
<meta name="twitter:description" content="{{ with .Description }}{{ . }}{{ else }}{{if .IsPage}}{{ .Summary }}{{ else }}{{ with .Site.Params.description }}{{ . }}{{ end }}{{ end }}{{ end }}" />
<meta name="twitter:site" content="@kyohsuke14" />
<meta name="twitter:image" content="{{ "avatar.png" | absURL }}" />
<!-- /Twitter Card data -->
<!-- Open Graph -->
<meta property="og:title" content="{{ .Title }}" />
<meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}" />
<meta property="og:description" content="{{ with .Description }}{{ . }}{{ else }}{{if .IsPage}}{{ .Summary }}{{ else }}{{ with .Site.Params.description }}{{ . }}{{ end }}{{ end }}{{ end }}" />
<meta property="og:url" content="{{ .Permalink }}" />
<meta property="og:image" content="{{ "avatar.png" | absURL }}" />
<!-- /Open Graph -->
```


### 5. Recent とか uBlog など表題が英語になっている

手で書き直した。それ以上でも以下でもない。


### 6. 作成日時は表示されるけど更新日時が表示されない

日時を表示したいページには更新日時も表示したいのだけど、  
初期状態では更新日時が表示されていなかったので、  
手でテンプレートのコードを書き換えて更新日時も表示されるように変更した。

```go-html-template
{{ if ne (.Date.Format "2006-01-02") (.Lastmod.Format "2006-01-02") }}
  <i class="fas fa-sync-alt"></i> {{.Lastmod.Format "2006-01-02"}}
{{end}}
```


## 結局これで楽になったのか？

率直に言って、この記事をこうやって書き下してしまおうと考える程度には楽になった。  
その結果、何を書いてもリアクションが見えづらい問題が発生してしまっているので、  
何かしらリアクションしやすくなるシステムは追加しないとなぁ、という気持ちになっている。

誰かリアクションしてくれるんだろうか。


## 索引

* [Hugo Documentation | Hugo](https://gohugo.io/documentation/)
* [Hugo Themes: Complete List](https://themes.gohugo.io/)
* [GitHub PagesとHUGOで静的サイトのポートフォリオを作成する①](https://www.blog.danishi.net/2019/04/05/post-107/)
* [GitHub PagesとHUGOで静的サイトのポートフォリオを作成する②](https://www.blog.danishi.net/2019/04/05/post-125/)
* [Hugoで未だ対応していないgtag.jsを利用して Googleアナリティクスする](https://qiita.com/momotaro98/items/4de7934fd79cd6b34fce)
* [Hugoで出力されるaタグをカスタマイズする - kamoqq.info](https://kamoqq.info/post/hugo-render-hook-templates/)
