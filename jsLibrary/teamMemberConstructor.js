const genEngineer = require('./genEngineer');
const genIntern = require('./genIntern');
const genManager = require('./genManager');

let genEmployee = (inputs) => {
  let htmlArray = [];
  inputs.forEach((input, index) =>{
    let name = input.name;
    let id = index + 1;
    let email = input.email;
    
    if (input.title === 'Engineer'){
      let github = input.github;
      htmlArray.push(genEngineer(name, id, email, github));
    }else if(input.title === 'Intern'){
      let school = input.school;
      htmlArray.push(genIntern(name, id, email, school));
    }else if(input.title === 'Manager') {
      let officeNumber = input.officeNumber;
      htmlArray.push(genManager(name, id, email, officeNumber ));
    }
  })
  return htmlArray.join("");
}

module.exports.genEmployee = genEmployee