const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'n>';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === prefix +'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === prefix +'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === prefix +'chicken') {
    	message.reply('NUGGET!!');
  	}
});

client.on('message', message => {
    if (message.content === prefix +'derpchicken') {
    	message.reply('https://orig00.deviantart.net/e499/f/2012/194/0/7/cute_food__chicken_nuggets_by_ppgxrrb_fan-d575dvu.png');
  	}
});

client.on('message', message => {
    if (message.content === prefix +'help') {
    	message.channel.send('**You want help? You get help.**\n **Here are all my commands!** **Do n> before every command!!!**\n ```ping``` **PONG!**\n```bing``` **BONG!**\n ```derpchicken``` **A picture of 4 derpy chicken nuggets!**\n **And Thats All For Now! Stay tuned for more updates my fellow nugget!**');
    }


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
