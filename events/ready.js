///////////////////////////////////

//π Credit Infos 
//π This Project Made By Troy
//π Must Give Credits While Using 
//π Support Server 
//β₯οΈ X
//π₯ Youtube 
//π https://youtube.com/Troysamp
//π₯΄ Troyβ’

///////////////////////////////////

const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")

module.exports = async(client) => {
  
  rpc.getRpcImage(config.applicationid, config.imagename)
  .then(large => {
    let presence = new rpc.Rpc()
    .setName(config.name)
    .setType(config.type)
    .setApplicationId(config.applicationid)
    .setAssetsLargeImage(large.id)
    .setState(config.state)
    .setDetails(config.details) 
      
  console.log(presence.toDiscord())
    client.user.setPresence(presence.toDiscord()).catch(console.error);
  })
  console.log(chalk.hex("#ff0000")("Succesfully enabled rpc"))
           }


///////////////////////////////////

//π Credit Infos 
//π This Project Made By Troy
//π Must Give Credits While Using 
//π Support Server 
//β₯οΈ No Have
//π₯ Youtube 
//π https://youtube.com/Troysamp
//π₯΄ Troyβ’

///////////////////////////////////