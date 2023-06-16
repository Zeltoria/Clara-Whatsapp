const { default: ClaraConnect, 
useSingleFileAuthState, 
fetchLatestBaileysVersion, 
generateForwardMessageContent, 
prepareWAMessageMedia, 
generateWAMessageFromContent, 
generateMessageID, 
downloadContentFromMessage, 
jidDecode, 
proto 
} = require("@adiwajshing/baileys")
const {
default: makeWASocket,
BufferJSON,
initInMemoryKeyStore,
DisconnectReason,
AnyMessageContent,
makeInMemoryStore,
useMultiFileAuthState,
delay
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const { uncache, nocache } = require('./lib/loader')
const { start } = require('./lib/spinner')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const me = 

require('./xyroinee.js')
require('./index.js')

function title() {
console.clear()
console.log(chalk.yellow(`\n\n               ${chalk.bold.yellow(`[ ${botname} ]`)}\n\n`))
console.log(color(`< ================================================== >`, 'cyan'))
console.log(color(`\nClara-MD`,'magenta'))
}

async function ClaraBot() {
const { state, saveCreds } = await useMultiFileAuthState('session')
const Clara = ClaraConnect({
printQRInTerminal: true,
logger: pino({ level: 'fatal' }),
auth: state,
browser: [`${botname}`, "Safari", "1.0.0"],
getMessage: async key => {
return {
                
}
}
})
store.bind(Clara.ev)

console.log(color(figlet.textSync(`Xyroinee-ID`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'green'))

Clara.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

Clara.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!Clara.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(Clara, kay, store)
require('./xyroinee')(Clara, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

	// detect group update
		Clara.ev.on("groups.update", async (json) => {
			try {
ppgroup = await Clara.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
console.log(json)
const res = json[0];
if (res.announce == true) {
await sleep(2000)
Clara.sendMessage(res.id, {
text: `「 Pengaturan Grup 」\n\nGrup Telah Di Tutup Oleh Admin, Sekarang Hanya Admin Yang Dapat Mengirim Pesan !`,
});
} else if (res.announce == false) {
await sleep(2000)
Clara.sendMessage(res.id, {
text: `「 Pengaturan Grup 」\n\nGrup Telah Di Buka Oleh Admin, Sekarang Semua Peserta Dapat Mengirim Pesan !`,
});
} else if (res.restrict == true) {
await sleep(2000)
Clara.sendMessage(res.id, {
text: `「 Pengaturan Grup 」\n\nInfo Grup Di Tutup, Sekarang Hanya Admin Yang Dapat Mengubah Info Grup !`,
});
} else if (res.restrict == false) {
await sleep(2000)
Clara.sendMessage(res.id, {
text: `「 Pengaturan Grup 」\n\nInfo Grup Di Buka, Sekarang Peserta Dapat Mengubah Info Grup !`,
});
} else if(!res.desc == ''){
await sleep(2000)
Clara.sendMessage(res.id, { 
text: `「 Pengaturan Grup 」\n\n*Deskripsi Grup Di Ubah Ke*\n\n${res.desc}`,
});
} else {
await sleep(2000)
Clara.sendMessage(res.id, {
text: `「 Pengaturan Grup 」\n\n*Nama Grup Di Ubah Ke*\n\n*${res.subject}*`,
});
} 
});
		
Clara.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await Clara.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Clara.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await Clara.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
if (anu.action == 'add') {
const fotonya = await getBuffer(ppuser)
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const xmembers = metadata.participants.length
ucapan = `
┌─❖「  @${num.split("@")[0]}  」
│✑  Welcome To: 
│✑  ${metadata.subject}
│✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
│✑ ${xmembers}Th
│✑  Pada : 
│✑ ${time} ${date}
└───────────────┈ ⳹`
Clara.sendMessage(anu.id,
{ text: ucapan,
contextInfo:{
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fotonya,
"sourceUrl": `${gcwa}`}}})
} else if (anu.action == 'remove') {
const fotonye = await getBuffer(ppuser)
const ttime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const ddate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const mmembers = metadata.participants.length
sayonara = `
┌─❖ 「 @${num.split("@")[0]}  」
│✑  Out From:
│✑ ${metadata.subject}
│✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
│✑ ${mmembers}th
│✑  Time : 
│✑  ${ttime} ${ddate}
└───────────────┈ ⳹`
Clara.sendMessage(anu.id,
{ text: sayonara,
contextInfo:{
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fotonye,
"sourceUrl": `${gcwa}`}}})
} else if (anu.action == 'promote') {
const poto = await getBuffer(ppuser)
katanya = ` Selamat @${num.split("@")[0]}, Telah Menjadi Admin`
Clara.sendMessage(anu.id,
{ text: katanya,
contextInfo:{
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ppuser,
"sourceUrl": `${gcwa}`}}})
} else if (anu.action == 'demote') {
katanya = `Yah... @${xeonName.split("@")[0]}, Bukan Admin Lagi`
Clara.sendMessage(anu.id,
{ text: katanya,
contextInfo:{
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ppuser,
"sourceUrl": `${gcwa}`}}})
}
}
} catch (err) {
console.log(err)
}
})

Clara.sendTextWithMentions = async (jid, text, quoted, options = {}) => Clara.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

Clara.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Clara.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Clara.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Clara.getName = (jid, withoutContact  = false) => {
id = Clara.decodeJid(jid)
withoutContact = Clara.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Clara.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Clara.decodeJid(Clara.user.id) ?
Clara.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Clara.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

Clara.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Clara.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Clara.getName(i)}\nFN:${await Clara.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	Clara.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

Clara.setStatus = (status) => {
Clara.query({
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

Clara.public = true

Clara.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Clara.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

Clara.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Clara.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

Clara.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Clara.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

Clara.copyNForward = async (jid, message, forceForward = false, options = {}) => {
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
await Clara.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

Clara.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
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

Clara.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

Clara.getFile = async (PATH, save) => {
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

Clara.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await Clara.getFile(path, true)
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
await Clara.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

Clara.sendText = (jid, text, quoted = '', options) => Clara.sendMessage(jid, { text: text, ...options }, { quoted })

Clara.serializeM = (m) => smsg(Clara, m, store)

Clara.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); Clara.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); ClaraBot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); ClaraBot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); Clara.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); Clara.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); ClaraBot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); ClaraBot(); }
else Clara.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} else if (connection === "open") { Clara.sendMessage(owner + "@s.whatsapp.net", { text: `*Aku Aktif!*\n\n\n_Jangan Lupa Support, Kak :)_\n\n • YouTube: https://youtube.com/@Xyroinee\n\n • GitHub: https://github.com/Xyroinee\n\n • Instsgram: https://instagram.com/danilelistz02\n\n\n_*Thanks to*_\n_*My God*_\n_*Myself*_\n_*Family*_\n_*Dan Semua Yang Berkontribusi Dalam Pengembangan Script Ini*_` }); }
console.log('Connected...', update)
})

Clara.ev.on('creds.update', await saveCreds)

start('2',colors.bold.white('\nMenunggu Pesan Baru....'))


return Clara

}

ClaraBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)})
