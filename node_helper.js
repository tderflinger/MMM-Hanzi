const NodeHelper = require("node_helper");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getHskData(level) {
	switch (level) {
	case 1:
		const data1 = require("./hsk-level-1.json");
		return data1;
	case 2:
		const data2 = require("./hsk-level-2.json");
		return data2;
	case 3:
		const data3 = require("./hsk-level-3.json");
		return data3;
	case 4:
		const data4 = require("./hsk-level-4.json");
		return data4;
	case 5:
		const data5 = require("./hsk-level-5.json");
		return data5;
	case 6:
		const data6 = require("./hsk-level-6.json");
		return data6;
	default:
		return {};
	}
}

module.exports = NodeHelper.create({
	start: function() {
		console.info("MMM-Hanzi started!");
	},
	socketNotificationReceived: function (notification, payload) {
		const self = this;
		switch (notification) {
		case "GET_HANZI":
			const data = getHskData(payload.hskLevel);
			console.error("received GET_HANZI!");
			self.sendSocketNotification("UPDATE_HANZI", data[getRandomInt(0, data.length-1)]);
			break;
		default:
			console.error("Switch item {} is missing", notification);
		}
	},
});

