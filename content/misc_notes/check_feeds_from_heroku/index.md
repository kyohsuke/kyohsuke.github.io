---
title: "Herokuで新規フィードをTwitterに投稿する"
date: 2021-03-21T23:25:39+09:00
lastmod: 2021-03-21T23:25:39+09:00
tags: [日記, 開発]
---

元々は [dlvr.it](https://dlvrit.com/) を使っていたんだけど、  
無料だと3時間に1回しか確認してくれなくて不便なので何とかならないかなって考えて、結局作った。  
構成としてはこんな感じ。

```
Github Actions (schedule)
↓
Heroku (Web with sinatra)
↓
IFTTT (WebSocket)
↓
Twitter
```

Heorku で適宜 Cron を回して確認するとお金がかかってしまうので Github Actions を利用して節約。

これで dlvr.it も必要なくなったし、  
全部無料枠でおさまる範囲だし、  
フィードの追加も手軽になったし、  
いたれりつくせり。
