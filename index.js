 //Source Code V12//

const express = require('express');
const app = express();
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.get('/', (req, res) => res.send('The Bot On Fire'));
app.listen(3000, () => {
  console.log('\033[1;34m Egypt Team Up');
});

const Discord = require('discord.js');
//const { parse } = require('universal-emoji-parser');

const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const ms = require("ms");
const db = require('quick.db');
require("events").EventEmitter.defaultMaxListeners = 50000;
const linereply = require('discord-reply');
const disbut = require('discord-buttons');
const probot = require("probot-tax");

//////Done Source Code V12//////

//////Defentions//////

const prefix = "+" // Bot Prefix
const color = "0a0a0a" // Embed Color
const line = "https://cdn.discordapp.com/attachments/1230095993731682324/1232090120447066192/standard_9.gif?ex=662830d7&is=6626df57&hm=ed6d3b31c273257e14c549d3f7d1d8f0b6c93bc03585ac1cc7f90bd3d7045d86&"// Server Line
const orderticket = "1186430939698565291"
const applyticket = "1156644160963620884"
const transferroom = "1230171959971807315"// Transfer Room Id
const voiceroom = "1232322251919986790"// First Voice Room Id 
const taxroom = "1148728515043278878" // Tax Room Id
const link = "https://discord.gg/rKYc2sbhCC"// Server Link 
const servertag = "KOS丶"// Server Tag
const testrole1 = "1221821284791353394"
const feedbackroom = "1156644484206035066"// Feedback Room Id
const guildid = "1148726581758541925"// Server Id
const channelid1 = "1186431629892272288"// Auto Line Channel 1 Id
const channelid2 = "1148927763164708884"// Auto Line Channel 2 Id
const channelid3 = "1158025023337021551"// Auto Line Channel 3 Id
const channelid4 = "1231194138431721502"// Auto Line Channel 4 Id
const channelid5 = ""// Auto Line Channel 5 Id
const channelid6 = ""// Auto Line Channel 6 Id
const channelid7 = ""// Auto Line Channel 7 Id
const sug = "1232324582426411088"// Auto Line Suggestion Room Id
const owo = ("<@&1232333070804451421>")
const credit = ("<@&1232330616209670307>")// Credit Seller Role Id
const bot = ("<@&1232330893507559585>")// Bot Seller Role Id
const nitro = ("<@&1232330974768005210>")// Nitro Seller Role Id
const visa = ("<@&1232331165973610610>")// Visa Seller Role Id
const boost = ("<@&1232331337025982627")// Boost Seller Role Id
const netflix = ("<@&1232331555322466434>")// Netflix Seller Role Id
const insta = ("<@&1232331923817500743>")// Insta Seller Role Id
const uc = ("<@&1232331838698033252>")// Uc Seller Role Id
const tiktok = ("<@&1232332074908909739>")// Tiktok Seller Role Id
const design = ("<@&1232332162959806494>")// Design Seller Role Id
const spotify = ("<@&1232332374792998953>")// Spotify Seller Role Id
const shahid = ("<@&1232332374751055935>") // Shahid Seller Role Id
const offersrole = ("<@&1153941986458468382>") //Role Id
const offersroom = "1186431629892272288"//Offers Room Id
const teamoffersroom = ""//Team Offers Room Id
const AutoReactId = "1186431629892272288"//Auto React Channel Id
const applycatagory = "1156644160963620884"//Apply Catagory Id
const ordercatagory = "1166480924100268139"//Order Catagory Id

//////Done Defentions//////
client.on('ready', () => {
  console.log(`My Name : ${client.user.username}`);
  console.log(`My Prefix : ${prefix}`);
  console.log(`My Tag : ${client.user.tag}`);
  console.log(`Iam In : ${client.guilds.cache.size} ServerS`);
  console.log(`Iam Viewing : ${client.users.cache.size} UserS Now`);
  console.log(`Iam Seeing : ${client.channels.cache.size} ChannelS Now`);
  console.log(`Iam Developed By : Kosmp Team`)
});
const status = [`Dev By KOSMP STORE`, `ALONE UP`, `Feeling Lost? ${prefix}help`] //Bot Stats , Change Every 5 Seconds
client.on("ready", () => {
  setInterval(function() {
    const random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random], { type: `STREAMING`, url: `https://www.twitch.tv/kosmp` });
  }, 5000);
})
//////Ready , Stats//////

//Welcome , Set-Welcome//

client.on("message", KosmpTeam => {
  let wprefix = prefix
  if (KosmpTeam.content.startsWith(wprefix + "set-welcome")) {
    if (!KosmpTeam.guild.member(KosmpTeam.author).hasPermission('ADMINISTRATOR'))
      return KosmpTeam.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```You Don't Have Permissions To Do That ❌```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      );
    if (!KosmpTeam.guild.me.hasPermission('ADMINISTRATOR'))
      return KosmpTeam.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```You Don't Have Permissions To Do That ❌```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      ); {
      let wmochakis = KosmpTeam.mentions.channels.first()

      if (!wmochakis) {
        return KosmpTeam.channel.send(
          new Discord.MessageEmbed()
            .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setDescription(`**Please Mention Welcome Channel**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        ).then(r => {
          r.react("")///react here
        })
      }
      db.set(`welcomechannel_${KosmpTeam.guild.id}`, wmochakis.id)
      KosmpTeam.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(`> **done Set Welcome Channel To ${wmochakis}**
> **Channels : ${wmochakis}**`)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      ).then(r => {
        r.react("")//react here
      })
    }
  }
})


client.on("guildMemberAdd", (memberadd, type, invite) => {
  let channelget = db.get(`welcomechannel_${memberadd.guild.id}`);
  let messagechannel = client.channels.cache.get(channelget);
  if (channelget === null) {
    return;
  }
  messagechannel.send(`${memberadd.user}`,
    new Discord.MessageEmbed()
      .setColor(color)
      .setThumbnail(memberadd.user.avatarURL({ dynamic: true }))

      .setFooter(memberadd.user.username, memberadd.user.avatarURL({ dynamic: true }))

      .setAuthor(memberadd.user.username, memberadd.user.avatarURL({ dynamic: true }))
      .setTimestamp()
      .setDescription(`
> \`#\` ** <a:WeoWeo:1022151731813031996> Welcome ${memberadd.user} <a:WeoWeo:1022151731813031996> **
> 
> \`#\` ** <a:acupcakeavatar0:1022159293149098005> Welcome To : \`${memberadd.guild.name}\` <a:Yred:1032658857673117737>**
> 
> \`#\` ** <a:arolow:1022159492999290950> If You Want To Order Anything Go To <#${orderticket}> <a:Yred:1032658857673117737> **
> 
> \`#\` <a:vms_offers:1022159840669347981> **If You Are Interesting To Join Us Go To <a:arolow:1022159492999290950><#${applyticket}> <a:P_1:1022160118743306342> **
> 
> \`#\` ** Enjoy With Us <3 <:emoji_10:1022169069971058790> **
> 
> \`#\` ** <a:a_tada:1022160550991503421>*You Are Member Number ${memberadd.guild.memberCount} ! <a:a_tada:1022160550991503421> **`)
      .setImage(line)
  ).then(Voxm => {
    Voxm.react("<:emoji_10:1022169069971058790>");
  })
})

//done Welcome , Set-Welcome Auto React , Auto Line , Line , Line After Transfer

//Auto React
client.on("message", async KosmpTeam => {
  if (KosmpTeam.channel.id != `${AutoReactId}`) return;
  if (KosmpTeam.author.id === client.user.id) return;
  KosmpTeam.react("1093522604737962104") //react
  KosmpTeam.react("1093152133177684119") //react 2
})
//Auto Line
client.on("message", async KosmpTeam => {

  if (KosmpTeam.guild.id != guildid) return;
  if (KosmpTeam.channel.id != channelid1) return;
if (KosmpTeam.author.id === client.user.id) return;
  if (!KosmpTeam.author.bot) {
    var embed = new Discord.MessageEmbed()
      .setImage(line)
      .setColor(color)

    KosmpTeam.channel.send(embed);
  }
});
client.on("message", async KosmpTeam => {

  if (KosmpTeam.guild.id != guildid) return;
  if (KosmpTeam.channel.id != channelid2) return;
  if (KosmpTeam.author.id === client.user.id) return;
  if (KosmpTeam.author.send) {
    var embed = new Discord.Message()
      .setImage(line)
      .setColor(color)

    KosmpTeam.channel.send(embed);
  }
});
client.on("message", async KosmpTeam => {

  if (KosmpTeam.guild.id != guildid) return;
  if (KosmpTeam.channel.id != channelid3) return;
  if (KosmpTeam.author.id === client.user.id) return;
  if (KosmpTeam.author.send) {
    var embed = new Discord.MessageEmbed()
      .setImage(line)
      .setColor(color)

    KosmpTeam.channel.send(embed);
  }
});
client.on("message", async KosmpTeam => {

  if (KosmpTeam.guild.id != guildid) return;
  if (KosmpTeam.channel.id != channelid4) return;
  if (KosmpTeam.author.id === client.user.id) return;
  if (KosmpTeam.author.send) {
    var embed = new Discord.MessageEmbed()
      .setImage(line)
      .setColor(color)

    KosmpTeam.channel.send(embed);
  }
});
client.on("message", async KosmpTeam => {

  if (KosmpTeam.guild.id != guildid) return;
  if (KosmpTeam.channel.id != channelid5) return;
  if (KosmpTeam.author.id === client.user.id) return;
  if (KosmpTeam.author.send) {
    var embed = new Discord.MessageEmbed()
      .setImage(line)
      .setColor(color)

    KosmpTeam.channel.send(embed);
  }
});
client.on("message", async KosmpTeam => {

  if (KosmpTeam.guild.id != guildid) return;
  if (KosmpTeam.channel.id != channelid6) return;
  if (KosmpTeam.author.id === client.user.id) return;
  if (KosmpTeam.author.send) {
    var embed = new Discord.MessageEmbed()
      .setImage(line)
      .setColor(color)

    KosmpTeam.channel.send(embed);
  }
});
client.on("message", async KosmpTeam => {

  if (KosmpTeam.guild.id != guildid) return;
  if (KosmpTeam.channel.id != channelid7) return;
  if (KosmpTeam.author.id === client.user.id) return;
  if (KosmpTeam.author.send) {
    var embed = new Discord.MessageEmbed()
      .setImage(line)
      .setColor(color)

    KosmpTeam.channel.send(embed);
  }
});
client.on("message", async KosmpTeam => {

  if (KosmpTeam.guild.id != guildid) return;
  if (KosmpTeam.channel.id != sug) return;
  if (KosmpTeam.author.id === client.user.id) return;
  if (KosmpTeam.author.send) {
    var embed = new Discord.MessageEmbed()
      .setTitle(`> **Thanks For Your Suggestion**
            > **And For Using ${KosmpTeam.guild.name}**`)
      .setImage(line)
      .setColor(color)
      .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
      .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
      .setTimestamp()
    KosmpTeam.channel.send(embed)
  }
})
client.on("message", async KosmpTeam => {

  if (KosmpTeam.guild.id != guildid) return console.log(`Invalid Guild Id | No Enterd Guild Id`)
  if (KosmpTeam.channel.id != feedbackroom) return;
  if (KosmpTeam.author.id === client.user.id) return;
  if (KosmpTeam.author.send) {
    var embed = new Discord.MessageEmbed()
      .setTitle(`> **Thanks For Your FeedBack**
      > **And For Using ${KosmpTeam.guild.name}**`)
      .setImage(line)
      .setColor(color)
      .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
      .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
      .setTimestamp()
    KosmpTeam.channel.send(embed)
  }
})
client.on("message", async KosmpTeam => {

  if (KosmpTeam.channel.id != `${feedbackroom}`) return;
  if (KosmpTeam.author.id === client.user.id) return;
  if (KosmpTeam.author.bot) return;
  KosmpTeam.react("<:check:1166486270072062112>") //react 1!
  KosmpTeam.react("<:check:1166486270072062112>") //react 2!
  KosmpTeam.react("<:check:1166486270072062112>") //react 3!
});
//Line
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === ('Line') || KosmpTeam.content === "LINE") {
    var embed = new Discord.MessageEmbed()
      .setImage(line)
      .setColor(color)
    KosmpTeam.delete();
    KosmpTeam.channel.send(embed);
  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === ('خط') || KosmpTeam.content === "line") {
    var embed = new Discord.MessageEmbed()
      .setImage(line)
      .setColor(color)
    KosmpTeam.delete();
    KosmpTeam.channel.send(embed);
  }
});
//Line After Transfer
let channelid = `${transferroom}`
client.on('message', KosmpTeam => {
  if (KosmpTeam.content.includes('has transferred')) {
    if (KosmpTeam.channel.id !== channelid) return;
    var embed = new Discord.MessageEmbed()
      .setImage(line)
      .setColor(color)

    KosmpTeam.channel.send(embed);
  }
});

