///////////////////////////////////

//π Credit Infos 
//π This Project Made By Troy
//π Must Give Credits While Using 
//π Support Server 
//β₯οΈ Dont have
//π₯ Youtube 
//π https://youtube.com/Troysamp
//π₯΄ Β©Troyβ’

///////////////////////////////////

const discord = require('discord.js-selfbot-v11');
const fs = require('fs');

const client = new discord.Client();
const keepAlive = require('./server.js');
const config = require('./config.json');

const events = fs.readdirSync('./events/');
events.forEach(file => {
	const eventname = file.split('.')[0];
	const event = require(`./events/${file}`);
	client.on(eventname, event.bind(null, client));
});

keepAlive();
client.login(process.env.token);



///////////////////////////////////

//π Credit Infos 
//π This Project Made By Troy
//π Must Give Credits While Using 
//π Support Server 
//β₯οΈ Dont Have
//π₯ Youtube 
//π https://youtube.com/adityacodez
//π₯΄ Β©Troyβ’

///////////////////////////////////