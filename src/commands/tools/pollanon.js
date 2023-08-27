const {
	SlashCommandBuilder,
	ModalBuilder,
	ActionRowBuilder,
	TextInputBuilder,
	TextInputStyle,
  } = require("discord.js");
  
  module.exports = {
	data: new SlashCommandBuilder()
	  .setName("pollanon")
	  .setDescription("Creates an anonymous poll."),
	async execute(interaction, client) {
	  const modal = new ModalBuilder()
		.setCustomId("pollanon-modal")
		.setTitle("Create a New Anonymous Poll");
  
	  const pollTopicInput = new TextInputBuilder()
		.setCustomId("pollTopicInput")
		.setLabel("Poll Topic")
		.setRequired(true)
		.setStyle(TextInputStyle.Short)
		.setPlaceholder('What do you want to ask the community to vote on?');
  
	  const option1Input = new TextInputBuilder()
		.setCustomId("option1Input")
		.setLabel("Option 1")
		.setRequired(true)
		.setStyle(TextInputStyle.Short);
  
	  const option2Input = new TextInputBuilder()
		.setCustomId("option2Input")
		.setLabel("Option 2")
		.setRequired(true)
		.setStyle(TextInputStyle.Short);
  
	  const moreOptionInput = new TextInputBuilder()
		.setCustomId("moreOptionInput")
		.setLabel("Additional Options (MAX 8)")
		.setRequired(false)
		.setStyle(TextInputStyle.Paragraph)
		.setPlaceholder('Add extra options if needed here. One per new line.');
  
	  const firstActionRow = new ActionRowBuilder().addComponents(pollTopicInput)
	  const secondActionRow = new ActionRowBuilder().addComponents(option1Input)
	  const thirdActionRow = new ActionRowBuilder().addComponents(option2Input)
	  const fourthActionRow = new ActionRowBuilder().addComponents(moreOptionInput)
	  
	  modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourthActionRow);
  
	  await interaction.showModal(modal);
	},
  };
  