//done Auto React , Auto Line , Line , Line After Transfer

//Voice Channel Join
setInterval(() => {
  const channelid = `${voiceroom}` //Voice Id
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  channel.join()
}, 1000);
//done Voice Channel Join Command

//Tax , Ntax , Tax Room

//Tax
client.on("message", KosmpTeam => {
  if (KosmpTeam.content.startsWith(prefix + 'tax')) {
    let args = KosmpTeam.content.split(" ").slice(1).join(" ");
    let args2 = args.replace("k", "000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace("b", "000000000").replace("B", "000000000")
    if (!args) return KosmpTeam.channel.send('احسبلك ضريبه الهوا يعني ولا اي؟؟')
    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .addFields(
        { name: " __The Price :__ ", value: `**> ${args}**` }
        ,
        {
          name: " __With Taxs :__ ", value: `**> ${probot.taxs(args2)}**`
        },
      )
      .setImage(line)
      .setFooter(`${KosmpTeam.author.username}`)
      .setThumbnail(KosmpTeam.author.displayAvatarURL())
      .setTimestamp()
    KosmpTeam.channel.send(embed);
  }
});
//Ntax
client.on("message", KosmpTeam => {
  if (KosmpTeam.content.startsWith(prefix + 'ntax')) {
    let args = KosmpTeam.content.split(" ").slice(1).join(" ");
    let args2 = args.replace("k", "000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace("b", "000000000").replace("B", "000000000")
    if (!args) return KosmpTeam.channel.send('احسبلك ضريبه الهوا يعني ولا اي؟؟')
    KosmpTeam.channel.send(`> ** ${probot.taxs(args2)}**`)
  }
});
//Tax Room
var taxid = `${taxroom}`
client.on('message', KosmpTeam => {
  if (KosmpTeam.channel.id !== taxid) return;
  if (KosmpTeam.author.bot) return;
  let args = KosmpTeam.content.split(" ").slice("0").join(" ");
  let args2 = args.replace("k", "000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace("b", "000000000").replace("B", "000000000")
  KosmpTeam.channel.send(`<:probot:1166866613795049542>> ** ${probot.taxs(args2)}**`)
});
//done Tax , Ntax , Tax Room 

//Server

client.on("message", KosmpTeam => {
  if (KosmpTeam.content === prefix + "server") {
    const onlinemembers = KosmpTeam.guild.members.cache.filter(m => m.presence.status === 'online' || 'dnd' || 'afk').size
    const textch = KosmpTeam.guild.channels.cache.filter(ch => ch.type === "text").size
    const voicech = KosmpTeam.guild.channels.cache.filter(ch => ch.type === "voice").size
    let embed = new Discord.MessageEmbed()
      .setTitle(`${KosmpTeam.guild.name}`)/Voxm
      .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
      .setColor(color)/Voxm
      .setFooter(KosmpTeam.guild.name, KosmpTeam.guild.iconURL({ dynamic: true }))
      .addField(`🆔 Server ID :`, KosmpTeam.guild.id, true)
      .addField(`📆 Created At :`, KosmpTeam.guild.createdAt, true)
      .addField(`👑 Owned by`, KosmpTeam.guild.owner, true)
      .addFields({ name: `👥  Members (${KosmpTeam.guild.members.cache.size})`, value: `${onlinemembers} Online\n${message.guild.premiumSubscriptionCount} Boosts ✨`, inline: true })
      .addField(`:speech_balloon: Channels (${KosmpTeam.guild.channels.cache.size})`, `${textch} Text | ${voicech} voice`, true)
      .addField('**🔐 Roles :** ', KosmpTeam.guild.roles.cache.size, true)
      .addFields({ name: `🌍 Others`, value: `**Region :** **${KosmpTeam.guild.region}**\n **Verification Level:** **${KosmpTeam.guild.verificationLevel}**`, inline: true })
      .setAuthor(KosmpTeam.guild.name, KosmpTeam.guild.iconURL({ dynamic: true }))
      .setTimestamp()/Voxm
    KosmpTeam.channel.send(embed);
  }
});
client.on("message", KosmpTeam => {
  if (KosmpTeam.content === ("s") || KosmpTeam.content == "S") {
    const onlinemembers = KosmpTeam.guild.members.cache.filter(m => m.presence.status === 'online' || 'dnd' || 'afk').size
    const textch = KosmpTeam.guild.channels.cache.filter(ch => ch.type === "text").size
    const voicech = KosmpTeam.guild.channels.cache.filter(ch => ch.type === "voice").size
    let embed = new Discord.MessageEmbed()
      .setTitle(`${KosmpTeam.guild.name}`)/Voxm
      .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
      .setColor(color)/Voxm
      .setFooter(KosmpTeam.guild.name, KosmpTeam.guild.iconURL({ dynamic: true }))
      .addField(`🆔 Server ID :`, KosmpTeam.guild.id, true)
      .addField(`📆 Created At :`, KosmpTeam.guild.createdAt, true)
      .addField(`👑 Owned by`, KosmpTeam.guild.owner, true)
      .addFields({ name: `👥  Members (${KosmpTeam.guild.members.cache.size})`, value: `${onlinemembers} Online\n${KosmpTeam.guild.premiumSubscriptionCount} Boosts ✨`, inline: true })
      .addField(`:speech_balloon: Channels (${KosmpTeam.guild.channels.cache.size})`, `${textch} Text | ${voicech} voice`, true)
      .addField('**🔐 Roles :** ', KosmpTeam.guild.roles.cache.size, true)
      .addFields({ name: `🌍 Others`, value: `**Region :** **${KosmpTeam.guild.region}**\n **Verification Level:** **${KosmpTeam.guild.verificationLevel}**`, inline: true })
      .setAuthor(KosmpTeam.guild.name, KosmpTeam.guild.iconURL({ dynamic: true }))
      .setTimestamp()/Voxm
    KosmpTeam.channel.send(embed);
  }
});

//done Server

//Link
client.on("message", KosmpTeam => {
  if (KosmpTeam.content == ("لينك") || KosmpTeam.content === "link") {
    KosmpTeam.channel.send(`
**<a:discordw:1232088204736335882> Welcome In __KING OF SAMP STORE__
<a:arrrow:1232088183190065162> link The Server : https://discord.gg/EKj9w6HsvH 
Enjoy Bro
<a:hearrt:1232088162684371005>**`)
  }
})

client.on("message", KosmpTeam => {
  if (KosmpTeam.content == ("Link") || KosmpTeam.content === "LINK") {
    KosmpTeam.channel.send(`**<a:discordw:1232088204736335882> Welcome In __KING OF SAMP STORE__
<a:arrrow:1232088183190065162> link The Server : https://discord.gg/EKj9w6HsvH 
Enjoy Bro
<a:hearrt:1232088162684371005>**`)
  }
})
//done Link Command

//Font
client.on("message", KosmpTeam => {
  if (KosmpTeam.content.startsWith(prefix + 'font1')) {
    let words = KosmpTeam.content.split(" ").slice(1).join(" ");
 let words2 = words.replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "??").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙") //Maximum 10 LetterS In The Single Word
    if (!words) return KosmpTeam.channel.send('اخترع انا كلمة ولا اي؟')
    KosmpTeam.channel.send(`${words2}`)
  }
});

//Font
client.on("message", KosmpTeam => {
  if (KosmpTeam.content.startsWith(prefix + 'font2')) {
    let words = KosmpTeam.content.split(" ").slice(1).join(" ");
    let words2 = words.replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭") //maximum 10 LetterS In The Single Word
    if (!words) return KosmpTeam.channel.send('اخترع انا كلمة ولا اي؟')
    KosmpTeam.channel.send(`${words2}`)
  }
});

//done Font

//Avatar

client.on("message", async KosmpTeam => {
  let command = KosmpTeam.content.toLowerCase().split(" ")[0]
  command = command.slice(prefix.length)
  if (command == "avatar") {
    let args = KosmpTeam.content.split(" ")
    let user = KosmpTeam.mentions.users.first() || client.users.cache.find(u => u.id === args[1]) || KosmpTeam.author
    if (args[1] !== "server") {
      KosmpTeam.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(user.username, user.avatarURL({ dynamic: true }))
          .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
          .setImage(user.avatarURL({
            dynamic: true,
            format: 'png',
            size: 1024
          }))
          .setFooter(user.username, user.avatarURL({ dynamic: true }))
          .setTimestamp()
      );
    } else if (args[1] === "server") {
      KosmpTeam.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(KosmpTeam.guild.name, KosmpTeam.guild.iconURL({ dynamic: true }))
          .setDescription(`**__[Avatar Link]__(${KosmpTeam.guild.iconURL({ dynamic: true })})**`)
          .setImage(KosmpTeam.guild.iconURL({
            dynamic: true,
            format: 'png',
            size: 1024
          }))
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
      );
    }
  }
});
//done Avatar

