const http = require('http');/// </>~M̲e Ȼodes ᶜ
const express = require('express');/// </>~M̲e Ȼodes ᶜ
const app = express();/// </>~M̲e Ȼodes ᶜ
app.get("/", (request, response) => {/// </>~M̲e Ȼodes ᶜ
  response.sendStatus(200);/// </>~M̲e Ȼodes ᶜ
});/// </>~M̲e Ȼodes ᶜ
app.listen(process.env.PORT);/// </>~M̲e Ȼodes ᶜ
setInterval(() => {/// </>~M̲e Ȼodes ᶜ
  http.get(`http://اسم مشروع هنا.glitch.me/`);/// </>~M̲e Ȼodes ᶜ
}, 280000);
 
// </>~M̲e Ȼodes ᶜ// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');/// </>~M̲e Ȼodes ᶜ
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";/// </>~M̲e Ȼodes ᶜ
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")/// </>~M̲e Ȼodes ᶜ
console.log("========> TestBot <========")/// </>~M̲e Ȼodes ᶜ
console.log("=======> Token Bot **** <=======")/// </>~M̲e Ȼodes ᶜ
console.log("3")/// </>~M̲e Ȼodes ᶜ
console.log("2")/// </>~M̲e Ȼodes ᶜ
console.log("1")/// </>~M̲e Ȼodes ᶜ
console.log("====================================")/// </>~M̲e Ȼodes ᶜ
console.log("Bot Online 24/7");/// </>~M̲e Ȼodes ᶜ

client.on ("guildMemberAdd", member => {/// </>~M̲e Ȼodes ᶜ
  
   var role = member.guild.roles.find ("name", "اسم رتب تلقائى");/// </>~M̲e Ȼodes ᶜ
   member.addRole (role);/// </>~M̲e Ȼodes ᶜ
  /// </>~M̲e Ȼodes ᶜ
})   

const adminprefix = "برفكس";/// برفكس تغير الصور واسم وحالة/// </>~M̲e Ȼodes ᶜ
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');/// </>~M̲e Ȼodes ᶜ
    if (!devs.includes(message.author.id)) return;/// </>~M̲e Ȼodes ᶜ
   
if (message.content.startsWith(adminprefix + 'setgame')) {/// </>~M̲e Ȼodes ᶜ
  client.user.setGame(argresult);/// </>~M̲e Ȼodes ᶜ
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر بـلانـيـق الـى:large_blue_circle:**`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {/// </>~M̲e Ȼodes ᶜ
client.user.setUsername(argresult).then/// </>~M̲e Ȼodes ᶜ
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر اســم الـى**:pencil:`)/// </>~M̲e Ȼodes ᶜ
return message.reply("**لايـمـكـن تـغـيـر اسـم الان نـتـظـار سـاعـتـان**:stopwatch: ");/// </>~M̲e Ȼodes ᶜ
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {/// </>~M̲e Ȼodes ᶜ
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**__${argresult}__تــم تــغـيــر صــور الـى :camera_with_flash:**`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {/// </>~M̲e Ȼodes ᶜ
  client.user.setGame(argresult, "https://www.twitch.tv/idk");/// </>~M̲e Ȼodes ᶜ
    message.channel.sendMessage(`**__${argresult}__ تــم تـغــيــر حــالـه الــى :red_circle:**`)
}/// </>~M̲e Ȼodes ᶜ
});/// </>~M̲e Ȼodes ᶜ

client.on("message", async message => {/// </>~M̲e Ȼodes ᶜ
    if(message.content.startsWith(prefix + "Me")) {/// امر قائمه التغير /// </>~M̲e Ȼodes ᶜ
        let Me = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
            .setColor("RANDOM")/// </>~M̲e Ȼodes ᶜ
            .setThumbnail(message.author.avatarURL)/// </>~M̲e Ȼodes ᶜ
            .setDescription(`**__اوامـــر تــغـيـر احـلات بـوت + صـور + اسـم__**
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			***
			1-${prefix}setgame = الى تـغـيـر حـالـه الـى بـلانـيـق [ :large_blue_circle: ]
			
			2-${prefix}setT = الـى تـغـيـر حـالـه الــى تـويـتـش [ :red_circle: ]
			
			3-${prefix}setavatar = الـى تـغـيـر صـور [ :camera_with_flash: ]
			
			4-${prefix}setname = الـى تـغـيـر اسـم [ :pencil: ]
			***
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			**__مـسـوالـيـن تـغـيـر__**
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			1- <@541532350719459348>  `);/// </>~M̲e Ȼodes ᶜ
            message.channel.sendEmbed(Me);/// </>~M̲e Ȼodes ᶜ
    }
});/// </>~M̲e Ȼodes ᶜ


	  let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))/// </>~M̲e Ȼodes ᶜ
client.on("message", message => {/// </>~M̲e Ȼodes ᶜ
  if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
 if(!message.channel.guild)return;/// </>~M̲e Ȼodes ᶜ
  if (!profile[message.author.id]) profile[message.author.id] = {/// </>~M̲e Ȼodes ᶜ
    tite: 'HypeLC User',
    rep: 0,/// </>~M̲e Ȼodes ᶜ
   reps: 'NOT YET',/// </>~M̲e Ȼodes ᶜ
   lastDaily:'Not Collected',/// </>~M̲e Ȼodes ᶜ
    level: 0,/// </>~M̲e Ȼodes ᶜ
    points: 0,/// </>~M̲e Ȼodes ᶜ
    credits: 1,/// </>~M̲e Ȼodes ᶜ
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {/// </>~M̲e Ȼodes ᶜ
if (err) console.error(err);/// </>~M̲e Ȼodes ᶜ
})/// </>~M̲e Ȼodes ᶜ
});

client.on("message", (message) => {/// </>~M̲e Ȼodes ᶜ
  let men = message.mentions.users.first()/// </>~M̲e Ȼodes ᶜ
  if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
    if (message.author.id === client.user.id) return;/// </>~M̲e Ȼodes ᶜ
    if(!message.channel.guild) return;/// </>~M̲e Ȼodes ᶜ
if (message.content.startsWith(prefix + 'credit')) {/// امر توشف معاك كام كريدت
  if(men) {
  if (!profile[men.id]) profile[men.id] = {/// </>~M̲e Ȼodes ᶜ
   lastDaily:'Not Collected',/// </>~M̲e Ȼodes ᶜ
   credits: 1,/// </>~M̲e Ȼodes ᶜ
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, <a:586592233470296074:601050585596166144  balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your <a:586592233470296074:601050585596166144> balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {///امر تحصل على الكريدت/// </>~M̲e Ȼodes ᶜ


  if(profile[message.author.id].lastDaily != moment().format('day')) {/// </>~M̲e Ȼodes ᶜ
   profile[message.author.id].lastDaily = moment().format('day')/// </>~M̲e Ȼodes ᶜ
   profile[message.author.id].credits += 310/// </>~M̲e Ȼodes ᶜ
    message.channel.send(`:atm: |**${message.author.username} you collect your \`310\` <a:583285380443537408:594176247031005199> daily credits!**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily <a:583285380443537408:594176247031005199> credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");/// </>~M̲e Ȼodes ᶜ
let args = cont.slice(2);
let sender = message.author/// </>~M̲e Ȼodes ᶜ
if(message.content.startsWith(prefix + 'trans')) {/// امر تحويل الكريدت/// </>~M̲e Ȼodes ᶜ
if (!args[0]) {message.channel.send(`**Usage: ${prefix}trans @someone amount**`); 
         return;
           }
       /// </>~M̲e Ȼodes ᶜ
        if (isNaN(args[0])) {/// </>~M̲e Ȼodes ᶜ
            message.channel.send(`**Usage: ${prefix}trans @someone number**`);
            return; 
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone number**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : الملبغ**  \n \`${x[x3]}\` ** : اكتب الرقم التالي حتي تتم عملية التحويل **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()/// </>~M̲e Ȼodes ᶜ
            r.delete()
            message.delete()/// </>~M̲e Ȼodes ᶜ
            message.channel.sendEmbed(Embed)/// </>~M̲e Ȼodes ᶜ
        })/// </>~M̲e Ȼodes ᶜ
        r.then(s=> {
      var mando = message.mentions.users.id;/// </>~M̲e Ȼodes ᶜ
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}/// </>~M̲e Ȼodes ᶜ
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 50;/// </>~M̲e Ȼodes ᶜ
      profile[defineduser.id].credits += (+args[0]);/// </>~M̲e Ȼodes ᶜ
      profile[sender.id].credits += (-args[0]);/// </>~M̲e Ȼodes ᶜ
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(`:credit_card: | Transfer Receipt \`\`\`\`You have received ${args[0]} from user ${message.author.username} (ID: ${message.author.id})\`\`\`\``);
               message.channel.sendEmbed(Embed)
        })
        })
}
});
  /// كواد التكيت /// </>~M̲e Ȼodes ᶜ
