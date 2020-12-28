if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

//const{token, commandPrefix} = require('./config/config.json');

const{TOKEN, COMMAND_PREFIX} = process.env;

const insults = require('./data/insults');

client.once('ready',()=>{
    //client.channels.cache
    //.get('791951721038872609')
    //.send('Luther Insult Bot is ready to insult you!');
    console.log('Luther Insult Bot is ready to insult you!');
});

client.on('message',(message)=>{
    if(message.author.bot || !message.content.startsWith(COMMAND_PREFIX)) return;

    const args = message.content.split(' ');
    console.log(args);
    const command = args[0].slice(COMMAND_PREFIX.length);
    console.log(command);

    if(command.toLowerCase() === 'luther'){
        //message.channel.send('How dare you! :angry:');
        //message.reply('How dare you! :angry:');
        let randInsultIndex = Math.floor(Math.random() * insults.length);
        console.log(randInsultIndex);
        message.reply(insults[randInsultIndex]);
    }
});

client.login(TOKEN);