//User Id
client.on('message', KosmpTeam => {
  if (KosmpTeam.author.bot) return;
  if (KosmpTeam.content.startsWith(prefix + 'id')) {
    var user = KosmpTeam.guild.member(KosmpTeam.mentions.members.first() || KosmpTeam.author);
    const embed = new Discord.MessageEmbed()
      .setColor(color)
      .addField(`User Id : ( ${user.id} )`, `${user.user}`)
      .setThumbnail(user.user.avatarURL())
      .setFooter(`- Requested By: ${KosmpTeam.author.tag}`)
      .setImage(line)
    KosmpTeam.channel.send({ embed });
  }
});
//done User Id

//User
client.on('message', KosmpTeam => {
  if (KosmpTeam.content.startsWith(prefix + 'user')) {
    if (!KosmpTeam.guild) return;
    const args = KosmpTeam.content.split(" ")[1];
    let mID = KosmpTeam.guild.members.cache.get(args);
    let member;
    let user;
    if (args && !KosmpTeam.mentions.members.first() && !mID) return KosmpTeam.channel.send({ embed: { description: `😒 - **${KosmpTeam.author.username}**, **I can't find \`${args}\` in the server Please Join Your Id a Server**`, color: color } });
    if (KosmpTeam.mentions.members.first() || mID) {
      member = KosmpTeam.mentions.members.first() || mID;
      user = member.user;
    } else {
      member = KosmpTeam.member;
      user = KosmpTeam.author;
    }
    let embed = new Discord.MessageEmbed()
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setFooter(user.tag, user.avatarURL({ dynamic: true }))
      .setTitle("Info User")
      .addField('``Name``', ` ${KosmpTeam.author.tag} `, true)
      .addField('``ID``', ` ${KosmpTeam.author.id} `, true)
      .addField('``Created At``', ` ${KosmpTeam.author.createdAt.toLocaleString()} `, true)
      .addField(`Joined Discord :`, `\n\`\`${moment(user.createdAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(user.createdAt).fromNow()}**`, true)
      .addField(`Joined Server :`, `\`\`${moment(member.joinedAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(member.joinedAt).fromNow()}**`, true)
      .setAuthor(user.tag, user.avatarURL({ dynaimc: true }))
      .setColor(color)
      .setImage(line)
      .setTimestamp();
    KosmpTeam.channel.send(embed);
  }
})
//done User

//Ping

client.on('message', KosmpTeam => {
  if (KosmpTeam.content === prefix + 'ping') {
    KosmpTeam.channel.send('Pong').then(KosmpTeam => {
      KosmpTeam.edit(`\`\`\`js
Ping : ${client.ws.ping} ms\`\`\``);
    });
  }
});

///done Ping Command/

//Ban , Unban

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "ban")) {
    if (!normal.member.hasPermission('BAN_MEMBERS'))
      return normal.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("> **You Don't Have Permissions To Do That ❌**")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      )

    if (!normal.guild.me.hasPermission('BAN_MEMBERS'))
      return normal.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("> **I Don't Have Permissions To Do That ❌**")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      )
    const args = normal.content.slice(prefix.length).trim().split(/ +/g);
    var member = normal.mentions.members.first() || normal.guild.members.cache.get(args[1]) || normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
    if (!member) return normal.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`\`\`\`Please Mention User Or Type The User ID/Username ${args.slice(1).join(' ')}\`\`\` `)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    )
    if (member.id === normal.author.id) return normal.channel.send(`> **You Can't Ban Yourself 🙂**`)
    if (member.id === normal.guild.me.id) return normal.channel.send(`> **You Can't Ban Me 🙂**`)
    if (!member.bannable) return normal.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle(":rolling_eyes: I Couldn't Ban This User. Please Check My Permissions And Role Position.")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    )
    await member.ban({ reason: `He/She Was Bad!` })
    normal.channel.send(`> **✅ ${member.user.username} banned from the server! :airplane:**`)
  }
})
client.on("message", KosmpTeam => {
  let command = KosmpTeam.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!KosmpTeam.member.hasPermission("BAN_MEMBERS")) return;
    let args = KosmpTeam.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      KosmpTeam.guild.fetchBans().then(zg => {
        zg.cache.forEach(NoNo => {
          KosmpTeam.guild.members.unban(NoNo);
        });
      });
      return KosmpTeam.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return KosmpTeam.channel.send("**Please Type the member ID / all**");
    KosmpTeam.guild
      .members.unban(args)
      .then(m => {
        KosmpTeam.channel.send(`**✅ ${m.username} Unbanned!**`);
      })
      .catch(error => {
        KosmpTeam.channel.send(
          `**🙄 - I Can't Find \`${args}\` In The Ban list**`
        );
      });
  }
});

//done Ban , Unban Hide , Show 

client.on('message', KosmpTeam => {
  if (KosmpTeam.content === prefix + "hide") {
    if (!KosmpTeam.member.hasPermission('MANAGE_CHANNELS')) return KosmpTeam.channel.send(' ** You dont have `MANAGE_CHANNELS` permission **');
    let everyone = KosmpTeam.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    KosmpTeam.channel.createOverwrite(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      const embed = new Discord.MessageEmbed()
        .setColor(c)
        .setThumbnail(KosmpTeam.guild.iconURL())
        .setDescription(`>done Hide This Room ${KosmpTeam.channel}**`)
        .setFooter(`By ${KosmpTeam.author.username}`)
      KosmpTeam.channel.send(embed)
    })
  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === prefix + "show") {
    if (!KosmpTeam.member.hasPermission('MANAGE_CHANNELS')) return KosmpTeam.channel.send(' ** You dont have `MANAGE_CHANNELS` permission **');
    let everyone = KosmpTeam.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    KosmpTeam.channel.createOverwrite(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      const embed = new Discord.MessageEmbed()
        .setColor(c)
        .setThumbnail(KosmpTeam.guild.iconURL())
        .setDescription(`> done Show This Room ${KosmpTeam.channel}**`)
        .setFooter(`By ${KosmpTeam.author.username}`)
      KosmpTeam.channel.send(embed)
    })
  }
});

//done Hide , Show CommandS

//Setnick
client.on("message", KosmpTeam => {
  if (KosmpTeam.content.startsWith(prefix + "setnick")) {
    if (!KosmpTeam.member.hasPermission("CHANGE_NICKNAME")) return KosmpTeam.channel.send("```❌You Dont Have a Permissions To Do That```")
    const args = KosmpTeam.content.slice(prefix.length).trim().split(/ +/g);
    let member = KosmpTeam.mentions.users.first() || KosmpTeam.guild.members.cache.get(args[1]) || KosmpTeam.guild.members.cache.find(r => r.user.username === args[1])
    if (!member) return KosmpTeam.channel.send(`
\`\`\`js
Command : setnick 
تغيير لقب العضو.

الاستخدام:
${prefix}setnick (العضو)
${prefix}setnick (العضو) (اللقب الجديد)
\`\`\`
`)
    let nick = KosmpTeam.content.split(" ").slice(2).join(" ")
    let g = KosmpTeam.guild.members.cache.get(member.id)
    if (!nick) {
      g.setNickname(member.username)
    }
    g.setNickname(nick)
    const l = g.nickname || member.username
    let embed = new Discord.MessageEmbed()
      .setAuthor(KosmpTeam.member.user.username, KosmpTeam.member.user.avatarURL({ dynamic: true }))
      .setThumbnail(KosmpTeam.member.user.avatarURL({ dynamic: true }))
      .setTitle("**__done Set NickName__**")
      .addField(`**(User Nick Change)**`, `${member}`, true)
      .addField(`**(Befor)**`, `**${l}**`, true)
      .addField(`**(After)**`, `**${nick}**`, true)
      .addField(`**(From)**`, `**${KosmpTeam.author}**`, true)

      .setFooter(KosmpTeam.member.user.username, KosmpTeam.member.user.avatarURL({ dynamic: true }))
      .setTimestamp()
    KosmpTeam.channel.send(embed)
  }
})

//done Setnick

//Clear

client.on("message", KosmpTeam => {
  let command = KosmpTeam.content.toLowerCase().split(" ")[0];
  if (command == `${prefix}clear` || command == `مسح` || command == `clear`) {
    KosmpTeam.delete({ timeout: 0 })
    if (!KosmpTeam.channel.guild) return KosmpTeam.channel.send(`** This Command For Servers Only**`);
    if (!KosmpTeam.member.hasPermission('MANAGE_GUILD')) return KosmpTeam.channel.send(`> ** You don't have perms :x:**`);
    if (!KosmpTeam.guild.member(client.user).hasPermission('MANAGE_GUILD')) return KosmpTeam.channel.send(`> ** I don't have perms :x:**`);

    let args = KosmpTeam.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return KosmpTeam.channel.send(`\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``).then(messages => messages.delete(5000))
    if (!messagecount) messagecount = '100';
    KosmpTeam.channel.messages.fetch({ limit: 100 }).then(messages => KosmpTeam.channel.bulkDelete(messagecount)).then(messages => {
      KosmpTeam.channel.send(`\`\`\`js
${messages.size} عدد الرسائل التي تم مسحها
\`\`\``).then(messages =>
        messages.delete({ timeout: 3000 }))
    })
  }
})