client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
  if(message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
  if(message.content.startsWith(prefix + 'new')) {//تقدر تعدل علي الامر من هنا 
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**خطأ** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
 let log = message.guild.channels.find("name", "log");//تقدر تعدل علي اسم اللوق من هنا 
 let args = message.content.split(' ').slice(1).join(' ');
 let support = message.guild.roles.find("name","Support Team");
 let ticketsStation = message.guild.channels.find("name", "TICKETS");
 let reason = message.content.split(" ").slice(1).join(" ");
 if(!reason) reason = 'NONE';
 const embed = new Discord.RichEmbed()
 .setColor("#36393e")
 .addField(`**خطأ :interrobang:**`, `هذا الخادم لا يحتوي على \`Tickets Manger\` الدور الذي تم إجراؤه حتى لا يتم فتح التذكرة.`)
 .setTimestamp();
 if (!message.guild.roles.exists("name", "Tickets Manger")) return message.channel.send({ embed: embed });
 if(message.guild.channels.exists("name", `ticket-${message.author.username}`)) return message.channel.send(`**لديك بالفعل تذكرة مفتوحة :no_entry:**`);
 if(!ticketsStation) return message.channel.send(`**خطأ! **:interrobang:\ن من فضلك خلق \`category\` Called \`TICKETS\``)
 message.guild.createChannel(`ticket-` + message.author.username, "text").then(c => {
 c.setParent(ticketsStation);
 const done = new Discord.RichEmbed()
 .setColor(`GREEN`)
 .setTitle(`إنشاء تذكرة`)
 .setDescription(`تذكره : #${c.name}
 بواسطه :<@${message.author.id}>
 السبب : ${reason}`)
 .setTimestamp()
 .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033107635208193/563111847692337174.png`)
 .setFooter(message.author.tag)
 if(log) log.send(done)
 let role = message.guild.roles.find("name", "Tickets Manger");
 let role2 = message.guild.roles.find("name", "@everyone");
 c.overwritePermissions(role, {
 SEND_MESSAGES: true,
 READ_MESSAGES: true
 });/// </>~M̲e Ȼodes ᶜ
 c.overwritePermissions(role2, {
 SEND_MESSAGES: false,/// </>~M̲e Ȼodes ᶜ
 READ_MESSAGES: false/// </>~M̲e Ȼodes ᶜ
 });/// </>~M̲e Ȼodes ᶜ
               c.overwritePermissions(message.author, {
                   SEND_MESSAGES: true,/// </>~M̲e Ȼodes ᶜ
                   READ_MESSAGES: true/// </>~M̲e Ȼodes ᶜ
               });/// </>~M̲e Ȼodes ᶜ
 /// </>~M̲e Ȼodes ᶜ
            
 const eembed = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
 .setColor("#00ffd4")/// </>~M̲e Ȼodes ᶜ
 //.setThumbnail(message.author.avatarURL)
 .addField(`تم إنشاء تذكرتك :white_check_mark:`, `<#${c.id}>`)
 .setFooter(`${client.user.tag} بواسطه | ${dev_tag}`,client.user.displayAvatarURL);
 //////////////////
 message.channel.send({ embed: eembed });
 const embed = new Discord.RichEmbed()
 .setColor(0xCF40FA)
 .setThumbnail(message.author.avatarURL)
 .addField(`**مرحب**`, `<@${message.author.id}>`)
 .addField(`لنا **__1 , staff ,__** سوف أكون هنا قريبا للمساعدة.`, `** **`)/// </>~M̲e Ȼodes ᶜ
 .addField(`السبب :`, `${reason}`)
 .setFooter(`${client.user.tag} بواسطه | ${dev_tag}`,client.user.displayAvatarURL)/// </>~M̲e Ȼodes ᶜ
 .setTimestamp();
 c.send({ embed: embed }).then
 c.send(`<@${message.author.id}>`).then(b=>{/// </>~M̲e Ȼodes ᶜ
   b.delete();
 })
 }) .catch();
   }
   if(message.content.startsWith(prefix + 'close')) {/// </>~M̲e Ȼodes ᶜ
     
     if(message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
       if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`**هذا الأمر فقط للحصول على التذاكر**`)
 let close = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
 .addField(`type \`${prefix}close\` again to confirm`, `** **`)
 .setColor("#36393e");
 message.channel.sendEmbed(close) .then(m => {/// </>~M̲e Ȼodes ᶜ
 const filter = msg => msg.content.startsWith(prefix + 'close');/// </>~M̲e Ȼodes ᶜ
 if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return/// </>~M̲e Ȼodes ᶜ
 message.channel.awaitMessages(response => response.content === prefix + 'close', {/// </>~M̲e Ȼodes ᶜ
 max: 1,/// </>~M̲e Ȼodes ᶜ
 time: 20000,/// </>~M̲e Ȼodes ᶜ
 errors: ['time']/// </>~M̲e Ȼodes ᶜ
 })
 .then((collect) => {
 message.channel.delete();/// </>~M̲e Ȼodes ᶜ
 let Reason = message.content.split(" ").slice(1).join(" ");
 if(!Reason) Reason = 'NONE';/// </>~M̲e Ȼodes ᶜ
let closee = new Discord.RichEmbed()
.setColor(`BLUE`)/// </>~M̲e Ȼodes ᶜ
.setAuthor(`تذكرة مغلقة`)/// </>~M̲e Ȼodes ᶜ
.setDescription(`تذكره : #${message.channel.name}
بواسطه : <@${message.author.id}>
السبب : ${Reason}`)/// </>~M̲e Ȼodes ᶜ
.setTimestamp()/// </>~M̲e Ȼodes ᶜ
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
.setFooter(message.author.tag)/// </>~M̲e Ȼodes ᶜ
let log = message.guild.channels.find("name", "log");//تقدر تعدل علي اسم اللوق من هنا 
if(log) log.send(closee)/// </>~M̲e Ȼodes ᶜ
 }) .catch(() => {/// </>~M̲e Ȼodes ᶜ
 m.delete()/// </>~M̲e Ȼodes ᶜ
 .then(message.channel.send('انتهت مهلة التذاكر ، ولم يتم إغلاق التذكرة')) .then((c) => {
 c.delete(4000);/// </>~M̲e Ȼodes ᶜ
 })
 })/// </>~M̲e Ȼodes ᶜ
 })    
   } if(message.content.startsWith(prefix + `closeall`)) {
     if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**خطاء** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('أنت لا تفعل ذلك\'t have Permission **MANAGE_CHANNELS** to close all tickets');
      message.guild.channels.filter(c => c.name.toLowerCase().startsWith("ticket-")).forEach(channel => { channel.delete(); })
const ttt = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
.setColor("GREEN")/// </>~M̲e Ȼodes ᶜ
.addField(`**تم إغلاق جميع التذاكر :white_check_mark:**`,`** **`)/// </>~M̲e Ȼodes ᶜ
message.channel.send(ttt)/// </>~M̲e Ȼodes ᶜ
let log = message.guild.channels.find("name", "log");/// </>~M̲e Ȼodes ᶜ
const rr = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
.setColor("GREEN")/// </>~M̲e Ȼodes ᶜ
.addField(`**تم إغلاق جميع قنوات التذاكر :white_check_mark:**`, `**بواسطه <@${message.author.id}>**`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png`)
.setTimestamp();/// </>~M̲e Ȼodes ᶜ
if(log) return log.send(rr)/// </>~M̲e Ȼodes ᶜ
//
} if(message.content.startsWith(prefix + `add`)) {/// </>~M̲e Ȼodes ᶜ
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**خطأ** :octagonal_sign:\أنا دون\'t have MANAGE_CHANNELS إذن للقيام بذلك`)
 if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`**هذا الأمر فقط للحصول على التذاكر**`);
let member = message.mentions.members.first();
if(!member) return message.channel.send(`**يرجى ذكر المستخدم :x:**`);
if(message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`هذا العضو بالفعل في هذه التذكرة :rolling_eyes:`);
message.channel.overwritePermissions(member.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true });
message.channel.send(`**تم :white_check_mark:\وأضاف بنجاح <@${member.user.id}> إلى التذكرة**`)
let tgt = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`تمت إضافة عضو إلى بطاقة`)/// </>~M̲e Ȼodes ᶜ
.setDescription(`تذكره : #${message.channel.name}
عضو : ${member}
بواسطه : <@${message.author.id}>`)/// </>~M̲e Ȼodes ᶜ
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109539160066/563111851165220885.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");/// </>~M̲e Ȼodes ᶜ
if(log) return log.send(tgt);/// </>~M̲e Ȼodes ᶜ
} if(message.content.startsWith(prefix + `remove`)) {
 if(!message.channel.name.startsWith("ticket-")) {
     return message.channel.send(`**هذا الأمر فقط للحصول على التذاكر**`);/// </>~M̲e Ȼodes ᶜ
 }
 let member = message.mentions.members.first();
 if(!member || member.id === client.user.id) {
     return message.channel.send(`**يرجى ذكر المستخدم :x:**`);/// </>~M̲e Ȼodes ᶜ
 }
 if(!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
     return message.channel.send(`:x: **${member.user.tag} ليس في هذه التذكرة لإزالتها**`);
 }
 message.channel.overwritePermissions(member.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false });
 message.channel.send(`**تم :white_check_mark:\إزالة بنجاح \`${member.user.tag}\` من التذكرة**`)
 let gtg = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`تمت إزالة عضو من تذكرة`)/// </>~M̲e Ȼodes ᶜ
.setDescription(`تذكرة : #${message.channel.name}/// </>~M̲e Ȼodes ᶜ
عضو : ${member}
بواسطة : <@${message.author.id}>`)/// </>~M̲e Ȼodes ᶜ
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033111212949555/563111852352077886.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(gtg);/// </>~M̲e Ȼodes ᶜ
 }
 
 });
  
var  youssef = {};
client.on('guildMemberRemove', member => {/// </>~M̲e Ȼodes ᶜ
 youssef[member.id] = {roles: member.roles.array()};/// </>~M̲e Ȼodes ᶜ
});
client.on('guildMemberAdd', member => {/// </>~M̲e Ȼodes ᶜ
if(! youssef[member.user.id]) return;/// </>~M̲e Ȼodes ᶜ
console.log( youssef[member.user.id].roles.length);/// </>~M̲e Ȼodes ᶜ
for(let i = 0; i <  youssef[member.user.id].roles.length + 1; i++) {/// </>~M̲e Ȼodes ᶜ
member.addRole( youssef[member.user.id].roles.shift());/// </>~M̲e Ȼodes ᶜ
}
});
 
   /// كوادت الهلب (help  
	client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
    if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
     if (message.content === prefix + "help") {/// </>~M̲e Ȼodes ᶜ
 message.channel.sendMessage(`/// </>~M̲e Ȼodes ᶜ
**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**
 
 \`${prefix}Public \` :** اوامر العامه **

 \`${prefix}Admin \` : ** اوامر ادمنيه**

 \`${prefix}Games \` : **اوامر العاب**

 \`${prefix}Music \` : **اوامر موسيقى**

 \`${prefix}Protection \` : **اوامر الحمايه**

 \`${prefix}Credi \` : ** اوامر كريدت **

 \`${prefix}Ticket \` : ** اوامر تكيت **

 \`${prefix}Bc \` : **اوامـر بـرودكـاسـت**

**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);/// </>~M̲e Ȼodes ᶜ

  }/// </>~M̲e Ȼodes ᶜ
});/// </>~M̲e Ȼodes ᶜ
  
	client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
    if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
     if (message.content === prefix + "Bc") {/// </>~M̲e Ȼodes ᶜ
 message.channel.sendMessage(`
**<a:580460962293743617:594172504818319360> ❯  Bc |  اوامـر بـرودكـاسـت :
 
<a:1111:597802499633709076> \`${prefix}bca \` : بـرودكـاسـت الـكـل** 
||/// </>~M̲e Ȼodes ᶜ||`);

  }/// </>~M̲e Ȼodes ᶜ
});/// </>~M̲e Ȼodes ᶜ

client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
    if(!message.channel.guild) return;/// </>~M̲e Ȼodes ᶜ
let args = message.content.split(' ').slice(1).join(' ');/// </>~M̲e Ȼodes ᶜ
if (message.content.startsWith('=bc')){/// </>~M̲e Ȼodes ᶜ
  	let rank = message.guild.member(message.author).roles.find('name', 'Bc');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank .. **');
if(!message.author.id === '570753495481974797') return;
message.channel.sendMessage('** ~~#~~__D__one | <a:580460962293743617:594172504818319360><a:586820123281588226:602887804879503381>**')
client.users.forEach(m =>{/// </>~M̲e Ȼodes ᶜ
m.sendMessage(args)/// </>~M̲e Ȼodes ᶜ
})/// </>~M̲e Ȼodes ᶜ
}/// </>~M̲e Ȼodes ᶜ
});/// </>~M̲e Ȼodes ᶜ

  {}client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Protection") {
      message.author.send(`
**<a:585881512587821089:594176262256197642> ❯  Protection orders |  اوامر الحمايه :
                                                  
                                      
<a:1111:597802499633709076> | \`${prefix}limitsban \` : لتحديد عدد الباندات يلي بعدها يزيل رتبه من يحاول التهكير
<a:1111:597802499633709076> | \`${prefix}limitskick \` : لتحديد عدد الكيك بعدها يزيل رتبه من يحاول التهكير
<a:1111:597802499633709076> | \`${prefix}limitsroleD \` : تحديد عدد الرتب الممسوحة التي من بعدها يتم تنزيل رتبة من يحاول التهكير
<a:1111:597802499633709076> | \`${prefix}limitsroleC \` : تحديد عدد الرتب المنشئة التي من بعدها يتم تنزيل رتبة من يحاول التهكير
<a:1111:597802499633709076> | \`${prefix}limitschannelD \` : تحديد عدد الرومات التي من بعدها يتم تنزيل رتبة من يحاول التهكير
<a:1111:597802499633709076> | \`${prefix}limitstime \` : تحديد الوقت الذي من خلالة يتم التبنيد كـ مثال اذا شخص بند 5 في دقيقة تنزل رتبتة
<a:1111:597802499633709076> | \`${prefix}AntiBots On \` : الى منع دخول بوتات
<a:1111:597802499633709076> | \`${prefix}AntiBots Off \` : اغلاق خاصة منع دخول بوتات
**
||/// </>~M̲e Ȼodes ᶜ||                                      `);


  }
});

   {}client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Ticket") {
      message.author.send(`
**<:504716232004468757:601051859599228957> ❯  Ticket orders |  اوامر تكيت :
                                                  
                                      
<a:1111:597802499633709076> | \`${prefix}new \` : نشاء تكيت/تذكير
<a:1111:597802499633709076> | \`${prefix}close \` : اقفل تكيت/تذكير
<a:1111:597802499633709076> | \`${prefix}closeall \` : اقفل كل تكيت/تذكير
<a:1111:597802499633709076> | \`${prefix}add \` : الى اضافه عضو الى تكيت/تذكير
<a:1111:597802499633709076> | \`${prefix}remove \` : زاله عضو من تكيت/تذكير**
||/// </>~M̲e Ȼodes ᶜ||`);


  }
});



  {}client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Credi") {
      message.author.send(`
**<a:586592233470296074:601050585596166144> ❯  Orders Creed |  اوامر كريدت :**
                                                  
                                      
**<a:1111:597802499633709076> | \`${prefix}credit \` : ** معرف كام معاك من كريدت **
**<a:1111:597802499633709076> | \`${prefix}daily \` : ** ستلم الراتب اليومه **
**<a:1111:597802499633709076> | \`${prefix}trans \` : ** تحويل كريدت **
||/// </>~M̲e Ȼodes ᶜ||`);


  }
});

