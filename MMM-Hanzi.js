
let currentHanzi = {
      "id": 0,
      "hanzi": "",
      "pinyin": "",
      "translations": [
        "",
        ""
      ]
    };

Module.register("MMM-Hanzi",{
	// Default module config.
	defaults: {
		hskLevel: 4,
		interval: 300000,
	},
	start: function() {
		this.getData();
	},
	getDom: () => {
		const divElement  = document.createElement("div");
		divElement.style.marginLeft = "1rem";
		const hanziElement = document.createElement("p");
		hanziElement.style.fontSize = "6rem";
            	hanziElement.style.marginBottom = "0";
		hanziElement.innerHTML = currentHanzi.hanzi;
                const pinyinElement = document.createElement("p");
                pinyinElement.innerHTML = "<b>"+currentHanzi.pinyin+"</b>";
		pinyinElement.style.fontSize = "1.5rem";
		pinyinElement.style.margin = "0";
		const translationElement = document.createElement("p");
		translationElement.style.fontSize = "1.5rem";
		translationElement.style.padding = "0";
		translationElement.style.margin = "0";
   		translationElement.innerHTML = "<b>"+currentHanzi.translations[0]+"</b>";
		divElement.appendChild(hanziElement);
                divElement.appendChild(pinyinElement);
		divElement.appendChild(translationElement);
		return divElement;
	},
	getData: function() {
		this.sendSocketNotification("GET_HANZI", this.config);
		setInterval(() => {
			this.sendSocketNotification("GET_HANZI", this.config);
		}, this.config.interval);
	},
	socketNotificationReceived: function(notification, payload) {
		switch (notification) {
		case "UPDATE_HANZI":
                        currentHanzi = payload;
			break;
		default:
		}
		this.updateDom();
	}

});
