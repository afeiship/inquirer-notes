var inquirer = require('inquirer');
var prompt = inquirer.createPromptModule();
var Listr = require('listr');

var tasks = new Listr([
  {
    title: 'Success',
    task: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('test');
          resolve();
        }, 4000);
      });
    }
  }
]);

tasks.run().catch((err) => {
  console.error(err);
});

/*
prompt([
  {
    type: 'list',
    name: 'test',
    choices: ['yes', 'no']
  },
  {
    type: 'rawList',
    name: 'rawTest',
    choices: ['raw-yes', 'raw-no']
  },
  {
    type: 'checkbox',
    name: 'chk1',
    choices: ['001', '002', '003']
  },
  {
    type: 'confirm',
    name: 'cm1'
  }
]).then((res) => {
  console.log('res:->', res);
});

*/
