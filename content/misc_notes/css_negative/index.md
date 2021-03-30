---
title: "サイトの色を反転させる CSS Negative"
date: 2020-12-30T20:00:00+09:00
lastmod: 2021-01-01T10:00:00+09:00
tags: [hugo, 開発]
ogpImage: "light.png"
---

この About サイトはテンプレートとして[npq-hugo](https://themes.gohugo.io/npq-hugo/)を使っていて、  
全体的にダークカラーで統一されていました。

{{< image file="dark.png" alt="Dark Site" center=true >}}

この配色は悪くないのですが、個人的には明るい色の方がいいです。  
文字も読みやすいしね。

というわけで、全体のカラーリングを変更するスクリプトやプラグインを探してみたわけですが、  
あまりしっくりとくるものがなく

「もういっそ CSS 側の数字をいじってしまえばいいのでは？」

という安直な考えで探してみたところ、すごくいい感じのツールがありました。  
それがこの [CSS Negative](https://jalu.ch/coding/css-negative.php) というサイト (およびツール) で、  
`style.css` と `syntax.css` をコピペして変換をかけただけでも、  
明るくてとてもいい感じのサイトに生まれ変わりました。 

{{< image file="light.png" alt="Light Site" center=true >}}

やっぱり明るい背景に黒文字の方が読みやすいですね。
