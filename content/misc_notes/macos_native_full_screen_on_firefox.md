---
title: "Firefox で MacOS のフルスクリーンを利用する"
date: 2021-02-13T10:57:39+09:00
lastmod: 2021-02-13T10:57:39+09:00
tags: [日記]
---

地味に困ったので備忘録。

Firefox で YouTube などを観ている時にフルスクリーンにすると、  
ブラウザ機能のフルスクリーンが利用されてしまうため Spaces での移動ができなくなる。

これは地味に困るので調べたら `about:config` にそういう設定があった。

```
full-screen-api.macos-native-full-screen
```

ここの値を true に変更することで Firefox でも MacOS のフルスクリーンが利用できるようになった。

めでたしめでたし


## 参考にしたもの
* [Use native fullscreen on macOS (behind full-screen-api.macos-native-full-screen pref)](https://bugzilla.mozilla.org/show_bug.cgi?id=1403085)