client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
  if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
  if (message.content === prefix + "Ticket") {/// </>~M̲e Ȼodes ᶜ
      message.channel.send(`**<a:591620992686620673:594172632610373672> | تم رسال اوامر الـتـكـيـت فـى الـخـاص ..**`);
  }
});
  
client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
  if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
  if (message.content === prefix + "Credi") {/// </>~M̲e Ȼodes ᶜ
      message.channel.send(`**<a:591620992686620673:594172632610373672> | تم رسال اوامر الـكـريـدت فـى الـخـاص ..**`);
  }
});
  
{}client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Public") {
      message.author.send(`
**<a:fight:601050745277775892> ❯  General orders | اوامر عامة :
                                                  
                                      
<a:1111:597802499633709076> \`${prefix}user \` : معلومات عن حسابك في الديسكورد
<a:1111:597802499633709076> \`${prefix}server \` : يعرض لك معلومات عن السيرفر
<a:1111:597802499633709076> \`${prefix}avatar \` : للعرض صورتك او صورة شخص فقط قم بعمل منشن له  
<a:1111:597802499633709076> \`${prefix}members \` : عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص
<a:1111:597802499633709076> \`${prefix}invites \` : لمعرفه كم شخص دعوت الي السيرفر 
**
 ||/// </>~M̲e Ȼodes ᶜ||                                     `);


  }
});

client.on("message", message => {
    if(message.content.startsWith(prefix + "nickall")) {
        let args = message.content.split(" ").slice(1).join(" ");/// </>~M̲e Ȼodes ᶜ
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return;/// </>~M̲e Ȼodes ᶜ
            if(!args) {/// </>~M̲e Ȼodes ᶜ
                return;
            }
        message.channel.send(`**Changes applied on __${message.guild.memberCount}__ members.**`);/// </>~M̲e Ȼodes ᶜ
                message.guild.members.forEach(codes => {/// </>~M̲e Ȼodes ᶜ
                    codes.setNickname(args + `  ${codes.user.username}`);/// </>~M̲e Ȼodes ᶜ
                })/// </>~M̲e Ȼodes ᶜ
    }/// </>~M̲e Ȼodes ᶜ
});/// </>~M̲e Ȼodes ᶜ

{}client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
  if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
  if (message.content === prefix + "Admin") {/// </>~M̲e Ȼodes ᶜ
      message.author.send(`
**<a:Gears:594177036054954004> ❯  Administrative Orders | اوامر ادارية :
                                                  
                                      
<a:1111:597802499633709076> \`${prefix}bc \` : برود كست بي امبيد وبدون امبيد
<a:1111:597802499633709076> \`${prefix}autorole \` : لمعرفه الميزه شغاله [+info] اعطاء رتبه تلقائيا 
<a:1111:597802499633709076> \`${prefix}unbanall \` : يقوم بفك البان عن جميع الاعضاء في السيرفر 
<a:1111:597802499633709076> \`${prefix}nickall \` : الشعار | Username يضع شعار لكل الاعضاء
<a:1111:597802499633709076> \`${prefix}setwlc \` : لتحديد روم الولكم
<a:1111:597802499633709076> \`${prefix}setlog \` : [log]يقوم بعمل روم  لتعرف كل شي عن الاعضاء من يث المغادره او الميوت الخ او اعمل روم
<a:1111:597802499633709076> \`${prefix}setwelcomer \` : <welcome> يجب ان يكون اسم روم الترحيب
<a:1111:597802499633709076> \`${prefix}clear <number> \` : البوت يمسح الرسال برقم حد اقصي 100 رساله
<a:1111:597802499633709076> \`${prefix}kick @user <reason> \` : طرد الشخص من السيرفر
<a:1111:597802499633709076> \`${prefix}ban @user <reason> \` : حضر الشخص من السيرفر
<a:1111:597802499633709076> \`${prefix}banlist \` : عدد الاشخاص المبندة** 
`);
    

  }
});

{}client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Admin") {
      message.author.send(`**
<a:Gears:594177036054954004> ❯  High administrative orders | اوامر ادارية عالية :
                                                  
<a:1111:597802499633709076> \`${prefix}role \` : لعطاء رتب للعضاء ويمكن التفرقه بين البوتات وللاشخاص
<a:1111:597802499633709076> \`${prefix}clear \` : لمسح الشات بعدد او بدون
<a:1111:597802499633709076> \`${prefix}unban \` : لفك البان لشخص عن طريق الايدي تبعه 
<a:1111:597802499633709076> \`${prefix}mute \` : يعطي ميوت كتابي للشخص
<a:1111:597802499633709076> \`${prefix}vkick \` : لطرد عضو من الروم الصوتي
<a:1111:597802499633709076> \`${prefix}vban \` : لحظر عضو من روم صوتي
<a:1111:597802499633709076> \`${prefix}vunban \` : لفك حظر عضو من الروم الصوتي
<a:1111:597802499633709076> \`${prefix}unmute \` : يفك ميوت كتابي للشخص 
<a:1111:597802499633709076> \`${prefix}mutevoice \` : يفك ميوت صوتي للشخص 
<a:1111:597802499633709076> \`${prefix}unmutevoice \` : يفك ميوت صوتي للشخص
<a:1111:597802499633709076> \`${prefix}giveaway \` : يسويلك قف اوي علي الشي الي تبيه
<a:1111:597802499633709076> \`${prefix}mutechannel \` : لقفل الشات علي الاعضاء في السيرفر  
<a:1111:597802499633709076> \`${prefix}unmutechannel \` : لفتح الشات لجميع الاعضاء في السيرفر
<a:1111:597802499633709076> \`${prefix}hide \` : لخفاء الشات
<a:1111:597802499633709076> \`${prefix}show \` : لي اظهار الشات
<a:1111:597802499633709076> \`${prefix}voic \` : فويس وان الاين**`);

  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Public") {/// </>~M̲e Ȼodes ᶜ
      message.channel.send(`**<a:591620992686620673:594172632610373672> | تم رسال اوامر العامه فى الخاص ..**`);
  }
});

client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
  if (message.author.bot) return;
  if (message.content === prefix + "Admin") {/// </>~M̲e Ȼodes ᶜ
      message.channel.send(`**<a:591620992686620673:594172632610373672> | تم رسال اوامر الادارة فى الخاص ..**`);
  }
});

client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
  if (message.author.bot) return;
  if (message.content === prefix + "Games") {/// </>~M̲e Ȼodes ᶜ
      message.channel.send(`**<a:591620992686620673:594172632610373672> | تم رسال اوامر العاب فى الخاص ..**`);
  }
});

client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
  if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
  if (message.content === prefix + "Music") {/// </>~M̲e Ȼodes ᶜ
      message.channel.send(`**<a:591620992686620673:594172632610373672> | تم رسال اوامر موسيقى فى الخاص ..**`);
  }
});

client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
  if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
  if (message.content === prefix + "Protection") {
      message.channel.send(`**<a:591620992686620673:594172632610373672> | تم رسال اوامر الحمايه فى الخاص ..**`);
  }
});/// </>~M̲e Ȼodes ᶜ
 
{}client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Games") {
      message.author.send(`
**<a:ngameboy:594189813750693902> ❯  Games Commands | أوامر الألعاب :
                                                  
                                
<a:1111:597802499633709076> \`${prefix}Tweets \` : كت تويت لعبة
<a:1111:597802499633709076> \`${prefix}Frankly \` : صراحه للعبه
<a:1111:597802499633709076> \`${prefix}punishment \` : عقاب لعبه
<a:1111:597802499633709076> \`${prefix}Select \` :  لو خيروك لعبه**
||/// </>~M̲e Ȼodes ᶜ||`);

  }
});

{}client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "Music") {
      message.author.send(`
**<a:kirbeats:594189093093769230> ❯  Music commands | اوامرالموسيقة :
                                                  
                                      
<a:1111:597802499633709076> \`${prefix}play \` : لتشغيل أغنية برآبط أو بأسم
<a:1111:597802499633709076> \`${prefix}stop \` : لإيقاف الاغاني
<a:1111:597802499633709076> \`${prefix}skip \` : لتجآوز الأغنية الحآلية 
<a:1111:597802499633709076> \`${prefix}pause \` : إيقآف الأغنية مؤقتا
<a:1111:597802499633709076> \`${prefix}resume \` : لموآصلة الإغنية بعد إيقآفهآ مؤقتا 
<a:1111:597802499633709076> \`${prefix}vol \` : مستوي الصوت 0/100
<a:1111:597802499633709076> \`${prefix}nowplaying / np \` : لمعرفة الأغنية المشغلة حآليا
<a:1111:597802499633709076> \`${prefix}queue \` : لرؤية قائمة الاغاني المنتظرة
<a:1111:597802499633709076> \`${prefix}ms7f \` : يجبلك المصحف كامل
<a:1111:597802499633709076> \`${prefix}quran \` : اوامر القران **
|| /// </>~M̲e Ȼodes ᶜ ||`);

  }
});
  /// كوادت العاب	
const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  شيء وكنت تحقق اللسان؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  أنا شخص ضعيف عندما؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  نظرة و يفسد الصداقة؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  شخص معك بالحلوه والمُره؟',/// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',/// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',/// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  صدفة العمر الحلوة هي اني؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  وش ناوي تسوي اليوم؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',/// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',/// </>~M̲e /// </>~M̲e Ȼodes ᶜȻodes ᶜ/// </>~M̲e Ȼodes ᶜ
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',/// </>~M̲e Ȼodes ᶜ
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',/// </>~M̲e Ȼodes ᶜ
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('=Frankly')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("")
 .setColor('RANDOM')
 .setDescription(`
**${Sra7a[Math.floor(Math.random() * Sra7a.length)]}**
`)
 .setImage("")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});
  
client.on('message', function(msg) {
  if(msg.content.startsWith ('=voic')) {
                let foxembed = new Discord.RichEmbed()
                      .setColor('RANDOM') 
    .setDescription(`Voice Online : [ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`)
    msg.channel.send(foxembed)
  }
});

