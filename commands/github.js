const Util = require('./../modules/util')
const Logger = new Util.Logger();

/**
 * Command: github
 * Description: Sends a link to the GitHub repository of this bot
 * */
module.exports = {
	name: 'github',
	description: 'DESCRIPTION',
	execute(message, args, config, clusterId) {
		Logger.info(`${config.PREFIX + this.name} was used. (Cluster ${clusterId})`)

		if(message.deletable) message.delete();

		message.author.send('Here\'s the link to the GitHub repository: https://github.com/julianYaman/wikipedia-bot')
	},
}
