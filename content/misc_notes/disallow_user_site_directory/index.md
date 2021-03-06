---
title: "GitHub Pages の username.github.io ディレクトリを見えないようにする"
date: 2021-01-22T19:02:40+09:00
lastmod: 2021-01-22T19:02:40+09:00
tags: [hugo, 開発]
ogpImage: "image1.png"
---


このサイトの Google Analytics を見ていたところ、妙な URL にアクセスしている痕跡がありました。

{{< image file="image1.png" alt="画像1" center=true >}}

この3番目のアクセスですね。  
 
https://kyohsuke.github.io/kyohsuke.github.io/index.html にアクセスした人がいて、   
そのせいでアクセスログが残っているという事なんですが、  
正直そんなところにはアクセスしてほしくないです。

さて、このアクセスをちゃんとするにはどうするかというと、  
アクセスログを Analytics に送る前段階として、こういう風な移動が起こればよいわけです。

```
https://kyohsuke.github.io/kyohsuke.github.io/index.html
↓
https://kyohsuke.github.io/index.html
```


「なんだ簡単じゃん」なんて思って JavaScript で location したんですが、  
`window.location` や `location.href` を使ってしまうと、  
https://kyohsuke.github.io/kyohsuke.github.io/index.html がブラウザ履歴に残ってしまいます。

じゃあどうするかというと、`location.replace` を使います。
```javascript
<script>
  // URL のパスに /kyohsuke.github.io が含まれているか調べる
  if (null != location.pathname.match('/kyohsuke.github.io')) {
    // 含まれていたら、それを削除して遷移する
    window.location.replace(location.origin + location.pathname.replace('/kyohsuke.github.io', ''));
  }
</script>
```

これを header の最初に置いて遷移することで、  
`/<username>.github.io` というディレクトリにアクセスされても、  
正しい URL に送り出すことができます。
