const genEmployee = require('./teamMemberConstructor').genEmployee;
const fs = require('fs');

function genTeamHtml(inputs){
  let  htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
     <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet">
     <style>
        body{
         font-family: 'Alata', sans-serif;
        }
        header{
           background-color:#e64a58;
           padding:40px 20px;
           display:flex;
           justify-content:center;
           margin-bottom:40px;
        }
        header h1{
           color:white; 
           margin:0;
        }
        #team{
         display: flex;
         max-width:1100px;
         margin:0 auto;
         justify-content:space-evenly;
         flex-wrap: wrap;
        }
        .teamMember{
         background-color:#f6f7f8;
         display:flex;
         flex-direction:column;
         width:100%;
         box-sizing: border-box;
         margin:20px;
        }
        .teamMemberHeading{
         background-color:#147bf3;
         color:white;
         padding:20px;
         box-sizing: border-box;
        }
        teamMemberHeading h2{
          text-transform: capitalize;
        }
        .teamMemberBody{
         padding:20px;
         box-sizing: border-box;
        }
        .teamMemberBody > div{
           border-radius: 5px;
           border:1px solid #dfdfdf;
        }
        .teamMemberBody p{
         background-color:white;
         margin:0;
         padding:20px;
         border:1px solid #dfdfdf;
         box-sizing: border-box;
        }

        @media only screen and (min-width: 768px) {
         .teamMember{
            max-width:30%;
            margin: 0  0 40px 0;
            box-shadow: 5px 1px 5px 1px #888888;
         }
        }
     </style>
     <title>My Team</title>
  </head>
  <body>
  <header><h1>My Team</h1></header>

  <section id="team">
   ${genEmployee(inputs)}
   </section>
  
  </body>
  </html>
`;

  fs.writeFile('./newTeam/index.html', htmlContent, (error) => {"Something went wrong"});
}

module.exports.genTeamHtml = genTeamHtml