client.on('message', rw => {
  if (rw.content.startsWith('=vban')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**ليس معك صلاحيه** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('`منشن الشخص `');
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لا تستطيع دخول هذا الشانال
تم بوسطه : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد حظرت
تم بوسطه : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
client.on('message', message => {
    let msg = message.content.toUpperCase(); 
    let cont = message.content.slice(prefix.length).split(" "); 
    let args = cont.slice(1); 
    if (msg.startsWith(prefix + 'weather')) { 

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
            if (err) message.channel.send(err);

            
            if (result.length === 0) {
                message.channel.send('**Please enter a valid location.**').
                return; 
            }

           
            var current = result[0].current; 
            var location = result[0].location; 

           
            const embed = new Discord.RichEmbed()
.setDescription(`**${current.skytext}**`) 
                .setAuthor(`Weather for ${current.observationpoint}`) 
                .setThumbnail(current.imageUrl) 
                .setColor(0x00AE86) 
                .addField('Timezone',`UTC${location.timezone}`, true) 
                .addField('Degree Type',location.degreetype, true)
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

                
                message.channel.send({embed});
        });
    }

});
  
 client.on("message", message => {
   let men = message.mentions.users.first();
   if(message.content.startsWith(prefix + 'vkick')) {
     try {
     if(!men) {
       message.channel.send("**منشن الشخص**");
       return;
     }
     if(!message.guild.member(men).voiceChannel) return message.channel.send("The Person Not In A VoiceChannel");
     if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("You Dont Have Permissions To Kick This Person")
     if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("The Bot Not Have Permissions To Kick This Person");
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I Dont Have Permissions To Create VoiceChannel")
 
     message.guild.createChannel("vKick", "voice").then(c => {
       message.guild.member(men).setVoiceChannel(c.id)
     setTimeout(() => {
       c.delete()
     }, 100)
     });
     message.channel.send(`**لقد تم طرد العضو من الروم الصوتي \`\`${men.username}\`\`**`)
 } catch (e) {
   message.channel.send("**لسي لدي صلاحيه  لقيام بهذا **");
 }
   }
 });
 
client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.type === 'dm') return;
    
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.split(" ");
    
    var userID = args[1];
    
    if(command == prefix + 'unban') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('انت لا تمتلك الصلاحية الكافيه');
        if(!userID) return  message.channel.send('**اكتب ايدي الشخص**');
        if(isNaN(userID)) return message.reply('**يجب ان يكون ايدي الشخص من ارقام فقط**');
        if(userID.length < 16) return message.reply('**هذا ليس ايدي شخص**');
        message.guild.fetchBans().then(bans => {
            var Found = bans.find(m => m.id === userID);
            if(!Found) return message.reply('**هذا الشخص ليس لديه باند في هذا السيرفر**');
            message.guild.unban(userID);
            message.channel.send(`:white_check_mark: <@${userID}> ** تم فك بند العصو من السيرفر **`);/// </>~M̲e Ȼodes ᶜ
        })
    }
});
	

  const Embed = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ

client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
   
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;/// </>~M̲e Ȼodes ᶜ
   
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
    var prefix = '='; // هنا تقدر تغير البرفكس <==================/// </>~M̲e Ȼodes ᶜ
   
    if(command == prefix + 'role') {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | ليس لديك صلاحيه **Manage Roles** ');
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | ليس لديك صلاحيه **Manage Roles** ');
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | ليس لديك صلاحيه **Manage Roles** ');
 
        let roleCommand = new Discord.RichEmbed()
        .setTitle(':white_check_mark: امر الرولات')
        .setColor('GREEN')
        .setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n➥ \`\`لاعطاء شخص رتبه محدده.\`\`\n\n**${prefix}role humans add <ROLE>**\n➥ \`\`لااعطاء الاشخاص رتبه.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`لازاله رتبه من الاشخاص.\`\`\n\n**${prefix}role bots add <ROLE>**\n➥ \`\`لااعطاء رتبه للبوتات.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`لازاله رتبه من البوتات role.\`\`\n\n**${prefix}role all add <ROLE>**\n➥ \`\`لاعطاء رتبه للجميع.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`لاازاله رتبه من الجميع.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
 
        if(!args[1]) return message.channel.send(roleCommand);
        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);
 
        if(userM) {
            var argsRole = message.content.toLowerCase().split(' ').slice(2);
        }else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
            var argsRole = message.content.toLowerCase().split(' ').slice(3); // حقوق الفا كوودز Alpha Codes.
        }
 
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
 
        if(userM) {
            if(!getRole) return message.channel.send(':no_entry: | لا استطيع ايجاد الرتبه');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | لا استطيع ايجاد الرتبه');
            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا استطيع اعطاء او ازاله اي عضو من رتبه **${getRole.name}** لان الرتبه اعلي من رتبه البوت`);
           
            if(!message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).addRole(getRole.id);
                message.channel.send(`:white_check_mark: | تم اعطاء رتبه  **${getRole.name}** الي **${userM.user.tag}**`);
            }else if(message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).removeRole(getRole.id);
                message.channel.send(`:white_check_mark: | تم ازاله رتبه  **${getRole.name}** من **${userM.user.tag}**`);
            }
        }else if(args[1] === 'humans') {/// </>~M̲e Ȼodes ᶜ
            let notArgs = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
            .setTitle(':white_check_mark: اوامر الرولات.')/// </>~M̲e Ȼodes ᶜ
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role humans add <ROLE>**\n➥ \`\`لاعطاء شخص رتبه\`\`\n\n**${prefix}لازاله رتبه من شخض <ROLE>**\n➥ \`\`لازاله رتبه من الجميع.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs); ///// </>~M̲e Ȼodes ᶜ 
            if(!getRole) return message.channel.send(':no_entry: | لا استطيع ايجاد الرتبه');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | لا استطيع ايجاد الرتبه');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا استطيع اعطاء او او ازاله من اي شخص هذه الرتبه **${getRole.name}** لان الرتبه اعلي من رتبه البوت`);
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | لا استطيع ايجاد رتبه **${getRole.name}**`);
 
                let humansSure = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
                .setTitle(`:red_circle: هل انت متأكد من اعطاء **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** رتبه الاشخاض **${getRole.name}**`)
                .setColor('gray')
                .setDescription('**\لديط دقيقه واحده لاختيار الرمز الذي تريد.**\n\n✅ = متأكد بانك تريد اعطاء الرول.\n\n❎ = لا تريد اعطاء الرول.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // /// </>~M̲e Ȼodes ᶜ
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎')) // /// </>~M̲e Ȼodes ᶜ
 
                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | يجب ان تنتظر بعض الوقت لاعطاء **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** رتبه الاشخاص **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> تم اعطاء جميع الاشخاص رتبه **${getRole.name}** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontGive.on('collect', r => { ///// </>~M̲e Ȼodes ᶜ 
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | تم الغاء الامر.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') {/// </>~M̲e Ȼodes ᶜ
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا استطيع ازاله رتبه **${getRole.name}** من اي مستخدم لان الرتبه اعلي من البوت`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | لا استطيع ايجاد شخص يحمل رتبه **${getRole.name}**`);
 
                let humansSure = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
                .setTitle(`:red_circle: هل انت متأكد من ازاله رتبه **${getRole.name}** من **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** اشخاص`)
                .setColor('gray')/// </>~M̲e Ȼodes ᶜ
                .setDescription('**\nلديك دقيقه واحدم لاختيار ما تريد.**\n\n✅ = متأكد من ازاله الرتبه.\n\n❎ = الغاء.')
                .setTimestamp()/// </>~M̲e Ȼodes ᶜ
                .setFooter(message.author.tag, message.author.avatarURL)/// </>~M̲e Ȼodes ᶜ
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎')) ///// </>~M̲e Ȼodes ᶜ 
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | يكب ان تنتظر بعض الوقت لازاله الرتبه من **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** رتبه الشخص **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> تم ازاله رتبه **${getRole.name}** من جميع الاشخاص .`);
                                }, 10000)
                            });/// </>~M̲e Ȼodes ᶜ
                        });/// </>~M̲e Ȼodes ᶜ
                    }); //// </>~M̲e Ȼodes ᶜ
                    dontRemove.on('collect', r => {/// </>~M̲e Ȼodes ᶜ
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | تم الغاء الامر.').then(msg => msg.delete(5000));
                    });
                })
            } /// </>~M̲e Ȼodes ᶜ
        }else if(args[1] === 'bots') {/// </>~M̲e Ȼodes ᶜ
        let notArgs = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
            .setTitle(':white_check_mark: Role Command.')/// </>~M̲e Ȼodes ᶜ
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`لاعطاء البوتات رتبه.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`لازاله الرتبه من جميع البوتات.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // 
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs);
            if(!getRole) return message.channel.send(':no_entry: | لا استطيع ايجاد الرتبه');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | لا استطيع ايجاد الرتبه');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا استطيع اعطاء اي بوت رتبه **${getRole.name}** لانها اعلي من رتبه البوت`);
                if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | لا استطيع ايجاد اي بوت لا يمتلك رتبه **${getRole.name}**`);
 
                let botsSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: هل انت متأكد من اعطاء **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** رتبه البوتات **${getRole.name}**`)
                .setColor('gray')
                .setDescription('**\nلديك دقيقه واحتي لتختار ما تريد**\n\n✅ = متأكد من اعطاء الرتبه\n\n❎ = الغاء.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(botsSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎')) // 
 
                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | يجب ان تنتظر بعض الوقت لاعطاء **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).addRole(getRole.id);
                                setTimeout(() => {/// </>~M̲e Ȼodes ᶜ
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> تم اعطاء جميع البوتات رتبه **${getRole.name}** .`);
                                }, 10000)/// </>~M̲e Ȼodes ᶜ
                            });/// </>~M̲e Ȼodes ᶜ
                        });/// </>~M̲e Ȼodes ᶜ
                    });
                    dontGive.on('collect', r => {/// </>~M̲e Ȼodes ᶜ
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | تم العاء الامر.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') {/// </>~M̲e Ȼodes ᶜ
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا استطيع ازاله رتبه **${getRole.name}** من اي بوت لان الرتبه اعلي من البوت`);
                if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | لا استطيع ايجاد اي بوت يمتلك رتبه **${getRole.name}**`);
 /// </>~M̲e Ȼodes ᶜ
                let botsSure = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
                .setTitle(`:red_circle: هل انت متأكد من ازاله رتبه **${getRole.name}** من **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
                .setColor('RED')
                .setDescription('**\nلديك دقيقه واحده لتختار ما تريد.**\n\n✅ = متأكد من ازاله الرتبه\n\n❎ = الغاء الامر')
                .setTimestamp()/// </>~M̲e Ȼodes ᶜ
                .setFooter(message.author.tag, message.author.avatarURL)/// </>~M̲e Ȼodes ᶜ
 
                message.channel.send(botsSure).then(msg => {/// </>~M̲e Ȼodes ᶜ
                    msg.react('✅').then(() => msg.react('❎'))/// </>~M̲e Ȼodes ᶜ
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {/// </>~M̲e Ȼodes ᶜ
                        msg.delete();/// </>~M̲e Ȼodes ᶜ
                        message.channel.send(`:timer: | يجب ان تنتظر بعض الوقت لازاله **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> تم ازاله رتبه  **${getRole.name}** من جميع البوتات`);
                                }, 10000)
                            });/// </>~M̲e Ȼodes ᶜ
                        });/// </>~M̲e Ȼodes ᶜ
                    });
                    dontRemove.on('collect', r => {/// </>~M̲e Ȼodes ᶜ
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | تم الغاء الامر.').then(msg => msg.delete(5000));
                    });
                })
            }
        }else if(args[1] === 'all') { /// </>~M̲e Ȼodes ᶜ
            let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: امر الرولات')/// </>~M̲e Ȼodes ᶜ
            .setColor('GREEN')/// </>~M̲e Ȼodes ᶜ
            .setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`لاعطاء الجميع رتبه\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`لازاله الرتب من الجميع.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)/// </>~M̲e Ȼodes ᶜ
           
            if(!args[2]) return message.channel.send(notArgs);/// </>~M̲e Ȼodes ᶜ
            if(!args[3]) return message.channel.send(notArgs);/// </>~M̲e Ȼodes ᶜ
            if(!getRole) return message.channel.send(':no_entry: | لا استطيع ايجاد الرتبه');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | لا استطيع ايجاد الرتبه');
 
            if(args[2] === 'add') {/// </>~M̲e Ȼodes ᶜ
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا استطيع اعطاء اي شخص رتبه  **${getRole.name}** لان الرتبه اعلي من البوت!`); // حقوق الفا كوودز toxic Codes.
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
                let allSure = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
                .setColor('RED')/// </>~M̲e Ȼodes ᶜ
                .setDescription('**\nلديك دقيقه واحده لتختار ما تريد.**\n\n✅ = متأكد من اعطاء الجميع رتبه.\n\n❎ = الغاء الامر.')
                .setTimestamp()/// </>~M̲e Ȼodes ᶜ
                .setFooter(message.author.tag, message.author.avatarURL)/// </>~M̲e Ȼodes ᶜ
 
                message.channel.send(allSure).then(msg => {/// </>~M̲e Ȼodes ᶜ
                    msg.react('✅').then(() => msg.react('❎'))/// </>~M̲e Ȼodes ᶜ
 /// </>~M̲e Ȼodes ᶜ
                    let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveAll, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
 
                    give.on('collect', r => {/// </>~M̲e Ȼodes ᶜ
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> تم اعطاء الجميع رتبه **${getRole.name}** .`);
                                }, 10000) 
                            });/// </>~M̲e Ȼodes ᶜ
                        });/// </>~M̲e Ȼodes ᶜ
                    });/// </>~M̲e Ȼodes ᶜ
                    dontGive.on('collect', r => {/// </>~M̲e Ȼodes ᶜ
                        msg.delete();/// </>~M̲e Ȼodes ᶜ
                        message.channel.send(':negative_squared_cross_mark: | تم الغاء الامر.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا استطيع ازاله رتبه  **${getRole.name}** من اي شخص لان الرتبه اعلي من البوت`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | لا استطيع ايجاد اي شخص يمتلك رتبه **${getRole.name}**`);
 
                let allSure = new Discord.RichEmbed() 
                .setTitle(`:red_circle: هل انت متأكد من ازاله الرتبه **${getRole.name}** من **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
                .setColor('RED')
                .setDescription('**\nلديك دقيقه واحده لتختار ما تريد**\n\n✅ = متأكد من ازاله الرتبه\n\n❎ = الغاء.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(allSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎'))
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id; 
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | يجب ان تنتظر بعض الوقت حتي ينتهي  **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> تم ازاله رتبه  **${getRole.name}** From من الجميع .`);
                                }, 10000)
                            });
                        });
                    });
                    dontRemove.on('collect', r => { 
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | تم الغاء الامر').then(msg => msg.delete(5000));
                    }); 
                })
            } 
        }
    }
});
	
