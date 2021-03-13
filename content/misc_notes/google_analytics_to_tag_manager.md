---
title: "Google Analytics を Tag Manager から利用する"
date: 2021-01-10T16:40:33+09:00
lastmod: 2021-01-10T16:40:33+09:00
tags: [hugo, 開発]
ogpImage: "/images/google_analytics_to_tag_manager/image1.png"
---

Google Analytics は便利なんだけど、  
ダウンロードをトラッキングするには onclick で発火したりと若干手間だったりします。

そういうの楽にならないかなって考えて調べたところ、  
Google Tag Manager 経由で使えば楽にトラックできるみたいなので変更しました。

以下、手順。

1. 変数から URL クリックを使えるようにする
![画像1](/images/google_analytics_to_tag_manager/image1.png#center)

2. ダウンロード対象のURLで発火するトリガーを作成する
![画像2](/images/google_analytics_to_tag_manager/image2.png#center)

3. タグを作成する
![画像2](/images/google_analytics_to_tag_manager/image3.png#center)


作成したらプレビュー機能でアクセスしつつ、  
Google Analytics のリアルタイム機能でトラッキングできているか確認するとよいと思います。
