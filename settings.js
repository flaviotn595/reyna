const chalk = require("chalk")
const fs = require("fs")

//atualização automática de presença
global.autoTyping = false //amarração automática em gc (verdadeiro para ativado, falso para desativado)
global.autoRecord = false //gravação automática (verdadeiro para ligado, falso para desligado)
global.autoblockmorroco = false //blok automático 212 (verdadeiro para ligado, falso para desligado)
global.autokickmorroco = false //auto kick 212 (verdadeiro para ligado, falso para desligado) 
global.antispam = false //auto kick spammer (verdadeiro para ativado, falso para desativado)


//se a chave da API expirar, você pode gerar uma daqui: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//variantes de documentos
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//Númeroproprietário
global.owner = ['558181718175'] //seu número de proprietário
global.ownernomer = "558181718175" //seu número de proprietário2
global.ownername = "Ghost.Js" //nome do seu dono
global.ytname = "YT: Ghost" //nome do seu canal yt
global.socialm = "GitHub: Ghost" //seu github ou nome insta
global.location = "Brasil, Recife, Pernambuco" //sua localização

//novo
global.botname = "Reyna-MD"
global.ownernumber = '558181718175'
global.ownername = 'Ghost.Js'
global.ownerNumber = ["558181718175@s.whatsapp.net"]
global.ownerweb = "#"
global.websitex = "#"
global.wagc = "https://chat.whatsapp.com/EkXSZjEpnTJ6EeGqjRp4Ri"
global.themeemoji = '🪀'
global.wm = "Ghost.Js 👻"
global.botscript = '#' 
global.packname = "Reyna-MD"
global.author = "Ghost.Js"
global.creator = "558181718175@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//alvo de mídia
global.thum = fs.readFileSync("./GhostMedia/theme/cheemspic.jpg") //sua foto da thumb
global.log0 = fs.readFileSync("./GhostMedia/theme/cheemspic.jpg") //sua foto do logotipo
global.err4r = fs.readFileSync("./GhostMedia/theme/cheemspic.jpg") //sua foto de erro
global.thumb = fs.readFileSync("./GhostMedia/theme/cheemspic.jpg") //sua foto da thumb
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //de falta lt p wa

//criador de imagem de menu
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//mensagens
global.mess = {
    success: 'Aqui Esta', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizacao' ${__filename}'`))
	delete require.cache[file]
	require(file)
})
