require("dotenv").config();
const { Client, Collection, IntentsBitField } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
	IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
  ],
});

client.commands = new Collection();
client.buttons = new Collection();
client.modals = new Collection();
client.color = 0x0f50ce;
client.commandArray = [];

const functionFolders = fs.readdirSync("./src/functions");
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}


client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(process.env.TOKEN);
