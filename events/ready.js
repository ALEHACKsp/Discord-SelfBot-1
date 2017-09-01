/**
 * @file ready event
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

/**
 * @event ready
 * @param {Client} Client Discord.js Client Object
 * @returns {void}
 */
module.exports = Client => {
  Client.user.setPresence({
    status: Client.config.status,
    game: {
      name: Client.config.game,
      type: 0
    }
  });

  let readyMessage = `\nClient ID> ${Client.credentials.clientID}`
                   + `\nPrefix> ${Client.config.prefix}`
                   + `\n${Client.user.tag}> Logged in!`;
  Client.log.console(readyMessage);
};
