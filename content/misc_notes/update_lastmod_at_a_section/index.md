---
title: "サイトマップの更新日時を下部ページの最新日時にする"
date: 2021-03-22T23:40:00+09:00
lastmod: 2021-06-24T02:00:00+09:00
tags: [hugo, 開発]
---

hugo でサイトマップを生成した場合、  
セクションページの lastmod には `_index.md` を生成した日時が表示されます。  

セクションページの日時が更新される意味あるの？ というとあんまりないんですが、  
新しい項目が増えたなら一覧も更新されているはずなので、  
最後の投稿と lastmod が一致していると整合性がとれて気持ち良いです。

現在実装されている sitemap.xml は[こんな感じ](https://github.com/gohugoio/hugo/blob/97934779ededfcfef0ee2621e7dacad0127ef4b5/tpl/tplimpl/embedded/templates/_default/sitemap.xml)になっています。  
この8行目にある `<lastmod>{ここ}</lastmod>` をいい感じにすればよいわけですね。

というわけでセクションだった場合には下位コンテンツの日時を確認して表示するようにします。  
方針としてはセクション内のページを全部調べて、更新日時の一番新しい物を採用します。

```go-html-template
{{* 最初に現在の lastmod を保持 *}}
{{- $lastmod := .Lastmod -}}
{{- if .IsSection -}}
  {{- range .Pages -}}
    {{* 各ページの lastmod の方が大きかったらそれ採用する *}}
    {{ $lastmod = cond (gt .Lastmod $lastmod) .Lastmod $lastmod }}
  {{- end -}}
{{ end }}
<lastmod>{{ safeHTML ($lastmod.Format "2006-01-02T15:04:05-07:00") }}</lastmod>
```

これでセクションの lastmod が下位ページで一番新しい lastmod を同じになりました。  

ですが、このままではホームページ (トップページ) が古いままなので、  
ホームページだった場合は全てのページを調査して一番新しい日時を使うように機能追加します。

```go-html-template
{{* 最初に現在の lastmod を保持 *}}
{{- $lastmod := .Lastmod -}}
{{- if or .IsHome .IsSection -}}
  {{* ホームだった場合は全ページ、セクションだった場合は下位のページを調査対象にする *}}
  {{- range (cond .IsHome $.Data.Pages .Pages) -}}
    {{* 各ページの lastmod の方が大きかったらそれ採用する *}}
    {{ $lastmod = cond (gt .Lastmod $lastmod) .Lastmod $lastmod }}
  {{- end -}}
{{ end }}
<lastmod>{{ safeHTML ($lastmod.Format "2006-01-02T15:04:05-07:00") }}</lastmod>
```

というわけで完成した上記コードを8行目と置き換えて完成。

めでたしめでたし。
