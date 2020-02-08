const inquirer = require("inquirer");

const getManagerData = async () => {
  let data;
  await inquirer
    .prompt([
      {
        message:"You are creating a new team first a manager then his team, what is the managers name?",
        name:"name",
      },
      {
        name: 'email',
        message: 'What is the managers email?',
      },
      {
        name: 'officeNumber',
        message: 'What is there managers office number?',
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
      message:"You are creating a new Employee What is employees job title within the company?",
      choices: ["Engineer", "Intern"],
    },
    {
      name: 'name',
      message: "What is the employees name?",
    },
    {
      name: 'email',
      message: "What is the employees email?",
    },
    {
      name: 'github',
      message: "What is the employees github?",
      when: function( answers ) {
        // Only run if user set a position
        if( answers.title == "Engineer" ){
          return !!answers.title;
        }
      },
    },
    {
      name: 'school',
      message: "What is the employees school?",
      when: function( answers ) {
        // Only run if user set a position
        if( answers.title == "Intern" ){
          return !!answers.title;
        }
      },
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Enter another input? ',
      default: true
    },
  ];

  const { again, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  return again ? getEmployeeData(newInputs) : newInputs;
};

module.exports.getEmployeeData = getEmployeeData