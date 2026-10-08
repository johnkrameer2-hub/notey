const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-CpKxqLTC.js","./dist-DQ6c6QyD.js","./definitions-Dcljmfbk.js"])))=>i.map(i=>d[i]);
import { o as registerPlugin } from "./dist-DQ6c6QyD.js";
import { t as __vitePreload } from "./preload-helper-pLTTlFDv.js";
import { i as FilesystemEncoding, n as Encoding, r as FilesystemDirectory, t as Directory } from "./definitions-Dcljmfbk.js";
//#region ../../../../../Documents/ChatGPT/notey/node_modules/@capacitor/synapse/dist/synapse.mjs
function s(t) {
	t.CapacitorUtils.Synapse = new Proxy({}, { get(e, n) {
		return new Proxy({}, { get(w, o) {
			return (c, p, r) => {
				const i = t.Capacitor.Plugins[n];
				if (i === void 0) {
					r(/* @__PURE__ */ new Error(`Capacitor plugin ${n} not found`));
					return;
				}
				if (typeof i[o] != "function") {
					r(/* @__PURE__ */ new Error(`Method ${o} not found in Capacitor plugin ${n}`));
					return;
				}
				(async () => {
					try {
						p(await i[o](c));
					} catch (a) {
						r(a);
					}
				})();
			};
		} });
	} });
}
function u(t) {
	t.CapacitorUtils.Synapse = new Proxy({}, { get(e, n) {
		return t.cordova.plugins[n];
	} });
}
function f(t = !1) {
	typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !t ? s(window) : window.cordova !== void 0 && u(window));
}
//#endregion
//#region ../../../../../Documents/ChatGPT/notey/node_modules/@capacitor/filesystem/dist/esm/index.js
var Filesystem = registerPlugin("Filesystem", { web: () => __vitePreload(() => import("./web-CpKxqLTC.js").then((m) => new m.FilesystemWeb()), __vite__mapDeps([0,1,2]), import.meta.url) });
f();
//#endregion
export { Directory, Encoding, Filesystem, FilesystemDirectory, FilesystemEncoding };
