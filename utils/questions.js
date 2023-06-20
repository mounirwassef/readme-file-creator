
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'what is your project title? and if more than one word dont forget -'
    },
    {
        type: 'input',
        name: 'description',
        message: 'please describe your project '
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project? '
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use '
    },
    {
        type: 'input',
        name: 'Contribute',
        message: 'would like other developers to contribute it, can include guidelines for how to do so. '
    },
    {
        type: 'list',
        name: 'license',
        message: 'choose your license',
        choices : ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'write tests for your application. '
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'thanks to submit your questions '
    },

];

console.log (questions);

module.exports = questions;