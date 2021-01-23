var adminUser = '76561198136709835'; 
var users = [];


module.exports = [
	// Commands to stop/unstop the bot from saying anything in a chatroom
	{ 
		name: 'MuteCommand', 
		type: 'BotCommandTrigger', 
		options: { 
			matches: ['!mute','stfu bot','bot, stfu','shut up, bot','bot, shut up'], 
			exact: true,
			callback: ["mute"] // calls ChatBot.mute()
		} 
	},
	{ 
		name: 'UnmuteCommand', 
		type: 'BotCommandTrigger', 
		options: { 
			matches: ['!unmute', '!unpause','wake up, bot','bot, wake up','wake up bot','bot wake up'], 
			exact: true,
			callback: ["unmute"] // calls ChatBot.unmute()
		} 
	},

	{ name: 'SayTrigger',          type: 'SayTrigger',          options: { users: [adminUser] } },
	{ name: 'ModerateTrigger',     type: 'ModerateTrigger',     options: { users: [adminUser] } },
	{ name: 'BanTrigger',          type: 'BanTrigger',          options: { users: [adminUser] } },
	{ name: 'KickTrigger',         type: 'KickTrigger',         options: { users: [adminUser] } },
	{ name: 'UnbanTrigger',        type: 'UnbanTrigger',        options: { users: [adminUser] } },
	{ name: 'UnmoderateTrigger',   type: 'UnmoderateTrigger',   options: { users: [adminUser] } },
	{ name: 'UnlockChatTrigger',   type: 'UnlockChatTrigger',   options: { users: [adminUser] } },
	{ name: 'LockChatTrigger',     type: 'LockChatTrigger',     options: { users: [adminUser] } },
	{ name: 'LeaveChatTrigger',    type: 'LeaveChatTrigger',    options: { users: [adminUser] } },
	{ name: 'SetStatusTrigger',    type: 'SetStatusTrigger',    options: { users: [adminUser] } },
	{ name: 'SetNameTrigger',      type: 'SetNameTrigger',      options: { users: [adminUser] } },
	{ name: 'JoinChatTrigger',     type: 'JoinChatTrigger',     options: { users: [adminUser] } },
	{ name: 'RemoveFriendTrigger', type: 'RemoveFriendTrigger', options: { users: [adminUser] } },
	{ name: 'AddFriendTrigger',    type: 'AddFriendTrigger',    options: { users: [adminUser] } },
	
	{ name: 'LobbyTrigger', 	type: 'LobbyTrigger', options: {
		matches: ['!queue', '!q'], 
		timeout: 1000
	} },

	// Informational commands
	{ name: 'HelpCmd',   type: 'ChatReplyTrigger', options: {
		matches: ['!help','!triggers','!cmds','!commands'],
		responses: ['Please view my profile for a list of publicly commands and other triggers. Not all triggers are allowed in all chats.'],
		exact: true, probability: 1, timeout: 1000 } },
	{ name: 'BugsCmd',   type: 'ChatReplyTrigger', options: {
		matches: ['!bug','!bugs','!issue','!feature'],
		responses: ['You can submit bugs and feature requests at http://github.com/Efreak/node-steam-chat-bot/issues'],
		exact: true, probability: 1, timeout: 1000 } },
	{ name: 'OwnerCmd',  type: 'ChatReplyTrigger', options: {
		matches: ['!owner','!efreak'],
		responses: ['My owner is http://steamcommunity.com/profiles/76561198008335925/'],
		exact: true, probability: 1, timeout: 1000 } },
	{ name: 'SourceCmd', type: 'ChatReplyTrigger', options: {
		matches: ['!source','!about'],
		responses: ['This bot is based on node-steam-chat-bot, a wrapper around node-steam, which is a nodejs port of SteamKit2. You can find full source code and some documentation and examples at http://github.com/Efreak/node-steam-chat-bot'],
		exact: true, probability: 1, timeout: 1000 } },

	// Automatically accept invites from any user to the specified group chat. I have reports that this may not currently work.
	{ 
		name: 'AcceptChatInvite', 
		type: 'AcceptChatInviteTrigger', 
		users: [adminUser],
		options: { 
			autoJoinAfterDisconnect: true
		} 
	},
	
	//steamrep command
	{	name: 'SteamIDCheck', 
		type: 'SteamrepTrigger', 
		options: { 
			command: "!steamrep", 
			delay: 2000, 
			timeout: 5*1000 } 
	}
];