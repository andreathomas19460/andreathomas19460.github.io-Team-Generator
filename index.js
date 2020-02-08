const getEmployeeData = require('./jsLibrary/getEmployeeData').getEmployeeData;
const genTeamHtml = require('./jsLibrary/genTeamHtml').genTeamHtml;

const init = async () => {
  const inputs = await getEmployeeData();
  genTeamHtml(inputs);
  console.log(inputs);
};

init();