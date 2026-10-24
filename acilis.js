// The site's landing page for an eynotes link (rakip eksikleri: /notey/p/ a shared document, /notey/c/ a live session's
// invitation). The key is in the address's fragment (after '#'), which a browser never sends to the site. This page
// sends it nowhere either: no request, no counter, no third party (its CSP allows no connection at all). With eynotes
// installed the link opens in the app before this page loads (Android App Links, iOS Universal Links: only eynotes can
// claim this address). Here the person copies the link into eynotes (+ › Bağlantıyı aç); eynotes://p/<id>#<key> is only
// a fallback behind a tap ("eynotes’ta aç"), never tried by itself, because any app may register eynotes:// and would
// get the key. The key is taken out of the address bar so it does not linger in the browser's history. A live session's
// invitation also carries the hash of the session's public key (the pin) and, after Çıkar, the owner's signature (src/share/
// links.js): they go to the app with it.
(function () {
  var kind = document.documentElement.getAttribute('data-kind') === 'c' ? 'c' : 'p';
  var raw = location.hash.slice(1);
  var match = (kind === 'c' ? /^([A-Za-z0-9_-]{16,64})\.([A-Za-z0-9_-]{43})(?:\.([a-f0-9]{64}))?(?:\.([A-Za-z0-9_-]{86}))?$/ : /^([A-Za-z0-9_-]{16,64})\.([A-Za-z0-9_-]{43})$/).exec(raw);
  if (!match) {document.getElementById('ok').hidden = true; document.getElementById('bad').hidden = false; return;}
  var app = 'eynotes://' + kind + '/' + match[1] + '#' + match[2] + (match[3] ? '.' + match[3] : '') + (match[4] ? '.' + match[4] : '');
  var web = location.origin + location.pathname + '#' + raw;
  try {history.replaceState(null, '', location.pathname);} catch (e) {/* the address keeps it; nothing is sent anyway */}
  document.getElementById('open').href = app;
  document.getElementById('copy').onclick = function () {
    var told = document.getElementById('copied');
    var done = function () {told.textContent = 'Bağlantı kopyalandı. eynotes’ta + › Bağlantıyı aç’a yapıştır.';};
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(web).then(done, function () {prompt('Bağlantıyı kopyala:', web);});
    else prompt('Bağlantıyı kopyala:', web);
  };
})();
