'use strict';
const math = require('mathjs');
const SDK = require('inline-sdk');
const CommandType = SDK.CommandType;

const inline = new SDK();

inline.onCommand((type, payload) => {
  if (type !== CommandType.MESSAGE) return;
	const text = payload.args.join(' ');
	const result = math.eval(text);
	if (result) {
		inline.sendText(result);
	}
});