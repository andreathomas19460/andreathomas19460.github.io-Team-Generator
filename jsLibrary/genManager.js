const Manager = require('./Manager');

function genManager(name, id, email, officeNumber){
  let M = new Manager(name, id, email, officeNumber);
  return (`
  <div class="teamMember">
  <div class="teamMemberHeading">
     <h2>${M.getName()}</h2>
     <h3><i class="fas fa-tasks"></i> ${M.getRole()}</h3>
  </div>
  <div class="teamMemberBody">
     <div>
        <p>ID: ${M.getId()}</p>
        <p>Email: ${M.getEmail()}</p>
        <p>Office Number: ${M.getOfficeNumber()}</p>
     </div>
  </div>
</div>
  `);
}

module.exports = genManager