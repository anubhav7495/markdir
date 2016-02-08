#! /usr/bin/env node

var fs = require('fs');
var chalk = require('chalk');
var opt = require('./lib/remove');
var setup = require('./lib/setup');

var home = process.env.HOME;
var directory = process.cwd();

if(process.argv[2][0] !== '-') {
  fs.appendFileSync(home + '/.path_aliases', 'alias ' + process.argv[2] + '="cd ' + directory + '"' + '\n' , 'utf-8');
}
else {
  if(process.argv[2] === '-l') {
    var list = fs.readFileSync(home + '/.path_aliases', 'utf-8');
    console.log('\n' + chalk.bold.green(list));
  }
  if(process.argv[2] === '-setup') {
    var x1 = process.env.SHELL;
    var x2 = x1.split('/');
    var str = '/.' + x2[x2.length-1] + 'rc';
    setup.init(fs, home, str);
  }
  if(process.argv[2] === '-r') {
    if(!process.argv[3])
      console.log(chalk.bold.red("Please enter the path marker to delete"));
    else {
      var data = fs.readFileSync(home + '/.path_aliases', 'utf-8');
      var new_data = opt.remove(data, process.argv[3]);
      fs.writeFileSync(home + '/.path_aliases', new_data , 'utf-8');
    }
  }
}
