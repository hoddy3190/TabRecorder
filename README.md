# TabRecorder


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
