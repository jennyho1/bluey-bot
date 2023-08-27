const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "poll-modal",
  },
  async execute(interaction, client) {
    const options = [];
    options.push(interaction.fields.getTextInputValue("option1Input"));
    options.push(interaction.fields.getTextInputValue("option2Input"));

    if (interaction.fields.getTextInputValue("moreOptionInput")) {
      for (const option of interaction.fields
        .getTextInputValue("moreOptionInput")
        .split(/\r?\n/)) {
        options.push(option);
      }
    }

    const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];

    var description = "";
    var i = 0;
    for (const option of options) {
      description += `${emojis[i]}   ${option}\n\n`;
      i++;
    }

    const embed = new EmbedBuilder()
      .setTitle(interaction.fields.getTextInputValue("pollTopicInput"))
      .setDescription(description)
      .setColor(0x32a852)
      .setTimestamp(Date.now())
      .setFooter({
        text: `created by ${interaction.user.username}`,
      });

    const message = await interaction.reply({
      embeds: [embed],
      fetchReply: true,
    });

    for (let i = 0; i < options.length; i++) {
      await message.react(emojis[i]);
    }
  },
};
