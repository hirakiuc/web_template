web_template

============

Web template project with npm, grunt, bower.

# Install

## 1. Install required tools

### Install nvm

```
$ git clone git://github.com/creationix/nvm.git ~/.nvm
$ vim ~/.zshenv
[[ -s $HOME/.nvm/nvm.sh ]] && source $HOME/.nvm/nvm.sh
```

### Install Node.js

```
$ nvm install v0.11.14
$ nvm alias default v0.11.14
$ node -v 
v0.11.14
```

### Install grunt-cli

```
$ npm install -g grunt-cli
```

### Install bower

```
$ npm install -g bower
```

## 2. clone this repo

```
$ git clone git@github.com:hirakiuc/web_template.git
```

## 3. Install

```
$ cd web_template
$ npm install
$ grunt bower:install
```