//done Clear Command

//Lock , Unlock

client.on('message', KosmpTeam => {

  if (KosmpTeam.content.startsWith(prefix + 'lock')) {
    if (!KosmpTeam.guild.me.hasPermission('MANAGE_CHANNELS')) return KosmpTeam.channel.send('> **I Dont Have Permissions To Do That ❌**')
    if (!KosmpTeam.member.hasPermission('MANAGE_CHANNELS')) return KosmpTeam.channel.send('> **You Dont Have Permissions To Do That ❌**')
    KosmpTeam.channel.overwritePermissions([{
      id: KosmpTeam.guild.id,
      deny: ['SEND_MESSAGES'],
    }]).then(p => {
      var KosmpTeamessor = new Discord.MessageEmbed()
        .setColor(color)
        .setThumbnail(client.user.avatarURL())
        .setTitle(`Locked ${KosmpTeam.channel.name} `)
        .setDescription(`This Channel <#${KosmpTeam.channel.id}> Is Locked `)
      KosmpTeam.channel.send(KosmpTeamessor);
    })
  }
  if (KosmpTeam.content.startsWith(prefix + 'unlock')) {
    if (!KosmpTeam.guild.me.hasPermission('MANAGE_CHANNELS')) return KosmpTeam.channel.send('> **I Dont Have Permissions To Do That ❌**')
    if (!KosmpTeam.member.hasPermission('MANAGE_CHANNELS')) return KosmpTeam.channel.send('> **You Dont Have Permissions To Do That ❌**')

    KosmpTeam.channel.overwritePermissions([{
      id: KosmpTeam.guild.id,
      allow: ['SEND_MESSAGES'],
    }]).then(p => {
      var KosmpTeamessor = new Discord.MessageEmbed()
        .setColor(color)
        .setThumbnail(client.user.avatarURL())
        .setTitle(`Open ${KosmpTeam.channel.name}  `)
        .setDescription(`This Channel <#${KosmpTeam.channel.id}> Is Unlocked `)
      KosmpTeam.channel.send(KosmpTeamessor);
    })
  }
});
//done Lock , Unlock CommandS

//Re
client.on('message', async KosmpTeam => {
  if (KosmpTeam.content === "Re") {
    if (!KosmpTeam.channel.name.startsWith("ticket")) return;
    KosmpTeam.channel.setName(`by-${KosmpTeam.author.username}`)
  }
})
client.on('message', async KosmpTeam => {
  if (KosmpTeam.content === "Re") {
    if (!KosmpTeam.channel.name.startsWith("need")) return;
    KosmpTeam.channel.setName(`by-${KosmpTeam.author.username}`)
  }
})

client.on('message', async KosmpTeam => {
  if (KosmpTeam.content === "re") {
    if (!KosmpTeam.channel.name.startsWith("ticket")) return;
    KosmpTeam.channel.setName(`by-${KosmpTeam.author.username}`)
  }
})
client.on('message', async KosmpTeam => {
  if (KosmpTeam.content === "re") {
    if (!KosmpTeam.channel.name.startsWith("need")) return;
    KosmpTeam.channel.setName(`by-${KosmpTeam.author.username}`)
  }
})

client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "dn") {
    if (!KosmpTeam.channel.name.startsWith("need")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "dn") {
    if (!KosmpTeam.channel.name.startsWith("ticket")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "dn") {
    if (!KosmpTeam.channel.name.startsWith("by")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "Dn") {
    if (!KosmpTeam.channel.name.startsWith("need")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "Dn") {
    if (!KosmpTeam.channel.name.startsWith("ticket")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "Dn") {
    if (!KosmpTeam.channel.name.startsWith("by")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "done") {
    if (!KosmpTeam.channel.name.startsWith("need")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "done") {
    if (!KosmpTeam.channel.name.startsWith("ticket")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "done") {
    if (!KosmpTeam.channel.name.startsWith("by")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "done") {
    if (!KosmpTeam.channel.name.startsWith("need")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "done") {
    if (!KosmpTeam.channel.name.startsWith("ticket")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
client.on('message', async KosmpTeam => {

  if (KosmpTeam.content === "done") {
    if (!KosmpTeam.channel.name.startsWith("by")) return;
    KosmpTeam.channel.setName(`done`)
  }
})
//done Re Command

//Say , Say Embed
client.on("message", KosmpTeam => {
  let KosmpTeam1 = KosmpTeam.content.split(" ").slice('1').join(" ")

  if (KosmpTeam.author.bot) return;
  if (KosmpTeam.content.startsWith(prefix + 'say')) {
    if (!KosmpTeam.member.hasPermission('ADMINISTRATOR'))
      return KosmpTeam.channel.send('Permission required!"ADMINISTRATOR"')
    KosmpTeam.delete()
    KosmpTeam.channel.send(KosmpTeam1)

  }
});
client.on("message", KosmpTeam => {
  let KosmpTeam1 = KosmpTeam.content.split(" ").slice('1').join(" ")
  if (KosmpTeam.author.bot) return;
  if (KosmpTeam.content.startsWith(prefix + 's-embed')) {
    if (!KosmpTeam.member.hasPermission('ADMINISTRATOR'))
      return KosmpTeam.channel.send('Permission required! "ADMINISTRATOR"')
    KosmpTeam.delete()
    KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setColor(color)
        .setFooter(KosmpTeam.guild.name, KosmpTeam.guild.iconURL({ dynamic: true }))
        .setDescription(KosmpTeam1)
        .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
        .setImage(line)
    )
  }
});
//done Say , Say Embed

//Auto RespondS

client.on('message', KosmpTeam => {
  if (KosmpTeam.content === ('+')) {
    KosmpTeam.channel.send(`
   > **__<a:wcupcakeAyosh:1029437956529868800> رجاء التحويل هنا__**
   > 
   > **__<a:arolow:1022159492999290950> <#${transferroom}>__** `)
  }
})
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `${prefix}rep`) {
    KosmpTeam.channel.send(`
> ** \`-\` للتبليغ علي سيلر خاص باستور ${KosmpTeam.guild.name} قم باملاء الاستماره حتي نستطيع تعويضك **
> 
> ** صاحب البلاغ : **
> ** اسم السيلر فالديسكورد : **
> ** ايدي السيلر فالديسكورد : **
> ** القصه : **
> ** قم بارسال الدلائل مع دليل التحويل : **
    `)

  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `${prefix}tr`) {
    KosmpTeam.channel.send(`
> \`#\` ** يرجي دخول الموقع و التقاط صوره دليل تحويل من probot Transactions Log **
> 
> 
> \`-\` ** <a:Yred:1094716672365035530> https:probot.io/transactions **
    `)

  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `${prefix}mf`) {
    KosmpTeam.delete()
    KosmpTeam.channel.send(`
> **لمتابعة وتسهيل استخدام خدمة الوسطاء الخاصة بنا يرجي اكمال القائمة التالية :**
> 
> **اسم السلعة :**
> **ثمن السلعة :**
> **اي دي الطرف الثاني :**
    `)
  }


})
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `مقبول`) {
    KosmpTeam.channel.send(`
> **<a:Yred:1045242053803642971> تم قبولك معنا في سيرفر ${KosmpTeam.guild.name} استور نورتنا يغالي**
> **يرجي قراءة <#1063205718305550367>**
> **و <#1063205731056222238>**
> **<a:Yred:1094716672365035530> نتمني لك التوفيق **
`)
  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `Rafz`) {
    KosmpTeam.channel.send(`
> **پەسند نەکرا.**
> **<a:Yred:1094716672365035530> ببورە تۆ پەسند نەکرای تکایە جارێکی تر هەوڵ بدەوە.
**
`)
  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `tag`) {
    KosmpTeam.channel.send(`
> <a:Yred:1094716672365035530> KOS丶
`)
  }
});

//done Auto Responds Command

//Feedback

client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `Fb`) {
    KosmpTeam.channel.send(`
> **سوپاس بۆ هەڵبژاردنی __${KosmpTeam.guild.name}__**
> 
> **Thanks For Choosing __${KosmpTeam.guild.name}__**
> 
> **${KosmpTeam.author} رايك يهمنا , نتمني ان تعطي فيدباك بمنشن ل**
> 
> **Your Opinion Matters , Please Give Feedback With 𝐌𝐞𝐧𝐭𝐢𝐨𝐧 To ${KosmpTeam.author}**
> 
> **__Here__ : **
> **<ح#${feedbackroom}>**
> **<#${feedbackroom}>**`)
  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `فيدباك`) {
    KosmpTeam.channel.send(`
> **شكرا لاختيارك __${KosmpTeam.guild.name}__**
> 
> **Thanks For Choosing __${KosmpTeam.guild.name}__**
> 
> **${KosmpTeam.author} رايك يهمنا , نتمني ان تعطي فيدباك بمنشن ل**
> 
> **Your Opinion Matters , Please Give Feedback With 𝐌𝐞𝐧𝐭𝐢𝐨𝐧   To ${KosmpTeam.author}**
> 
> **__Here__ : **
> **<#${feedbackroom}>**
> **<#${feedbackroom}>**`)
  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `Fb`) {
    KosmpTeam.channel.send(`
> **شكرا لاختيارك __${KosmpTeam.guild.name}__**
> 
> **Thanks For Choosing __${KosmpTeam.guild.name}__**
> 
> **${KosmpTeam.author} رايك يهمنا , نتمني ان تعطي فيدباك بمنشن ل**
> 
> **Your Opinion Matters , Please Give Feedback With 𝐌𝐞𝐧𝐭𝐢𝐨𝐧   To ${KosmpTeam.author}**
> 
> **__Here__ : **
> **<#${feedbackroom}>**
> **<#${feedbackroom}>**`)
  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `fb`) {
    KosmpTeam.channel.send(`
> **شكرا لاختيارك __${KosmpTeam.guild.name}__**
> 
> **Thanks For Choosing __${KosmpTeam.guild.name}__**
> 
> **${KosmpTeam.author} رايك يهمنا , نتمني ان تعطي فيدباك بمنشن ل**
> 
> **Your Opinion Matters , Please Give Feedback With 𝐌𝐞𝐧𝐭𝐢𝐨𝐧   To ${KosmpTeam.author}**
> 
> **__Here__ : **
> **<#1166488132720537660>**`)
  }
});
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `Feedback`) {
    KosmpTeam.channel.send(`
> **شكرا لاختيارك __${KosmpTeam.guild.name}__**
> 
> **Thanks For Choosing __${KosmpTeam.guild.name}__**
> 
> **${KosmpTeam.author} رايك يهمنا , نتمني ان تعطي فيدباك بمنشن ل**
> 
> **Your Opinion Matters , Please Give Feedback With 𝐌𝐞𝐧𝐭𝐢𝐨𝐧   To ${KosmpTeam.author}**
> 
> **__Here__ : **
> **<#${feedbackroom}>**
> **<#${feedbackroom}>**`)
  }
});

