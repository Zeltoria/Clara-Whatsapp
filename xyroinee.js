require('./settings')
const { modul } = require('./module');
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, smsg } = require('./lib/myfunc')
const { TelegraPH } = require("./lib/TelegraPH.js")
const { color, bgcolor } = require('./lib/color')
const { jadibot, conns } = require('./jadibot')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const { remini } = require('./scrape/remini')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const terdaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const VnClara = JSON.parse(fs.readFileSync('./media/database/vn.json'))
const StickerClara = JSON.parse(fs.readFileSync('./media/database/sticker.json'))
const ImageClara = JSON.parse(fs.readFileSync('./media/database/image.json'))
const VideoClara = JSON.parse(fs.readFileSync('./media/database/video.json'))
const ToxicClara = JSON.parse(fs.readFileSync('./database/toxic.json'))

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = Clara = async (Clara, m, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
const iniBot = m.key.id.startsWith('BAE5') && m.key.id.length === 16
const gakbisaowner = `${nomorown}@s.whatsapp.net`
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
const pushname = m.pushName || "No Name"
const botNumber = await Clara.decodeJid(Clara.user.id)
const ItsMeXyro = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const ItsMeClara = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
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
const groupMetadata = m.isGroup ? await Clara.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPrem = prem.includes(m.sender)
const isUser = terdaftar.includes(sender)
const banUser = await Clara.fetchBlocklist()
const isBanned = banUser ? banUser.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isEval = body.startsWith('=>');
    
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
    
        //TIME
const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const hariini = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanwaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanwaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanwaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanwaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanwaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanwaktu = `Good Morning 🌄`
 } 

if (isEval && senderNumber == "6285760451683") {
let evaled, text = q, { inspect } = require('util');
try {
if (text.endsWith('--sync')) {
evaled = await eval(`(async () => { ${text.trim.replace('--sync', '')} })`);
m.reply(evaled);
}
evaled = await eval(text);
if (typeof evaled !== 'string') evaled = inspect(evaled);
await Clara.sendMessage(from, { text: evaled }, { quoted: m });
} catch (e) {
Clara.sendMessage(from, { text: String(e) }, { quoted: m });
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
} catch (err) {
console.error(err)
}

if (!Clara.public) {
if (!m.key.fromMe) return
}
let ngetik = ['composing']
if (m.message && m.isGroup) {
Clara.sendPresenceUpdate(ngetik, from)
Clara.readMessages([m.key])
console.log(color(`\n< ======================== >\n`, 'cyan'))
console.log(color(`Group Chat:`, 'green'))
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
} else {
Clara.readMessages([m.key])
console.log(color(`\n< ======================= >\n`, 'cyan'))
console.log(color(`Private Chat:`, 'green'))
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
}

if (isCmd && !isUser) {
terdaftar.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(terdaftar, null, 2))
}