client.on('message', message => {
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
           
        if(message.mentions.users.size === 0) {
          return message.reply("✔منشن الشخص لأعطائه الميوت😉");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("✅مرة أخرى✔");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("تم أعطائه الميوت بنجاح|😉");
        }
      }
    });
     
client.on('message', message => {
      if(message.content.startsWith(prefix + 'unmutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("🔱منشن الشخص لفك الميوت عنه😊");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("😉عيد مرة أخرى😊");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("😉تم فك الميوت بنجاح✔");
      }
    }
  });

client.on('message', message => {

    if(message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
 if(message.content === prefix + "unmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      
    
});


	
client.on('message', message => {
var prefix = "=";
       if(message.content === prefix + "hide") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم اخفاء الشات__ ✅ **")
              });
                }

    if(message.content === prefix + "show") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم اظهار الشات__✅**")/// </>~M̲e Ȼodes ᶜ
              });
    }
       
});

client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
/// </>~M̲e Ȼodes ᶜ
  var ms = require('ms')
 
  var moment = require('moment');/// </>~M̲e Ȼodes ᶜ
 
  var prefix = "="/// </>~M̲e Ȼodes ᶜ
   
  if (message.author.x5bz) return;/// </>~M̲e Ȼodes ᶜ
 
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
 
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);/// </>~M̲e Ȼodes ᶜ
 
  let messageArray = message.content.split(" ");/// </>~M̲e Ȼodes ᶜ
 
  let muteRole = message.guild.roles.find("name", "Muted");/// </>~M̲e Ȼodes ᶜ

  let embed = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
 
 .setImage("https://d.top4top.net/p_10883ygls1.png")/// </>~M̲e Ȼodes ᶜ
 
  if (command == "mute") {/// </>~M̲e Ȼodes ᶜ
    
  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });

  if(!message.channel.guild) return message.reply('**هذا الامر خاص بي سيرفرات**');
          
  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: ليس معك صلاحيه ` MUTE_MEMBERS ` **");
 
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: البوت مافيه صلاحيه ` MUTE_MEMBERS ` **");
 
  let user = message.mentions.users.first();/// </>~M̲e Ȼodes ᶜ
 
  let Reason = message.content.split(" ").slice(3).join(" ");/// </>~M̲e Ȼodes ᶜ
 
  let time = messageArray[2];/// </>~M̲e Ȼodes ᶜ
 
  if (message.mentions.users.size < 1) return message.channel.send(embed)/// </>~M̲e Ȼodes ᶜ
   
  if (!message.guild.member(user).bannable) return message.reply("**:x:ليس لدي رتبه لفعل هذا الامر**");
 
  if(!Reason)  {
 
    message.guild.member(user).addRole(muteRole);
 
  }
 
   if(!Reason && time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }  
 
   if(!time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }
   if(time) {
   
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
 
   }, ms(time));
 
   }
 /// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ
   if(time && Reason && user) {
 /// </>~M̲e Ȼodes ᶜ
    message.guild.member(user).addRole(muteRole);/// </>~M̲e Ȼodes ᶜ
 
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);/// </>~M̲e Ȼodes ᶜ
   
   }, ms(time));
 
   }
 
   message.channel.send(`:white_check_mark:  ${user.tag} has been muted ! :zipper_mouth:`)
 
   }
 
   });


    client.on("message", message => {/// </>~M̲e Ȼodes ᶜ
       
	if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
        
        let command = message.content.split(" ")[0];
	    /// </>~M̲e Ȼodes ᶜ
        if (command === prefix+"unmute") {/// </>~M̲e Ȼodes ᶜ
              if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You Do Not have 'Manage Roles' Permission **").catch(console.error);
        let user = message.mentions.users.first();
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** You Do Not have 'Muted' Role **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** Mention a User**').catch(console.error);
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('Usage:', '!unmute')
          .addField('Unmuted:', `${user.username}#${user.discriminator} (${user.id})`)
          .addField('By:', `${message.author.username}#${message.author.discriminator}`)
      
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** No Manage Roles Permission **').catch(console.error);
      
        if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("**:white_check_mark: .. The User has been Unmuted **").catch(console.error);
      } else {
          message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("**:white_check_mark: .. The User has been Unmuted **").catch(console.error);
      });
        }
      
      };
      
    });
	
client.on('message',async message => {/// </>~M̲e Ȼodes ᶜ
    var p = "="
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
  };
  if(message.content.startsWith( p + "botin")) {
    const millis = new Date().getTime() - client.user.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAT = millis / 1000 / 60 / 60 / 24;
    var star = new Discord.RichEmbed() 
    .setTitle(`${client.user.username} معلومات عن بوت`)
    .setColor('#36393e')
    .addField('💓 امر البوت', prefix, true)
    .addField('🖥️ الرامات المستخدمة', `${(process.memoryUsage().rss / 1048576).toFixed()} ميجا بايت`,true)
    .addField('🏍️ سرعة البوت', `${Math.round(client.ping)} ملي سكند`,true)
    .addField('⏲️ تم تشغيل البوت منذ', `${timeCon(process.uptime())}`, true)
    .addField('💚 السيرفرات', client.guilds.size,true) 
    .addField('💙 المستخدمين', client.users.size,true)
    message.channel.send(star);
  }
});

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$members')
      var kayan = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🙆| معلومات الأعضاء')
      .addBlankField(true)
      .addField('🐸| متصل بالانترنت',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('😡| مشغول',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('🐨| وضع المخفي',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('😴|غير متصل على الانترنت',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('👨‍👨‍👧‍👧| اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(kayan);
    
    });

client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor('Giveaway')
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)/// </>~M̲e Ȼodes ᶜ
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);/// </>~M̲e Ȼodes ᶜ
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);/// </>~M̲e Ȼodes ᶜ
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;/// </>~M̲e Ȼodes ᶜ
    let seconds = 0;/// </>~M̲e Ȼodes ᶜ
    let notCompleted = true;
/// </>~M̲e Ȼodes ᶜ
    while (notCompleted) {
/// </>~M̲e Ȼodes ᶜ
        if (uptime >= 8.64e+7) {/// </>~M̲e Ȼodes ᶜ

            days++;
            uptime -= 8.64e+7;/// </>~M̲e Ȼodes ᶜ

        } else if (uptime >= 3.6e+6) {/// </>~M̲e Ȼodes ᶜ
/// </>~M̲e Ȼodes ᶜ
            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {/// </>~M̲e Ȼodes ᶜ

            minutes++;
            uptime -= 60000;/// </>~M̲e Ȼodes ᶜ

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;/// </>~M̲e Ȼodes ᶜ
/// </>~M̲e Ȼodes ᶜ
    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`**⏰**");

}
});


client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {/// </>~M̲e Ȼodes ᶜ

    
    if (message.author.bot) return;/// </>~M̲e Ȼodes ᶜ
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
          .setAuthor(message.author.tag, message.author.avatarURL)/// </>~M̲e Ȼodes ᶜ
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)/// </>~M̲e Ȼodes ᶜ
.setFooter(client.user.username, client.user.avatarURL)/// </>~M̲e Ȼodes ᶜ
.setTimestamp();/// </>~M̲e Ȼodes ᶜ
message.channel.send(embed)/// </>~M̲e Ȼodes ᶜ

}


});

const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",/// </>~M̲e Ȼodes ᶜ
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",/// </>~M̲e Ȼodes ᶜ
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",/// </>~M̲e Ȼodes ᶜ
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",/// </>~M̲e Ȼodes ᶜ
  "**لو خيروك بين المال أو الجمال**.",/// </>~M̲e Ȼodes ᶜ
  "**لو خيروك بين المال أو الذكاء**.",/// </>~M̲e Ȼodes ᶜ
  "**لو خيروك بين المال أو الصحة**.",/// </>~M̲e Ȼodes ᶜ
  "**لو خيروك بين الجمال أو الذكاء**.",/// </>~M̲e Ȼodes ᶜ
  "**لو خيروك بين الذكاء أو الصحة**.",/// </>~M̲e Ȼodes ᶜ
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("=Select")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('Send By: </>~M̲e Ȼodes ᶜ' + message.author.username)
    }
}); 

const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",/// </>~M̲e Ȼodes ᶜ
    "**اصدر اي صوت يطلبه منك الاعبين**.",/// </>~M̲e Ȼodes ᶜ
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",/// </>~M̲e Ȼodes ᶜ
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و ��ازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",/// </>~M̲e Ȼodes ᶜ
    "**منشن الجميع وقل انا اكرهكم**.",/// </>~M̲e Ȼodes ᶜ
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",/// </>~M̲e Ȼodes ᶜ
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت ا��كف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",/// </>~M̲e Ȼodes ᶜ
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",/// </>~M̲e Ȼodes ᶜ
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",/// </>~M̲e Ȼodes ᶜ
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",/// </>~M̲e Ȼodes ᶜ
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ار��ي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",
 
]
 
 client.on('message', message => {
   if (message.content.startsWith(prefix + "punishment")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('mohamed bot' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('</>~M̲e Ȼodes ᶜ' + message.author.username)
    }
});  
  
client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
  if (message.author.x5bz) return;/// </>~M/// </>~M̲e Ȼodes ᶜ̲e Ȼodes ᶜ
  if (!message.content.startsWith(prefix)) return;/// </>~M̲e Ȼodes ᶜ
/// </>~M̲e Ȼodes ᶜ
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);/// </>~M̲e Ȼodes ᶜ
/// </>~M̲e Ȼodes ᶜ
  let args = message.content.split(" ").slice(1);/// </>~M̲e Ȼodes ᶜ

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();/// </>~M̲e Ȼodes ᶜ

  const kickembed = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
  .setAuthor(`KICKED!`, user.displayAvatarURL)/// </>~M̲e Ȼodes ᶜ
  .setColor("RANDOM")/// </>~M̲e Ȼodes ᶜ
  .setTimestamp()/// </>~M̲e Ȼodes ᶜ
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')/// </>~M̲e Ȼodes ᶜ
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')/// </>~M̲e Ȼodes ᶜ
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')/// </>~M̲e Ȼodes ᶜ
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
    var prefix = "="
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");/// </>~M̲e Ȼodes ᶜ
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");/// </>~M̲e Ȼodes ᶜ
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);/// </>~M̲e Ȼodes ᶜ


  message.channel.send(`✅  ${user} banned from the server ! ✈    `)/// </>~M̲e Ȼodes ᶜ
}
});
	
client.on('message', message => {/// </>~M̲e Ȼodes ᶜ
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if (command === "banlist") {
        message.delete(5000)
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.channel.guild) return;
        message.guild.fetchBans()
        .then(bans => message.channel.send(`\`${bans.size}\` ***: عدد الاشخاص المحظورين من السيرفر ***`)).then(message => message.delete(5000))

  .catch(console.error);
}
});

