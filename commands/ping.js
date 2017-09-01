/**
 * @file ping command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

exports.run = async message => {
  try {
    await message.edit('Pong!');
    await message.edit(`Time: ${message.editedTimestamp - message.createdTimestamp}ms`);
  }
  catch (e) {
    message.client.log.error(e);
  }
};

exports.config = {
  enabled: true
};

exports.help = {
  name: 'ping',
  description: 'Pings Discord gateway to find the response time.'
};
