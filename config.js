/*
 * Configuración de los parametros generales
 */

// Configuravion de nivel de bitacoreo
exports.loglevel = 'info';

// Configuración para workspaceId de conversation
exports.conversationWorkspaceId = '844f06a4-c1c5-41c0-b87e-4613add0123e';

// Configuración para twitter
exports.twitterConfig = {
		consumer_key:         '',
		consumer_secret:      '',
		access_token:         '',
		access_token_secret:  '',
		timeout_ms:            60*1000
		}

// Huso horario para la conversacion
// Ver en https://console.bluemix.net/docs/services/conversation/supported-timezones.html#time-zones-supported-by-system-entities
exports.timezone = 'Mexico/General';

// Create the credentials object for export
exports.credentials = {};

// Watson Conversation
// https://www.ibm.com/watson/developercloud/conversation.html
exports.credentials.conversation = {
	password: 'wjhxI0sU1pjs',
	username: '1446c478-1012-4d8c-8d56-633440ab8e6f'
};

// Watson Speech to Text
// https://www.ibm.com/watson/developercloud/speech-to-text.html
exports.credentials.speech_to_text = {
	password: 'wO6NGcZmlyox',
	username: '95a40ed7-2339-465f-8604-370eeef6300f'
};

// Watson Text to Speech
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.text_to_speech = {
	password: 'QaCofwZgzish',
	username: 'cbc4113b-3b25-418e-8ea5-2c230405116e'
};

// Watson Visual Recognition
// https://gateway-a.watsonplatform.net/visual-recognition/api
/*exports.credentials.visual_recognition = {
	api_key: "",
};*/