client.on('message', message => {
    if (message.content.startsWith("=avatar")) {/// </>~M̲e Ȼodes ᶜ
        var mentionned = message.mentions.users.first();/// </>~M̲e Ȼodes ᶜ
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;/// </>~M̲e Ȼodes ᶜ
      } else {
          var x5bzm = message.author;/// </>~M̲e Ȼodes ᶜ
          
      }
        const embed = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);/// </>~M̲e Ȼodes ᶜ
    }
});
/// انت ممكن تعديل على كت تويت عادى ( يعنى تعديل فى الكلام(ا/// </>~M̲e Ȼodes ᶜ 
const cuttweet = [
     'كت تويت ‏- تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت ‏- أكثر شيء يُسكِت الطفل برأيك؟',/// </>~M̲e Ȼodes ᶜ
     'كت تويت ‏- الحرية لـ ... ؟',/// </>~M̲e Ȼodes ᶜ
     'كت تويت ‏- قناة الكرتون المفضلة في طفولتك؟',/// </>~M̲e Ȼodes ᶜ
     'كت تويت ‏- كلمة للصُداع؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',/// </>~M̲e Ȼodes ᶜ
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',/// </>~M̲e Ȼodes ᶜ
     'كت تويت ‏- موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',/// </>~M̲e Ȼodes ᶜ
     'كت تويت ‏- أيهما ينتصر، الكبرياء أم الحب؟',/// </>~M̲e Ȼodes ᶜ
     'كت ��ويت| بعد ١٠ سنين ايش بتكون ؟',/// </>~M̲e Ȼodes ᶜ
     'كت تويت ‏- مِن أغرب وأجمل الأسماء التي مرت عليك؟',/// </>~M̲e Ȼodes ᶜ
     '‏كت تويت| عمرك شلت مصيبة عن شخص برغبتك ؟',/// </>~M̲e Ȼodes ᶜ
     'كت تويت ‏- أكثر سؤال وجِّه إليك مؤخرًا؟',/// </>~M̲e Ȼodes ᶜ
     '‏كت تويت|ما هو الشيء الذي يجعلك تشعر بالخوف؟',/// </>~M̲e Ȼodes ᶜ
     '‏كت تويت|وش يفسد الصداقة؟',
     '‏كت ت��ي����|شخص ل��ترفض له طلبا ؟',
     '‏كت تويت|كم مره خسرت شخص تحبه؟.',
     '‏كت تويت|كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت|كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت|هل تُخفي نجاحك أو كت كت تويت | هل تخفي نجاحك أو أشيائك الجميلة خوفاً من العين والحسد؟',
     '‏كت تويت|جسمك اكبر من عٌ��رك او ��لعكسّ ؟!',
     '‏كت تويت|أقوى كذبة مشت عليك ؟',
     '‏كت تويت|تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت|هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت|أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت|‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت|وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت|مطلبك الوحيد الحين ؟',
     '‏كت تويت|- ه�� حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content === `=Tweets`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});
client.on("message", function(message) {
	var prefix = "=";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)/// </>~M̲e Ȼodes ᶜ
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)/// </>~M̲e Ȼodes ᶜ
    .addField("Scissors","🇸",true)/// </>~M̲e Ȼodes ᶜ
    message.channel.send(RpsEmbed).then(msg => {/// </>~M̲e Ȼodes ᶜ
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")/// </>~M̲e Ȼodes ᶜ
.then(() => msg.react('🇷'))/// </>~M̲e Ȼodes ᶜ
.then(() =>msg.react('🇸'))/// </>~M̲e Ȼodes ᶜ
.then(() => msg.react('🇵'))/// </>~M̲e Ȼodes ᶜ
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
 

if (command == "Mneto") {
    let say = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
    .setDescription(args.join("  "))/// </>~M̲e Ȼodes ᶜ
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);/// </>~M̲e Ȼodes ᶜ
    message.delete();
  }


});

client.on('message', async message => {/// </>~M̲e Ȼodes ᶜ
    if(message.content.includes('discord.gg')){ /// </>~M̲e Ȼodes ᶜ
        if(message.member.hasPermission("MANAGE_GUILD")) return;/// </>~M̲e Ȼodes ᶜ
if(!message.channel.guild) return;
message.delete()/// </>~M̲e Ȼodes ᶜ
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");/// </>~M̲e Ȼodes ᶜ
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "Muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {/// </>~M̲e Ȼodes ᶜ
  await channel.overwritePermissions(muterole, {/// </>~M̲e Ȼodes ᶜ
    SEND_MESSAGES: false,/// </>~M̲e Ȼodes ᶜ/// </>~M̲e Ȼodes ᶜ
    ADD_REACTIONS: false/// </>~M̲e Ȼodes ᶜ
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);/// </>~M̲e Ȼodes ᶜ
const embed500 = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
.setTitle("Muted Ads")/// </>~M̲e Ȼodes ᶜ
    .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
    .setColor("c91616")/// </>~M̲e Ȼodes ᶜ
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)


}
})

client.on('message', message => {
var args = message.content.split(" ").slice(1);   /// </>~M̲e Ȼodes ᶜ 
if(message.content.startsWith(prefix + 'user')) {
var year = message.author.createdAt.getFullYear()/// </>~M̲e Ȼodes ᶜ
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()/// </>~M̲e Ȼodes ᶜ
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {/// </>~M̲e Ȼodes ᶜ
var z = message.author;
}else {
var z = message.mentions.users.first();
}
 
let d = z.createdAt;          
let n = d.toLocaleString();  /// </>~M̲e Ȼodes ᶜ
let x;                      
let y;                        
 
if (z.presence.game !== null) {/// </>~M̲e Ȼodes ᶜ
y = `${z.presence.game.name}`;/// </>~M̲e Ȼodes ᶜ
} else {
y = "No Playing... |💤.";/// </>~M̲e Ȼodes ᶜ
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
.setColor("#502faf")/// </>~M̲e Ȼodes ᶜ
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    
 
.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            
 
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)
 
message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);
 
}
 
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });
  client.on('message', async message => {
  if (message.author.bot || message.channel.type === 'dm') return;
  if (message.content.startsWith(prefix + "steam")) {
      let args = message.content.split(" ");
      if (!args[1]) return;
      let i = new Discord.RichEmbed();
      i.setColor("#36393e");
      let o = await message.channel.send(`**:information_source: | Collecting data.. please wait.**`);
      require("steam-search").getFirstGameInfo(args.slice(1).join(" "), async function (data, err) {
          if (data !== "no") {
              i.setThumbnail(data.image);
              i.addField('• General', `→ Name: \`${data.title}\`\n→ Price: \`${data.price.includes("$") ? "$" + data.price.split("$")[1] : data.price}\`\n→ Release \`${pretty(Date.now() - new Date(data.release).getTime())}\``);
              i.setFooter("https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png");

              await o.delete().catch(e => {});
              await message.channel.send(i);
          } else {
              await o.delete().catch(e => {});
              return message.channel.send(`**:information_source: | Can\'t found any game with name : \`${args.slice(1).join(" ")}\`**`);
          }
      })
  }
});
  
client.on('message', message => {
    if (message.content === "=server") {
        if (!message.channel.guild) return/// </>~M̲e Ȼodes ᶜ
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];/// </>~M̲e Ȼodes ᶜ
        var Y1 = message.guild.createdAt.getFullYear() - 2000/// </>~M̲e Ȼodes ᶜ
        var M2 = message.guild.createdAt.getMonth()/// </>~M̲e Ȼodes ᶜ
        var D3 = message.guild.createdAt.getDate()/// </>~M̲e Ȼodes ᶜ
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)/// </>~M̲e Ȼodes ᶜ
         .setColor('RANDOM')/// </>~M̲e Ȼodes ᶜ
         .setTimestamp()/// </>~M̲e Ȼodes ᶜ
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)/// </>~M̲e Ȼodes ᶜ
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true) /// </>~M̲e Ȼodes ᶜ            
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type -help !')
         message.channel.send({embed:xNiTRoZ});
     }
    });

client.on('message', message => {
    if(message.content.startsWith(prefix + 'قران')) {
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("بوت القرآن | صدقة جارية للجميع", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVT5PZAfcy8qZxlr3SQv3mmCw9zPiu2YBLIQ4bBePL2jLm7h')
      .setDescription(` 
     🕋 اوامر بوت القرآن الكريم 🕋
	 
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`)
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('🇦')
		.then(() => msg.react('🇧'))
		.then(() => msg.react('🇨'))
		.then(() => msg.react('⏹'))
		.then(() => msg.react('🇩'))
		.then(() => msg.react('🇪'))
		.then(() => msg.react('🇫'))

// Filters		
	let filter1 = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });
	
// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8UWKiKGQmsE", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم إيقاف القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {/// </>~M̲e Ȼodes ᶜ
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();/// </>~M̲e Ȼodes ᶜ
		collector3.stop();
		collector4.stop();
		collector5.stop();/// </>~M̲e Ȼodes ᶜ
		collector6.stop();
		collector7.stop();/// </>~M̲e Ȼodes ᶜ
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});

client.on('message', message => {
	if(message.content.startsWith(prefix + 'quran')) {
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("بوت القرآن | صدقة جارية للجميع", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVT5PZAfcy8qZxlr3SQv3mmCw9zPiu2YBLIQ4bBePL2jLm7h')
      .setDescription(` 
     🕋 اوامر بوت القرآن الكريم 🕋
	 
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`)
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('🇦')
		.then(() => msg.react('🇧'))
		.then(() => msg.react('🇨'))
		.then(() => msg.react('⏹'))
		.then(() => msg.react('🇩'))
		.then(() => msg.react('🇪'))
		.then(() => msg.react('🇫'))

// Filters		
	let filter1 = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });
	
// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();/// </>~M̲e Ȼodes ᶜ
		collector2.stop();
		collector3.stop();/// </>~M̲e Ȼodes ᶜ
		collector4.stop();/// </>~M̲e Ȼodes ᶜ
		collector5.stop();
		collector6.stop();
		collector7.stop();/// </>~M̲e Ȼodes ᶜ
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8UWKiKGQmsE", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();/// </>~M̲e Ȼodes ᶜ
		collector2.stop();
		collector3.stop();
		collector4.stop();/// </>~M̲e Ȼodes ᶜ
		collector5.stop();
		collector6.stop();/// </>~M̲e Ȼodes ᶜ
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();/// </>~M̲e Ȼodes ᶜ
		collector4.stop();/// </>~M̲e Ȼodes ᶜ
		collector5.stop();/// </>~M̲e Ȼodes ᶜ
		collector6.stop();/// </>~M̲e Ȼodes ᶜ
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم إيقاف القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();/// </>~M̲e Ȼodes ᶜ
		collector3.stop();/// </>~M̲e Ȼodes ᶜ
		collector4.stop();
		collector5.stop();/// </>~M̲e Ȼodes ᶜ
		collector6.stop();/// </>~M̲e Ȼodes ᶜ
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();/// </>~M̲e Ȼodes ᶜ
		collector3.stop();/// </>~M̲e Ȼodes ᶜ
		collector4.stop();/// </>~M̲e Ȼodes ᶜ
		collector5.stop();
		collector6.stop();/// </>~M̲e Ȼodes ᶜ
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()/// </>~M̲e Ȼodes ᶜ
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();/// </>~M̲e Ȼodes ᶜ
		collector3.stop();/// </>~M̲e Ȼodes ᶜ
		collector4.stop();/// </>~M̲e Ȼodes ᶜ
		collector5.stop();
		collector6.stop();/// </>~M̲e Ȼodes ᶜ
		collector7.stop();/// </>~M̲e Ȼodes ᶜ
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});

