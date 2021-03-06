---
title: "Windows 用の UPnP・NAT-PMP ポート開放ツール"
date: 2012-02-17T19:43:41+09:00
lastmod: 2021-01-02T00:00:00+09:00
ogpImage: "image3.png"
---

# ファイル
[ダウンロード](/files/portmap.zip)

# 経緯

PCゲームを遊ぶ時などでポート開放が必要になるのですが、  
AirMac Extreme はポート開放の方式が UPnP ではなく NAT-PMP なので、  
一般的なアプリではなく NAT-PMP に対応したやつが必要になります。

唯一 [こちらのサイト](http://deusty.blogspot.com/2008/07/tcmportmapper-for-windows.html) (今は消滅) にあったのですが、  
[配布されているバイナリ](https://code.google.com/archive/p/dotnetportmapper/downloads) では Windows7 64bit で動かなかったので、動くようにビルドしました。  

このアプリで NPnP・NAT-PMP 両方の方式で開放できます。
Windows7 32bit/64bit で動作確認していますが、ビルド自体は 32bit です。  
また、Windows10 以降で使えるか分かりません。

ウェブサイトが消失しているので、  
何かあった時のためにソースコードを [Google Code](https://code.google.com/archive/p/dotnetportmapper) から [Github](https://github.com/kyohsuke/dotnetportmapper) に移設&アーカイブしていますが、  
今もビルドできるかどうかは分かりません。

At your own risk でお願いします。

# 使い方

前提として [.NET Framework 4](https://www.microsoft.com/ja-jp/download/details.aspx?id=17851) が必要になります。

1. 起動すると以下のような画面が出でくるので、左下にある［＋］ボタンを押す
{{< image file="image1.png" alt="NAT-PMP 1" center=true >}}

2. ポートや名称の入力画面がポップするので、必要項目を入力する  
例：非想天則の場合  
&emsp; Local Port に 10800  
&emsp; Desired Public Port に 10800  
&emsp; Protocol の UDP にチェック (↓の画像ではチェックがついているが、非想天則に TCP は必要ない)  
&emsp; Description はメモ用の名前で再起動すると消えてしまう物なので入れても入れなくてもいい  
{{< image file="image2.png" alt="NAT-PMP 2" center=true >}}

3. 入力が終わったら [Add Mapping] を押せば登録完了  
ポートの開放ができた場合ランプがグリーンになる
{{< image file="image3.png" alt="NAT-PMP 3" center=true >}}
