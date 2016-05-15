'use strict';
const math = require('mathjs');
const SDK = require('inline-sdk');
const CommandType = SDK.CommandType;

const inline = new SDK();

inline.onCommand((type, payload, context) => {
  if (type !== CommandType.MESSAGE) return;
	const text = payload.args.join(' ');
	let result;
	try {
		result = math.eval(text);
	} catch (e) {
		context.sendText('ยากเกิน');
	}
	if (result) {
		context.sendText(result);
	}
});