client.on('message', message => { 
if(message.content === prefix + 'مصحف' || message.content === prefix + 'ms7f') {
	var pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
	var page = 1;

	message.delete();

	var embed = new Discord.RichEmbed()
	.setColor('#264d00')
	.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128')
	.setImage(pages[page-1])

// ${page}
// ${pages.length}
	message.channel.sendEmbed(embed).then(msg => {/// </>~M̲e Ȼodes ᶜ

		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))/// </>~M̲e Ȼodes ᶜ
		.then(() => msg.react('➡'))/// </>~M̲e Ȼodes ᶜ
		.then(() => msg.react('⏭'))/// </>~M̲e Ȼodes ᶜ

		var backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			var forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

			var sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			var sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;

			var cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;

		var backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });/// </>~M̲e Ȼodes ᶜ
			var forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });/// </>~M̲e Ȼodes ᶜ

		var sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			var sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });/// </>~M̲e Ȼodes ᶜ

			var cancel = msg.createReactionCollector(cancelFilter, { time: 0 });/// </>~M̲e Ȼodes ᶜ

			backwards.on('collect', r => {/// </>~M̲e Ȼodes ᶜ
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);/// </>~M̲e Ȼodes ᶜ
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;/// </>~M̲e Ȼodes ᶜ
				page++;
				embed.setImage(pages[page-1]);/// </>~M̲e Ȼodes ᶜ
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {/// </>~M̲e Ȼodes ᶜ
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;/// </>~M̲e Ȼodes ᶜ
				page = 200; // إذا تبي تكمل ل 600 صفحة غير الرقم للصفحة الي وصلت لها/// </>~M̲e Ȼodes ᶜ
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);/// </>~M̲e Ȼodes ᶜ
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed).then(msg.delete(3000));/// </>~M̲e Ȼodes ᶜ
				})
			})
		})
	}
	});


let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));/// </>~M̲e Ȼodes ᶜ
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));/// </>~M̲e Ȼodes ᶜ
client.on("message", message => {
    if (!message.channel.guild) return;/// </>~M̲e Ȼodes ᶜ
    let user = anti[message.guild.id + message.author.id]/// </>~M̲e Ȼodes ᶜ
    let num = message.content.split(" ").slice(2).join(" ");/// </>~M̲e Ȼodes ᶜ
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {/// </>~M̲e Ȼodes ᶜ
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {/// </>~M̲e Ȼodes ᶜ
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "limits")) {
   	let rank = message.guild.member(message.author).roles.find('name', 'اسم رتب متحكم فى الحماية');/// </>~M̲e Ȼodes ᶜ
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank .. **');
 
        if (!message.member.hasPermission('MANAGE_GUILD')) return;/// </>~M̲e Ȼodes ᶜ
        if (message.content.startsWith(prefix + "limitsban")) {/// </>~M̲e Ȼodes ᶜ
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");/// </>~M̲e Ȼodes ᶜ
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");/// </>~M̲e Ȼodes ᶜ
            config[message.guild.id].banLimit = num;/// </>~M̲e Ȼodes ᶜ
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)/// </>~M̲e Ȼodes ᶜ
        }
        if (message.content.startsWith(prefix + "limitskick")) {/// </>~M̲e Ȼodes ᶜ
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");/// </>~M̲e Ȼodes ᶜ
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");/// </>~M̲e Ȼodes ᶜ
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "limitsroleD")) {/// </>~M̲e Ȼodes ᶜ
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");/// </>~M̲e Ȼodes ᶜ
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");/// </>~M̲e Ȼodes ᶜ
            config[message.guild.id].roleDelLimit = num;/// </>~M̲e Ȼodes ᶜ
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)/// </>~M̲e Ȼodes ᶜ
        }
        if (message.content.startsWith(prefix + "limitsroleC")) {/// </>~M̲e Ȼodes ᶜ
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");/// </>~M̲e Ȼodes ᶜ
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");/// </>~M̲e Ȼodes ᶜ
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "limitschannelD")) {/// </>~M̲e Ȼodes ᶜ
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");/// </>~M̲e Ȼodes ᶜ
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");/// </>~M̲e Ȼodes ᶜ
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)/// </>~M̲e Ȼodes ᶜ
        }
        if (message.content.startsWith(prefix + "limitstime")) {/// </>~M̲e Ȼodes ᶜ
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");/// </>~M̲e Ȼodes ᶜ
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");/// </>~M̲e Ȼodes ᶜ
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)/// </>~M̲e Ȼodes ᶜ
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
            if (e) throw e;/// </>~M̲e Ȼodes ᶜ
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
            if (e) throw e;/// </>~M̲e Ȼodes ᶜ
        });
    }
});

