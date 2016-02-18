# React Native Redux Skeleton

## Requirements
- [Node](https://nodejs.org) 4.x or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android SDK](https://developer.android.com/sdk/) for Android development
- [Geny Montion](https://www.genymotion.com/) Geny Motion

## Stack
- [React Native](https://facebook.github.io/react-native/) `^0.20.X` for building native apps using react
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [Immutable](https://facebook.github.io/immutable-js/) `^3.7.x` Immutable persistent data collections for Javascript
- [ExNavigator](https://github.com/exponentjs/ex-navigator) `^0.4.x` a route-centric navigation built on top of React Native's Navigator
- [Redux](http://rackt.github.io/redux/index.html) `4.2.x` a predictable state container for Javascript apps

## Getting started
Follow the [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) steps from the React Native site.

### Installing the Android SDK
Download the SDK from [here](https://developer.android.com/sdk/index.html#Other). Extract it and move to an appropriate location i.e. your home directory.

#### Define a ANDROID_HOME environment variable
Depending on what shell your using add the following either **`~/.bashrc`** or **`~/.zshrc`** file.

**On Mac**
```
export ANDROID_HOME=<path_where_you_unpacked_android_sdk>
```

**On Linux**
```
export ANDROID_HOME=<path_where_you_unpacked_android_sdk>
```

Then run
```
source ~/.bashrc 
```
or
```
source ~/.zshrc 
```

A gradle daemon is required for Android which you can download from [here](http://gradle.org/gradle-download/).
Extract it and move to an appropriate location i.e. your home directory then define a **`GRADLE_HOME`** variable.

Update your PATH to include `GRADLE_HOME/bin/tools`

i.e.
```
GRADLE_HOME=/Users/avjpl/dev-tools/gradle
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$GRADLE_HOME/bin"
```

Then run
```
source ~/.bashrc 
```

## Configuring the Android SDK
* Run
```
$GRADLE_HOME/bin/tools/android
```

* Open the Android SDK Manager and select the following within the window that appears:
    * Android SDK Build-tools version 23.0.1
    * Android 6.0 (API 23)
    * Android Support Repository

![Image of AndroidSDK1](https://facebook.github.io/react-native/img/AndroidSDK1.png)
![Image of AndroidSDK2](https://facebook.github.io/react-native/img/AndroidSDK2.png)

* Click "Install Packages"

### Install Genymotion
1. Download and install Genymotion.
2. Open Genymotion. It might ask you to install VirtualBox unless you already have it.
3. Create a new emulator and start it.
4. To bring up the developer menu press ⌘+M
