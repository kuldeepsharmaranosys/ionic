# ionic
ionic
#INSTALL NVM & NODE
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh -o
install_nvm.sh
bash install_nvm.sh
nvm install 10.16.3

#INSTALL IONIC & CORDOVA
npm install -g ionic
npm install -g cordova
npm install -g native-run
cordova telemetry on

#INSTALL JAVA
sudo apt install openjdk-8-jdk
sudo apt-get install gradle
#SET EVEVIRIMONT VARIABLE
open ~/.bashrc
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/sdk
export ANDROID_AVD_HOME=$HOME/.android/avd
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
JAVA_HOME="/usr/lib/jvm/open-jdk"