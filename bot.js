const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'chicken') {
    	message.reply('NUGGET!!');
  	}
});

client.on('message', message => {
    if (message.content === 'derpchicken') {
    	message.reply('https://orig00.deviantart.net/e499/f/2012/194/0/7/cute_food__chicken_nuggets_by_ppgxrrb_fan-d575dvu.png');
  	}
});

client.on('message', message => {
    if (message.content === 'n>help') {
    	message.reply('NUGGET!!');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
