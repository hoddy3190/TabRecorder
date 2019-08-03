# TabRecorder

puppeteerでショートカットキーを押してchrome extensionを起動させる。なぜこんなことをするかというと、[activeTab permissionの制約](https://developer.chrome.com/extensions/activeTab#invoking-activeTab)があるため。
jsからbrowseractionやpageactionを起動させることはできなかったため、4番目のcommand apiを使うことにした。

でも、さらに問題があり、puppeteerからだとshortcut keyがたたけないことが判明

+ https://github.com/GoogleChrome/puppeteer/issues/2210
+ https://github.com/dvdvdmt/popup-tab-switcher/issues/1
+ https://stackoverflow.com/a/37993879/3167855

なので、spawnからapplescriptを呼び出してshortcut keyをたたく形にした。

## 事前準備

applescriptが任意のアプリケーション上でキー操作をしようとすると、「osascriptにはキー操作の送信は許可されません」とエラーがでるので、  
システム環境設定 >> セキュリティとプライバシー >> プライバシー >> アクセシビリティ　からiterm2の制御を許可する必要がある。

+ thanks
  - [Complete list of AppleScript key codes](https://eastmanreference.com/complete-list-of-applescript-key-codes)
  - [AppleScriptをspawnで実行](https://scrapbox.io/meganii/AppleScript%E3%82%92spawn%E3%81%A7%E5%AE%9F%E8%A1%8C)


## 動作確認

1. chrome://extensions/
2. 「デベロッパーモード」をON
3. 「パッケージ化されていない拡張機能を取り込む」
4. src配下を指定
5. コードを修正したりする
6. 「バックグラウンドページ」をクリック
7. デベロッパーツールが立上がる。こちらのツールは、extensionのbackgroundスクリプトのconsole.logなどが表示される
8. 普通のwebページでもデベロッパーツールを開く。こちらでは、extensionのcontent_scriptのconsole.logなどが表示される
9. 更新マークを押す
10. 5-9の繰り返し

![image](./img/extensions.png)


#### cf

+ カスタムの Chrome アプリと拡張機能を作成して公開する
  - https://support.google.com/chrome/a/answer/2714278?hl=ja

## puppeteer

+ puppeteerでshortcutを有効にするやり方
  - https://github.com/GoogleChrome/puppeteer/issues/2210


## License

[MIT](./LICENSE)

## OSS

+ Copyright (c) Muaz Khan.
  - https://github.com/muaz-khan/Chrome-Extensions/
  - https://www.webrtc-experiment.com/licence/