///done Feedback Command/

//Mute , Unmute

client.on('message', async KosmpTeam => {
  if (KosmpTeam.content.startsWith(prefix + "mute")) {
    if (!KosmpTeam.member.hasPermission('MANAGE_ROLES')) return KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setColor(c)
        .setTitle(` \`\`\` You Dont Have a Permissions\`\`\``)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    )
    const args = KosmpTeam.content.slice(prefix.length).trim().split(/ +/g);
    var member = KosmpTeam.mentions.members.first() || KosmpTeam.guild.members.cache.get(args[1]) || KosmpTeam.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
    if (!member) return KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setColor(c)
        .setTitle(` \`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    )
    if (member.id === KosmpTeam.author.id) return KosmpTeam.channel.send(`**You can't mute yourself**`)
    if (member.id === KosmpTeam.guild.me.id) return KosmpTeam.channel.send(`**You can't mute me dumbass**`)
    let mutedrole = KosmpTeam.guild.roles.cache.find(ro => ro.name === 'muted')
    if (!mutedrole) {
      try {
        var createdrole = await KosmpTeam.guild.roles.create({
          data: {
            name: 'muted',
            permissions: [],
          }
        });
        KosmpTeam.guild.channels.cache.forEach(async (channel, id) => {
          await channel.createOverwrite(createdrole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          })
        })
      } catch (err) {
        console.log(err)
      }
    };
    let muterole = KosmpTeam.guild.roles.cache.find(r => r.name === 'muted')
    member.roles.add(muterole)
    KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setColor(c)
        .setDescription(`done Has Been Muted
BY : \`${KosmpTeam.author.username}\`**`)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()

    )
  }
})
client.on('message', async KosmpTeam => {
  if (KosmpTeam.content.startsWith(prefix + "unmute")) {
    var args = KosmpTeam.content.slice(prefix.length).trim().split(/ +/g);
    if (!KosmpTeam.member.hasPermission('MANAGE_ROLES')) return KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setColor(c)
        .setTitle(`\`\`\` You Dont Have a Permissions\`\`\``)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    );
    var member = KosmpTeam.mentions.members.first() || KosmpTeam.guild.members.cache.get(args[1]) || KosmpTeam.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
    if (!member) return KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setColor(c)
        .setTitle(`\`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    )
    let muterole = KosmpTeam.guild.roles.cache.find(r => r.name === 'muted')
    if (!member.roles.cache.has(muterole.id)) return KosmpTeam.channel.send(`**${member.user.username} is not Muted**`)
    await member.roles.remove(muterole);
    KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setColor(c)
        .setDescription(`done Has Remove Muted

BY : \`${KosmpTeam.author.username}\`**`)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    )
  }
})

//done Mute , Unmute CommandS/

//Apply , Wait.test

client.on("channelCreate", KosmpTeam => {
  if (KosmpTeam.parentID == `${applycatagory}`) {
    setTimeout(() => {
      KosmpTeam.send(new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`> <a:emoji_59:1022275453358198834> Apply List In ${KosmpTeam.guild.name} <a:ss_9:1022275685416443944> `)
        .setImage(line)
        .setTimestamp()
        .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setDescription(`
> <a:emoji_59:1022275453358198834> **Please Complete The List** <a:emoji_59:1022275453358198834>
>   
> <a:ss_9:1022275685416443944> **English** <a:ss_9:1022275685416443944> 
> 
> <a:redcheckshield:1022275866203537538>** 1- Please Write Your Name : ** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 2- Please Write your Age :** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 3- Please Write The Number Of Servers You Are Working In** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 4- Please Send Feedbacks , Number : 25** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 5- Please Write The Names Of Servers You Are Working in** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 6- Write Down The Names Of The Roles You Are Applying For** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 7- Please Transfer 100k As Collateral to Enter Our Team** <a:redcheckshield:1022275866203537538>
> 
> __**When Finished, Please Write The Following wait.test **__
> 
> <a:ss_9:1022275685416443944> **Arabic** <a:ss_9:1022275685416443944> 
> 
> <a:redcheckshield:1022275866203537538>** 1- اسمك** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 2- سنك** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 3- عدد سرفرات الي شغال فيها** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 4- اسماء السرفرات** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 5- قم بارسال 20 فيد باك من سرفرات مختلفه** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 6- اسماء الرولات الي هتقدم عليها** <a:redcheckshield:1022275866203537538>
> 
> <a:redcheckshield:1022275866203537538>** 7- يرجي تحويل 100 الف كضمان لدخول التيم الخاص بنا ** <a:redcheckshield:1022275866203537538>
> 
> __**عند الانتهاء من فضلك اكتب الاتي wait.test**__
 `)
      )
    }, 2000);
  }
});

client.on('message', KosmpTeam => {
  if (KosmpTeam.content === `tester`) {
    KosmpTeam.channel.send(`
      > __**شكرا لملأ الاستمارة ومن فضلك انتظر احد الادارة للقيام بالتست الخاص بك**__
      > 
      > 
      > <@&${testrole1}>
      > <@&${testrole2}>`)
  }
});

//done Apply , Wait.test CommandS

//Tickets

client.on("channelCreate", KosmpTeam => {
  if (KosmpTeam.parentID == `${ordercatagory}`) {
    setTimeout(() => {
      KosmpTeam.send(new Discord.MessageEmbed()
        .setColor(color)

        .setImage(line)
        .setTimestamp()
        .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))

        .setDescription(`
> \`#\` **Please Write Your Order**
> 
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
> 
> <:NetFlix:1086398930331377705> **netflix** <:NetFlix:1086398930331377705>
> 
> <:MV_Instagram2:1086399566410170369> **insta** <:MV_Instagram2:1086399566410170369>
> 
> <a:anitrogaming:1086400222793568347> **nitro** <a:anitrogaming:1086400222793568347>
> 
> **credit**
> 
> <:Design:1086400002869428316> **design** <:Design:1086400002869428316>
> 
> **uc**
> 
> <:936907505127280650:1086399783054344382> **visa** <:936907505127280650:1086399783054344382>
> 
> <:mzfdcs:1086399458134196274> **bot** <:mzfdcs:1086399458134196274>
> 
> <:tik:1086399915145576620> **tiktok** <:tik:1086399915145576620>
> 
> <:Spotify:1086399641093951621> **spotify** <:Spotify:1086399641093951621>
> 
> **shahid**
> 
> <:members:1086402357992095845> **vote** <:members:1086402357992095845>
> 
> <a:11pm_BoosterBadges:1086399496847622165> **boost** <a:11pm_BoosterBadges:1086399496847622165>
 `)
      )
    }, 2000);
  }
});
 boost
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy boost")

    KosmpTeam.channel.send(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@1063205549358993480>||`)
})




client.on('message', message => {
  if (message.content === "boost") {

    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("> \`#\` **Prices for : boosts** ")

        .setDescription(`
        \`*1\` <a:11pm_BoosterBadges:1086399496847622165> **__2boost 3 Month__ (__150k__)**  

        \`*2\`  <a:11pm_BoosterBadges:1086399496847622165> **__1boost 3 Month__ (__60k__)** 

**=============================**

> **If You Want to Buy Type**

__(buy boost)__
`)

        .setImage(line)

        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()


    )
  }
});


//insta 

client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy insta")

    KosmpTeam.channel.send(`\`#\`  **Please wait while the seller responds to you** 

 **Mention** : ||<@&1063205537623314443>||`)
})



client.on('message', message => {
  if (message.content === "insta") {

    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("> \`#\`**Prices for : instagram**")
        .setDescription(`
        \`*1\` <:MV_Instagram2:1086399566410170369> **__100 follower__ (__80k__)**  

        \`*2\` <:MV_Instagram2:1086399566410170369> **__200 follower__ (__120k__)** 

        \`*3\` <:MV_Instagram2:1086399566410170369> **__500 follower__ (__300k__)** 

        \`*4\` <:MV_Instagram2:1086399566410170369> **__1000 follower__ (__700k__)** 

**=============================**

> **If You Want to Buy Type**

__(buy insta)__
         `)

        .setImage(line)

        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()


    )
  }
}); // instaa 

// netflix


client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy netflix")

    KosmpTeam.channel.send(`> \`#\`  **Please wait while the seller responds to you** 

 **Mention** : ||<@&1063205544208384150>||`)
})
client.on('message', message => {
  if (message.content === "netflix") {

    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(color)

        .setTitle("> \`#\` **Prices for : Netflix** ")
        .setDescription(`

        \`*1\` <:NetFlix:1086398930331377705> ** 1 𝗠𝗼𝗻𝘁𝗵 = 90k ** 


        \`*2\` <:NetFlix:1086398930331377705> ** 1 𝘄𝗲𝗲𝗸 = 50k ** 


**=============================**

> **If You Want to Buy Type**

__(buy netflix)__
         `)

        .setImage(line)

        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()


    )
  }
}); // instaa 

 //tik tok 








// tik tok 
client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy tiktok")

    KosmpTeam.channel.send(`> \`#\` **Please wait while the seller responds to you** 

 **Mention** : ||<@&1063205540961980446>||`)
})



