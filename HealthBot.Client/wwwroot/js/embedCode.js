﻿function initBot(e, t) { var a = document.createElement("script"); a.type = "text/javascript", a.readyState ? a.onreadystatechange = function () { "loaded" != a.readyState && "complete" != a.readyState || (a.onreadystatechange = null, t()) } : a.onload = function () { t() }, a.src = e, document.getElementsByTagName("head")[0].appendChild(a) }
initBot('/js/embed.js?v1', function () { window.Covid19Embed.init({ dev: true }) });