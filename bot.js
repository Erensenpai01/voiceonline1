const voiceChannel = '689102268670542006'; 

const membersSize = (client) => {
 return client.channels.filter(c => c.type === "voice").map(c => c.members.size).reduce((a,b) => {return a + b}, 0);
}


client.on('ready', () => {
client.channels.get(voiceChannel).setName(`Voice Online: [${membersSize(client)}]`)
}); 

client.on('voiceStateUpdate', () => {
client.channels.get(voiceChannel).setName(`Voice Online: [${membersSize(client)}]`)
})
