const { Client } = require('discord.js')

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client
     */
    execute(client) {
        console.log(`${client.user.username} est en ligne`)
    }
}