const inquirer = require("inquirer");

const getManagerData = async () => {
  let data;
  await inquirer
    .prompt([
      {
        message:"You are creating a new team! What is the manager's name?",
        name:"name",
      },
      {
        name: 'email',
        message: 'What is their email address?',
      },
      {
        name: 'officeNumber',
        message: 'What is their office number?',
      },
    ])
    .then(answers => {
      answers.title = "Manager";
      answers.id = 1;
      data = answers
  })
  return data
} 

const getEmployeeData = async (inputs = []) => {

if(inputs.length === 0){
  const managerData = await getManagerData();
  inputs.push(managerData);
}

  const prompts = [
    {
      type:"list",
      name:"title",
      message:"You are creating a new Employee. What is employee's job title?",
      choices: ["Engineer", "Intern"],
    },
    {
      name: 'name',
      message: "What is the employee's name?",
    },
    {
      name: 'email',
      message: "What is their email?",
    },
    {
      name: 'github',
      message: "GitHub profile?",
      when: function( answers ) {
       
        if( answers.title == "Engineer" ){
          return !!answers.title;
        }
      },
    },
    {
      name: 'school',
      message: "School name?",
      when: function( answers ) {
       
        if( answers.title == "Intern" ){
          return !!answers.title;
        }
      },
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Enter another employee? ',
      default: true
    },
  ];

  const { again, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  return again ? getEmployeeData(newInputs) : newInputs;
};

module.exports.getEmployeeData = getEmployeeData