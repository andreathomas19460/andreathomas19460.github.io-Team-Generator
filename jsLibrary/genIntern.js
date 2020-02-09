const Intern = require('./Intern');

function genIntern(name, id, email, school){
  let I = new Intern(name, id, email, school);
  return (`
  <div class="teamMember">
  <div class="teamMemberHeading">
     <h2>${I.getName()}</h2>
     <h3><i class="fas fa-graduation-cap"></i> ${I.getRole()} </h3>
  </div>
  <div class="teamMemberBody">
     <div>
        <p>ID: ${I.getId()}</p>
        <p>Email: ${I.getEmail()}</p>
        <p>School: ${I.getSchool()}</p>
     </div>
  </div>
</div>
  `);
}

module.exports = genIntern