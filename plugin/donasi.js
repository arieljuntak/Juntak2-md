let handler = async m => m.reply(`
╭─「 Donasi • Pulsa DANA」
│ •  [0821-6544-9262]
│ •  [0821-6544-9262]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
