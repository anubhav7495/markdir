# markdir

A simple command line utility written in Node.js that makes changing and jumping directories easy.

Currently it works only on bash shell using the **.bashrc** file. Working to add support for other shells.

## Installation

```sh
$ npm install markdir -g
```

## Usage

After installing the module globally, open up your terminal and type
```sh
$ mark -setup
```
If everything goes smoothly, you are good to go, just navigate to any directory you want to bookmark and type
```sh
$ mark name
```
Where **name** can be anything you want. Next time you want to go to same directory, you can just type:
```sh
$ name
```
##### Easy Right!

### Other Commands
```sh
$ mark -l : Lists all the bookmarks you have created.
$ mark -r name : To remove the bookmark associated with name.
```
