Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const { RichEmbed } = require('discord.js');
const bot = new Client();
const client = new Discord.Client();

const cheerio = require('cheerio');

const fsn = require('fs-nextra')

const randompuppy = require ('random-puppy');

const iso = require ('iso-639-1')

const querystring = require ('querystring')

const fs = require('fs');

const ytdl = require("ytdl-core");

const request = require('request');

const { Canvas } = require("canvas-constructor");

const { resolve, join } = require("path");

const fetch = require("node-fetch");

const imageUrlRegex = /\?size=2048$/g;

const axios = require('axios')

const username = 'ZTMJ6yfBHv63Trwh';

const password = 'EbMujudReZg8eUa7';

const token = process.env.token //require('./token.json');

const PREFIX = '!';

let xp = require ("./database.json")

var age = '4';

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.get("690059375473197104").send(x.join(" "));
});

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setStatus("online")
    bot.user.setActivity("with a bone :3", { type: 'Playing'})
})

bot.on("guildBanRemove", guild => {
    console.log(`Guild unbanned: ${guild.name}`)
})

bot.on("guildDelete", guild => {
    console.log(`Guild removed: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
})

bot.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
})

bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let xpAdd = Math.floor(Math.random() * 7) + 8;
  
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
  
  
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp =  curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
      xp[message.author.id].level = curlvl + 1;
      message.channel.send(`Congratulations ${message.author}, you reached level ${curlvl}! Woof! Woof!`)
    }
    fs.writeFile("./database.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
    });
  
  });

bot.on('message', async message => {

    let args = message.content.substring(PREFIX.length).split(" "); if(message.content.substring(0, PREFIX.length) == PREFIX)

    if(message.content.substring(0, PREFIX.length) == PREFIX) switch (args[0]) {
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'bark':
            message.channel.send('woof')
            break;
        case 'level':
            let curxp = xp[message.author.id].xp;
            let curlvl = xp[message.author.id].level;
            let nxtLvlXp = curlvl * 300;
            const profile = new Discord.RichEmbed()
            .setTitle(message.author.username)
            .setThumbnail(message.author.displayAvatarURL)
            .addField(`Level:`, `${curlvl}`)
            .addField(`XP:`, `${curxp}/${nxtLvlXp}`)
            .setColor(0x00ffff)
            message.channel.send(profile)
            break;
        case 'say':
            const sayMessage = args.slice(1).join(" ");
            message.delete().catch(_O_o=>{});
            message.channel.send('Woof! ' + sayMessage)
            break;
        case 'puppy':
            const puppies = ['https://www.petmd.com/sites/default/files/petmd-puppy-weight.jpg', 'https://www.pets4homes.co.uk/images/articles/5345/large/how-to-tell-if-your-puppy-is-tired-5ca8e08a54019.jpeg', 'https://postmediaedmontonjournal2.files.wordpress.com/2019/09/0928-you-martin-e1569519642303.jpg?quality=80&strip=all&w=371&h=277&crop=1', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg']
            const embed8 = new Discord.RichEmbed()
            .setTitle('Woof! Woof! Here is your puppy! :3')
            .setImage(puppies[Math.floor((Math.random() * puppies.length))])
            .setColor('RANDOM')
            message.channel.send(embed8)
            break;
        case 'dps':
            const input = args[1]
            if (input == 'dog' || input == 'paper' || input == 'scissors') {
              const result = [
                'dog',
                'paper',
                'scissors'
              ]
          
              const picker = Math.floor(Math.random() * result.length)
              if (input == 'dog' && result[picker] == 'dog') {
                message.channel.send('Woof! Woof! I picked 🐶 too!')
              } else if (input == 'paper' && result[picker] == 'paper') {
                message.channel.send('Woof! Woof! I picked 📰 too!')
              } else if (input == 'scissors' && result[picker] == 'scissors') {
                message.channel.send('Woof! Woof! I picked ✂ too!')
              }
          
          
              else if (input == 'scissors' && result[picker] == 'dog') {
                message.channel.send('Woof! Woof! I picked 🐶, I Won! :3')
              } else if (input == 'dog' && result[picker] == 'paper') {
                message.channel.send('Woof! Woof! I picked 📰, I Won! :3')
              } else if (input == 'paper' && result[picker] == 'scissors') {
                message.channel.send('Woof! Woof! I picked ✂, I Won! :3')
              }
          
          
              else if (input == 'dog' && result[picker] == 'scissors') {
                message.channel.send('Woof! Woof! I picked ✂, You Won! :3')
              } else if (input == 'paper' && result[picker] == 'dog') {
                message.channel.send('Woof! Woof! I picked 🐶, You Won! :3')
              } else if (input == 'scissors' && result[picker] == 'paper') {
                message.channel.send('Woof! Woof! I picked 📰, You Won! :3')
              }
            } else {
              message.channel.send(`Woof! Woof! You OP friend, you must choose dog, paper or scissors!`)
            }
            break;
        case 'randomnumbers':
            const randomnumber = Math.floor((Math.random() * 100))
            message.channel.send("Hmmmm.....").then((newMessage) => {newMessage.edit("Woof! Woof! Here is your number: " + randomnumber + "! :3")})
            break;
        case 'age':
            message.channel.send("Woof! Woof! I'm " + age + '  :3')
            break;
        case 'snuggle':
            const attachment = new Attachment('./cuddlepup.png', 'cuddlepup.png')
            const embed3 = new Discord.RichEmbed()
            .setTitle("Woof! It's so warm here :3")
            .setImage('attachment://cuddlepup.png')
            .attachFile(attachment)
            .setColor('RANDOM')
            message.channel.send(embed3)
            break;
        case 'spacedoggo':
            message.channel.send("<:spacedoggo:686146619040858122>")
            break;
        case 'help':
            if(args[1] === '2'){
                const embed12 = new Discord.RichEmbed()
                .setTitle('Commands list:')
                .addField('!rate :', 'Doggy rating machine!')
                .addField('!getavatar :', "Get someone's avatar!")
                .addField('!say :', 'Say something!')
                .addField('!pat :', 'Pat!')
                .addField('!hug :', 'Show them how much you love them')
                .addField('!kiss :', 'Command to kiss someone owo')
                .addField('!kill :', 'A command to kill someone!!!')
                .setDescription('Page 2/3')
                .setColor(0xff00ff)
                message.channel.send(embed12)
                break;
            }
            if(args[1] === '3'){
                const embed13 = new Discord.RichEmbed()
                .setTitle('Commands list:')
                .addField('!ask :', 'Make a poll')
                .addField('!woof :', 'Try to bark!')
                .addField('!fruits :', 'Generate random fruits!')
                .addField('!doggymeme:', 'Some lame Boring Man command that my friend wants me to add')
                .setColor(0xFF0000)
                .setDescription('Page 3/3')
                message.channel.send(embed13)
                break;
            }
            const embed = new Discord.RichEmbed()
                .setTitle('Commands list:')
                .addField('!getnormalkeys :', "In case if you want to type a normal letter but one of your button doesn't let you to type it")
                .addField('!getcapitalkeys :', "In case if you want to type a capital letter but one of your button doesn't let you to type it")
                .addField('!age :', "Knows the dog's age")
                .addField('!feed :', 'Feed the dog')
                .addField('!magicdog :', 'Ask the magic dog!')
                .addField('!randomnumbers :', 'Generate a random number!')
                .addField('!snuggle :', 'Snuggle the dog :3')
                .addField('!ping :', 'The dog will reply with "Pong"')
                .addField('!dps :', 'Dog, paper, scissors!')
                .addField('!bark :', 'The dog will bark :3')
                .addField('!help :', 'Show this')
                .addField('!doggymeme :', 'Some memes about a game called Boring Man - Online Tactical Stickman Combat that my friend(?) wants to add')
                .setColor(0x00ff00)
                .setDescription('Page 1/3')
            message.channel.send(embed);
            break;
        case 'getavatar':
                if (!message.mentions.users.size) {

                    const embed6 = new Discord.RichEmbed()
                    
                    .setTitle('Woof! Here is your OP avatar! Woof!')
                    .setImage(message.author.displayAvatarURL)
                    .setColor('RANDOM')
                
                return message.channel.send(embed6);
                
                }
                
                
                
                const avatarList = message.mentions.users.map(user => {
                    
                    const embed7 = new Discord.RichEmbed()

                    .setTitle(`Woof! Here is ${user.username}'s OP avatar! Woof!`)
                    .setImage(user.displayAvatarURL)
                    .setColor('RANDOM')
                
                return message.channel.send(embed7);
                
                });
                
                break;
        case 'pat':
            if(!message.mentions.users.size){
                return message.channel.send('*puts your hand on my head* ;3')
            }

            const user2 = message.mentions.users.first()

            const patgifs = ['https://cdn.weeb.sh/images/rJ1WlyKPZ.gif', 'https://cdn.weeb.sh/images/rkADh0sqM.gif', 'https://cdn.weeb.sh/images/ryV2k1tP-.gif', 'https://cdn.weeb.sh/images/H1jnJktPb.gif', 'https://cdn.weeb.sh/images/rJavp1KVM.gif', 'https://cdn.weeb.sh/images/S1ja11KD-.gif']

            const embed11 = new Discord.RichEmbed()

            .setDescription(`${message.author} pats ${user2}! Cute :3`)
            .setImage(patgifs[Math.floor((Math.random() * patgifs.length))])
            .setColor('RANDOM')

            message.channel.send(embed11)
            break;
        case 'hug':
            if (!message.mentions.users.size){
            return message.channel.send('*hugs you* ;3')
            }

            const huggifs = ["https://cdn.weeb.sh/images/BkotddXD-.gif","https://cdn.weeb.sh/images/rkN2u_XP-.gif","https://cdn.discordapp.com/attachments/669109837191446551/689743577521193034/hug5.gif","https://cdn.discordapp.com/attachments/669109837191446551/689746243362095104/hug2.gif", "https://cdn.discordapp.com/attachments/669109837191446551/689746245350195200/hug1.gif", "https://cdn.discordapp.com/attachments/669109837191446551/689746252669255693/hug4.gif", "https://cdn.discordapp.com/attachments/669109837191446551/689746256309911552/hug3.gif"]

            const user = message.mentions.users.first()

            const embed9 = new Discord.RichEmbed()

            .setDescription(`${message.author} hugs ${user}! :3`)
            .setImage(huggifs[Math.floor((Math.random() * huggifs.length))])
            .setColor("0xff00e5")

            message.channel.send(embed9);
            break;
        case 'kiss':
            if (!message.mentions.users.size){
                return message.channel.send('*kisses you* ;3')
            }

            const user1 = message.mentions.users.first()

            const kissgifs = ['https://cdn.weeb.sh/images/SJrBZrMBz.gif', 'https://cdn.weeb.sh/images/Skv72TuPW.gif', 'https://cdn.weeb.sh/images/ByoCoT_vW.gif', 'https://cdn.weeb.sh/images/S1E1npuvb.gif', 'https://cdn.weeb.sh/images/H1Gx2aOvb.gif', 'https://cdn.weeb.sh/images/HJYghpOP-.gif', 'https://cdn.weeb.sh/images/Bkk_hpdv-.gif']

            const embed10 = new Discord.RichEmbed()

            .setDescription(`${message.author} kisses ${user1}! :o ;3`)
            .setImage(kissgifs[Math.floor((Math.random() * kissgifs.length))])
            .setColor('0xff00e5')

            message.channel.send(embed10)
            break;
        case 'getnormalkeys':
            message.channel.send('Woof! Woof! Here are your keys, my friend. qwertyuiopasdfghjklzxcvbnm. Woof! Woof!')
            break;
        case 'getcapitalkeys':
            message.channel.send('Woof! Woof! Here are your keys, my friend. QWERTYUIOPASDFGHJKLZXCVBNM. Woof! Woof!')
            break;
        case 'kill':
            if(!args[1]){
                message.channel.send('Woof! Please add something for me to kill. Woof!')
                break;
            }

            let victim = args.slice(1).join(" ");

                message.channel.send("Nu! I won't kill " + victim + " :c")

            break;
        case 'ask':
            const Embed = new RichEmbed()
            .setColor(0x00FFFF)
            .setTitle("Doggy Poll")
            .setDescription("!ask to do a doggy poll");

            if(!args[1]){
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send('❔ ' + `**${message.author.username} asked:** `  + msgArgs).then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                messageReaction.react("🐶");
                messageReaction.react("🦴");
                message.delete(1000).catch(console.error);
            })

            break;
        case 'rate':
            const rates = ["4/10", "5/10", "6/10", "7/10 :3", "8/10 :3", "9/10 :3", "10/10 :3", "11/10 :3"];

            const rate = Math.floor((Math.random() * rates.length))

            const ratethings = args.slice(1).join(" ")

            const embed4 = new Discord.RichEmbed()
            .setTitle("Doggy Rating Machine")
            .setDescription("Woof! Woof! I'd give you a " + rates[rate])
            .setColor('RANDOM')

            if(!args[1]) return message.channel.send(embed4)

            const embed5 = new Discord.RichEmbed()
            .setTitle("Doggy Rating Machine")
            .setDescription("Woof! Woof! I'd give " + ratethings + " a " + rates[rate])
            .setColor('RANDOM')
            message.channel.send(embed5)
            break;
        case 'magicdog':
            if(!args[1]) return message.channel.send('Woof! Woof! Please ask a question!');
            const replies = ["Yes :3", "No :3", "Yes ;W;", "No ;W;", "Bones", "Woof!", "*hugs you*"];
            
            const result = Math.floor((Math.random() * replies.length))
            const question = args.slice(1).join(" ");

            const ballembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor('RANDOM')
            .addField("Question", question)
            .addField("Answer:", replies[result]);

            message.channel.send(ballembed)
            break;
        case 'woof':
            const embed2 = new RichEmbed()
            .setTitle("Fake dog detector!")
            .setColor(0xFF0000)
            .setThumbnail("https://i.pinimg.com/736x/00/58/ac/0058ac95c8dd5d3c71858e8095a3653a.jpg")
            .setDescription("Woof! Woof! You aren't a dog so you can't bark! Woof! Woof!");
     
            message.author.send(embed2);
            break;
        case 'fruits':
            const fruits = ["🍌", "🍇", "🍉", "🍍", "🍎", "🍏", "🍒", "🍑", "🥭", "🥥", "🦴", "🥎", "⚾"]
            const randomfruits = Math.floor((Math.random() * fruits.length))
            message.channel.send("Woof! Here is your OP fruit! " + fruits[randomfruits] + " :3")
            break;
        case 'supersecretcommandthatonlyancando':
            const ansinput = args.slice(1).join(" ")
            if(message.author.id === '434933891225223178'){
                message.channel.send(ansinput)
                break;
            }
            else{
                message.channel.send('Woof! Woof! You are not An! >:c')
                break;
            }
        case 'reset':
            if(message.author.id === '434933891225223178'){
                message.channel.send('Reseting...')
                bot.destroy()
                bot.login(token)
                break;
            }
            else{
                message.channel.send("Woof! Woof! You don't have permission to use this command! Woof! Woof!")
                break;
            }
        case 'setgame':
            const newActivity = args.slice(1).join(" ")
            if(message.author.id === '434933891225223178'){
                bot.user.setActivity(`${newActivity}`, { type: 'Playing'})
                break;
            }
            else{
                message.channel.send("Woof! Woof! You don't have permission to use this command! Woof! Woof!")
                break;
            }
        case 'setstatus':
            const newStatus = args.slice(1).join(" ")
            if(message.author.id === '434933891225223178'){
                if(args[1] === 'online' || args[1] === 'idle' || args[1] === 'dnd' || args[1] === 'invisible'){
                    bot.user.setStatus(`${newStatus}`)
                }
                else{
                    message.channel.send('Woof! Woof! Please provide a valid status! The valid statuses are `online`, `dnd`, `idle` and `invisible`! Woof! Woof!')
                    break;
                }
            }
            else{
                message.channel.send("Woof! Woof! You don't have permission to use this command! Woof! Woof!")
                break;
            }
            break;
            case 'doggymeme':
                templates = ['112126428','438680','87743020', '61579', '181913649','102156234']
                const template = templates[Math.floor(Math.random()*templates.length)]
                console.log(template)
                axios.get('https://rest.bman.gg/chat/random').then(response => {
                    var line1 = response.data[0].message
                    var line2 = response.data[1].message
                    var options = {
                        'method': 'POST',
                        'url': 'https://api.imgflip.com/caption_image',
                        'headers': {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        formData: {
                            'template_id': template,
                            'text1': line1,
                            'text0': line2,
                            'username': username,
                            'password': password
                        }
                    };
                    
                    request(options, function (error, response) { 
                        if (error) throw new Error(error);
                            var body = JSON.parse(response.body)
                            const embed14 = new Discord.RichEmbed()
                            .setImage(body.data.url)
                            .setColor('RANDOM')
                            message.channel.send(embed14)
                    });
                })
                break;
    }
});

bot.login(token)//.token)