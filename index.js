var inquirer = require('inquirer');
var prompt = inquirer.createPromptModule();
var ui = new inquirer.ui.BottomBar();

// pipe a Stream to the log zone
outputStream.pipe(ui.log);

// Or simply write output
ui.log.write('something just happened.');
ui.log.write('Almost over, standby!');

// During processing, update the bottom bar content to display a loader
// or output a progress bar, etc
ui.updateBottomBar('new bottom bar content');


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
    name:'cm1',
  }
]).then((res) => {
  console.log('res:->', res);
});