client.on('message', message => {
  if (message.content === "tiktok") {

    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("> \`#\`    **Prices for : Tik Tok** ")
        .setColor(color)
        .setDescription(`

        \`*1\` <:tik:1086399915145576620> **__25 followers __** = (**__00k__**)   

        \`*2\` <:tik:1086399915145576620> **__50 followers __** = (**__00k__**)   

        \`*3\` <:tik:1086399915145576620> **__100 followers __** = (**__00k__**)   

        \`*4\` <:tik:1086399915145576620> **__200 followers __** = (**__00k__**)

        \`*5\` <:tik:1086399915145576620> **__500 followers __** = (**__00k__**) 

        \`*6\` <:tik:1086399915145576620> **__1000 followers __** = (**__00k__**)          
**=============================**

> **If You Want to Buy Type**

__(buy tiktok)__
         `)

        .setImage(line)

        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()


    )
  }
});



//nitro

client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy nitro")

    KosmpTeam.channel.send(`> \`#\`  **Please wait while the seller responds to you** 

**Mention** : ||<@&1070263206372720730>||`)
})


client.on('message', message => {
  if (message.content === "nitro") {

    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("> \`#\` **Prices for : Nitro** ")
        .setColor(color)
        .setDescription(`

      \`*1\` <a:anitrogaming:1086400222793568347> **__3month Gaming__ ( __250k__**)

      \`*2\` <a:anitrogaming:1086400222793568347> **__1month Gaming__ ( __0k__**)       

      \`*3\` <a:anitrogaming:1086400222793568347> **__1month Classic__ ( __700k__**)      

**=============================**

> **If You Want to Buy Type**

__(buy nitro)__
         `)

        .setImage(line)

        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()


    )
  }
});





// visa  


client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy visa")

    KosmpTeam.channel.send(`> \`#\` **Please wait while the seller responds to you** 

 **Mention** : ||<@&1063205536235016192>||`)
})





client.on('message', message => {
  if (message.content === "visa") {

    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("> \`#\` **Prices for : Visa** ")
        .setColor(color)
        .setDescription(`

       \`*1\` <:936907505127280650:1086399783054344382> **__1__ = ( __30k__**)  

       \`*2\` **__Time Visa__** (**__24 hours__**) 


**=============================**

> **If You Want to Buy Type**

__(buy visa)__
         `)

        .setImage(line)

        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()


    )
  }
});

// spotify 


client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy spotify")

    KosmpTeam.channel.send(`> \`#\` **Please wait while the seller responds to you** 

 **Mention** : ||<@&1063205545168871554>||`)
})



client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy owo")

    KosmpTeam.channel.send(`> \`#\` **Please wait while the seller responds to you** 

 **Mention** : ||<@&1232333070804451421>||`)
})



client.on('message', message => {
  if (message.content === "spotify") {

    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("> \`#\`     **Prices for : Spotify** ")
        .setColor(color)
        .setDescription(`

      \`*1\` <:Spotify:1086399641093951621> **__𝗦𝗼𝗹𝗼 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 1 𝗠𝗼𝗻𝘁𝗵__ ( __100k__**)       

      \`*2\` <:Spotify:1086399641093951621> **__𝗗𝘂𝗼 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 1 𝗠𝗼𝗻𝘁𝗵__ (__160k__**) 

      \`*3\` <:Spotify:1086399641093951621> **__𝗙𝗮𝗺𝗶𝗹𝘆 𝗔𝗰𝗰𝗼𝘂𝗻𝘁__ ( __200k__**)       
**=============================**

> **If You Want to Buy Type**

__(buy spotify)__
         `)

        .setImage(line)

        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()


    )
  }
});

//design

client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy design")

    KosmpTeam.channel.send(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@1063205584058454067>||`)
})

client.on('message', message => {
  if (message.content === "design") {

    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("> \`#\` **Prices for : Design** ")
        .setDescription(`

      \`*1\` <:Design:1086400002869428316> **__Logo__ = (__200k__)**

      \`*2\` <:Design:1086400002869428316> **__Logo Gif__ = (__000k__)**  

      \`*3\` <:Design:1086400002869428316> **__Line__ = (__40k__)**    

      \`*4\` <:Design:1086400002869428316> **__Line Gif__ = (__150k__)**   

      \`*5\` <:Design:1086400002869428316> **__ Banner__ = (__250k__)**   

      \`*6\` <:Design:1086400002869428316> **__Scrim Photo__ = (__000k__)**   

      \`*7\` <:Design:1086400002869428316> **__Welcome__ = (__150k__)**   

      \`*8\` <:Design:1086400002869428316> **__Welcome Gif __ = (__000k__)**   

      \`*9\` <:Design:1086400002869428316> **__ Cover Youtube__ = (__000k__)**

      \`*10\` <:Design:1086400002869428316> **__ THUMBANAIL__ = (__000k__)**

      \`*11\` <:Design:1086400002869428316> **__ Info__ = (__90k__)**

      \`*12\` <:Design:1086400002869428316> **__ PROVE YOURSELF GIF__ = (__000k__)**

      \`*13\` <:Design:1086400002869428316> **__ EMOJI __ = (__00k__)**

      \`*14\` <:Design:1086400002869428316> **__ EMOJI GIF  __ = (__00k__)**

**=============================**

> **If You Want to Buy Type**

__(buy design)__
`)

        .setImage(line)


        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()

    )

  }
});

//vote 


client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy vote") {


    KosmpTeam.channel.send(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&1086241181249310804>||`)
  }
})


client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "vote") {

    KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setColor(color)
        .setThumbnail(client.user.avatarURL())
        .setTitle(`
> \`#-\`done Send all prices for __vote__** `)
        .setDescription(`

>  \`*1\` <:members:1086402357992095845> **__vote__ = __ 2k__**    

**=============================**

> **If You Want to Buy Type**

__(buy vote)__
         `)


        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()


    )
  }
})


client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "اوفر")

    KosmpTeam.channel.send("> \`#\` **برجاء منشن للشخص الذي كتب العرض و ارسال صوره العرض**")
})


client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "offer")

    KosmpTeam.channel.send("> \`#\` **Please tag the person who wrote the offer and send a picture of the offer**")
})

//bot

client.on('message', message => {
  if (message.content === "buy bot")

    message.channel.send(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&1063205530639798402>||`)
})


client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "bot") {

    KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("> \`#\` **Bot** ")
        .setThumbnail(KosmpTeam.guild.iconURL())
        .setDescription(`

         \`*1\` <:mzfdcs:1086399458134196274> **__System Vip__ = (__1.2m__)**

      \`*2\` <:mzfdcs:1086399458134196274> **__System__ = (__600k__)**  


      \`*3\` <:mzfdcs:1086399458134196274> **__Auto Line__ = (__80k__)**   


      \`*5\` <:mzfdcs:1086399458134196274> **__Auto React__ = (__70k__)**   

      \`*6\` <:mzfdcs:1086399458134196274> **__Tax__ = (__80k__)**   

      \`*7\` <:mzfdcs:1086399458134196274> **__broadcast__ = (__150k__)**   


      \`*8\` <:mzfdcs:1086399458134196274> **__Giveaway__ = (__200k__)**


**=============================**

> **If You Want to Buy Type**

__(buy bot)__
         `)




        .setImage(line)

        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()

    )

  }
});

//done bot

//shahid

client.on('message', KosmpTeam => {
  if (KosmpTeam.content === "buy shahid")

    KosmpTeam.channel.send(`\`#\`  **Please wait while the seller responds to you** 

 **Mention** : ||<@&1063205546179698698>||`)
})



client.on('message', message => {
  if (message.content === "shahid") {

    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`> \`#\`**Shahid Vip Prices In ${message.guild.name}**`)
        .setDescription(`
> 
> \`1\` <:Shahid:1093152803167404094>  **__1 Month__ = (__150k__)**  
> 
> \`2\` <:Shahid:1093152803167404094>  **__1 Week__ = (__60k__)** 
> 
> ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
> 
> **If You Want to Buy Type**
> 
> **__(buy shahid)__**
         `)

        .setImage(line)

        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()


    )
  }
});
// shahid 

//done Tickets

//Dm

client.on('message', KosmpTeam => {
  if (KosmpTeam.content.startsWith(prefix + "dm")) {
    if (!KosmpTeam.guild.member(KosmpTeam.author).hasPermission('ADMINISTRATOR'))
      return KosmpTeam.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
          .setTitle(`> \`#\` **You Don't Have Permissions To Use This Command**`)

          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      );
    if (!KosmpTeam.guild.me.hasPermission('ADMINISTRATOR'))
      return KosmpTeam.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
          .setColor("BlACK")
          .setTitle(`> \`#\` **You Don't Have Permissions To Use This Command**`)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      );
    const args = KosmpTeam.content.split(" ").slice(1).join(" ");
    if (!args) return KosmpTeam.channel.send(`برجاء كتابه الرساله التي سترسل الي الشخص`)
    const user = KosmpTeam.mentions.users.first();
    if (!user) return KosmpTeam.channel.send(`برجاء منشن الشخص`)
    user.send(
      new Discord.MessageEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setDescription(`> \`#\` **From : ${KosmpTeam.author}**


> \`#\` **Dm Message :** ${args}
`)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    ).catch(error => KosmpTeam.channel.send(
      new Discord.MessaegEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setDescription(`>  \`/\` **خاص الشخص الذي منشنتله الخاص بيه مقفول**
> \`#\` **Erorol User : <@${user.id}>**
> \`!\` **User Message : ${KosmpTeam.author}**`)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    ))
    KosmpTeam.delete({ timeout: 2000 })
    KosmpTeam.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`> \`#\` **تم ارسال الرساله بنجاح** 
>  \`#\` **العضو المرسل اليه : <@${user.id}>**
> \`#\` **الشخص الي بعت الرساله : ${KosmpTeam.author}**`)
    )

  }
});

//done Dm Command

