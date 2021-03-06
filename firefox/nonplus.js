/* Prevent articles read counter from displaying */
if (/^https?\:\/\/content.vk.se/.test(document.URL))
{
	document.cookie = "vkmedia-mmd=%7B%22count%22%3A0%7D";
}

/* Insert CSS for hilighting Plus articles */
if (/^https?\:\/\/(www|affarsliv24).vk.se/.test(document.URL))
{
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = '\
	[href*="\/plus\/"] * { \
		background-color: #e6e8fc; \
	} \
	[href*="\/plus\/"] h1:before, \
	[href*="\/plus\/"] h2:before, \
	[href*="\/plus\/"] h3:before, \
	[href*="\/plus\/"] h4:before, \
	[href*="\/plus\/"] h5:before, \
	[href*="\/plus\/"] h6:before { \
		content: "PLUS"; \
		margin: 0 .25em 0 0; \
		color: rgba(0, 0, 0, 0); \
		background: url("' + browser.extension.getURL("plus.svg") + '") no-repeat center; \
	}';
	document.head.appendChild(css);
}