client.on("channelDelete", async channel => {/// </>~M̲e Ȼodes ᶜ
    const entry1 = await channel.guild.fetchAuditLogs({/// </>~M̲e Ȼodes ᶜ
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())/// </>~M̲e Ȼodes ᶜ
    console.log(entry1.executor.username)/// </>~M̲e Ȼodes ᶜ
    const entry = entry1.executor/// </>~M̲e Ȼodes ᶜ
    if (!config[channel.guild.id]) config[channel.guild.id] = {/// </>~M̲e Ȼodes ᶜ
        banLimit: 3,/// </>~M̲e Ȼodes ᶜ
        chaDelLimit: 3,/// </>~M̲e Ȼodes ᶜ
        roleDelLimit: 3,/// </>~M̲e Ȼodes ᶜ
        kickLimits: 3,/// </>~M̲e Ȼodes ᶜ
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {/// </>~M̲e Ȼodes ᶜ
        anti[channel.guild.id + entry.id] = {/// </>~M̲e Ȼodes ᶜ
            actions: 1
        }
        setTimeout(() => {/// </>~M̲e Ȼodes ᶜ
            anti[channel.guild.id + entry.id].actions = "0"/// </>~M̲e Ȼodes ᶜ
        }, config[channel.guild.id].time * 1000)/// </>~M̲e Ȼodes ᶜ
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");/// </>~M̲e Ȼodes ᶜ
        setTimeout(() => {/// </>~M̲e Ȼodes ᶜ
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)/// </>~M̲e Ȼodes ᶜ
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
                if (e) throw e;/// </>~M̲e Ȼodes ᶜ
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
                if (e) throw e;/// </>~M̲e Ȼodes ᶜ
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
        if (e) throw e;/// </>~M̲e Ȼodes ᶜ
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
        if (e) throw e;/// </>~M̲e Ȼodes ᶜ
    });
});
 
client.on("roleDelete", async channel => {/// </>~M̲e Ȼodes ᶜ
    const entry1 = await channel.guild.fetchAuditLogs({/// </>~M̲e Ȼodes ᶜ
        type: 'ROLE_DELETE'/// </>~M̲e Ȼodes ᶜ
    }).then(audit => audit.entries.first())/// </>~M̲e Ȼodes ᶜ
    console.log(entry1.executor.username)/// </>~M̲e Ȼodes ᶜ
    const entry = entry1.executor/// </>~M̲e Ȼodes ᶜ
    if (!config[channel.guild.id]) config[channel.guild.id] = {/// </>~M̲e Ȼodes ᶜ
        banLimit: 3,/// </>~M̲e Ȼodes ᶜ
        chaDelLimit: 3,/// </>~M̲e Ȼodes ᶜ
        roleDelLimit: 3,/// </>~M̲e Ȼodes ᶜ
        kickLimits: 3,/// </>~M̲e Ȼodes ᶜ
        roleCrLimits: 3/// </>~M̲e Ȼodes ᶜ
    }
    if (!anti[channel.guild.id + entry.id]) {/// </>~M̲e Ȼodes ᶜ
        anti[channel.guild.id + entry.id] = {/// </>~M̲e Ȼodes ᶜ
            actions: 1
        }
        setTimeout(() => {/// </>~M̲e Ȼodes ᶜ
            anti[channel.guild.id + entry.id].actions = "0"/// </>~M̲e Ȼodes ᶜ
        }, config[channel.guild.id].time * 1000)/// </>~M̲e Ȼodes ᶜ
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)/// </>~M̲e Ȼodes ᶜ
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"/// </>~M̲e Ȼodes ᶜ
        }, config[channel.guild.id].time * 1000)/// </>~M̲e Ȼodes ᶜ
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {/// </>~M̲e Ȼodes ᶜ
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)/// </>~M̲e Ȼodes ᶜ
    const entry = entry1.executor/// </>~M̲e Ȼodes ᶜ
    if (!config[channel.guild.id]) config[channel.guild.id] = {/// </>~M̲e Ȼodes ᶜ
        banLimit: 3,
        chaDelLimit: 3,/// </>~M̲e Ȼodes ᶜ
        roleDelLimit: 3,/// </>~M̲e Ȼodes ᶜ
        kickLimits: 3,/// </>~M̲e Ȼodes ᶜ
        roleCrLimits: 3/// </>~M̲e Ȼodes ᶜ
    }
    if (!anti[channel.guild.id + entry.id]) {/// </>~M̲e Ȼodes ᶜ
        anti[channel.guild.id + entry.id] = {/// </>~M̲e Ȼodes ᶜ
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"/// </>~M̲e Ȼodes ᶜ
        }, config[channel.guild.id].time * 1000)/// </>~M̲e Ȼodes ᶜ
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)/// </>~M̲e Ȼodes ᶜ
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {/// </>~M̲e Ȼodes ᶜ
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {/// </>~M̲e Ȼodes ᶜ
    const entry1 = await channel.guild.fetchAuditLogs({/// </>~M̲e Ȼodes ᶜ
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())/// </>~M̲e Ȼodes ᶜ
    console.log(entry1.executor.username)/// </>~M̲e Ȼodes ᶜ
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {/// </>~M̲e Ȼodes ᶜ
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {/// </>~M̲e Ȼodes ᶜ
        anti[guild.id + entry.id] = {/// </>~M̲e Ȼodes ᶜ
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"/// </>~M̲e Ȼodes ᶜ
        }, config[guild.id].time * 1000)/// </>~M̲e Ȼodes ᶜ
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"/// </>~M̲e Ȼodes ᶜ
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {/// </>~M̲e Ȼodes ᶜ
    const entry1 = await channel.fetchAuditLogs({/// </>~M̲e Ȼodes ᶜ
        type: 'MEMBER_KICK'/// </>~M̲e Ȼodes ᶜ
    }).then(audit => audit.entries.first())/// </>~M̲e Ȼodes ᶜ
    console.log(entry1.executor.username)
    const entry = entry1.executor/// </>~M̲e Ȼodes ᶜ
    if (!config[guild.id]) config[guild.id] = {/// </>~M̲e Ȼodes ᶜ
        banLimit: 3,/// </>~M̲e Ȼodes ᶜ
        chaDelLimit: 3,/// </>~M̲e Ȼodes ᶜ
        roleDelLimit: 3,/// </>~M̲e Ȼodes ᶜ
        kickLimits: 3,/// </>~M̲e Ȼodes ᶜ
        roleCrLimits: 3/// </>~M̲e Ȼodes ᶜ
    }
    if (!anti[guild.id + entry.id]) {/// </>~M̲e Ȼodes ᶜ
        anti[guild.id + entry.id] = {/// </>~M̲e Ȼodes ᶜ
            actions: 1/// </>~M̲e Ȼodes ᶜ
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"/// </>~M̲e Ȼodes ᶜ
        }, config[guild.id].time * 1000)/// </>~M̲e Ȼodes ᶜ
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {/// </>~M̲e Ȼodes ᶜ
            if (e) throw e;
        });
    }
})


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);/// </>~M̲e Ȼodes ᶜ
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Codes] ${client.users.size}`)/// </>~M̲e Ȼodes ᶜ
    client.user.setStatus("idle")
});

let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));/// </>~M̲e Ȼodes ᶜ
  client.on('message', message => {;
    if(message.content.startsWith(prefix + "AntiBots On")) {/// </>~M̲e Ȼodes ᶜ
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'On',
  }
  message.channel.send(`**\`ON\`.**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {/// </>~M̲e Ȼodes ᶜ
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
  
  
  
  client.on('message', message => {
    if(message.content.startsWith(prefix + "AntiBots Off")) {
		  	let rank = message.guild.member(message.author).roles.find('name', '0');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank .. **');
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
  message.channel.send(`**\`OFF\`.**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
  
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
  })
  
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  });
  
  })

client.on('message', async msg => {
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
    if (command === `play`) {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
 
        if (!permissions.has('EMBED_LINKS')) {
            return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl")
            }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
            return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
        } else {
            try {
 
                var video = await youtube.getVideo(url);
 
            } catch (error) {
                try {
                                            var fast = {};
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)
                    .setFooter(`${msg.guild.name}`)
                    msg.channel.sendEmbed(embed1).then(message =>{
 /// </>~M̲e Ȼodes ᶜ
                        message.delete(15000)
 
                    });
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,/// </>~M̲e Ȼodes ᶜ
                            time: 20000,/// </>~M̲e Ȼodes ᶜ
                            errors: ['time']/// </>~M̲e Ȼodes ᶜ
                        })/// </>~M̲e Ȼodes ᶜ
 
                        }catch(err) {
                        console.error(err);
                        return msg.channel.send('لم يتم إختيآر مقطع صوتي');
                        }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send(':x: لا يتوفر نتآئج بحث ');
                }
        }
 
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === `skip`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
        serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
        return undefined;
    } else if (command === `stop`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
        return undefined;
    } else if (command === `vol`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
        if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
    } else if (command === `np`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
    } else if (command === `replay`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)
    msg.channel.send({embed: embedNP})
     return handleVideo(video, msg, msg.member.voiceChannel);
 
    } else if (command === `queue`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        let index = 0;
        const embedqu = new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}/// </>~M̲e Ȼodes ᶜ
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)/// </>~M̲e Ȼodes ᶜ
        return msg.channel.sendEmbed(embedqu);/// </>~M̲e Ȼodes ᶜ
    } else if (command === `pause`) {/// </>~M̲e Ȼodes ᶜ
        if (serverQueue && serverQueue.playing) {/// </>~M̲e Ȼodes ᶜ
            serverQueue.playing = false;/// </>~M̲e Ȼodes ᶜ
            serverQueue.connection.dispatcher.pause();/// </>~M̲e Ȼodes ᶜ
            return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');/// </>~M̲e Ȼodes ᶜ
        }
        return msg.channel.send('لا يوجد شيء حالي ف العمل.');/// </>~M̲e Ȼodes ᶜ
    } else if (command === "resume") {/// </>~M̲e Ȼodes ᶜ
        if (serverQueue && !serverQueue.playing) {/// </>~M̲e Ȼodes ᶜ
            serverQueue.playing = true;/// </>~M̲e Ȼodes ᶜ
            serverQueue.connection.dispatcher.resume();/// </>~M̲e Ȼodes ᶜ
            return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');/// </>~M̲e Ȼodes ᶜ
        }
        return msg.channel.send('لا يوجد شيء حالي في العمل.');/// </>~M̲e Ȼodes ᶜ
    }
 
    return undefined;/// </>~M̲e Ȼodes ᶜ
async function handleVideo(video, msg, voiceChannel, playlist = false) {/// </>~M̲e Ȼodes ᶜ
    const serverQueue = queue.get(msg.guild.id);/// </>~M̲e Ȼodes ᶜ
    const song = {/// </>~M̲e Ȼodes ᶜ
        id: video.id,/// </>~M̲e Ȼodes ᶜ
        title: Util.escapeMarkdown(video.title),/// </>~M̲e Ȼodes ᶜ
        url: `https://www.youtube.com/watch?v=${video.id}`,
        time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
        eyad:`${video.thumbnails.high.url}`,
        best:`${video.channel.title}`,
        bees:`${video.raw.snippet.publishedAt}`,
        shahd:`${video.raw.kind}`,
        zg:`${video.raw.snippet.channelId}`,
        views:`${video.raw.views}`,
        like:`${video.raw.likeCount}`,
        dislike:`${video.raw.dislikeCount}`,
        hi:`${video.raw.id}`
    };
    if (!serverQueue) {/// </>~M̲e Ȼodes ᶜ
        const queueConstruct = {/// </>~M̲e Ȼodes ᶜ
            textChannel: msg.channel,/// </>~M̲e Ȼodes ᶜ
            voiceChannel: voiceChannel,/// </>~M̲e Ȼodes ᶜ
            connection: null,/// </>~M̲e Ȼodes ᶜ
            songs: [],/// </>~M̲e Ȼodes ᶜ
            volume: 5,/// </>~M̲e Ȼodes ᶜ
            playing: true/// </>~M̲e Ȼodes ᶜ
        };
        queue.set(msg.guild.id, queueConstruct);/// </>~M̲e Ȼodes ᶜ
        queueConstruct.songs.push(song);/// </>~M̲e Ȼodes ᶜ
        try {
            var connection = await voiceChannel.join();/// </>~M̲e Ȼodes ᶜ
            queueConstruct.connection = connection;/// </>~M̲e Ȼodes ᶜ
            play(msg.guild, queueConstruct.songs[0]);/// </>~M̲e Ȼodes ᶜ
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);/// </>~M̲e Ȼodes ᶜ
            queue.delete(msg.guild.id);
            return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);/// </>~M̲e Ȼodes ᶜ
        }
    } else {
        serverQueue.songs.push(song);/// </>~M̲e Ȼodes ᶜ
        console.log(serverQueue.songs);/// </>~M̲e Ȼodes ᶜ
        if (playlist) return undefined;/// </>~M̲e Ȼodes ᶜ
        else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);/// </>~M̲e Ȼodes ᶜ
    }
    return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);/// </>~M̲e Ȼodes ᶜ
 
    if (!song) {
        serverQueue.voiceChannel.leave();/// </>~M̲e Ȼodes ᶜ
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);/// </>~M̲e Ȼodes ᶜ
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))/// </>~M̲e Ȼodes ᶜ
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');/// </>~M̲e Ȼodes ᶜ
            else console.log(reason);/// </>~M̲e Ȼodes ᶜ
            serverQueue.songs.shift();/// </>~M̲e Ȼodes ᶜ
            play(guild, serverQueue.songs[0]);/// </>~M̲e Ȼodes ᶜ
        })
        .on('error', error => console.error(error));/// </>~M̲e Ȼodes ᶜ
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);/// </>~M̲e Ȼodes ᶜ
        fetchVideoInfo(`${song.hi}`, function (err, fuck) {/// </>~M̲e Ȼodes ᶜ
  if (err) throw new Error(err);
  console.log(fuck);
      const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {/// </>~M̲e Ȼodes ᶜ
    like: `${fuck.likeCount}`,/// </>~M̲e Ȼodes ᶜ
    dislike: `${fuck.dislikeCount}`/// </>~M̲e Ȼodes ᶜ
  }
    serverQueue.textChannel.send({embed : new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
  .setTitle(`**${fuck.title}**`)/// </>~M̲e Ȼodes ᶜ
  .setURL(fuck.url)/// </>~M̲e Ȼodes ᶜ
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${fuck.datePublished}`, true)
  .addField('Views :' , `${fuck.views}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Like👍 :' , `${fuck.likeCount}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('dislike👎 :' , `${fuck.dislikeCount}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('comments :' , `${fuck.commentCount}`, true)/// </>~M̲e Ȼodes ᶜ
    .setImage(`${song.eyad}`)
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')/// </>~M̲e Ȼodes ᶜ
    .setTimestamp()/// </>~M̲e Ȼodes ᶜ
    }).then(love => {/// </>~M̲e Ȼodes ᶜ
        love.react('👍').then(r=>{/// </>~M̲e Ȼodes ᶜ
        love.react('👎').then(r =>{/// </>~M̲e Ȼodes ᶜ
        love.react('🙌').then(r=> {/// </>~M̲e Ȼodes ᶜ
    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;
    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;
    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;
 
    let ll = love.createReactionCollector(likee , {max:5});
    let dd = love.createReactionCollector(dislikee , {max:5});
    let cn = love.createReactionCollector(cnn , {max:5});
 
            ll.on("collect", r => {
              yyyy[msg.guild.id].like++;
    love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${fuck.title}**`)
  .setURL(fuck.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${fuck.datePublished}`, true)
  .addField('Views :' , `${fuck.views}`, true)
  .addField('Like👍 :' , `${yyyy[msg.guild.id].like}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('dislike👎 :' , `${fuck.dislikeCount}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('comments :' , `${fuck.commentCount}`, true)/// </>~M̲e Ȼodes ᶜ
    .setImage(`${song.eyad}`)/// </>~M̲e Ȼodes ᶜ
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')/// </>~M̲e Ȼodes ᶜ
    .setColor('#ff0000')/// </>~M̲e Ȼodes ᶜ
    .setTimestamp()/// </>~M̲e Ȼodes ᶜ
});/// </>~M̲e Ȼodes ᶜ
    })/// </>~M̲e Ȼodes ᶜ
 
    dd.on("collect", r => {
      yyyy[msg.guild.id].dislike++;
    love.edit({embed : new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
  .setTitle(`**${fuck.title}**`)/// </>~M̲e Ȼodes ᶜ
  .setURL(fuck.url)/// </>~M̲e Ȼodes ᶜ
  .addField('Time The Video :' , `${song.time}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Channel Name :' , `${song.best}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Channel ID :' , `${song.zg}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Video Created at :' , `${fuck.datePublished}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Views :' , `${fuck.views}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Like👍 :' , `${fuck.likeCount}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('dislike👎 :' , `${yyyy[msg.guild.id].dislike}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('comments :' , `${fuck.commentCount}`, true)/// </>~M̲e Ȼodes ᶜ
    .setImage(`${song.eyad}`)/// </>~M̲e Ȼodes ᶜ
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')/// </>~M̲e Ȼodes ᶜ
    .setColor('#ff0000')/// </>~M̲e Ȼodes ᶜ
    .setTimestamp()/// </>~M̲e Ȼodes ᶜ
});/// </>~M̲e Ȼodes ᶜ
})/// </>~M̲e Ȼodes ᶜ
    cn.on("collect", r => {/// </>~M̲e Ȼodes ᶜ
    love.edit({embed : new Discord.RichEmbed()/// </>~M̲e Ȼodes ᶜ
  .setTitle(`**${fuck.title}**`)/// </>~M̲e Ȼodes ᶜ
  .setURL(fuck.url)/// </>~M̲e Ȼodes ᶜ
  .addField('Time The Video :' , `${song.time}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Channel Name :' , `${song.best}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Channel ID :' , `${song.zg}`, true)/// </>~M̲e Ȼodes ᶜ 
  .addField('Video Created at :' , `${fuck.datePublished}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Views :' , `${fuck.views}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('Like👍 :' , `${fuck.likeCount}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('dislike👎 :' , `${fuck.dislikeCount}`, true)/// </>~M̲e Ȼodes ᶜ
  .addField('comments :' , `${fuck.commentCount}`, true)/// </>~M̲e Ȼodes ᶜ
    .setImage(`${song.eyad}`)/// </>~M̲e Ȼodes ᶜ
    .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
    .setColor('#ff0000')
    .setTimestamp() /// </>~M̲e Ȼodes ᶜ
});
})
})
})
})
})
})
}
});   /// </>~M̲e Ȼodes ᶜ