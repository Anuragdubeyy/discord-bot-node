import { Client, GatewayIntentBits, Message } from 'discord.js';
const TOKEN = import.meta.env.CLIENT_TOKEN
// Your code logic here
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', Message => {
    if(Message.author.bot) return;
    if(Message.content.startsWith('create')) {
        const URL = Message.content.split('')[1]
        return Message.reply({content: 'generating URl' + URL})
    }
    Message.reply({
        content: 'Hii from bot!'
    })
})

client.on('interactionCreate', async Intersection =>{
    if(!Intersection.isCommand()) return;
    if(Intersection.commandName === 'ping'){
        await Intersection.reply('pong!');
    }
})

client.login(TOKEN)