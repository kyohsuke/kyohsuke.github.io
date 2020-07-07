---
title: "Windows 用の NAT-PMP ポート開放ツール"
date: 2012-02-17T19:43:41+09:00
draft: false
---

# ファイル
[ダウンロード](/files/portmap.zip)

# 経緯

AirMac Extreme はポート開放の方式が UPnP ではなく NAT-PMP なので、  
一般的なポート開放アプリではなく NAT-PMP に対応したやつが必要になるわけです。

PCゲームで遊ぶ時のポート開放で必要になるのですが、探してみてもあまり見つかりません。  
唯一[こちら](https://github.com/KosmicTask/TCMPortMapper)ソースコードおよびライブラリなら対応しているものの、  
配布されているバイナリでは Windows7 64bit で動かないので手元の環境でビルドしました。  
※現在は Mac のプロジェクトしか配布されていないようです  

ビルド自体は 32bit なので、今後どうなるかは保証ができません。

at your own risk でお願いします。
