const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`✔️  ${client.user.tag} is online.`);
    const options = [
      {
        type: ActivityType.Playing,
        text: "with code",
        status: "idle",
      },
    ];
    client.user.setPresence({ activities: [{ name: 'with fire' }], status: 'online' });
  },
};
