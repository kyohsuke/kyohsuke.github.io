---
title: "UTMパラメータをタグ発火した後に削除する"
date: 2021-03-31T22:09:15+09:00
lastmod: 2021-03-31T22:09:15+09:00
tags: [日記]
---

Google Analytics には、閲覧者がどこから来たのか調べる方法にUTMパラメータがあって、  
これを使うとリファラがなくても分かるようになります。

ですが、そのパラメータがURLにくっついたページをブックマークされると、  
とてもとても悲しい事件が起こってしまいます。

というわけで onload イベントで消そうと思います。

```javascript
window.addEventListener('load', function(e){
  // utm_* というパラメータがあるかどうか確認 && state 処理ができるか確認
  if ((null != location.search.match('utm_')) && window.history.replaceState) {
    let queryString = window.location.search.substring(1);
  
    // utm_ のつかない物だけ残す
    let params = queryString.split('&').filter(function(param) {
      return !param.match(/^utm_/);
    }).join('&');
  
    // replaceStateを使ってUTMパラメータもろとも削除したページに遷移する
     window.history.replaceState(null, null, location.pathname + '?' + (params ? '?' + params : ''));
  }
});
```

Google Tag Manager 経由で発火する時にタグのついてないURLが送付されるかと思いましたが、  
Firefox と Chrome で試した限りちゃんとパラメタつきで送付されているので、  
このタイミングで replaceState を使って消そうと思います。

少しの間、これで様子見。
