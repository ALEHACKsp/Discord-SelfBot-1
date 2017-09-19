/**
 * @file embed command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

exports.run = async message => {
  try {
    await message.edit({ embed: { description: message.content } });
  }
  catch (e) {
    message.client.log.error(e);
  }
};

exports.config = {
  enabled: true
};

exports.help = {
  name: 'embed',
  description: 'Sends the message as an embed.'
};
