const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("react")
    .setType(ApplicationCommandType.Message),

  async execute(interaction, client) {
    const messageId = interaction.targetId;
    const channelId = interaction.channelId;

    const modal = new ModalBuilder()
      .setCustomId("react-modal")
      .setTitle("Pick a reaction");

    const textInput = new TextInputBuilder()
      .setCustomId("reactionInput")
      .setLabel("Pick a reaction to add")
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    modal.addComponents(new ActionRowBuilder().addComponents(textInput));

    await interaction.showModal(modal);

    const modalSubmitInteraction = await interaction.awaitModalSubmit({
      filter: () => {
        return true;
      },
      time: 100000,
    }).catch((err) => {return null});

	if (!modalSubmitInteraction) return 

    const channel = await client.channels.fetch(channelId);
    const emoji =
      modalSubmitInteraction.fields.getTextInputValue("reactionInput");

    const message = await channel.messages.fetch(messageId);

    message.react(emoji).then(() => {
		modalSubmitInteraction.reply({
			content: "Reaction successful",
			ephemeral: true
		})
	}).catch((err) => {
		modalSubmitInteraction.reply({
			content: "Invalid emoji. Please use a single valid emoji.",
			ephemeral: true
		})
	})
  },
};
