---
title: "Google Analytics を Tag Manager から利用する"
date: 2021-01-10T16:40:33+09:00
lastmod: 2021-01-10T16:40:33+09:00
tags: [hugo, 開発]
ogpImage: "image1.png"
---

Google Analytics は便利なんだけど、  
ダウンロードをトラッキングするには onclick で発火したりと若干手間だったりします。

そういうの楽にならないかなって考えて調べたところ、  
Google Tag Manager 経由で使えば楽にトラックできるみたいなので変更しました。

以下、手順。

1. 変数から URL クリックを使えるようにする
{{< image file="image1.png" alt="画像1" center=true >}}

2. ダウンロード対象のURLで発火するトリガーを作成する
{{< image file="image2.png" alt="画像2" center=true >}}

3. タグを作成する
{{< image file="image3.png" alt="画像3" center=true >}}


作成したらプレビュー機能でアクセスしつつ、  
Google Analytics のリアルタイム機能でトラッキングできているか確認するとよいと思います。
