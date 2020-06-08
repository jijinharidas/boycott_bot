# boycott_bot

boycott_bot is telegram bot built using [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api) 


## What does this bot do

The bot replies with #boycott-x- to every message containing x, where x is a word mentioned in the boycott_words in app.js

## How to run this bot

### Clone the repo
	git clone https://github.com/jijinkh/boycott_bot
	
### Install dependencies
	cd boycott_bot
	npm install

### Add the token
Get your bot token from [Bot father](https://t.me/botfather)
Add it to the following line in app.js

    // Add bot token here
    const token = ''

### Run
	npm start
	

## Adding words to boycott 

To add words that need to be boycotted add it into the following lines in app.js

	// Add the words you want to boycott here

	const boycott_words = ['insta', 'zuck', 'facebook', 'whatsapp', 'zuckerberg', 'fb', 'instagram']
	

## Adding words to boycott on runtime

You can add words to boycott by sending a message /boycott followed by the words to be added into the boycott list

/boycott word1 word2 word3

##### Example:
> /boycott college fifa anshual

#### Note : 
All the words added this way will only be boycott listed this runtime. Once the program is restarted it should be done again.