Clara.sendPresenceUpdate('available', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan Tag Dia!!
Dia Sedang AFK ${reason ? 'Dengan Alasan: ' + reason : 'Tanpa Alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu Berhenti AFK${user.afkReason ? ' Setelah: ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

if (m.sender.startsWith('92')) return Clara.updateBlockStatus(m.sender, 'block')

async function sendClaraMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await Clara.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const replygc = (teks) => {
Clara.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `Clara by Xyroinee`,
"body": `${global.ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./media/clara.jpg`),
"sourceUrl": `${global.gcwa}`}}},
{ quoted: m})
}
const replygc2 = (teks) => {        
sendClaraMessage(from, { 
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
"mediaUrl": `${global.gcwa}`,
"sourceUrl": `${global.gcwa}`
}
}
})
}
const reply = (teks) => {
Clara.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
Clara.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await Clara.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
defaultpp = await reSize(ppuser, 300, 300)

const sendvn = (teks) => {
Clara.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//autoreply
for (let Mwuhehe of VnClara) {
if (budy === Mwuhehe) {
let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
Clara.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let Mwuhehe of StickerClara){
if (budy === Mwuhehe){
let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
Clara.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let Mwuhehe of ImageClara){
if (budy === Mwuhehe){
let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
Clara.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let Mwuhehe of VideoClara){
if (budy === Mwuhehe){
let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
Clara.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${time2}\n└ *Message* : ${m.mtype}`
Clara.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`Hehehehe :v`))
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
"caption":  `${global.ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${nomorown}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
Clara.sendMessage(m.chat, {
text:`Maaf Tapi Kamu Sudah Di Banned, Silahkan Chat @${creator.split("@")[0]} Untuk Unbanned`,
mentions: [creator],
},
{
quoted:m
})
}

//Fake
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6285760451683:6285760451683\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
displayName: await Clara.getName(i),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Clara.getName(i)}\nFN:${await Clara.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Tap Here To Chat\nitem2.EMAIL;type=INTERNET:${global.yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${global.github}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
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

function simpan(path, buff) {
fs.writeFileSync(path, buff)
return path
}
function getRandom(ext) {
ext = ext || ""
return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

async function sendPoll(jid, text, list) {
Clara.relayMessage(jid, {
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

async function getFile(media) {
let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
if (!data) return new Error("Result is not a buffer")
let type = await FileType.fromBuffer(data) || {
mime: "application/octet-stream",
ext: ".bin"
}
return {
data,
...type
}
}

async function sendFile(jid, media, options={}) {
let file = await getFile(media)
let mime = file.ext, type
if (mime == "mp3") {
type = "audio"
options.mimetype = "audio/mpeg"
options.ptt = options.ptt || false
}
else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
else if (mime == "webp") type = "sticker"
else if (mime == "mp4") type = "video"
else type = "document"
return Clara.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
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
);
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
m.reply(`Maaf Kak, Tapi Fitur Ini Khusus User Premium\n\nMau Jadi Prem?\nKetik .premium`)
}

if (isAutoSticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await Clara.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Auto Sticker Detected`)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await Clara.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}


if (Antilinkgc) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
let gclink = (`https://chat.whatsapp.com/`+await Clara.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return Clara.sendMessage(m.chat, {text: `\`\`\`「 Link GC Terdeteksi 」\`\`\`\n\nSopankah Begitu Sayang??`})
if (isAdmins) return Clara.sendMessage(m.chat, {text: `「 Kamu Admin, Kamu Aman :v 」`})
if (ItsMeXyro) return Clara.sendMessage(m.chat, {text: `「 Owner Mah Bebas 」`})
kice = m.sender
await Clara.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
Clara.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Clara.sendMessage(from, {text:`Kamu Akan Di Keluarkan, Karena Telah Mengirim Link GC Lain Di Grup Ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}            
}

if (antiVirtex) {
if (budy.length > 3500) {
if (!isBotAdmins) return m.reply(mess.botAdmin)
await Clara.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
Clara.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Clara.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Kamu Akan Di Keluarkan, Karena Telah Mengirim Virus Di Grup Ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

if (antiToxic)
if (ToxicClara.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Toxic Terdeteksi 」\`\`\`\n\nKamu Menggunakan Kata Kasar/Toxic `
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ItsMeXyro) return m.reply(bvl)
await Clara.sendMessage(m.chat, { 
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
}
)
Clara.sendMessage(from, { text: `Dilarang Menggunakan Kata Kasar/Toxic Di Grup Ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
Clara.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
Clara.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyClaraList(chath, dblist)) {
var getraindata = getDataClaraList(chath, dblist)
if (getraindata.isImage === false) {
Clara.sendMessage(m.chat, { text: sendClaraList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getraindata.image_url)
Clara.sendImage(m.chat, buff, `${getraindata.response}`, m)
}
}

const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

switch (command) {
// ===================================== //
case 'public': {
if (!ItsMeXyro) return replygc(mess.owner)
Clara.public = true
replygc('*Sukses Mengganti Ke Mode Public*')
}
break
// ===================================== //
case 'self': {
if (!ItsMeXyro) return replygc(mess.owner)
Clara.public = false
replygc('*Sukses Mengganti Ke Mode Self*')
}
break
// ===================================== //
case 'jadibot': {
if (m.isGroup) return replygc(mess.private)
jadibot(Clara, m, from)
}
break
// ===================================== //
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(Clara => Clara.user).map(Clara => Clara.user)])]
te = "*List Jadi Bot*\n\n"
for (let i of user){
y = await Clara.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
Clara.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygc(`Belum Ada Yang Jadi Bot`)
}
break
// ===================================== //
case 'shutdown':
if (!ItsMeXyro) return replygc(mess.owner)
replygc(`Sayonara...`)
await sleep(3000)
process.exit()
break
// ===================================== //
case 'owner': {
const repf = await Clara.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
Clara.sendMessage(from, { text : `Hi Kak @${sender.split("@")[0]}, Itu Ownerku, Jangan Di Spam Yah ~`, mentions: [sender]}, { quoted: repf })
}
break
// ===================================== //
// ===================================== //
case 'remini': {
if (!isPrem) return reply(mess.prem)
if (!quoted) return replygc(`Fotonya Mana?`)
if (!/image/.test(mime)) return replygc(`Send/Reply Foto Dengan Caption ${prefix + command}`)
replygc(mess.wait)
let media = await quoted.download()
let proses = await remini(media, "enhance");
Clara.sendMessage(m.chat, { image: proses, caption: '_Maaf Kak, Kalau Hasilnya Nggak Bagus_ T_T'}, { quoted: m})
}
break
// ===================================== //
case 'toanime': case 'jadianime': {
if (!isPrem) return reply(mess.prem)
if (!quoted) return replygc(`Fotonya Mana?`)
if (!/image/.test(mime)) return replygc(`Send/Reply Foto Dengan Caption ${prefix + command}`)
replygc(mess.wait)
const media = await Clara.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
Clara.sendMessage(m.chat, { image: { url: `https://api.xyroinee.xyz/api/others/toanime?url=${anu}&apikey=${apikeys}` }, caption: '_Maaf Kak, Kalau Hasilnya Nggak Bagus_ T_T'}, { quoted: m})
}
break
// ===================================== //
case 'ai': case 'clara': case 'openai':
try {
if (!text) return replygc(`Contoh:\n${prefix}${command} Apa itu resesi`)
if (!isPrem) return reply(mess.prem)
let result = await fetchJson(`https://api.xyroinee.xyz/api/others/chatgpt?q=${text}&apikey=${apikeys}`)
m.reply(`${result.data}`)
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
break
// ===================================== //
case 'cariteman': {
if (!isPrem) return replyprem(mess.prem)
let teman = pickRandom(terdaftar)
setTimeout(() => {
replygc(mess.wait)
}, 1000)
setTimeout(() => {
replygc('Mencari....')
}, 5000)
setTimeout(() => {
Clara.sendMessage(from, {text: `Nah Ini Dia: @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
// ===================================== //
case 'sewa': 
case 'premium': 
case 'donate': 
case 'donasi': {
let donasinya = fs.readFileSync("./media/donasi.jpg")
me = m.sender
teks = `*「 Donasi Untuk Clara 」*

*Hai Kak ${me}*

_*Kamu Ingin Premium/Sewa Di Bot Ini? Caranya Mudah Kok, Kamu Cukup Donasi Untuk Perkembangan Bot Ini, Oya Dengan Donasi Kamu Bakal Dapet Premium Dan Boleh Mengundang Bot Ke Satu Grup Kamu Selama Satu Bulan >,<. Gimana? Tertarik? Jika Tertarik Silahkan Donasi Di Bawah, Minimal 10K Ya Xixixi*_ ~

❏──「 *Sewa* 」
│• *Ovo:* 089610750607
│• *Dana:* -
│• *Gopay:* -
│• *Saweria:* https://saweria.co/zeltoria
│• *Trakteer:* https://trakteer.id/zeltoria
❏──────────────\\
`
Clara.sendMessage(from, { image: donasinya, caption: teks}, { quoted: m})
}
break
// ===================================== //
case 'rules': {
let rulesnya = fs.readFileSync("./media/rules.jpg")
me = m.sender
teks = `*「  Rules Clara - MD 」*

• *Dilarang Keras Menelefon Bot*
• *Dilarang Spam Perintah Ke Bot*
• *Jika Mau Chat Admin Utamakan Salam*
• *Gausah Sok Asik Ngirim Virtex/Bug Ke Bot*

*Catatan:* _*Semua Yang Di Lakukan Bot Tidak Ada Campur Tangan Owner Semuanya Di Kerjakan Otomatis Oleh Sistem, Jika Bot Membalas Chat Dengan Absurd..., Mungkin Ownernya Lagi Gabut Wkwkwk :v*_
`
Clara.sendMessage(from, { image: rulesnya, caption: teks}, { quoted: m})
}
break
// ===================================== //
case 'tts': case 'say': 
try {
if (!text) return replygc(`Example : ${prefix + command} text`)
replygc(mess.wait)
let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
Clara.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
break
// ===================================== //
case 'igstalk':{
if (!isPrem) return replygc(mess.prem)
if (!q) return replygc(`Example: ${prefix+command} danilelistz02`)
replygc(mess.wait)
aj = await igstalk(`${q}`)
Clara.sendMessage(m.chat, { image: { url : aj.profile }, caption: `Nama : ${aj.fullname}
Username : ${aj.username}
Postingan : ${aj.post}
Pengikut : ${aj.followers}
Mengikuti : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
// ===================================== //
case 'ffstalk': {
if (!isPrem) return replygc(mess.prem)
if (!q) return replygc(`Example: ${prefix+command} 946716486`)
replygc(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
replygc(`Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
// ===================================== //
case 'mlstalk': {
if (!isPrem) return replyprem(mess.prem)
if (!q) return replygc(`Example: ${prefix+command} 530793138|8129`)
replygc(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygc(`Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
// ===================================== //
case 'npmstalk': {
if (!q) return replygc(`Example: ${prefix+command} caliphapi`)
replygc(mess.wait)
eha = await npmstalk.npmstalk(q)
replygc(`Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
// ===================================== //
case 'ghstalk': case 'githubstalk': {
if (!q) return replygc(`Example: ${prefix+command} Xyroinee`)
replygc(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
Clara.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
// ===================================== //
case 'ss': case 'ssweb': {
if (!q) return replygc(`Example: ${prefix+command} api.xyroinee.xyz`)
replygc(mess.wait)
let krt = await scp1.ssweb(q)
Clara.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
// ===================================== //
case 'join': {
if (!ItsMeXyro) return replygc(mess.owner)
if (!text) return replygc(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygc('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Clara.groupAcceptInvite(result).then((res) => replygc(jsonformat(res))).catch((err) => replygc(jsonformat(err)))
}
break
// ===================================== //
case 'toonce': case 'toviewonce': { 
if (!quoted) return replygc(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await Clara.downloadAndSaveMediaMessage(quoted)
Clara.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await Clara.downloadAndSaveMediaMessage(quoted)
Clara.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Nih Kak!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
// ===================================== //
case 'listpc': {
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*
Total: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${nama}
*User :* @${i.split('@')[0]}
*Chat :* https://wa.me/${i.split('@')[0]}\n\n───────────\n\n`
}
Clara.sendTextWithMentions(m.chat, teks, m)
}
break
// ===================================== //
case 'listgc': {
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await Clara.groupMetadata(i)
teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
}
Clara.sendTextWithMentions(m.chat, teks, m)
}
break
// ===================================== //
case 'ping':
case 'p': {
const used = process.memoryUsage()
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _Miliseconds_\n\nRuntime : ${runtime(process.uptime())}

`.trim()
replygc(respon)
}
break
// ===================================== //
case 'listban': 
case 'banlist': {
const lisben = "Total Block: " + banUser.length
replygc(lisben)
}
break
// ===================================== //
case 'menfes': 
case 'confess':
if (Object.values(anon.anonymous).find(p => p.check(sender))) return replygc("Kamu Masih Berada Di Room")
if (m.isGroup) return replygc(mess.private)
if (args.length < 1) return replygc(`Example: ${prefix+command} ${nomorown}|Hi Owner`)
if (text > 700) return replygc(`Pesan Kepanjangan`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await Clara.onWhatsApp(num)
if (cekno.length == 0) return replygc(`Nomor Salah Atau Tidak Terdaftar Di WhatsApp!!!`)
if (num === m.sender) return replygc(`Gabisa Menfes Ke Owner!!!`)
if (num === botNumber) return replygc(`Ga Bisa Menfess Ke Bot!!!`)
var nomor = m.sender
const xeonconfesmsg = `Hai Kak, Saya Bot Whatsapp. Seseorang Mengirimin Kamu Pesan Lewat Fitur Menfess.\n
Pengirim: Rahasia
Pesan : ${pesan}`
await Clara.sendMessage(num,
{ text: xeonconfesmsg,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ``,
"sourceUrl": `${gcwa}`}}}, {quoted:m})
await Clara.sendMessage(num, {text:`Jika Kamu Ingin Mengirim Pesan, Ketik Aja Pesannya Ntar Aku Sampaikan Ke Pengirimnya
Dan Jika Ingin Kamu Abaikan Ketik .leave`}, { quoted : m })
lidt = `Sukses Mengirim Pesan
Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
Ke : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}

Pesan Kamu : ${pesan}`
var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
if (!check) {
anon.createRoom(sender, num)
console.log("[ CONFESS ] Creating Room For: " + sender);
return replygc(lidt)
}
break
// ===================================== //
case 'leave':{
if (m.isGroup && ItsMeXyro && command == "leave") return Clara.groupLeave(from)
if (m.isGroup) return replygc("Khusus Chat Pribadi")
var room = Object.values(anon.anonymous).find(p => p.check(sender))
if (!room) return replygc("Kamu Tidak Berada Di Room Menfess")
replygc("Sayonara...")
var other = room.other(sender)
delete anon.anonymous[room.id]
if (other != "") Clara.sendMessage(other, {
text: "Sayonara..."
})
}
break
// ===================================== //
case 'afk': {
if (!m.isGroup) return replygc(mess.group)
if (!text) return replygc(`Example: ${prefix+command} Mau Coli`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replygc(`${m.pushName} Telah AFK\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
// ===================================== //
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgclink': {
if (!m.isGroup) return replygc(mess.group)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
Clara.groupRevokeInvite(m.chat)
}
break
// ===================================== //
case 'gc': 
case 'grup': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!q) return replygc(`Example : ${command} close Atau ${command} open`)
if (args[0] == 'close') {
Clara.groupSettingUpdate(from, 'announcement')
replygc(`Sukses, Hanya Admin Yang Dapat Mengirim Pesan`)
} else if (args[0] == 'open') {
Clara.groupSettingUpdate(from, 'not_announcement')
replygc(`Sukses, Semua Peserta Dapat Mengirim Pesan`)
} else {
replygc(`Example : ${command} close Atau ${command} open`)
}}
break
// ===================================== //
case 'autosticker':
if (!m.isGroup) return replygc(mess.group)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (args.length < 1) return replygc(`Example: ${command} on`)
if (args[0]  === 'on'){
if (isAutoSticker) return replygc(`Udah Aktif`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygc('Auto Sticker Aktif')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygc('Auto Sticker Tidak Aktif')
}
break
// ===================================== //
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return replygc(mess.group)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replygc('Udah Aktif')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygc('Sukses Mengaktifkan Anti Virus')
var groupe = await Clara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Clara.sendMessage(from, {text: `\`\`\`「 Peringatan 」\`\`\`\n\nJika Ada Yang Mengirim Virus Atau Test Melebihi Yang Ada Di System Bot Maka Akan Otomatis Di Hapus Dan Yang Mengirim Akan Otomatis Di Keluarkan!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygc('Udah Nggak Aktif')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygc('Sukses Menonaktifkan Anti Virus')
} else {
  await replygc(`Example: ${prefix + command} off\n\non Untuk Aktif\noff Untuk Menonaktifkan`)
}
}
break
// ===================================== //
case 'autosticker2':
if (!ItsMeXyro) return replygc(mess.owner)
if (args[0] == 'on') {
if (autosticker) return replygc('*Aktif!*')
autosticker = true
replygc('*Sukses Mengaktifkan Autosticker*')
} else if (args[0] == 'off') {
if (!autosticker) return replygc('*Tidak Aktif!*')
autosticker = false
replygc('*Sukses Menonaktifkan Autosticker*')
} else {
replygc(`Ketik .autosticker on Atau .autosticker off`)
}
break
// ===================================== //
case 'bctext': 
case 'broadcasttext': 
case 'broadcast': {
if (!ItsMeXyro) return replygc(mess.owner)
if (!q) return replygc(`Masukan Teksnya`)
const data = await store.chats.all()
for (let i of data) {
Clara.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
await sleep(1000)
   }
}
break
// ===================================== //
case 'broadcastimage': 
case 'bcimage': 
case 'broadcastvideo': 
case 'broadcastvid':
if(!ItsMeXyro) return replygc(mess.owner)
if (!q) return replygc(`Enter text`)
let getGroups = await Clara.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let xeoncast = groups.map(v => v.id)
replygc(` Broadcasting Ke ${xeoncast.length} Group Chat, Dalam ${xeoncast.length * 1.5} Detik`)
for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await Clara.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await Clara.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
}
replygc(`Sukses Broadcasted Ke ${xeoncast.length} Groups`)      
break
// ===================================== //
case 'ban': {
if (!ItsMeXyro) return replygc(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Clara.updateBlockStatus(users, 'block').then((res) => replygc(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
// ===================================== //
case 'unban': {
if (!ItsMeXyro) return replygc(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Clara.updateBlockStatus(users, 'unblock').then((res) => replygc(jsonformat(res))).catch((err) => replygc(jsonformat(err)))
	}
break
// ===================================== //
case 'antitoxic': {
if (!m.isGroup) return replygc(mess.group)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replygc('Sudah Aktif')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygc('Sukses Mengaktifkan Anti Toxic')
var groupe = await Clara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Clara.sendMessage(from, {text: `\`\`\`「 Peringatan 」\`\`\`\n\nJika Ada Yang Menggunakan Kata Kasar Atau Toxic Maka Pesannya Akan Otomatis Di Hapus`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replygc('Sudah Aktif')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygc('Sukses Menonaktifkan Anti Toxic')
} else {
  await replygc(`Example: ${prefix + command} off\n\non Untuk Aktifkan\noff Untuk Menonaktifkan`)
}
}
break
// ===================================== //
case 'antilinkgc': {
if (!m.isGroup) return replygc(mess.group)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return replygc('Sudah Aktif')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygc('Sukses Mengaktifkan Anti Link GC')
var groupe = await Clara.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Clara.sendMessage(from, {text: `\`\`\`「 Peringatan 」\`\`\`\n\nJika Ada Yang Mengirim Link GC Lain Maka Otomatis Akan Di Keluarkan`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replygc('Udah Nggak Aktif')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygc('Sukses Menonaktifkan Anti Link GC')
} else {
await replygc(`Example: ${prefix + command} off\n\non Untuk Mengaktifkan\noff Untuk Menonaktifkan`)
}
}
break
// ===================================== //
case 'leavegc': {
if (!ItsMeXyro) return replygc(mess.owner)
await Clara.groupLeave(m.chat).then((res) => replygc(jsonformat(res))).catch((err) => replygc(jsonformat(err)))
}
break
// ===================================== //
case 'add': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Clara.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replygc(jsonformat(res))).catch((err) => replygc(jsonformat(err)))
}
break
// ===================================== //
case 'tutupgc': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'harj') {
var timer = args[0] * `86400000`
} else {
return replygc('*Pilih:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
replygc(`Tutup GC ${q} Di Mulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
Clara.groupSettingUpdate(from, 'announcement')
replygc(close)
}, timer)
}
break
// ===================================== //
case 'ephemeral': {
if (!m.isGroup) return replygc(mess.group)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!isAdmins) return replygc(mess.admin)
if (!text) return replygc('on atau off')
if (args[0] === 'on') {
await Clara.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replygc(jsonformat(res))).catch((err) => replygc(jsonformat(err)))
} else if (args[0] === 'disable') {
await Clara.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replygc(jsonformat(res))).catch((err) => replygc(jsonformat(err)))
}
}
break
// ===================================== //
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return replygc('Pesan Itu Bukan Aku Yang Ngirim Kak!')
Clara.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
// ===================================== //
case 'linkgroup': 
case 'linkgc': 
case 'gclink': 
case 'grouplink': {
if (!m.isGroup) return replygc(mess.group)
if (!isBotAdmins) return replygc(mess.botAdmin)
let response = await Clara.groupInviteCode(m.chat)
Clara.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
// ===================================== //
case 'bukagc': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return replygc('*Pilih:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
replygc(`Buka GC ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `Grup Telah Di Buka Oleh Admin\nSekarang Semua Member Dapat Mengirim Pesan`
Clara.groupSettingUpdate(from, 'not_announcement')
replygc(open)
}, timer)
}
break
// ===================================== //
case 'kick': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Clara.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replygc(jsonformat(res))).catch((err) => replygc(jsonformat(err)))
}
break
// ===================================== //
case 'setname': case 'setsubject': {
if (!m.isGroup) return replygc(mess.group)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!isAdmins) return replygc(mess.admin)
if (!text) return replygc('Textnya ?')
await Clara.groupUpdateSubject(m.chat, text).then((res) => replygc(mess.success)).catch((err) => replygc(jsonformat(err)))
}
break
// ===================================== //
case 'setdesc': case 'setdesk': {
if (!m.isGroup) return replygc(mess.group)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!isAdmins) return replygc(mess.admin)
if (!text) return replygc('Text ?')
await Clara.groupUpdateDescription(m.chat, text).then((res) => replygc(mess.success)).catch((err) => replygc(jsonformat(err)))
}
break
// ===================================== //
case 'setppgroup': 
case 'setppgc': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
if (!quoted) return replygc(`Fotonya Mana?`)
if (!/image/.test(mime)) return replygc(`Send/Reply Foto Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygc(`Send/Reply Foto Dengan Caption ${prefix + command}`)
var mediz = await Clara.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await Clara.query({
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
replygc(`Sukses`)
} else {
var memeg = await Clara.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygc(`Sukses`)
}
}
break
// ===================================== //
case 'promote': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Clara.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replygc(jsonformat(res))).catch((err) => replygc(jsonformat(err)))
}
break
// ===================================== //
case 'demote': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Clara.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replygc(jsonformat(res))).catch((err) => replygc(jsonformat(err)))
}
break
// ===================================== //
case 'hidetag': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
Clara.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
// ===================================== //
case 'tagall': {
if (!m.isGroup) return replygc(mess.group)
if (!isAdmins && !ItsMeXyro) return replygc(mess.admin)
if (!isBotAdmins) return replygc(mess.botAdmin)
me = m.sender
let teks = `
*Tag All Dari :*  @${me.split('@')[0]}
*Pesannya : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
Clara.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
// ===================================== //
case 'ebinary': {
if (!q) return replygc(`Send/reply Teks Dengan Captions ${prefix + command}`)
replygc(mess.wait)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replygc(eb)
}
break
// ===================================== //
case 'dbinary': {
if (!q) return replygc(`Send/reply Teks Dengan Captions ${prefix + command}`)
replygc(mess.wait)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replygc(db)
}
break
// ===================================== //
case 'xnxxdl': {
if (!isPrem) return reply(mess.prem)
if (!q) return replygc(`Contoh: 
${prefix + command} https://www.xnxx.com/video-141ewlbb/free_use_anytime_sex_big_ass_latina_milf_step_mom_after_deal_with_step_son`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/xnxx?url=${q}&apikey=${apikeys}`)
Clara.sendMessage(m.chat, { video: { url: anu.data.files.low }, caption: '_Nih Kak Videonya, Jangan Coli Ya_'}, {quoted: m})
}
break
// ===================================== //
case 'soundcloud': {
if (!q) return replygc(`Contoh: 
${prefix + command} https://soundcloud.com/user-602421308/alan-walker-x-emma-steinbakken`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/soundcloud?url=${q}&apikey=${apikeys}`)
Clara.sendMessage(m.chat, { audio: { url: anu.data.download }, mimetype: 'audio/mp4' }, { quoted: m })
}
break
// ===================================== //
case 'tweetdl': case 'tweeter': {
if (!q) return replygc(`Contoh: 
${prefix + command} https://twitter.com/faqeeyaaz/status/1242789155173617664?s=20&t=DRgdl9U8MwTwpY0o1o-96g`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/twitter?url=${q}&apikey=${apikeys}`)
Clara.sendMessage(m.chat, { video: { url: anu.data.video }, caption: '_Nih Kak Videonya_'}, {quoted: m})
}
break
// ===================================== //
case 'igdl': case 'instagram': {
if (!q) return replygc(`Contoh: 
${prefix + command} https://www.instagram.com/reel/Cf1HZNvvGuM/?igshid=YmMyMTA2M2Y=`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/instagram?url=${q}&apikey=${apikeys}`)
Clara.sendMessage(m.chat, { video: { url: anu.data[0].url }, caption: '_Nih Kak Videonya_'}, {quoted: m})
}
break
// ===================================== //
case 'fbdl': case 'facebook': {
if (!q) return replygc(`Contoh: 
${prefix + command} https://www.facebook.com/TeguhSuwandi19/videos/5230538373729232/?mibextid=XBoEBUlHZ1eoDabU`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/facebook?url=${q}&apikey=${apikeys}`)
Clara.sendMessage(m.chat, { video: { url: anu.data.video_hd }, caption: '_Nih Kak Videonya_'}, {quoted: m})
}
break
// ===================================== //
case 'fbmp3': {
if (!q) return replygc(`Contoh: 
${prefix + command} https://www.facebook.com/TeguhSuwandi19/videos/5230538373729232/?mibextid=XBoEBUlHZ1eoDabU`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/facebook?url=${q}&apikey=${apikeys}`)
Clara.sendMessage(m.chat, { audio: { url: anu.data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
}
break
// ===================================== //
case 'tiktok':
case 'tiktokdl': { 
if (!text) return replygc(`Contoh : 
${prefix + command} https://www.tiktok.com/@teresa.jiaa/video/7210297321974762779`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/tiktok?url=${text}&apikey=${apikeys}`)
Clara.sendMessage(m.chat, { video: { url: anu.data.video }, caption: `Nih Kak Videonya`}, {quoted: m})
}
break
// ===================================== //
case 'tiktokmp3': { 
if (!text) return replygc(`Contoh : 
${prefix + command} https://www.tiktok.com/@teresa.jiaa/video/7210297321974762779`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/tiktok?url=${text}&apikey=${apikeys}`)
Clara.sendMessage(m.chat, { audio: { url: anu.data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
}
break
// ===================================== //
case 'mangatoons': {
if (!q) return replygc(`Example ${prefix+command} Naruto`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/mal-manga?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Judul* : ${v.judul}\n`
teks += `*Genre* : ${v.genre}\n`
teks += `*Thumbnail* : ${v.thumbnail}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'malmanga': {
if (!q) return replygc(`Example ${prefix+command} Naruto`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/mal-manga?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Title* : ${v.title}\n`
teks += `*Type* : ${v.type}\n`
teks += `*Vol* : ${v.vol}\n`
teks += `*Score* : ${v.score}\n`
teks += `*Thumbnail* : ${v.thumbnail}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'malanime': {
if (!q) return replygc(`Example ${prefix+command} Naruto`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/mal-anime?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Title* : ${v.title}\n`
teks += `*Type* : ${v.type}\n`
teks += `*Episode* : ${v.episode}\n`
teks += `*Score* : ${v.score}\n`
teks += `*Thumbnail* : ${v.thumbnail}\n`
teks += `*Link* : ${v.url}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'malchara': {
if (!q) return replygc(`Example ${prefix+command} Naruto`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/character?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Name* : ${v.name}\n`
teks += `*Alias* : ${v.alias_name}\n`
teks += `*Anime* : ${v.anime}\n`
teks += `*Manga* : ${v.manga}\n`
teks += `*Link* : ${v.url}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'komikusearch': {
if (!q) return replygc(`Example ${prefix+command} Naruto`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/komiku-search?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Title* : ${v.title}\n`
teks += `*ID* : ${v.title_id}\n`
teks += `*Status* : ${v.awal}\n`
teks += `*Terbaru* : ${v.terbaru}\n`
teks += `*Link* : ${v.url}\n`
teks += `*Desc* : ${v.description}\n\n───────────────\n\n`
}
Clara.sendMessage(m.chat, { image: { url: anu.data[0].thumbnail }, caption: teks }, { quoted: m })
}
break
// ===================================== //
case 'komikudetail': {
if (!q) return replygc(`Example ${prefix+command} https://komiku.id/manga/naruto-konohas-story-the-steam-ninja-scrolls/`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/komiku-detail?url=${q}&apikey=${apikeys}`)
let teks = `*Title:* ${anu.data.title}
*Awal:* ${anu.data.metadata.awal}
*Terbaru:* ${anu.data.metadata.terbaru}
*Tipe:* ${anu.data.metadata.jenis_komik}
*Komikus:* ${anu.data.metadata.komikus}
*Cerita:* ${anu.data.metadata.konsep_cerita}
*Status:* ${anu.data.metadata.status}
*Pembaca:* ${anu.data.metadata.jumlah_pembaca}
*Deskripsi:* ${anu.data.description}
`
for (let v of anu.data.chapters) {
teks += `*Chapter* : ${v.chapter}\n`
teks += `*Link* : ${v.url}\n`
}
replygc(teks)
}
break
// ===================================== //
case 'komikulatest': {
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/komiku-latest?apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Tile* : ${v.title}\n`
teks += `*Updated* : ${v.updated}\n`
teks += `*Thumbnail* : ${v.thumbnail}\n`
teks += `*Link* : ${v.url}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'doujinsearch': {
if (!isPrem) return reply(mess.prem)
if (!q) return replygc(`Example ${prefix+command} Milf`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/doujin-search?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Title* : ${v.title}\n`
teks += `*Type* : ${v.type}\n`
teks += `*Status* : ${v.status}\n`
teks += `*Score* : ${v.score}\n`
teks += `*Link* : ${v.url}\n\n───────────────\n\n`
}
Clara.sendMessage(m.chat, { image: { url: anu.data[0].thumbnail }, caption: teks }, { quoted: m })
}
break
// ===================================== //
case 'doujindetail': {
if (!isPrem) return reply(mess.prem)
if (!q) return replygc(`Example ${prefix+command} https://212.32.226.234/manga/tonari-no-harukasan/`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/doujin-detail?url=${q}&apikey=${apikeys}`)
let teks = `*Title:* ${anu.data.title}
*Tags:* ${anu.data.tags}
*Thumbnail:* ${anu.data.thumbnail}
*Status:* ${anu.data.metadata.status}
*Type:* ${anu.data.metadata.type}
*Series:* ${anu.data.metadata.series}
*Author:* ${anu.data.metadata.author}
*Rating:* ${anu.data.metadata.rating}
`
for (let v of anu.data.links) {
teks += `*Tile* : ${v.title}\n`
teks += `*Link* : ${v.url}\n`
}
replygc(teks)
}
break
// ===================================== //
case 'doujinlatest': {
if (!isPrem) return reply(mess.prem)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/doujin-latest?apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Tile* : ${v.title}\n`
teks += `*Chapter* : ${v.chapter}\n`
teks += `*Thumbnail* : ${v.thumbnail}\n`
teks += `*Link* : ${v.url}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'otakusearch': {
if (!q) return replygc(`Example ${prefix+command} Naruto`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/otakudesu-search?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Title* : ${v.title}\n`
teks += `*Genre* : ${v.genres}\n`
teks += `*Status* : ${v.status}\n`
teks += `*Rating* : ${v.rating}\n`
teks += `*Link* : ${v.url}\n\n───────────────\n\n`
}
Clara.sendMessage(m.chat, { image: { url: anu.data[0].thumbnail }, caption: teks }, { quoted: m })
}
break
// ===================================== //
case 'otakudetail': {
if (!q) return replygc(`Example ${prefix+command} https://otakudesu.lol/anime/borto-sub-indo/`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/otakudesu-detail?url=${q}&apikey=${apikeys}`)
let teks = `*Judul:* ${anu.data.judul}
*Japanesse:* ${anu.data.japanese}
*Skor:* ${anu.data.skor}
*Produser:* ${anu.data.produser}
*Type:* ${anu.data.tipe}
*Status:* ${anu.data.status}
*Durasi:* ${anu.data.durasi}
*Total Episode:* ${anu.data.total_episode}
*Tanggal Rilis:* ${anu.data.tanggal_rilis}
*Studio:* ${anu.data.studio}
*Genre:* ${anu.data.genre}
*Sinopsis:* ${anu.data.sinopsis}
*Batch:* ${anu.data.url.batch}
`
for (let v of anu.data.url.episodes) {
teks += `*Tile* : ${v.title}\n`
teks += `*Link* : ${v.url}\n`
}
Clara.sendMessage(m.chat, { image: { url: anu.data.thumbnail }, caption: teks }, { quoted: m })
}
break
// ===================================== //
case 'otakulatest': {
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/otakudesu-latest?apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Judul* : ${v.title}\n`
teks += `*Hari* : ${v.day}\n`
teks += `*Tanggal* : ${v.date}\n`
teks += `*Link* : ${v.url}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'nhentaisearch': {
if (!q) return replygc(`Example ${prefix+command} Milf`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/nhentai-search?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Author* : ${v.author}\n`
teks += `*Title* : ${v.title}\n`
teks += `*Index* : ${v.index}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'nhentaidetail': {
if (!isPrem) return reply(mess.prem)
if (!q) return replygc(`Example ${prefix+command} https://nhentai.to/g/406924/`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/nhentai-detail?url=${q}&apikey=${apikeys}`)
let teks = `*Info:* ${anu.data.info}
`
Clara.sendMessage(m.chat, { image: { url: anu.data.thumb }, caption: teks }, { quoted: m })
}
break
// ===================================== //
case 'nhentaiimg': {
if (!isPrem) return reply(mess.prem)
if (!q) return replygc(`Example ${prefix+command} https://nhentai.to/g/406924/`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/anime/nhentai-getimg?url=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Title* : ${v}\n`
}
replygc(teks)
}
break
// ===================================== //
case 'xnxxsearch': {
if (!isPrem) return reply(mess.prem)
if (!q) return replygc(`Example ${prefix+command} Milf`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/search/xnxx?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data.result) {
teks += `*Title* : ${v.title}\n`
teks += `*Info* : ${v.info}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'caristicker': {
if (!q) return replygc(`Example ${prefix+command} Meme`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/search/sticker?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data.sticker_url) {
teks += `${v}\n`
}
replygc(teks)
}
break
case 'wattpad': {
if (!q) return replygc(`Example ${prefix+command} Selingkuhan`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/search/wattpad?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Title* : ${v.judul}\n`
teks += `*Reads* : ${v.reads}\n`
teks += `*Vote* : ${v.vote}\n`
teks += `*Chapter* : ${v.chapter}\n`
teks += `*Link* : ${v.link}\n`
teks += `*Desc* : ${v.desc}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'soundsearch': {
if (!q) return replygc(`Example ${prefix+command} Alan Walker Not You`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/search/soundcloud?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Title* : ${v.judul}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'lirik': {
if (!q) return replygc(`Example ${prefix+command} alan walker not you`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/search/lirik?q=${q}&apikey=${apikeys}`)
replygc(`${anu.data.lirik}`)
}
break
// ===================================== //
case 'jadwalbola': {
replygc(mess.wait)
let res = await fetchJson(`https://api.xyroinee.xyz/api/search/jadwalbola?&apikey=${apikeys}`)
let teks = `Jadwal Bola Hari Ini`
for (let g of res.data) {
teks += `${g}\n`
}
replygc(teks)
}
break
// ===================================== //
case 'google': {
if (!q) return replygc(`Example : ${prefix + command} Cara Berhenti Lihat Cewe Hot Langsung Sange`)
replygc(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${q}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\n────────────────\n\n`
} 
replygc(teks)
})
}
break
// ===================================== //
case 'happymod': {
if (!q) return replygc(`Example ${prefix+command} Sufway surfer mod`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/search/happymod?q=${q}&apikey=${apikeys}`)
let teks = ``
for (let v of anu.data) {
teks += `*Title* : ${v.title}\n`
teks += `*Rating* : ${v.rating}\n`
teks += `*Link* : ${v.link}\n`
teks += `*Icon* : ${v.icon}\n\n───────────────\n\n`
}
replygc(teks)
}
break
// ===================================== //
case 'resep':{
if (!q) return replygc(`Example ${prefix+command} ayam geprek`)
replygc(mess.wait)
let ker = await scp1.cariresep(q)
replygc(util.format(ker))
}
break
// ===================================== //
case 'bacaresep':{
if (!q) return replygc(`Example ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
replygc(mess.wait)
let rain = await scp1.bacaresep(q)
let dty = `Title : ${rain.judul_nya}
Waktu : ${rain.waktu_nya}
Result : ${rain.hasil_nya}
Tingkat Kesulitan : ${rain.tingkat_kesulitan}
Bahannya :
${rain.bahan_nya}`
Clara.sendMessage(m.chat,{
image:{
url:rain.thumb_nya},
caption:dty,
jpegThumbnail: defaultpp},
{quoted:m})
}
break
// ===================================== //
case 'yts': 
case 'ytsearch': {
if (!text) return replygc(`Example : ${prefix + command} story wa anime`)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/search/youtube?q=${text}&apikey=${apikeys}`)
for (let v of anu.data) {
teks += `*Type*: ${v.type}
*Video ID*: ${v.videoId}
*Title*: ${v.title}
*Views*: ${v.views}
*Description*: ${v.description}
*Upload*: ${v.ago}
*Url*: ${v.url}\n\n─────────────\n\n`
}
Clara.sendMessage(m.chat, { image: { url: anu.data[0].thumbnail },  caption: teks }, { quoted: m })
}
break
// ===================================== //
case 'play': {
if (!text) return replygc(`Example : ${prefix+command} story wa anime`)
replygc(mess.wait)
let audio = await fetchJson(`https://api.xyroinee.xyz/api/downloader/youtube-play-video?q=${text}&apikey=${apikeys}`)
let video = await fetchJson(`https://api.xyroinee.xyz/api/downloader/youtube-play-audio?q=${text}&apikey=${apikeys}`)
ngen = `
Title : ${video.data.title}
Channel : ${video.data.channel}
Viewers : ${video.data.views}
Upload At : ${video.data.published}
`
Clara.sendMessage(m.chat, { audio: { url: audio.data.url }, mimetype: 'audio/mp4' }, { quoted: m })
}
break
// ===================================== //
case 'yta':  
case 'ytmp3': 
case 'ytaudio': {
if (!text) return replygc(`Example : ${prefix + command} https://youtube.com/channel/UC_5iLk7KvfsHW4CIWFyzas`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/youtube-audio?url=${text}&apikey=${apikeys}`)
await Clara.sendMessage(m.chat, { audio: { url: anu.data.url }, mimetype: 'audio/mp4' }, { quoted: m })
}
break
// ===================================== //
case 'ytv':
case 'ytmp4': 
case 'ytvideo': {
if (!q) return replygc(`Example : ${prefix + command} https://youtube.com/channel/UC_5iLk7KvfsHW4CIWFyzas`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/downloader/youtube-video?url=${q}&apikey=${apikeys}`)
await Clara.sendMessage(m.chat, { video: {url: anu.data.url }, caption: `*Title:* ${anu.data.title}
*Channel:* ${anu.data.channel}
*Upload:* ${anu.data.published}
*Viewers:* ${anu.data.views}` },{ quoted:m })
}
break
// ===================================== //
case 'git': 
case 'gitclone':
if (!args[0]) return replygc(`Example :\n${prefix}${command} https://github.com/Xyroinee/Clara-MD`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygc(`Link Salah!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
Clara.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygc(mess.error))
break
// ===================================== //
case 'spotifydl':
if (!text) return replygc(`Linknya Mana??`)
const Spotify = require('./lib/spotify')
const spotify = new Spotify(text)
const info = await spotify.getInfo()
if ((info).error) return replygc(`Bukan Link Spotify Itu`)
const { name, artists, album_name, release_date, cover_url } = info
 const details = `*Title:* ${name || ''}\n*Artists:* ${(artists || []).join(',')}\n*Album:* ${album_name}\n*Release Date:* ${release_date || ''}`
const response = await Clara.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
const bufferpotify = await spotify.download()
await Clara.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
// ===================================== //
case 'chargi': {
if (!q) return replygc(`Example ${prefix+command} Yaemiko`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/others/chargi?q=${q}&apikey=${apikeys}`)
teks = `*Name:* ${anu.data.name}
*FullName:* ${anu.data.fullname}
*Title:* ${anu.data.title}
*Rarity:* ${anu.data.rarity}
*Element:* ${anu.data.element}
*WeaponType:* ${anu.data.weapontype}
*Substat:* ${anu.data.substat}
*Gender:* ${anu.data.gender}
*Body:* ${anu.data.body}
*Association:* ${anu.data.association}
*Affiliation:* ${anu.data.affiliation}
*Birthdaymmdd:* ${anu.data.birthdaymmdd}
*Birthday:* ${anu.data.birthday}
*Constellation:* ${anu.data.constellation}
*Version:* ${anu.data.version}
*Images:*
${anu.data.images.cover1}

${anu.data.images.cover2}

${anu.data.images.icon}

${anu.data.images.sideicon}
`
Clara.sendMessage(m.chat, { image: { url: anu.data.images.cover1 },  caption: teks }, { quoted: m })
}
break
// ===================================== //
case 'heroml': {
if (!q) return replygc(`Example ${prefix+command} Gusion`)
replygc(mess.wait)
let anu = await fetchJson(`https://api.xyroinee.xyz/api/others/heroml?q=${q}&apikey=${apikeys}`)
teks = `*Desc:* ${anu.data.desc}
*Release:* ${anu.data.release}
*Role:* ${anu.data.role}
*Specialty:* ${anu.data.specialty}
*Lane:* ${anu.data.lane}
*Price:* ${anu.data.price}
*Durability:* ${anu.data.gameplay_info.durability}
*Offense:* ${anu.data.gameplay_info.offense}
*Control:* ${anu.data.gameplay_info.control_effect}
*Difficulty:* ${anu.data.gameplay_info.difficulty}

*Alias:* ${anu.data.story_info_list.Alias}
*Origin:* ${anu.data.story_info_list.Origin}
*Species:* ${anu.data.story_info_list.Species}
*Gender:* ${anu.data.story_info_list.Gender}
*Affiliation:* ${anu.data.story_info_list.Affiliation}
*Weapons:* ${anu.data.story_info_list.Weapons}
*Abilities:* ${anu.data.story_info_list.Abilities}
*Height:* ${anu.data.story_info_list.Height}
\n
`
for (let v of anu.data.attributes) {
teks += `*Attribute* : ${v.attribute}\n`
teks += `*Level* : ${v.level_1}\n`
teks += `*Growth* : ${v.growth}\n\n───────────────\n\n`
}
Clara.sendMessage(m.chat, { image: { url: anu.data.hero_img },  caption: teks }, { quoted: m })
}
break
// ===================================== //
case 'getcase':
if (!ItsMeXyro) return replygc(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("xyroinee.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygc(`${getCase(q)}`)
break
// ===================================== //
case 'addprem':
if (!ItsMeXyro) return replygc(mess.owner)
if (!args[0]) return replygc(`Example ${prefix+command} 6285760451683`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Clara.onWhatsApp(prrkek)
if (ceknya.length == 0) return replygc(`Masukan Nomor Yang Benar Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygc(`${prrkek} Telah Menjadi User Premium!`)
break
// ===================================== //
case 'delprem':
if (!ItsMeXyro) return replygc(mess.owner)
if (!args[0]) return replygc(`Example ${prefix+command} 6285760451683`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygc(`${ya} Bukan User Premium Lagi!`)
break
// ===================================== //
case 'addtoxic':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Katanya Mana??')
if (ToxicClara.includes(q)) return replygc("Kata Yang Di Masukan Sudah Ada")
ToxicClara.push(q)
fs.writeFileSync('./database/toxic.json', JSON.stringify(ToxicClara))
replygc(`Sukses Menambahkan\nKetik ${prefix}listtoxic Untuk Melihat Daftar Kata Toxic`)
}
break
// ===================================== //
case 'deltoxic':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Masukan Katanya')
if (!ToxicClara.includes(q)) return replygc("Kata Tidak Terdaftar Di Database")
let wanu = ToxicClara.indexOf(q)
ToxicClara.splice(wanu, 1)
fs.writeFileSync('./database/toxic.json', JSON.stringify(ToxicClara))
replygc(`Sukses Menghapus Kata ${q}`)
}
break
// ===================================== //
case 'listtoxic':{
let teks = '┌──⭓「 *List Toxic* 」\n│\n'
for (let x of ToxicClara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total : ${ToxicClara.length}*`
replygc(teks)
}
break
// ===================================== //
case 'addvideo':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Nama Videonya?')
if (VideoClara.includes(q)) return replygc("Nama Yang Kamu Masukan Sudah Ada")
let delb = await Clara.downloadAndSaveMediaMessage(quoted)
VideoClara.push(q)
await fsx.copy(delb, `./media/video/${q}.mp4`)
fs.writeFileSync('./media/database/video.json', JSON.stringify(VideoClara))
fs.unlinkSync(delb)
replygc(`Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`)
}
break
// ===================================== //
case 'delvideo':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Masukan Nama Video')
if (!VideoClara.includes(q)) return replygc("Nama Tidak Ada Di Dalam Database")
let wanu = VideoClara.indexOf(q)
VideoClara.splice(wanu, 1)
fs.writeFileSync('./media/database/video.json', JSON.stringify(VideoClara))
fs.unlinkSync(`./media/video/${q}.mp4`)
replygc(`Success Sukses Menghapus Video ${q}`)
}
break
// ===================================== //
case 'listvideo':{
let teks = '┌──⭓「 *List Video* 」\n│\n'
for (let x of VideoClara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total : ${VideoClara.length}*`
replygc(teks)
}
break
// ===================================== //
case 'addimage':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Nama Imagenya?')
if (ImageClara.includes(q)) return replygc("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
let delb = await Clara.downloadAndSaveMediaMessage(quoted)
ImageClara.push(q)
await fsx.copy(delb, `./media/image/${q}.jpg`)
fs.writeFileSync('./media/database/image.json', JSON.stringify(ImageClara))
fs.unlinkSync(delb)
replygc(`Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`)
}
break
// ===================================== //
case 'delimage':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Masukan Nama Imagenya')
if (!ImageClara.includes(q)) return replygc("Nama Image Yang Kamu Masukan Tidak Terdaftar")
let wanu = ImageClara.indexOf(q)
ImageClara.splice(wanu, 1)
fs.writeFileSync('./media/database/image.json', JSON.stringify(ImageClara))
fs.unlinkSync(`./media/image/${q}.jpg`)
replygc(`Suksed Menghapus Image ${q}`)
}
break
// ===================================== //
case 'listimage':{
let teks = '┌──⭓「 *List Image* 」\n│\n'
for (let x of ImageClara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total : ${ImageClara.length}*`
replygc(teks)
}
break
// ===================================== //
case 'addsticker':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Masukan Nama Stickernya?')
if (StickerClara.includes(q)) return replygc("Nama Telah Di Pakai")
let delb = await Clara.downloadAndSaveMediaMessage(quoted)
StickerClara.push(q)
await fsx.copy(delb, `./media/sticker/${q}.webp`)
fs.writeFileSync('./media/database/sticker.json', JSON.stringify(StickerClara))
fs.unlinkSync(delb)
replygc(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
}
break
// ===================================== //
case 'delsticker':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Masukan Nama Stickernya')
if (!StickerClara.includes(q)) return replygc("Nama Tidak Terdaftar Di Database")
let wanu = StickerClara.indexOf(q)
StickerClara.splice(wanu, 1)
fs.writeFileSync('./media/database/sticker.json', JSON.stringify(StickerClara))
fs.unlinkSync(`./media/sticker/${q}.webp`)
replygc(`Sukses Menghapus Sticker ${q}`)
}
break
// ===================================== //
case 'liststicker':{
let teks = '┌──⭓「 *List Sticker* 」\n│\n'
for (let x of StickerClara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total : ${StickerClara.length}*`
replygc(teks)
}
break
// ===================================== //
case 'addvn':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Masukan Namanya?')
if (VnClara.includes(q)) return replygc("Nama Telah Di Pakai")
let delb = await Clara.downloadAndSaveMediaMessage(quoted)
VnClara.push(q)
await fsx.copy(delb, `./media/audio/${q}.mp3`)
fs.writeFileSync('./media/database/vn.json', JSON.stringify(VnClara))
fs.unlinkSync(delb)
replygc(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
}
break
// ===================================== //
case 'delvn':{
if (!ItsMeXyro) return replygc(mess.owner)
if (args.length < 1) return replygc('Masukan Namanya')
if (!VnClara.includes(q)) return replygc("Nama Tidak Terdaftar Di Database")
let wanu = VnClara.indexOf(q)
VnClara.splice(wanu, 1)
fs.writeFileSync('./media/database/vn.json', JSON.stringify(VnClara))
fs.unlinkSync(`./media/audio/${q}.mp3`)
replygc(`Sukses Menghapus Audio ${q}`)
}
break
// ===================================== //
case 'listvn':{
let teks = '┌──⭓「 *List Vn* 」\n│\n'
for (let x of VnClara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total : ${VnClara.length}*`
replygc(teks)
}
break
// ===================================== //
case 'addowner':
if (!ItsMeXyro) return replygc(mess.owner)
if (!args[0]) return replygc(`Example ${prefix+command} ${nomorown}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Clara.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygc(`Masukan Nomor Yang Benar Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygc(`${bnnd} Telah Menjadi Owner!!!`)
break
// ===================================== //
case 'delowner':
if (!ItsMeXyro) return replygc(mess.owner)
if (!args[0]) return replygc(`Example ${prefix+command} 6285760451683`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygc(`${ya} Bukan Owner Lagi!!!`)
break
// ===================================== //
case 'listpremium': case 'listprem':
teks = '*List Premium*\n\n'
for (let Clara of prem) {
teks += `- ${Clara}\n`
}
teks += `\n*Total : ${prem.length}*`
Clara.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
// ===================================== //
case 'setexif': {
if (!ItsMeXyro) return replygc(mess.owner)
if (!text) return replygc(`Example : ${prefix + command} packname|author`)
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
replygcxeom(`Wm Sticker Berhasil Di Ganti Ke\n\n Packname : ${global.packname}\nAuthor : ${global.author}`)
}
break
// ===================================== //
case 'setppbot': case 'setbotpp': {
if (!ItsMeXyro) return replygc(mess.owner)
if (!quoted) return replygc(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygc(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygc(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await Clara.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await Clara.query({
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
replygc(`Sukses`)
} else {
var memeg = await Clara.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygc(`Sukses`)
}
}
break
// ===================================== //
case 'creategc': case 'creategroup': {
if (!ItsMeXyro) return replygc(mess.owner)
if (!args.join(" ")) return replygc(`Example: ${prefix+command} Clara-Official`)
try {
let cret = await Clara.groupCreate(args.join(" "), [])
let response = await Clara.groupInviteCode(cret.id)
teks = `「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
Clara.sendMessage(m.chat, { text:teks, mentions: await Clara.parseMention(teks)}, {quoted:m})
} catch {
replygc("Error!")
}
}
break
// ===================================== //
case 'banwa': {
if (!ItsMeXyro) return 
if (!text) return replygc(`Nomornya Mana??`)
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", text)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hello Dear WhatsApp

Good morning/afternoon/night

My WhatsApp Number ${text} Stolen And Now Used to spread pornography and illegal sales, please take immediate action regarding my account.

If you can, just disable it

for important chat matters I don't have it

Thank you`)

form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
replygc(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
break
// ===================================== //
case 'pushkontak': {
if (!ItsMeXyro) return replygc(mess.owner)
if (!m.isGroup) return replygc(`Hanya Bisa Di Gunalan Di Dalam Grup`)
if (!text) return replygc(`text?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
replygc(`_Sedang Mengirim Pesan Ke Semua Member Grup_`)
for (let pler of mem) {
Clara.sendMessage(pler, { text: q})
}  
replygc(`Selesai`)
}
break
case 'getid': {
replygc(from)
}
break
// ===================================== //
case 'snobg': {
if (!quoted) return replygc(`Kirim/Reply Images/Video/Gifs Dengan Caption ${prefix+command}\nVideo Durasi 1-9 Detik`)
if (/image/.test(mime)) {
let media = await Clara.downloadAndSaveMediaMessage(quoted)
let encmedia = await Clara.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygc(`Kirim/Reply Images Dengan Caption ${prefix+command}`)
}
}
break
// ===================================== //
case 'randomsticker': {
replygc('Silahkan Pilih Salah Satu\nCry || Kill || Hug || Pat || Lick || Kiss || Bite || Yeet || Bully || Bonk || Wink || Poke || Nom || Slap || Smile || Wave || Awoo || Blush || Smug || Glomp || Happy || Dance || Cringe || Cuddle || Highfive || Shinobu || Handhold\n\nContoh: .shinobu')
}
break
// ===================================== //
case 'cry': 
case 'kill': 
case 'hug': 
case 'pat': 
case 'lick': 
case 'kiss': 
case 'bite': 
case 'yeet': 
case 'bully': 
case 'bonk':
case 'wink': 
case 'poke': 
case 'nom': 
case 'slap': 
case 'smile': 
case 'wave': 
case 'awoo': 
case 'blush': 
case 'smug': 
case 'glomp': 
case 'happy': 
case 'dance': 
case 'cringe': 
case 'cuddle': 
case 'highfive': 
case 'shinobu': 
case 'handhold': {
if (!isPrem) return replyprem(mess.prem)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
Clara.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
// ===================================== //
case 'tomp4': 
case 'tovideo': {
if (!quoted) return replygc('Reply Image')
if (!/webp/.test(mime)) return replygc(`reply sticker with caption *${prefix + command}*`)
replygc(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await Clara.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Clara.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Sticker Ke Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
// ===================================== //
case 'tovn': 
case 'toptt':
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return replygc(`Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
if (!quoted) return replygc(`Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
replygc(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Clara.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
// ===================================== //
case 'tomp3': {
if (/document/.test(mime)) return replygc(`Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return replygc(`Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
if (!quoted) return replygc(`Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
replygc(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Clara.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Clara.user.name}.mp3`}, { quoted : m })
}
break
// ===================================== //
case 'togif': {
if (!quoted) return replygc('Reply video')
if (!/webp/.test(mime)) return replygc(`Reply sticker Dengan Caption *${prefix + command}*`)
replygc(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await Clara.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Clara.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp Ke Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
// ===================================== //
case 'toqr':{
if (!q) return replygc('Example: .toqr api.xyroinee.xyz')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
let qyuer = await qrcode.toDataURL(q, { scale: 35 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
let buff = getRandom('.jpg')
await fs.writeFileSync('./'+buff, data)
let medi = fs.readFileSync('./' + buff)
await Clara.sendMessage(from, { image: medi, caption:"_Nih Kak_!"}, { quoted: m })
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
}
break
// ===================================== //
case 'swm': 
case 'take': 
case 'maling': 
case 'colong':
case 'stickerwm':{
if (!isPrem) return replyprem(mess.prem)
if (!args.join(" ")) return replygc(`Example: .take Clara|Xyroinee`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
Clara.downloadAndSaveMediaMessage(quoted, "gifee")
Clara.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Clara.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygc('Maksimal 10 Detik!')
let media = await quoted.download()
let encmedia = await Clara.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
replygc(`Photo/Videonya?`)
}
}
break
// ===================================== //
case 'sticker': 
case 's': {
if (!quoted) return replygc(`Kirim/Reply Images/Video/Gifs Dengan Caption ${prefix+command}\nVideo Durasi 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Clara.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygc('Send/Reply Images/Video/Gif Dengan Caption ${prefix+command}\nVideo Durasi 1-9 Detik')
let media = await quoted.download()
let encmedia = await Clara.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygc(`Send/Reply Image/Video/Gif Dengan Caption ${prefix+command}\nVideo Durasi 1-9 Detik`)
}
}
break
// ===================================== //
case 'enc': case 'obfus': case 'obfuscate':{
if (!q) return replygc(`Example ${prefix+command} const vynaa = require('xyroinee')`)
let meg = await obfus(q)
replygc(`Sukses
${meg.result}`)
}
break
// ===================================== //
case 'hologram-color': 
case 'luxury-crystal': 
case 'metallic': 
case 'grunge-metallic':
case 'liquid-metal': 
case 'multicolor-paint': 
case 'pink-gold': 
case 'burger': 
case 'cage': 
case 'comic': 
case 'circuit': 
case 'neon-light': 
case 'neon-light-2': 
case 'gradient-neon-light': 
case 'orange-juice': 
case 'valentine': 
case 'pencil': 
case 'berry': 
case 'blackpink': 
case 'bear-logo': 
case 'christmas': 
case 'thunder': 
case 'box-text': 
case 'green-horor': 
case 'magma-hot': 
case 'chocolate-cake': 
case 'strawberry': 
case 'glitch': {
if (!isPrem) return replyprem(mess.prem)
if (!q) return replygc(`Example : ${prefix+command} Xyroinee`) 
replygc(mess.wait)
Clara.sendMessage(m.chat, { image: { url: `https://api.xyroinee.xyz/api/textpro/${command}?text=${q}&apikey=${apikeys}` }, caption: `${mess.success}` }, { quoted: m })
}
break
// ===================================== //
case 'randomphotooxy': {
replygc('Silahkan Pilih Salah Satu\nHologram-Color || Luxury-Crystal || Metallic || Grunge-Metallic || Liquid-Metal || Multicolor-Paint || Pink-Gold || Cage || Burger || Comic || Circuit || Neon-Light || Neon-Light-2 || Gradient-Neon-Light || Orange-Juice || Valentine || Pencil || Berry || Blackpink || Bear-Logo || Christmas || Thunder || Box-Text || Green-Horor || Magma-Hot || Chocolate-Cake || Strawberry || Glitch || Ninja-Logp || Glitch-2 || Glitch-Tiktok || Marvel-Studios || Video-Game-Classic\n\n Contoh: .flaming Xyroinee')
}
break
// ===================================== //
case 'ninja-logo':
case 'glitch-2':
case 'glitch-tiktok':
case 'video-game-classic':
case 'marvel-studios': {
if (!isPrem) return replyprem(mess.prem)
if (!args.join(" ")) return replygc(`Example : ${prefix+command} Xyroinee|Bot Developer`) 
replygc(mess.wait)
const titid = args.join(" ")
const teksti = titid.split("|")[0];
const teksto = titid.split("|")[1];
Clara.sendMessage(m.chat, { image: { url: `https://api.xyroinee.xyz/api/textpro/${command}?text=${teksti}&text2=${teksto}&apikey=${apikeys}` }, caption: `${mess.success}` }, { quoted: m })
}
break
// ===================================== //
case 'randomphotooxy': {
replygc('Silahkan Pilih Salah Satu\nFlaming || Night-Sky || Shadow-Sky || Burn-Paper || Under-Grass || Under-Water || Under-White || Coffe-Cup || Neon-Glow || Army-Camouflage || Glow-Text || Candy-Text || Vintage || Gradient-Avatar || Fur-Text || Striking\n\n Contoh: .flaming Xyroinee')
}
break
// ===================================== //
case 'flaming':
case 'night-sky':
case 'shadow-sky':
case 'burn-paper':
case 'under-grass':
case 'under-watter':
case 'under-white':
case 'coffe-cup':
case 'neon-glow':
case 'army-camouflage':
case 'glow-text':
case 'candy-text':
case 'vintage':
case 'gradient-avatar':
case 'fur-text':
case 'striking': {
if (!isPrem) return replyprem(mess.prem)
if (!q) return replygc(`Example : ${prefix+command} Xyroinee`) 
replygc(mess.wait)
Clara.sendMessage(m.chat, { image: { url: `https://api.xyroinee.xyz/api/photooxy/${command}?text=${q}&apikey=${apikeys}` }, caption: `${mess.success}` }, { quoted: m })
}
break
// ===================================== //
case 'asupanvideo': {
if (!isPrem) return replyprem(mess.prem)
replygc(mess.wait)
let pidio = await getBuffer(`https://api.xyroinee.xyz/api/asupan/video/random?apikey=${apikeys}`)
Clara.sendMessage(m.chat, { video: { url: pidio }, caption: `_Nih Kak_` }, { quoted: m })
}
break
// ===================================== //
case 'china':
case 'indonesia':
case 'japan':
case 'korean':
case 'malaysia':
case 'thailand':
case 'vietnam': {
if (!isPrem) return replyprem(mess.prem)
replygc(mess.wait)
let anui = await getBuffer(`https://api.xyroinee.xyz/api/asupan/image/${command}?apikey=${apikeys}`)
Clara.sendMessage(m.chat, { image: { url: anui }, caption: `_Nih Kak_` }, { quoted: m })
}
break
// ===================================== //
case 'randomnime': {
replygc('Silahkan Pilih Salah Satu\nAkira || Anna || Asuna || Ayano || Ayuzawa || Bocchi || Chisato || Elaina || Ikuyo || Kaela || Kaguya || Kaori || Kobo || Kotori || Loli || Miku || Neko || Rias || Sakura || Sasuke || Shina || Shinka || Shizuka || Shota || Takina || Waifu || Yotsuba || Yumeko\n\n Contoh: .loli')
}
break
// ===================================== //
case 'akira':
case 'anna':
case 'asuna':
case 'ayano':
case 'ayuzawa':
case 'bocchi':
case 'chisato':
case 'cosplay':
case 'elaina':
case 'ikuyo':
case 'kaela':
case 'kaguya':
case 'kaori':
case 'kobo':
case 'kotori':
case 'loli':
case 'miku':
case 'neko':
case 'rias':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shizuka':
case 'shota':
case 'takina':
case 'waifu':
case 'yotsuba':
case 'yumeko': {
replygc(mess.wait)
let anu = await getBuffer(`https://api.xyroinee.xyz/api/sfw/${command}?apikey=${apikeys}`)
Clara.sendMessage(m.chat, { image: { url: anu }, caption : mess.success }, { quoted: m })
}
break
// ===================================== //
case 'menu': case 'help': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Nomor* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *Simple Menu* 」
╎ぎ *Special* 
╎ぎ *Animanga*
╎ぎ *Downloader*
╎ぎ *Admingroup*
╎ぎ *Internet*
╎ぎ *RandoMedia*
╎ぎ *ToolSticker*
╎ぎ *Developer*
╎ぎ *Panelbot*
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'special': case 'spesial': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Nomor* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *Special* 」
╎ぎ Ai
╎ぎ Afk
╎ぎ Rules
╎ぎ GetID
╎ぎ Script
╎ぎ ListPc
╎ぎ ListGc
╎ぎ ListVn
╎ぎ Delete
╎ぎ Owner
╎ぎ Donasi
╎ぎ Remini
╎ぎ JadiBot
╎ぎ ListBan
╎ぎ Confess
╎ぎ ListPrem
╎ぎ ListToxic
╎ぎ ToAnime
╎ぎ ListVideo
╎ぎ ListImage
╎ぎ ListSticker
╎ぎ ToCartoon
╎ぎ CariTeman
╎ぎ ListJadiBot 
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'downloader': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Nomor* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *Downloader* 」
╎ぎ Play
╎ぎ Tiktok
╎ぎ Xnxxdl
╎ぎ TtAudio
╎ぎ YtAudio
╎ぎ YtVideo
╎ぎ Tweetdl
╎ぎ FbAudio
╎ぎ GitClone
╎ぎ Spotifydl
╎ぎ Facebook
╎ぎ Instagram
╎ぎ Soundcloud
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'internet': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Nomor* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *Internet* 」
╎ぎ Tts
╎ぎ Lirik
╎ぎ Resep
╎ぎ Google
╎ぎ SsWeb
╎ぎ IGStalk
╎ぎ CharGI
╎ぎ FFStalk
╎ぎ GhStalk
╎ぎ HeroML
╎ぎ MLStalk
╎ぎ Wattpad
╎ぎ YtSearch
╎ぎ NpmStalk
╎ぎ CariSticker
╎ぎ HappyMod
╎ぎ BacaResep
╎ぎ JadwalBola
╎ぎ XnxxSearch
╎ぎ SoundSearch
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'animanga': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Nomor* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *AniManga* 」
╎ぎ MalChara
╎ぎ MalAnime
╎ぎ MalManga
╎ぎ NhentaiImg
╎ぎ OtakuDetail
╎ぎ DoujinDetail
╎ぎ OtakuLatest
╎ぎ DoujinLatest
╎ぎ Mangatoons
╎ぎ OtakuSearch
╎ぎ DoujinSearch
╎ぎ KomikuDetail
╎ぎ NhentaiDetail
╎ぎ KomikuLatest
╎ぎ KomikuSearch
╎ぎ NhentaiSearch
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'admingroup': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Nomor* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *AdminGroup* 」
╎ぎ Add
╎ぎ Kick
╎ぎ Grup
╎ぎ TagAll
╎ぎ LinkGc
╎ぎ BukaGc
╎ぎ Hidetag
╎ぎ Demote
╎ぎ SetDesc
╎ぎ TutupGc
╎ぎ SetPpGc
╎ぎ Promote
╎ぎ AntiVirus
╎ぎ AntiToxic
╎ぎ SetName
╎ぎ AntiLinkGc
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'randomedia': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Nomor* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *RandoMedia* 」
╎ぎ China
╎ぎ Japan
╎ぎ Korean
╎ぎ Vietnam
╎ぎ Thailand
╎ぎ Malaysia
╎ぎ Indonesia
╎ぎ AsupanVideo
╎ぎ RandomNime
╎ぎ RandomSticker
╎ぎ RandomTextPro
╎ぎ RandomPhotoOxy
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'toolsticker': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Nomor* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *ToolSticker* 」
╎ぎ Qc
╎ぎ Enc
╎ぎ ToQr
╎ぎ ToGif
╎ぎ Snobg
╎ぎ Sticker
╎ぎ ToMp3
╎ぎ Ebinary
╎ぎ Dbinary
╎ぎ ToOnce
╎ぎ ToVideo
╎ぎ ToAudio
╎ぎ SrickerWm
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'developer': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Tags* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *Developer* 」
╎ぎ vv
╎ぎ uu
╎ぎ Ban
╎ぎ Self
╎ぎ Join
╎ぎ DelVn
╎ぎ Public
╎ぎ Leave
╎ぎ Unban
╎ぎ AddVn
╎ぎ BanWa
╎ぎ SetExif
╎ぎ GetCase
╎ぎ DelPrem
╎ぎ LeaveGc
╎ぎ DelVideo
╎ぎ AddPrem
╎ぎ CreateGc
╎ぎ SetPpBot
╎ぎ DelImage
╎ぎ AddVideo
╎ぎ DelOwner
╎ぎ DelSticker
╎ぎ Shutdown
╎ぎ AddImage
╎ぎ AddOwner
╎ぎ Ephemeral
╎ぎ AddSticker
╎ぎ AutoSticker
╎ぎ PushKontak
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'panelbot': {
let me = m.sender
let timestampe = speed();
let latensie = speed() - timestampe
menunya = `❐ *Name* : ${pushname}
❐ *Tags* : @${me.split('@')[0]}
❐ *Status* : ${isPrem ? 'Premium' : `Free`}
❐ *Mode* : ${Clara.public ? 'Public' : `Self`}
❐ *Speed* : ${latensie.toFixed(4)} Miliseconds
❐ *Creator* : @${ownername}
❐ *Runtime* : ${runtime(process.uptime())}
❐ *Platform* : ${os.platform()}


 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╔┈「 *PanelBot* 」
╎ぎ Addsrv
╎ぎ Detsrv
╎ぎ Delsrv
╎ぎ Listsrv
╎ぎ Addusr
╎ぎ Detusr
╎ぎ Delusr
╎ぎ Listusr
╎ぎ Updatesrv
╚┈┈┈┈┈┈┈┈┈┈┈❖`
Clara.sendMessage(from, { 
text: menunya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./media/fotonya.jpg"),
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
},{ 
quoted: m })
}
break
// ===================================== //
case 'addsrv':{
if (!ItsMeXyro) return replygc(mess.owner)
let s = q.split(',')
let name = s[0]
let userId = s[1]
let eggId = s[2]
let locId = s[3]
let memory = s[4]
let disk = s[5]
let cpu = s[6]
if (!name) return replygc(`Ex : ${prefix+command} name,userId,eggId,locationId,ram,disk,cpu\n\nContoh :\n${prefix+command} Example,1,15,1,1024,10240,100`)
if (!userId) return replygc(`Ex : ${prefix+command} name,userId,eggId,locationId,ram,disk,cpu\n\nContoh :\n${prefix+command} Example,1,15,1,1024,10240,100`)
if (!eggId) return replygc(`Ex : ${prefix+command} name,userId,eggId,locationId,ram,disk,cpu\n\nContoh :\n${prefix+command} Example,1,15,1,1024,10240,100`)
if (!locId) return replygc(`Ex : ${prefix+command} name,userId,eggId,locationId,ram,disk,cpu\n\nContoh :\n${prefix+command} Example,1,15,1,1024,10240,100`)
if (!memory) return replygc(`Ex : ${prefix+command} name,userId,eggId,locationId,ram,disk,cpu\n\nContoh :\n${prefix+command} Example,1,15,1,1024,10240,100`)
if (!disk) return replygc(`Ex : ${prefix+command} name,userId,eggId,locationId,ram,disk,cpu\n\nContoh :\n${prefix+command} Example,1,15,1,1024,10240,100`)
if (!cpu) return replygc(`Ex : ${prefix+command} name,userId,eggId,locationId,ram,disk,cpu\n\nContoh :\n${prefix+command} Example,1,15,1,1024,10240,100`)
let f1 = await fetch(host + "/api/application/nests/5/eggs/" + eggId, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let data = await f1.json();
let eggs = data.attributes

let f = await fetch(host + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key,
},
"body": JSON.stringify({
"name": name,
"description": "",
"user": parseInt(userId),
"egg": parseInt(eggId),
"docker_image": eggs.docker_image,
"startup": eggs.startup,
"environment": serverCreate.eggs.environment,
"limits": {
"memory": memory,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": serverCreate.limits.db,
"backups": serverCreate.limits.backups,
"allocations": serverCreate.limits.allocation
},
deploy: {
locations: [parseInt(locId)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return replygc(JSON.stringify(res.errors[0], null, 2))
replygc(`*Sukses Menambah Server*\n\n*Type: Server*\n\n*Name:* ${res.attributes.name}\n*ID:* ${res.attributes.id}\n*Identifier:* ${res.attributes.identifier}\n*UuId:* ${res.attributes.uuid}\n*Ram:* ${res.attributes.limits.memory === 0 ? 'UNLIMITED' : res.attributes.limits.memory} Mb\n*Disk:* ${res.attributes.limits.disk === 0 ? 'UNLIMITED' : res.attributes.limits.disk} Mb\n*Cpu:* ${res.attributes.limits.cpu === 0 ? 'UNLIMITED' : res.attributes.limits.cpu}%\n*Dibuat Pada:* ${res.attributes.created_at}`)
}
break
// ===================================== //
case 'delsrv':{
if (!ItsMeXyro) return replygc(mess.owner)
if (!q) return replygc(`Ex : ${prefix+command} serverId\n\nContoh :\n${prefix+command} 9`)
let f = await fetch(host + "/api/application/servers/" + q, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return replygc('*Server Tidak Ditemukan*')
replygc('*Sukses Menghapus Server*')
}
break
case 'listsrv': {
if (!ItsMeXyro) return replygc(mess.owner)
let page = q ? q : '1'
let f = await fetch(host + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(host + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.c_api_key
}
})
let data = await f3.json();
replygc(`*ID:* ${s.id}\n*Name:* ${s.name}\n*Status:* ${data.attributes ? data.attributes.current_state : s.status}\n\n==================\n\n`)
}}
break
// ===================================== //
case 'detsrv': {
if (!ItsMeXyro) return replygc(mess.owner)
if (!q) return reply(`Ex : ${prefix+command} serverId\n\nContoh :\n${prefix+command} 1`)
let f = await fetch(host + "/api/application/servers/" + q, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let res = await f.json();
if (res.errors) return replygc('*Server Tidak Ditemukan*')
let s = res.attributes
let f2 = await fetch(host + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.c_api_key
}
})
let data = await f2.json();
let t = data.attributes
replygc(`*${s.name.toUpperCase()} Detail Server*\n\n*Status:* ${t.current_state}\n\n*Id:* ${s.id}\n*UiId:* ${s.uuid}\n*Name:* ${s.name}\n*Description:* ${s.description}\n*Ram:* ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'Mb'}\n*Disk:* ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'Mb'}\n*Cpu:* ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}\n*Dibuat:* ${s.created_at}\n*Di Update:* ${s.updated_at}`)
}
break
// ===================================== //
case 'updatesrv':{
if (!ItsMeXyro) return replygc(mess.owner)
let s = q.split(',')
let serverId = s[0]
let memory = s[1]
let disk = s[2]
let cpu = s[3]
if (!serverId) return replygc(`Ex : ${prefix+command} serverId,ram,disk,cpu\n\nContoh :\n${prefix+command} 1,1024,10240,100`)
if (!memory) return replygc(`Ex : ${prefix+command} serverId,ram,disk,cpu\n\nContoh :\n${prefix+command} 1,1024,10240,100`)
if (!disk) return replygc(`Ex : ${prefix+command} serverId,ram,disk,cpu\n\nContoh :\n${prefix+command} 1,1024,10240,100`)
if (!cpu) return replygc(`Ex : ${prefix+command} serverId,ram,disk,cpu\n\nContoh :\n${prefix+command} 1,1024,10240,100`)
let f1 = await fetch(host + "/api/application/servers/" + serverId, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let data = await f1.json()

let f = await fetch(host + "/api/application/servers/" + serverId + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
},
"body": JSON.stringify({
"allocation": data.attributes.allocation,
"memory": memory || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": disk || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": serverCreate.limits.db,
"backups": serverCreate.limits.backups,
"allocations": serverCreate.limits.allocation
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
replygc(`*Sukses Update Server Ini*\n\n*Type:* ${res.object}\n\n*Id:* ${server.id}\n*UuId:* ${server.uuid}\n*Name:* ${server.name}\n*Description:* ${server.description}\n*Ram:* ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} Mb\n*Disk:* ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} Mb\n*Cpu:* ${server.limits.cpu === 0 ? 'UNLIMITED' : server.limits.cpu}%\n*Dibuat:* ${server.created_at}\n*Di Update:* ${server.updated_at}`)
}
break
// ===================================== //
case 'addusr':{
if (!ItsMeXyro) return replygc(mess.owner)
let s = q.split(',')
let email = s[0]
let username = s[1]
let nomor = s[2]
if (!email) return replygc(`Ex : ${prefix+command} Email,Username,@tag/nomor\n\nContoh :\n${prefix+command} example@gmail.com,example,@user`)
if (!username) return replygc(`Ex : ${prefix+command} Email,Username,@tag/nomor\n\nContoh :\n${prefix+command} example@gmail.com,example,@user`)
if (!nomor) return replygc(`Ex : ${prefix+command} Email,Username,@tag/nomor\n\nContoh :\n${prefix+command} example@gmail.com,example,@user`)
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let d = (await Clara.onWhatsApp(nomornya.split('@')[0]))[0] || {}
let psswd = d.exists ? require("crypto").randomBytes(5).toString('hex') : username
let f = await fetch(host + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": psswd
})
})
let res = await f.json();
if (res.errors) return replygc(JSON.stringify(res.errors[0], null, 2));
Clara.sendMessage(from, { text: `*Sukses Menambahkan User*\n\n*Type:* User\n\n*Id:* ${res.attributes.id}\n*UuId:* ${res.attributes. uuid}\n*Username:* ${res.attributes.username}\n*Email:* ${res.attributes.email}\n*Nama Awal/Nama Akhir:* ${res.attributes.first_name}/${res.attributes.last_name}\n*Di Buat:* ${res.attributes.created_at}\n\n*Akun Telah Dikirim Ke @${nomornya.split('@')[0]}*`, mentions: [nomornya]}, { quoted: m })
Clara.sendMessage(nomornya, { text: `*Done Panel by Xyro Ganteng :v*\n\n*Id:* ${res.attributes.id}\n*UuId:* ${res.attributes. uuid}\n*Username:* ${res.attributes.username}\n*Email:* ${res.attributes.email}\n*Nama Awal/Nama Akhir:* ${res.attributes.first_name}/${res.attributes.last_name}\n*Di Buat:* ${res.attributes.created_at}\n*Password:* ${psswd}\n*Login:* ${host}\n\n*Note*\n_*Bot* Atau *Admin* Tidak Akan Mengirim Kedua Kali,_\n_Jadi Simpan Baik Baik Atau Kamu Ingat Detail Akunnya._\n\n#Terimakasih Telah Order` })
}
break
// ===================================== //
case 'delusr':{
if (!ItsMeXyro) return replygc(mess.owner)
if (!q) return reply(`Ex : ${prefix+command} userId\n\nContoh :\n${prefix+command} 2`)
let f = await fetch(host + "/api/application/users/" + q, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return replygc('*User Tidak Di Temukan*')
replygc('*Sukses Menghapus User*')
}
break
// ===================================== //
case 'listusr':{
if (!ItsMeXyro) return replygc(mess.owner)
let page = q ? q : '1'
let f = await fetch(host + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let res = await f.json();
let users = res.data
let sections = []
for (let user of users) {
let u = user.attributes
replygc(`*Id:* ${u.id}\n*Username:* ${u.username}\n*Nama Awal:* ${u.firstname}\n*Nama Akhir:* ${u.lastname}\n\n=====================\n\n`)
}
}
break
// ===================================== //
case 'detusr':{
if (!ItsMeXyro) return replygc(mess.owner)
if (!q) return reply(`Ex : ${prefix+command} userId\n\nContoh :\n${prefix+command} 1`)
let f = await fetch(host + "/api/application/users/" + q, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let res = await f.json()
if (res.errors) return replygc('*User Tidak Ditemukan*')
replygc(`*${res.attributes.username.toUpperCase()} Detail User*\n\n*Id:* ${res.attributes.id}\n*Username:* ${res.attributes.username}\n*Email:* ${res.attributes.email}\n*Nama Awal/Nama Akhir:* ${res.attributes.first_name}/${res.attributes.last_name}\n*Bahasa:* ${res.attributes.language}\n*Admin:* ${res.attributes.root_admin}\n*2 Fa:* ${res.attributes["2fa"]}\n*Di Buat:* ${res.attributes.created_at}\n*Di Update:* ${res.attributes.updated_at}\n*UuId:* ${res.attributes.uuid}`)
}
break
// ===================================== //

// Eval Sih Ini :v
// ===================================== //
case '>':
case '=>':
if (!ItsMeXyro) return;
var err = new TypeError;
err.name = "Eval Error "
err.message = "Code Not Found (404)"
if (!q) return replygc(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygc(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "Eval Error", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygc(util.format(_syntax + _err))
}
break

default:
if (budy.startsWith('<')) {
if (!ItsMeXyro) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!ItsMeXyro) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!ItsMeXyro) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
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
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Clara.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
Clara.sendMessage(owner + "@s.whatsapp.net", { text: "Hai Sayang, Ada Yang Error Di " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
