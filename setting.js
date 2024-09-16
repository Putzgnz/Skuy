/* SC THOMZ V8
BASE : HW MODS
RECODE : THOMZ
CREACOT : THOMZ
*/

const fs = require('fs')
const chalk = require('chalk')

global.owner = "PUTZ GNZ"
global.namabot = "PUTZ GNZ"
global.botname = "*PUTZ GNZ*"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'thomz' //Gausah Juga
global.bugthomz = fs.readFileSync("./bugthomz.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By PUTZ GNZ"

global.namastore ="PUTZ GNZ"
global.nodana ="6283820352529"
global.nogopay ="6283820352529"
global.noovo = ""
global.qris = "SILAHKAN SCAN QRIS ATAS !!"

global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.antilink = false

const mess = {
   wait: "sabar mek gw proses dulu😋",
   success: "sukses bre 🥵",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "udah on yah mek", 
   off: "cape jadi off",
   query: {
       text: "Teks Nya mana woi?",
       link: "Link Nya Mana woi?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang",
       private: "Di Chat Pribadi Bang fajrin Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang",
       admin: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})