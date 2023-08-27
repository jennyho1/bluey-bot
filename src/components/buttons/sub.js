module.exports = {
	data: {
		name: 'sub'
	},
	async execute(interaction, client) {
		await interaction.reply({
			content:"YOU PRESSED THE BUTTON"
		})
	}
}