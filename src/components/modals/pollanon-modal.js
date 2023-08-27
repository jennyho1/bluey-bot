const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {
  data: {
    name: "pollanon-modal",
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
      description += `${emojis[i]}   ${option} - 0 (0%)\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n\n`;
      i++;
    }
    description += "**Total votes:**\n0";

    const embed = new EmbedBuilder()
      .setTitle(interaction.fields.getTextInputValue("pollTopicInput"))
      .setDescription(description)
      .setColor(0x32a852)
      .setTimestamp(Date.now())
      .setFooter({
        text: `created by ${interaction.user.username}`,
      });

    const cancelButton = new ButtonBuilder()
      .setCustomId("cancel")
      .setLabel("Cancel")
      .setStyle(ButtonStyle.Secondary);

    const createButton = new ButtonBuilder()
      .setCustomId("create")
      .setLabel("Create")
      .setStyle(ButtonStyle.Success);

    const firstActionRow = new ActionRowBuilder().addComponents(cancelButton, createButton);

    const message = await interaction.reply({
      embeds: [embed],
      components: [firstActionRow],
      ephemeral: true,
    });
  },
};
