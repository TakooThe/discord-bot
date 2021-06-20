const Discord = require("discord.js");
const { send } = require("process");

const Client = new Discord.Client;

const prefix = "a>";

Client.on("ready", () => {
    console.log("Bot Opérationnel");
});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé.");
    member.guild.channels.cache.find(channel => channel.id === "").send("Bienvenue à **__" + member.displayName + "__** qui vient de rejoindre **💎︙Atlanta RP** !\n**💎︙Atlanta RP** est actuellement à **" + member.guild.memberCount + "** membres sur le serveur !");
    member.roles.add("853361395475152916").then(mbr => {
        console.log("Le rôle a bien était attribué.")
    }).catch(() => {
        console.log("Le rôle n'a pas était attribué.")
    });
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté.");
    member.guild.channels.cache.find(channel => channel.id === "").send("Oh non, l'utilisateur **__" + member.displayName + "__** vien de quitté **💎︙Atlanta RP** !\n**💎︙Atlanta RP** est désormais à **" + member.guild.memberCount + "** membres sur le serveur !");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if (message.channel.type == "dm") return;

    //a>ping
    if(message.content == prefix + "ping"){
        message.channel.send("pong.");
    }

    if(message.content == prefix + "stat"){
        message.channel.send("**" + message.author.username + "**. \nQui a pour indentifiant : __**" + message.author.id + "**__ a posté un message.");
    }

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Le membre a non ou mal était mentionné !");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send("Le membre **__" + mention.displayName + "__** vien d'être banni avec succès.");
                }
                else {
                    message.reply("Il est impossible de bannir ce joueur.");
                }
            }
        }
    }

    if(message.member.hasPermission("DEAFEN_MEMBERS")){
        if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Le membre a non ou mal était mentionné !");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send("Le membre **__" + mention.displayName + "__** vien d'être kick avec succès.");
                }
                else {
                    message.reply("Il est impossible de kick ce joueur");
                }
            }
        }
    }

    if(message.member.hasPermission("MOVE_MEMBERS")){
        if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Le membre à était mal mentionné !");
            }
            else {
                mention.roles.add("855903685438603284");
                message.reply("L'utilisateur **__" + mention.displayName + "__** à était mute avec succès.");
            }
        }
    }

    if(message.member.hasPermission("MOVE_MEMBERS")){
        if(message.content.startsWith(prefix + "unmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Le membre à était mal mentionné !");
            }
            else {
                mention.roles.remove("855903685438603284");
                message.reply("L'utilisateur **__" + mention.displayName + "__** à était unmute avec succès.");
            }
        }
    }

    if(message.member.hasPermission("MOVE_MEMBERS")){
        if(message.content.startsWith(prefix + "tempmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Le membre à était mal mentionné !");
            }
            else {
                let args = message.content.split(" ");
                
                mention.roles.add("855903685438603284");
                message.reply("L'utilisateur **__" + mention.displayName + "__** à était tempmute avec succès.");
                setTimeout(function() {
                    mention.roles.remove("855903685438603284");
                    message.channel.send("L'utilisateur <@" + mention.id + "> n'est plus mute est peu désormais re parler !");
                }, args[2] * 1000);
            }
        }
    }
});


Client.login("ODU1ODMyODI3MjA2Njk2OTkw.YM4Obg.wdlWeqasVTCDg5-W9VdsggvHVio");