//Come , نداء
client.on("message", async message => {
  if (!message.content.toLowerCase().startsWith(prefix + "come"))
    return;
  let args = message.content.slice(prefix.length).trim().split(' ')
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
  if (!member) return message.channel.send("**Please Mention Someone To Send The Come To Him .**")
  await member.send(`
> **Hello! ${member}** 
>      
>  **You Are Being Requested Here** **${message.channel}** `).then(() => {
    const embed = new Discord.MessageEmbed()

      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))

      .setColor(color)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(`
> <a:sus1:1022257134827745410>done Send Message To  ${member}**<a:sus1:1022257134827745410>
> 
> 
> 
> <a:SXB65_waiting:1022266035572854819>**Please Dont Spam And Wait Come Seller**<a:sus1:1022257134827745410>`)
      .setImage(line)
      .setFooter(`${message.guild.name}`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor(message.author.tag, message.guild.iconURL({ dynamic: true }))
      .setTimestamp()

    message.channel.send(embed)
  })

})


client.on("message", async KosmpTeam => {
  if (!KosmpTeam.content.toLowerCase().startsWith(prefix + "نداء"))
    return;
  let args = KosmpTeam.content.slice(prefix.length).trim().split(' ')
  let member = KosmpTeam.mentions.members.first() || KosmpTeam.guild.members.cache.get(args[1])
  if (!member) return KosmpTeam.channel.send("**Please Mention Someone To Send The Come To Him .**")
  await member.send(`
> **مرحبًا! ${member}** 
> 
>  **لقد تم طلبك هنا** **${KosmpTeam.channel}** `).then(() => {
    const embed = new Discord.MessageEmbed()

      .setAuthor(KosmpTeam.guild.name, KosmpTeam.guild.iconURL({ dynamic: true }))

      .setColor(color)
      .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
      .setDescription(`
> <a:sus1:1022257134827745410>** ${member} تم ارسال الرسالة الي **<a:sus1:1022257134827745410>
> 
> 
> 
>  <a:SXB65_waiting:1022266035572854819> **من فضلك انتظر السيلر بدون اسبام** <a:sus1:1022257134827745410>`)
      .setImage(line)
      .setFooter(`${KosmpTeam.guild.name}`)
      .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
      .setAuthor(KosmpTeam.author.tag, KosmpTeam.guild.iconURL({ dynamic: true }))
      .setTimestamp()
    KosmpTeam.channel.send(embed)
  })
})


//Server Banner

client.on('message', message => {
  if (message.content.startsWith(prefix + 's-banner')) {
    message.channel.send(
      new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle(message.guild.banner ? `**__${message.guild.name} Banner__** ` : `This Server Doesn't Have Any Banner`)
        .setImage(message.guild.bannerURL({ size: 1024 }) || null)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    )
  }
})

//done Server Banner


//help/

const but = require("discord-buttons")
but(client)
client.on("message", async message => {
  if (message.content === prefix + 'help') {
    let argss = message.content.split(" ").slice('').join(" ");
    const disbut = require('discord-buttons')

    let button = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel("Admin Commands")
      .setID("admin")
      .setEmoji(`<a:acupcakeavatar0:1022159293149098005>`)
    let button2 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel("Public Commands")
      .setID("public")
      .setEmoji(`<:members:1086402357992095845>`)
    let button3 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel("Store Commands")
      .setID('store')
      .setEmoji(`<a:928811563257839658:1086406602900377640>`)
    let button5 = new disbut.MessageButton()
      .setStyle('red')
      .setLabel("Cancel")
      .setID('cancel')
      .setEmoji(`❌`)
    let nn = await message.channel.send({
      embed: new Discord.MessageEmbed()
        .setDescription(`\`\`\`js
Const Server Name = " ${message.guild.name} "
Const Bot Name = " ${client.user.username} "
Const Prefix = " ${prefix} "
Const Developers = " g.0k🍁 , Dark Team "
Const Ping = " ${client.ws.ping} "
Const Channels Count = " ${client.channels.cache.size} "
\`\`\``)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))

        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))

        .setColor(color)
        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setImage(line)

      , buttons: [button, button2, button5, button3]
    })

    let collector = nn.createButtonCollector((button) => button.clicker.user.id === message.author.id)

    collector.on('collect', (b) => {
      if (b.id === 'admin') {
        nn.edit({
          embed: new Discord.MessageEmbed().setThumbnail(message.guild.iconURL({ dynamic: true }))


            .setColor(color)
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setImage(line)


            .setTitle(`> <​a:adm:1166500518525415526> **Admin Commands** <​a:adm:1166500518525415526>`)
            .setDescription(`
>  <​a:arrow2:1166502483582005248>> **${prefix}ban**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}unban**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}hide**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}show**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}lock**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}unlock**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}clear**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}setnick**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}add-emoji**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}sr**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}rr**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}say**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}s-embed**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}dm**
> 
>  <​a:arrow2:1166502483582005248>> **line**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}warn**
 `),

          buttons: [button, button2, button5, button3]
        })

      } else if (b.id === 'store') {
        nn.edit({
          embed: new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))


            .setColor(color)
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setImage(line)
            .setTitle(`> <a:emoji_159:1022106662934429696> **Store Commands** <a:emoji_159:1022106662934429696>`)
            .setDescription(`
>  <​a:arrow2:1166502483582005248>> **Re**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}come**
> 
>  <​a:arrow2:1166502483582005248>> **feedback**
> 
>  <​a:arrow2:1166502483582005248>> **+**
> 
>  <​a:arrow2:1166502483582005248>> **مقبول**
> 
>  <​a:arrow2:1166502483582005248>> **مرفوض**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}rep**
`)

          , buttons: [button, button2, button5, button3]
        })
      } else if (b.id === 'public') {
        nn.edit({
          embed: new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))


            .setColor(color)
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setImage(line)
            .setTitle(`> <a:emoji_159:1022106662934429696> **Public Cmds** <a:emoji_159:1022106662934429696>`)
            .setDescription(`
>  <​a:arrow2:1166502483582005248>> **${prefix}tax**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}server**
> 
> <​a:arrow2:1166502483582005248>> **${prefix}ping 
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}avatar**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}id**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}user**
> 
> <​a:arrow2:1166502483582005248>>** ${prefix}font1 , ${prefix}font2**
> 
> <​a:arrow2:1166502483582005248>>** ${prefix}s-banner
> 
> <​a:arrow2:1166502483582005248>>** ${prefix}profile
> 
> <​a:arrow2:1166502483582005248>>** ${prefix}allbans
    `),



          buttons: [button, button2, button5, button3]
        })

      } else if (b.id === 'store') {
        nn.edit({
          embed: new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))


            .setColor(color)
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setImage(line)
            .setTitle(`> **( __Store  Commands__ )**`)
            .setDescription(`
> <​a:arrow2:1166502483582005248>> **${prefix}come : (__لطلب شخص ال التيكت__)**
> <​a:arrow2:1166502483582005248>> **Fb  :  (__لطلب الفيدباك__)**



`)

          , buttons: [button, button2, button5, button3]
        })
      } else if (b.id === 'public') {
        nn.edit({
          embed: new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))


            .setColor(color)
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setImage(line)
            .setTitle(`> **( __Public  Commands__ )**`)
            .setDescription(`
> **<​a:arrow2:1166502483582005248>> ${prefix}avatar  : ( __لاظهار الافتار الخاص بيك__ )**
> <​a:arrow2:1166502483582005248>> **${prefix}user  : ( __لاظهار معلومات عنك__ )**
> <​a:arrow2:1166502483582005248>> **${prefix}server  : ( __لاظهار معلومات عن السرفر__ )**
> <​a:arrow2:1166502483582005248>> **${prefix}tax  : ( __لاظهار الضريبه __ )**
> <​a:arrow2:1166502483582005248>> **${prefix}s-banner  : ( __لاظهار بنر السرفر __ )**
> <​a:arrow2:1166502483582005248>> **${prefix}ping  : ( __ لاظهار بنج البوت __ )**
> <​a:arrow2:1166502483582005248>> **${prefix}profile  : ( __لاظهار البروفايل الخاص بك __ )**
> <​a:arrow2:1166502483582005248>> **${prefix}boost  : ( __لاظهار بوستات السيرفر __ )**
> <​a:arrow2:1166502483582005248>> **${prefix}allbans   : ( __لاظهار كام واحد متبند في السيرفر __ )**
    `)

            .setColor(color)

          , buttons: [button, button2, button5, button3]
        })
      } else if (b.id === 'cancel') {
        nn.delete({ timeout: 1000 })
        s.react("❌");
      }
    })
  }
})

// help 

