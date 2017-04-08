# Getting started - Linux

This guide should help you get you up and running on a linux based operating system, more specifically Fedora 25 

## Requirements
The following packages need to be installed on your machine:
- [git][1]
- [nodejs][2]
- [bower][3]
- [gulp-cli][4]
- [electron-forge][5]

These can be installed using your favourite package manager or using the links provided. The instructions in the links provided are of mixed quality. Use what is appropriate in your situation.

## Installation on Fedora 25
This installation guide was tested on the latest version of fedora. To install the latest packages (reboot afterwards).
```bash
$ sudo dnf update
```
Fedora comes pre-packaged with *git* and *nodejs*. The later is an older version so first we update from the github repository.
Weirdly enough this does not work with just `sudo` so you need to elevate to `root` first.
```bash
$ sudo su
$ curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -
$ exit
$ sudo dnf -y install nodejs
```
## State of the machine
Your machine should be in a similar state as listed below.
```bash
$ git --version
git version 2.9.3
```
```bash
$ node --version
v7.8.0
```
```bash
$ npm --version
4.2.0
```	
## Run the application
Now we can install the required global npm packages, build and run the project.
```bash
$ sudo npm install -g gulp-cli bower electron-forge
$ git clone https://github.com/basklinkhamer/bootcamp-chat-app.git
$ cd bootcamp-chat-app
$ npm install
$ bower install
$ npm start
```
During start-up you might run into one of the following errors (solutions below)
## Possible errors
### Missing gcc-c++
```
An unhandled error has occurred inside Forge:
make: Entering directory '/home/user/project/bootcamp-chat-app/node_modules/node-sass/build'
  CXX(target) Release/obj.target/libsass/src/libsass/src/ast.o
make: g++: Command not found
src/libsass.target.mk:138: recipe for target 'Release/obj.target/libsass/src/libsass/src/ast.o' failed
make: Leaving directory '/home/user/project/bootcamp-chat-app/node_modules/node-sass/build'
make: *** [Release/obj.target/libsass/src/libsass/src/ast.o] Error 127
gyp ERR! build error 
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/usr/lib/node_modules/electron-forge/node_modules/node-gyp/lib/build.js:285:23)
gyp ERR! stack     at emitTwo (events.js:106:13)
gyp ERR! stack     at ChildProcess.emit (events.js:194:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:215:12)
gyp ERR! System Linux 4.10.8-200.fc25.x86_64
gyp ERR! command "/usr/bin/node" "/usr/lib/node_modules/electron-forge/node_modules/.bin/node-gyp" "rebuild" "--target=1.6.2" "--arch=x64" "--dist-url=https://atom.io/download/electron" "--build-from-source"
gyp ERR! cwd /home/user/project/bootcamp-chat-app/node_modules/node-sass
gyp ERR! node -v v7.8.0
gyp ERR! node-gyp -v v3.6.0
gyp ERR! not ok 

Failed with exit code: 1
Error: make: Entering directory '/home/user/project/bootcamp-chat-app/node_modules/node-sass/build'
  CXX(target) Release/obj.target/libsass/src/libsass/src/ast.o
make: g++: Command not found
src/libsass.target.mk:138: recipe for target 'Release/obj.target/libsass/src/libsass/src/ast.o' failed
make: Leaving directory '/home/user/project/bootcamp-chat-app/node_modules/node-sass/build'
make: *** [Release/obj.target/libsass/src/libsass/src/ast.o] Error 127
gyp ERR! build error 
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/usr/lib/node_modules/electron-forge/node_modules/node-gyp/lib/build.js:285:23)
gyp ERR! stack     at emitTwo (events.js:106:13)
gyp ERR! stack     at ChildProcess.emit (events.js:194:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:215:12)
gyp ERR! System Linux 4.10.8-200.fc25.x86_64
gyp ERR! command "/usr/bin/node" "/usr/lib/node_modules/electron-forge/node_modules/.bin/node-gyp" "rebuild" "--target=1.6.2" "--arch=x64" "--dist-url=https://atom.io/download/electron" "--build-from-source"
gyp ERR! cwd /home/user/project/bootcamp-chat-app/node_modules/node-sass
gyp ERR! node -v v7.8.0
gyp ERR! node-gyp -v v3.6.0
gyp ERR! not ok 

Failed with exit code: 1
    at SafeSubscriber._error (/usr/lib/node_modules/electron-forge/node_modules/spawn-rx/lib/src/index.js:262:84)
    at SafeSubscriber.__tryOrUnsub (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:236:16)
    at SafeSubscriber.error (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:197:26)
    at Subscriber._error (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:128:26)
    at Subscriber.error (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:102:18)
    at MapSubscriber.Subscriber._error (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:128:26)
    at MapSubscriber.Subscriber.error (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:102:18)
    at SafeSubscriber._next (/usr/lib/node_modules/electron-forge/node_modules/spawn-rx/lib/src/index.js:236:65)
    at SafeSubscriber.__tryOrSetError (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:245:16)
    at SafeSubscriber.next (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:187:27)
    at Subscriber._next (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:125:26)
    at Subscriber.next (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:89:18)
    at ReduceSubscriber._complete (/usr/lib/node_modules/electron-forge/node_modules/rxjs/operator/reduce.js:119:30)
    at ReduceSubscriber.Subscriber.complete (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:114:18)
    at MergeAllSubscriber._complete (/usr/lib/node_modules/electron-forge/node_modules/rxjs/operator/mergeAll.js:94:30)
    at MergeAllSubscriber.Subscriber.complete (/usr/lib/node_modules/electron-forge/node_modules/rxjs/Subscriber.js:114:18)

npm ERR! Linux 4.10.8-200.fc25.x86_64
npm ERR! argv "/usr/bin/node" "/usr/bin/npm" "start"
npm ERR! node v7.8.0
npm ERR! npm  v4.2.0
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! bootcamp-chat-app@1.0.0 start: `gulp dist && electron-forge start`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the bootcamp-chat-app@1.0.0 start script 'gulp dist && electron-forge start'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the bootcamp-chat-app package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     gulp dist && electron-forge start
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs bootcamp-chat-app
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls bootcamp-chat-app
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /home/user/.npm/_logs/2017-04-08T22_49_47_463Z-debug.log
```
To get around this you'll need to install `gcc-c++` [source][6]
```bash
$ sudo dnf install gcc-c++
```
### Missing libXScrnSaver
```
/home/user/project/bootcamp-chat-app/node_modules/electron-prebuilt-compile/node_modules/electron/dist/electron: error while loading shared libraries: libXss.so.1: cannot open shared object file: No such file or directory
```
To get around this you'll need to install `libXScrnSaver` [source][7]
```bash
$ sudo dnf install libXScrnSaver
```


[1]:https://www.atlassian.com/git/tutorials/install-git/linux
[2]:https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora
[3]:https://bower.io
[4]:http://gulpjs.com
[5]:https://beta.electronforge.io
[6]:https://github.com/Swordfish90/cool-retro-term/issues/308
[7]:https://github.com/atom/atom/issues/13176
