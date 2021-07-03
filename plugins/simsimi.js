let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'yaa ?' , m)

  //await m.reply('Searching...')
	axios.get(`https://lindow-api.herokuapp.com/api/simi?text=${text}&lang=id&apikey=LindowApi`).then ((res) => {
	 	let hasil = `${res.data.response.text}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['simi'].map(v => v + ' <text>')
handler.tags = ['primbon']
handler.command = /^(simi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler