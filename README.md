# react-native-demo
##### 画面遷移するだけのハリボテ版です

クローンしたのち、  `npm install`  して、  `npm run android`  すれば、起動します。  
※アンドロイド実機がUSBにつながっているか、Android Studioがあるかでなにが立ち上がるか変わります

## 前提環境
1. Android(Windows)  
Git, NodeJs, Android Studio
1. ios(Mac)  
Git, homebrew, nodebrew, NodeJs, Xcode

## npm
`npm ERR! Maximum call stack size exceeded`とかエラーが出たら、
あなたの環境がプロキシ環境下ではないか？など疑ってみましょう。

## Android Studio
PATHの設定が必要です。
1. `ANDROID_HOME`という名前で追加。※名前が重要  
例：**ANDROID_HOME="C:\Users\\[ユーザ]\AppData\Local\Android\Sdk"**
1. `$ANDROID_HOME/platform-tools`も追加  
※adb コマンドを必要とします。

## npm run android の時
- gradle.propertiesへの設定  
    プロキシ環境下の場合、注意が必要です。  
    **C:\Users\\[ユーザ]/.gradle/gradle.properties**（なければ作成する）に以下のように設定します。
    ```
    systemProp.http.proxyHost=myproxy.co.jp
    systemProp.http.proxyPort=8080
    systemProp.http.proxyUser=****
    systemProp.http.proxyPassword=****
    systemProp.https.proxyHost=myproxy.co.jp
    systemProp.https.proxyPort=8080
    systemProp.https.proxyUser=****
    systemProp.https.proxyPassword=****
    ```
    実行時にいろいろアクセスするようです。

- `Failed to install the following Android SDK packages as some licences have not been accepted.`と怒られた。  
    android-sdkのライセンスに同意する必要があります。
    ```
    cd ~/Library/Android/sdk/tools/bin
    ./sdkmanager --licenses
    ``` 

---
# iosのメモ
react-native run-iosしたところ、次のエラーが。  
```
$ react-native run-ios
error Could not find "Podfile.lock" at /xxx/yyy/ios/Podfile.lock. Did you run "pod install" in iOS directory?
```
iosディレクトリにcdして、pod installしましたが、podコマンドがないとのこと。  
```
$ cd ios
$ pod install
-bash: pod: command not found
```
cocoapodをインストールします。  
```
$ sudo gem install -n /usr/local/bin cocoapods
```

### react-native link react-native-vector-icons
データピッカー「react-native-modal-datetime-picker」を使用しているが、「react-native-vector-icons」に依存している。  
エラーになる時は… 
```
./node_modules/.bin/react-native unlink react-native-vector-icons
```
上記コマンドにてリンクを外し、  
ios/[project].xcworkspaceを選択してXcodeを実行します。  
Fontsの名前でグループを生成します。  
Fontsグループを生成したら、上のようにnode_modules/react-native-vector-icons/Fonts/で移動して下にある全てのフォントをXcodeのFontsグループにドラックします。  
(なんか画面が出たら、Copy items if neededがチェックされた状態で右下のFinishボタンを選択します。)  
↑(要は、フォントファイルをコピーすればいいのではないか)  
最後にios/[project]/Info.plistファイルを開いて下記の内容を追加します。  
```
～～～～
  <key>UIAppFonts</key>
  <array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Zocial.ttf</string>
    <string>Fontisto.ttf</string>
  </array>
  ※arrayが増えるような修正  
～～～～
```
Xcodeでcmd + shift + kを押してClean Build Folderを実行します。  
※ターミナルで`npm run ios`でもいいかも…