client.on("message", async msg => {
  if (msg.content === prefix + 'voxm') {
let argss = msg.content.split(" ").slice('').join(" ");
    const disbut = require('discord-buttons')
    let button2 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("Admin Commands")
    .setID("admin")
    .setEmoji(`🤖`)
    let button = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("Public Commands")
    .setID("public")
        .setEmoji(`🌍`)
    let button5 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("Store Commands")
    .setID('store')
        .setEmoji(`🛒`)
    let button3 = new disbut.MessageButton()
 .setStyle('red')
    .setLabel("Cancel")
    .setID('cancel')
    .setEmoji(`❌`)
let nn = await msg.reply({embed :new Discord.MessageEmbed()
.setDescription(`\`\`\`js
Const Server Name = " ${msg.guild.name} "
Const Bot Name = " ${client.user.username} "
Const Prefix = " ${prefix} "
Const Developers = " V́óÓóx́Ḿ⚚🍁 , Kosmp Team "
Const Ping = " ${client.ws.ping} "
\`\`\``)
.setThumbnail(msg.guild.iconURL({dynamic:true}))

.setAuthor(msg.guild.name,msg.guild.iconURL({dynamic:true}))

.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)

, buttons : [button,button2,button5,button3]})

let collector = nn.createButtonCollector((button) => button.clicker.user.id === msg.author.id)

collector.on('collect', (b)=> {
  if (b.id === 'admin') {
    nn.edit({embed: new Discord.MessageEmbed().setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)


.setTitle(`> <a:emoji_159:1022106662934429696> **Admin Commands** <a:emoji_159:1022106662934429696>`)

 .setDescription(`
>  <​a:arrow2:1166502483582005248>> **${prefix}ban**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}unban**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}hide**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}show**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}lock**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}unlock**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}clear**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}setnick**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}add-emoji**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}sr**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}rr**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}say**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}s-embed**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}dm**
> 
>  <​a:arrow2:1166502483582005248>> **line**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}warn**
 `),
  buttons : [button,button2,button5,button3]})

  } else if (b.id === 'store') {
    nn.edit({embed :new Discord.MessageEmbed()
    .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
.setTitle(`> <a:emoji_159:1022106662934429696> **Store Cmds** <a:emoji_159:1022106662934429696>`)
.setDescription(`
>  <​a:arrow2:1166502483582005248>> **Re**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}come**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}Fb**
> 
>  <​a:arrow2:1166502483582005248>> **+**
> 
>  <​a:arrow2:1166502483582005248>> **مقبول**
> 
>  <​a:arrow2:1166502483582005248>> **مرفوض**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}rep**
`)    

     , buttons : [button,button2,button5,button3]})
} else if (b.id === 'public') {
    nn.edit({embed :new Discord.MessageEmbed()
        .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
    .setTitle(`> <a:emoji_159:1022106662934429696> **Public Commands** <a:emoji_159:1022106662934429696>`)
    .setDescription(`
>  <​a:arrow2:1166502483582005248>> **${prefix}tax**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}server**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}avatar**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}id**
> 
>  <​a:arrow2:1166502483582005248>> **${prefix}user**
> 
> <​a:arrow2:1166502483582005248>> **${prefix}font1 , ${prefix}font2**
> 
> <​a:arrow2:1166502483582005248>> **${prefix}s-banner**
> 
> <​a:arrow2:1166502483582005248>> **${prefix}ping**
> 
> <​a:arrow2:1166502483582005248>> **${prefix}profile**
> 
> <​a:arrow2:1166502483582005248>> **${prefix}allbans**
    `)

    .setColor(color)

     , buttons : [button,button2,button5,button3]})
  } else if (b.id === 'cancel') {
    nn.delete({timeout : 1000})
     s.react("❌");
}
})
  }
  })

//done Help Command

client.on('message', message => {
  if (message.content === (prefix + "allbans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`**Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});

//Role , Re-Role

client.on('message', async (KosmpTeam) => {
  if (!KosmpTeam.content.startsWith(prefix) || KosmpTeam.author.bot) return;
  const args = KosmpTeam.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'role' || command == 'sr') {
    if (KosmpTeam.channel.type === 'dm') return;
    if (!KosmpTeam.guild.member(KosmpTeam.author).hasPermission('ADMINISTRATOR'))
      return KosmpTeam.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
          .setColor(c)
          .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      );
    let user = KosmpTeam.mentions.members.first() || KosmpTeam.guild.members.cache.get(args[0])
    let member = KosmpTeam.guild.member(user)
    let role = KosmpTeam.mentions.roles.first() || KosmpTeam.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1])) || KosmpTeam.guild.roles.cache.get(args[1])
    if (!args[0]) return KosmpTeam.channel.send(new Discord.MessageEmbed()
      .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
      .setDescription(`> **${prefix}role __( @User | User Id )__ || __( Role Name | Id )__**`))
    if (!role) return KosmpTeam.channel.send(new Discord.MessageEmbed()
      .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
      .setDescription(`> \`\`\`Role Not Found!\`\`\` `))

    if (!member.roles.cache.has(role.id)) {
      member.roles.add(role.id)
      KosmpTeam.channel.send(new Discord.MessageEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setDescription(`> **The Role** **(${role.name})** **__Was Added To__** **(${member.user.tag})**`))
    }
  }
});
client.on('message', async (KosmpTeam) => {
  if (!KosmpTeam.content.startsWith(prefix) || KosmpTeam.author.bot) return;
  const args = KosmpTeam.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 're-role' || command == 'rr') {
    if (KosmpTeam.channel.type === 'dm') return;
    if (!KosmpTeam.guild.member(KosmpTeam.author).hasPermission('ADMINISTRATOR'))
      return KosmpTeam.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
          .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      );
    let user = KosmpTeam.mentions.members.first() || KosmpTeam.guild.members.cache.get(args[0])
    let member = KosmpTeam.guild.member(user)
    let role = KosmpTeam.mentions.roles.first() || KosmpTeam.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1])) || KosmpTeam.guild.roles.cache.get(args[1])
    if (!args[0]) return KosmpTeam.channel.send(new Discord.MessageEmbed()
      .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
      .setDescription(`> **${prefix}re-role __( @User | User Id )__ || __( Role Name | Id )__**`))
    if (!role) return KosmpTeam.channel.send(new Discord.MessageEmbed()
      .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
      .setDescription(`> \`\`\`Role Not Found!\`\`\` `))
    if (member.roles.cache.has(role.id)) {
      member.roles.remove(role.id)
      KosmpTeam.channel.send(new Discord.MessageEmbed()
        .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
        .setDescription(`> **The Role** **(${role.name})** **__Was Removed From__** **(${member.user.tag})**`))
    }
  }
});

//done Role , Re-Role CommandS

//warn

client.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "warn" || command == "w") {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```You are not addicted```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      );
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("``` ❌ I Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      )
    var user = message.mentions.users.first();

    if (!user)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```برجاء المنشن علي الشخص مع ذكر السبب | Please tag the person with the reason``` => warn (Mention) : (Reason) ")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
      )
        .split(" ")
        .slice(2)
        .join(" ");
    if (!args) return message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```Please write the reason```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
    )
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`**From : ${user.username}**

**Reason : ${args}**`)
    )
    let embed = new Discord.MessageEmbed()
      .setTitle(`>️ You have Warned
 ${args}`)

      .setColor(color)
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
      .setTimestamp()
    user.send(embed)
      .then(m => {
        var owners = message.guild.owner
        let embed = new Discord.MessageEmbed()
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setTitle('**__New warn __**')
          .addField("`From`", `**The person who made the warning : ${message.author}**`)
          .addField("`To Me`", `**I took the warning : ${user}**`, true)
          .addField("`Message`", `**The message is : ${args}**`)
          .addField("`Time`", `**Time Message : ${message.createdAt.toLocaleString()}**`)
          .setColor(color)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
          .setTimestamp()
        owners.send(embed);
      })
  }
});
//remove warn
client.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "remove-warn" || command === "rw") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let user = message.mentions.users.first()
    if (!user) return message.channel.send("❌ | **Mention a user**")
    if (user.bot) return message.channel.send("🙄 | **Bots don't have warns**")
    if (user.id == message.member.id) return message.channel.send("🙄 | **You can't remove from yourself**")
    if (!db.has(`warns_${user.id}`)) return message.channel.send("❌ | **This user doesn't have any warns**")
    db.subtract(`warns_${user.id}`, 1)
    message.channel.send(`> done removing 1 warn for ${user}**`)
  }
});

client.on("message", KosmpTeam => {
  if (KosmpTeam.content == ('تقديم') || KosmpTeam.content === "تقديم ") {
    KosmpTeam.channel.send(`
>  **اسمك**           

>  **سنك**

>  **عدد سرفرات الشغال فيها**

>  **قم بارسال 20 فيد باك من سرفرات مختلفه**

>  **اسماء السرفرات** 

>  **اسماء الرولات اللي هتقدم عليها**

**__ملحوظه!!__
عدم وجود فيدباك يؤدي إلى دفع ضمان 150k**`)
  }
})
//Spin

client.on("message", KosmpTeam => {
  if (KosmpTeam.content.toLowerCase() === (prefix + "spin")) {
    let KosmpItems = [`5k`, `10k`, `10k`, `10k`, `10k`, `10k`, `10k`, `5k`, `15k`, `20k`, `30k`, `visa`, `bot broadcast`, `netflix 1m`, `shahed 1m`, `10k`]
    let KosmpSpin = KosmpItems[Math.floor(Math.random() * KosmpItems.length)];
    if (!KosmpTeam.member.hasPermission('ADMINISTRATOR')) {
    return KosmpTeam.reply(`❌ | You Don't Have Permissions To Do That`)
    }
    let kosspin = new Discord.MessageEmbed()
      .setTitle(`> Congratulations! , You Win\n`)
.setDescription(`> **Your Prize Is :  ${KosmpSpin}**`)
      .setImage(line)
      .setColor(color)
      .setThumbnail(KosmpTeam.guild.iconURL({ dynamic: true }))
      .setAuthor(KosmpTeam.author.tag, KosmpTeam.author.avatarURL({ dynamic: true }))
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
      .setTimestamp()
    KosmpTeam.channel.send(kosspin)
  }
});

// tag
client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'tag') {

    let user = await message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
    if(!user) return await message.channel.send('user?');

    await user.setNickname(`DT丶${user.user.username}`,'idk').then(async () => {
      await message.channel.send(`**__done Adding Server Tag To ${user}__**`);
    }).catch(err => message.channel.send(`**You don't have Permission to do that**`));
  }
});

//offer

client.on('message', async function(Dragon) {
  if (Dragon.channel.id != `${teamoffersroom}`) return;
  const channel = client.channels.cache.find(channel => channel.id === `${offersroom}`);




  if (Dragon.author.bot) return;

  var args = Dragon.content.split(` `).slice(" ").join(" ");

  channel.send(`
> <a:emoji_159:1022106662934429696>   𝗧𝗵𝗲 𝗢𝗳𝗳𝗲𝗿 : 

**~~ ${args} ~~**





> <​a:arrow2:1166502483582005248>> **By :** <@${Dragon.author.id}>
> <​a:arrow2:1166502483582005248>> **Mention :** <@&${offersrole}> 
> <​a:arrow2:1166502483582005248>> **Order :** <#${orderticket}>
`)




    .then(msgr => {
msgr.react(`<a<a:emoji_9:979927058115362816>984639466037714974>`)  



})

  return Dragon.lineReplyNoMention("**𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐘𝐨𝐮𝐫 𝐎𝐟𝐟𝐞𝐫 <a:SXB65_waiting:1022266035572854819><:emoji_13:1062322340513464380>**").then(msg => {
msg.react(`<a:sus1:1022257134827745410>`)
    Message.send(line)
 client.channels.cache.get(`${offersroom}`).send(
    new Discord.Message()
    .setColor(emcolor)
    .setImage(line)
 )
})
})

//offer done






client.login(process.env.token)

// HOST TAYBATA TOKEN XAMT NABE
