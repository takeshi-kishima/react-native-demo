# react-native-demo
##### 画面遷移するだけのハリボテ版です

クローンしたのち、  `npm install`  して、  `npm run android`  すれば、起動します。  
※アンドロイド実機がUSBにつながっているか、Android Studioがあるかでなにが立ち上がるか変わります

## npm
`npm ERR! Maximum call stack size exceeded`とかエラーが出たら、
あなたの環境がプロキシ環境下ではないか？など疑ってみましょう。

## Android Studio
PATHの設定が必要です。
1. `ANDROID_HOME`という名前が重要  
例：**ANDROID_HOME="C:\Users\[ユーザ]\AppData\Local\Android\Sdk"**
1. `$ANDROID_HOME/platform-tools`も追加  
※adb コマンドを必要とします。

## npm run android の時
1. `Failed to install the following Android SDK packages as some licences have not been accepted.`と怒られた。  
android-sdkのライセンスに同意する必要があります。  
    
    cd ~/Library/Android/sdk/tools/bin
    ./sdkmanager --licenses
    
---
# iosのメモ
react-native run-iosしたところ、次のエラーが。  
    
    $ react-native run-ios
    error Could not find "Podfile.lock" at /xxx/yyy/ios/Podfile.lock. Did you run "pod install" in iOS directory?
    
iosディレクトリにcdして、pod installしましたが、podコマンドがないとのこと。  
    
    $ cd ios
    $ pod install
    -bash: pod: command not found
    
