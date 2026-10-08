import { i as WebPlugin } from "./dist-DQ6c6QyD.js";
//#region ../../../../../Documents/ChatGPT/notey/node_modules/@capacitor/share/dist/esm/web.js
var ShareWeb = class extends WebPlugin {
	async canShare() {
		if (typeof navigator === "undefined" || !navigator.share) return { value: false };
		else return { value: true };
	}
	async share(options) {
		if (typeof navigator === "undefined" || !navigator.share) throw this.unavailable("Share API not available in this browser");
		await navigator.share({
			title: options.title,
			text: options.text,
			url: options.url
		});
		return {};
	}
};
//#endregion
export { ShareWeb };
