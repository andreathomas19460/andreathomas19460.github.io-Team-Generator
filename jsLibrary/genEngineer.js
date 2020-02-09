const Engineer = require('./Engineer');

function genEngineer(name, id, email, github){
  let E = new Engineer(name, id, email, github);
  return (`
  <div class="teamMember">
  <div class="teamMemberHeading">
     <h2>${E.getName()}</h2>
     <h3><i class="fas fa-code"></i> ${E.getRole()}</h3>
  </div>
  <div class="teamMemberBody">
     <div>
        <p>ID: ${E.getId()}</p>
        <p>Email: ${E.getEmail()}</p>
        <p>GitHub: ${E.getGithub()}</p>
     </div>
  </div>
</div>
  `);
}


module.exports = genEngineer