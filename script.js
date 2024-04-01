const Discord = require('discord.js');
const client = new Discord.Client();

// Event listener for when the bot is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // Set the bot's status to a custom message
  client.user.setPresence({
    status: 'online',
    activity: {
      type: 'CUSTOM_STATUS',
      name: '/help | saand.bot.nu'
    }
  });
});

// Event listener for incoming messages
client.on('message', msg => {
  // Check if the message starts with the bot's prefix
  if (msg.content.startsWith('!ping')) {
    // Reply to the message with "Pong!"
    msg.reply('Pong!');
  }
});

// Log in to Discord with your bot token
client.login("MTE5OTA3OTQ3MDUzNjA4NTY3NA.GDPdGw.osOfYLx9Kh9FjTxmkIMNNw1tK_rl1jWEG6h1r8");

// Ping the bot every 5 minutes to keep it active
setInterval(() => {
  const https = require('https');
  https.get('https://your-vercel-project.vercel.app'); // Replace with your Vercel project URL
}, 300000); // 5 minutes in milliseconds
