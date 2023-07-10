const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber, axios, yargs, _ } = modul;
const { Boom } = boom
const {
	default: LucyConnect,
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    getAggregateVotesInPollMessage,
    proto
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const { start } = require('./lib/spinner')
const { uncache, nocache } = require('./lib/loader')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const prefix = ''

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

const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

require('./Lucy.js')
nocache('../Lucy.js', module => console.log(color('[ AVISO ]', 'green'), color(`'${module}'`, 'green'), 'Atualizada'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ AVISO ]', 'green'), color(`'${module}'`, 'green'), 'Atualizada'))

async function LucyBot() {
	const {  saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`)
    	const Lucy = LucyConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: [`${botname}`,'Safari','3.0'],
        auth: state,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "Cheems Bot Here"
            }
        }
    })

    store.bind(Lucy.ev)

Lucy.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Arquivo de sessão inválido, exclua a sessão e verifique novamente`);
				LucyBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Conexão encerrada, reconectando....");
				LucyBot();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Conexão perdida do servidor, reconectando...");
				LucyBot();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Conexão substituída, outra nova sessão aberta, feche a sessão atual primeiro");
				LucyBot()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Dispositivo desconectado, verifique novamente e execute.`);
				LucyBot();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Reinicialização necessária, reiniciando...");
				LucyBot();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Conexão expirada, conectando...");
				LucyBot();
			} else Lucy.end(`Motivo Desconectado Desconhecido: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n🌿Conectando...`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			await Lucy.sendMessage(owner + "@s.whatsapp.net", { text: `*Bot Iniciado*` });
			//await Lucy.groupAcceptInvite("Dc2qyVeK8JbJq8Gr3U1pKH") //entrar automaticamente no grupo, se o link do grupo for inválido ou se o número do bot não conseguir entrar no grupo, ocorrerá um erro na inicialização
			//await delay(1000 * 2) 
             //Lucy.sendMessage(Ghostchat, { text : 'E aí pessoal, Lucy bot aqui! 👀' })
			console.log(color(` `,'magenta'))
            console.log(color(`🌿Conectado a => ` + JSON.stringify(Lucy.user, null, 2), 'yellow'))
			await delay(1999)
            console.log(chalk.yellow(`\n\n               ${chalk.bold.blue(`[ ${botname} ]`)}\n`))
            console.log(color(`< ================================================== >`, 'cyan'))
	        console.log(color(`\n${themeemoji}
INSTAGRAM: @flavio_tsj `,'magenta'))
            console.log(color(`${themeemoji}
NÚMERO DO WA: ${owner}`,'magenta'))
            console.log(color(`${themeemoji} CRÉDITO: ${wm}\n`,'magenta'))
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  LucyBot();
	}
	
})

await delay(5555) 
start('2',colors.bold.white('\n\nAguardando Novas mensagens'))

Lucy.ev.on('creds.update', await saveCreds)

    // Anti Call
    Lucy.ev.on('call', async (GhostPapa) => {
    let botNumber = await Lucy.decodeJid(Lucy.user.id)
    let GhostBotNum = db.settings[botNumber].anticall
    if (!GhostBotNum) return
    console.log(GhostPapa)
    for (let GhostFucks of GhostPapa) {
    if (GhostFucks.isGroup == false) {
    if (GhostFucks.status == "offer") {
    let GhostBlokMsg = await Lucy.sendTextWithMentions(GhostFucks.from, `*${Lucy.user.name}* não pode receber ${GhostFucks.isVideo ? `video` : `voice` } chamar. Desculpe @${GhostFucks.from.split('@')[0]} você será bloqueado. Se acidentalmente, entre em contato com o proprietário para ser desbloqueado !`)
    Lucy.sendContact(GhostFucks.from, global.owner, GhostBlokMsg)
    await sleep(8000)
    await Lucy.updateBlockStatus(GhostFucks.from, "block")
    }
    }
    }
    })

Lucy.ev.on('messages.upsert', async chatUpdate => {
try {
const kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast')  {
await Lucy.readMessages([kay.key]) }
if (!Lucy.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
const m = smsg(Lucy, kay, store)
require('./Lucy')(Lucy, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

	// detect group update
		Lucy.ev.on("groups.update", async (json) => {
			try {
ppgroup = await Lucy.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0];
			if (res.announce == true) {
				await sleep(2000)
				Lucy.sendMessage(res.id, {
					text: `「 Alteração nas configurações do grupo 」\n\nO grupo foi fechado pelo administrador, agora apenas os administradores podem enviar mensagens !`,
				});
			} else if (res.announce == false) {
				await sleep(2000)
				Lucy.sendMessage(res.id, {
					text: `「 Alteração nas configurações do grupo 」\n\nO grupo foi aberto pelo administrador, agora os participantes podem enviar mensagens !`,
				});
			} else if (res.restrict == true) {
				await sleep(2000)
				Lucy.sendMessage(res.id, {
					text: `「 Alteração nas configurações do grupo 」\n\nAs informações do grupo foram restritas, agora apenas o administrador pode editar as informações do grupo !`,
				});
			} else if (res.restrict == false) {
				await sleep(2000)
				Lucy.sendMessage(res.id, {
					text: `「 Alteração nas configurações do grupo 」\n\nAs informações do grupo foram abertas, agora os participantes podem editar as informações do grupo !`,
				});
			} else if(!res.desc == ''){
				await sleep(2000)
				Lucy.sendMessage(res.id, { 
					text: `「 Alteração nas configurações do grupo 」\n\n*A descrição do grupo foi alterada para*\n\n${res.desc}`,
				});
      } else {
				await sleep(2000)
				Lucy.sendMessage(res.id, {
					text: `「 Alteração nas configurações do grupo 」\n\n*O nome do grupo foi alterado para*\n\n*${res.subject}*`,
	  });
			} 
			
		});
		
Lucy.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await Lucy.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Lucy.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await Lucy.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
GhostWlcm = await getBuffer(ppuser)
GhostLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const Ghostbuffer = await getBuffer(ppuser)
                let GhostName = num
                const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                Ghostbody = `┌─❖
│「 Ola 👋 」
└┬❖ 「  @${GhostName.split("@")[0]}  」
   │✑  Seja Bem Vindo ao
   │✑  ${metadata.subject}
   │✑  Membro : 
   │✑ ${xmembers}th
   │✑  Entrou : 
   │✑ ${xtime} ${xdate}
   └───────────────┈ ⳹`
Lucy.sendMessage(anu.id,
 { text: Ghostbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": GhostWlcm,
"sourceUrl": `${wagc}`}}})
                } else if (anu.action == 'remove') {
                	const Ghostbuffer = await getBuffer(ppuser)
                    const Ghosttime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const Ghostdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	let GhostName = num
                    const Ghostmembers = metadata.participants.length
                    Ghostbody = `┌─❖
│「 Tchau 👋 」
└┬❖ 「 @${GhostName.split("@")[0]}  」
   │✑  Saiu
   │✑ ${metadata.subject}
   │✑  Membro: 
   │✑ ${Ghostmembers}th
   │✑  Tempo : 
   │✑  ${Ghosttime} ${Ghostdate}
   └───────────────┈ ⳹`
Lucy.sendMessage(anu.id,
 { text: Ghostbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": GhostLft,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'promote') {
const Ghostbuffer = await getBuffer(ppuser)
const Ghosttime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const Ghostdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let GhostName = num
Ghostbody = ` Parabéns 🎉 @${GhostName.split("@")[0]}, você foi *promovido* a *admin* 🥳`
   Lucy.sendMessage(anu.id,
 { text: Ghostbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": GhostWlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const Ghostbuffer = await getBuffer(ppuser)
const Ghosttime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const Ghostdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let GhostName = num
Ghostbody = `Eita‼️ @${GhostName.split("@")[0]}, você foi *rebaixado* de *admin* 😬`
Lucy.sendMessage(anu.id,
 { text: Ghostbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": GhostLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
})

    // respon cmd pollMessage
    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Cheems bot aqui"
        }
    }
    Lucy.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                Lucy.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

Lucy.sendTextWithMentions = async (jid, text, quoted, options = {}) => Lucy.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...opções }, { quoted })

Lucy.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Lucy.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Lucy.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Lucy.getName = (jid, withoutContact  = false) => {
id = Lucy.decodeJid(jid)
withoutContact = Lucy.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Lucy.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Lucy.decodeJid(Lucy.user.id) ?
Lucy.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Lucy.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

Lucy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Lucy.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Lucy.getName(i)}\nFN:${await Lucy.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	Lucy.sendMessage(jid, { contacts: { displayName: `${list.length} Contato`, contacts: list }, ...opts }, { quoted })
    }

Lucy.setStatus = (status) => {
Lucy.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

Lucy.public = true

Lucy.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Lucy.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

Lucy.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Lucy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

Lucy.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Lucy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

Lucy.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await Lucy.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

Lucy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Lucy.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

Lucy.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

Lucy.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await Lucy.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await Lucy.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

Lucy.sendText = (jid, text, quoted = '', options) => Lucy.sendMessage(jid, { text: text, ...options }, { quoted })

Lucy.serializeM = (m) => smsg(Lucy, m, store)

Lucy.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
Lucy.sendMessage(jid, buttonMessage, { quoted, ...options })
}

Lucy.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: Lucy.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return Lucy.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

Lucy.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
Lucy.relayMessage(jid, template.message, { messageId: template.key.id })
}

Lucy.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
Lucy.sendMessage(jid, fjejfjjjer, { quoted: m })
}

            /**
             * Send Media/File with Automatic Type Specifier
             * @param {String} jid
             * @param {String|Buffer} path
             * @param {String} filename
             * @param {String} caption
             * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
             * @param {Boolean} ptt
             * @param {Object} options
             */
Lucy.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
                let type = await Lucy.getFile(path, true)
                let { res, data: file, filename: pathFile } = type
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } }
                    catch (e) { if (e.json) throw e.json }
                }
                const fileSize = fs.statSync(pathFile).size / 1024 / 1024
                if (fileSize >= 1800) throw new Error(' The file size is too large\n\n')
                let opt = {}
                if (quoted) opt.quoted = quoted
                if (!type) options.asDocument = true
                let mtype = '', mimetype = options.mimetype || type.mime, convert
                if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
                else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
                else if (/video/.test(type.mime)) mtype = 'video'
                else if (/audio/.test(type.mime)) (
                    convert = await toAudio(file, type.ext),
                    file = convert.data,
                    pathFile = convert.filename,
                    mtype = 'audio',
                    mimetype = options.mimetype || 'audio/ogg; codecs=opus'
                )
                else mtype = 'document'
                if (options.asDocument) mtype = 'document'

                delete options.asSticker
                delete options.asLocation
                delete options.asVideo
                delete options.asDocument
                delete options.asImage

                let message = {
                    ...options,
                    caption,
                    ptt,
                    [mtype]: { url: pathFile },
                    mimetype,
                    fileName: filename || pathFile.split('/').pop()
                }
                /**
                 * @type {import('@adiwajshing/baileys').proto.WebMessageInfo}
                 */
                let m
                try {
                    m = await Lucy.sendMessage(jid, message, { ...opt, ...options })
                } catch (e) {
                    console.error(e)
                    m = null
                } finally {
                    if (!m) m = await Lucy.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
                    file = null // releasing the memory
                    return m
                }
            }

//Lucy.sendFile = async (jid, media, options = {}) => {
        //let file = await Lucy.getFile(media)
        //let mime = file.ext, type
        //if (mime == "mp3") {
          //type = "audio"
          //options.mimetype = "audio/mpeg"
          //options.ptt = options.ptt || false
        //}
        //else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        //else if (mime == "webp") type = "sticker"
        //else if (mime == "mp4") type = "video"
        //else type = "document"
        //return Lucy.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      //}

Lucy.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return Lucy.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return Lucy.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return Lucy.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return Lucy.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return Lucy.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    Lucy.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return Lucy.sendMessage(jid, { poll: { name, values, selectableCount }}) }

return Lucy

}

LucyBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})