---
title: "FF14 紅龍カレンダーを作った"
date: 2021-04-29T18:12:08+09:00
lastmod: 2021-06-29T18:01:28+09:00
tags: [開発,ゲーム]
ogpImage: "image1.png"
---

Final Fantasy XIV で釣りをやってると「次に釣れるのいつだよ・・・」となる魚がいくつかいて、  
その中の紅龍があまりにも調べるのダルかったのでついカッとなってカレンダーを作った。  
※紅龍の前提となるクアルの釣れる時間を開始時間にしています

{{< iframe src="https://calendar.google.com/calendar/embed?src=jqb19fdus7b2ms9bkr977qa0qigf3sba%40import.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" width="800" height="600" frameborder="0" scrolling="no" >}}

毎日1回、だいたい前後一ヶ月分くらいのデータを ics で生成して、  
それを Google カレンダーに取り込む形で利用しています。

現在生成している ics ファイルは以下の3つ。

* [紅龍 (ics)](https://kyohsuke.github.io/xiv_fishing_calendar/the_ruby_dragon.ics)
* [ステタカントゥス (ics)](https://kyohsuke.github.io/xiv_fishing_calendar/stethacanthus.ics)
* [シャリベネ (ics)](https://kyohsuke.github.io/xiv_fishing_calendar/charibenet.ics)

釣れる日が分かったところで、釣れるわけではない。

【2021-06-29 追記】
サプライズエッグのカレンダーを追加しました。

* [サプライズエッグ (ics)](https://kyohsuke.github.io/xiv_fishing_calendar/cinder_surprise.ics)
