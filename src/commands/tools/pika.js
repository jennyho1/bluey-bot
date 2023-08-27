const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pika")
    .setDescription("pika?"),
  async execute(interaction, client) {

	await interaction.reply({
		content: "**CHU**",
		ephemeral: false
	})
  },
};
