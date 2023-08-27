const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("List all the commands."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
		.setTitle("**How to use the Bluey bot**")
		.setDescription("List of commands")
		.setColor(client.color)
		.addFields([
			{
				name: '/help',
				value: 'List all the commands.',
				inline: true
			}, 
			{
				name: '/poll',
				value: 'Create a poll people can vote on',
				inline: true
			},
			{
				name: '/pollanon',
				value: 'Create an anonymous poll',
				inline: true
			},
			{
				name: 'react',
				value: `Right-click on a message, go to Apps, click on 'react' to make Bluey react to a message`,
				inline: false
			},

		]);


	await interaction.reply({
		embeds: [embed],
		ephemeral: true
	})
  },
};
