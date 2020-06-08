const TelegramBot = require('node-telegram-bot-api')

// Add bot token here
const token = ''


const bot = new TelegramBot(token, { polling: true })

// Add the words you want to boycott here
const boycott_words = ['insta', 'zuck', 'facebook', 'whatsapp', 'zuckerberg', 'fb', 'instagram']


// Listens to every message and sents a boycott message everytime a word in boycott_words is mentioned
bot.on('message', (msg) => {
	try {
		// check if it is in text format. If it throws error, doesn't do anything.
		if(msg.text){}
		for (let i = 0; i < boycott_words.length; i++) {
			if (msg.text.toString().toLowerCase().includes(boycott_words[i])) {
				bot.sendMessage(msg.chat.id, "#boycott" + boycott_words[i]);
			}
		}
		if (msg.text.toString().toLowerCase().split(' ')[0] === '/boycott') {
			var to_boycott = msg.text.toString().toLowerCase().split(' ')
			for( let i=1; i<to_boycott.length; i++){
				boycott_words.push(to_boycott[i])
			}
		}
		console.log(msg)
	}
	catch{
	}
})
