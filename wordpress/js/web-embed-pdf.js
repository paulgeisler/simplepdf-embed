!function(n){"function"==typeof define&&define.amd?define(n):n()}((function(){"use strict";function n(n,e,t){if(t||2===arguments.length)for(var i,o=0,l=e.length;o<l;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return n.concat(i||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError;var e,t,i,o,l,r,d,c,s,a=function(){return n(n([],Array.from(document.getElementsByClassName("simplepdf")).filter((function(n){return!f(n)})),!0),Array.from(document.getElementsByTagName("a")).filter((function(n){return!n.classList.contains("exclude-simplepdf")&&(n.href.includes(".pdf")||n.classList.contains("simplepdf"))})),!0)},p=function(){var n,e;null===(n=document.getElementById("simplePDF_modal"))||void 0===n||n.remove(),null===(e=document.getElementById("simplePDF_modal_style"))||void 0===e||e.remove(),document.body.style.overflow="initial"},u=function(n){var e,t,i=n.href,o=n.context,l=null===(e=window.simplePDF)||void 0===e?void 0:e.companyIdentifier,r=i?encodeURIComponent(i):null,d=function(){if(!o)return null;try{return encodeURIComponent(btoa(JSON.stringify(o)))}catch(n){return m("Failed to encode the context: ".concat(JSON.stringify(n)),{context:o}),null}}(),c="https://".concat(l,".simplePDF.eu/editor"),s=r?"".concat(c,"?open=").concat(r).concat(d?"&context=".concat(d):""):"".concat(c).concat(d?"?context=".concat(d):""),a='\n    <style id="simplePDF_modal_style">\n      .simplePDF_container {\n        user-select: none;\n        position: fixed;\n        display: flex;\n        box-sizing: border-box;\n        align-items: center;\n        justify-content: center;\n\n        height: 100vh;\n        width: 100%;\n        z-index: 999999;\n        padding: 16px;\n        top: 0;\n        left: 0;\n        background: rgba(0, 0, 0, 0.4);\n      }\n\n      .simplePDF_content {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        box-sizing: border-box;\n      }\n\n      .simplePDF_iframeContainer {\n        overflow: hidden;\n        background: #f1f7ff;\n        border-radius: 6px;\n        width: 100%;\n        height: 100%;\n      }\n\n      .simplePDF_iframe {\n        border: none;\n        border-radius: 6px;\n        width: 100%;\n        height: 100%;\n      }\n\n      .simplePDF_close {\n        z-index: 1;\n        position: absolute;\n        top: -12px;\n        right: -12px;\n\n        border: none;\n        padding: 6px;\n        border-radius: 50px;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 24%);\n\n        cursor: pointer;\n        background: #ff5959;\n        text-shadow: 1px 1px #243889;\n      }\n\n      .simplePDF_close svg {\n          fill: white;\n          width: 14px;\n          height: 14px;\n      }\n\n      .simplePDF_close:hover {\n          box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 4px rgb(0 0 0 / 24%);\n      }\n  </style>\n  <div class="simplePDF_container" aria-modal="true" id="simplePDF_modal">\n    <div class="simplePDF_content">\n      <button id="simplePDF_modal_close_button" class="simplePDF_close" aria-label="Close PDF editor modal">\n        <svg height="512" viewBox="0 0 512 512" width="512" xml-space="preserve" xmlns="http://www.w3.org/2000/svg">\n          <path d="M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z" />\n        </svg>\n      </button>\n      <div class="simplePDF_iframeContainer">\n        <iframe referrerPolicy="no-referrer-when-downgrade" class="simplePDF_iframe" src="'.concat(s,'" />\n      </div>\n    </div>\n  </div>\n ');m("Creating the modal",{companyIdentifier:l,editorURL:s}),document.body.style.overflow="hidden",document.body.insertAdjacentHTML("beforebegin",a),m("Attach close modal listener",{}),null===(t=document.getElementById("simplePDF_modal_close_button"))||void 0===t||t.addEventListener("click",p)},m=function(n,e){var t;!0===(null===(t=window.simplePDF)||void 0===t?void 0:t.isDebug)&&console.warn("@simplepdf/web-embed-pdf: ".concat(n),e)},f=function(n){return n.hasAttribute("href")},v=function(n){var e=n.elements;m("Attaching listeners to anchors",{anchorsCount:e.length}),e.forEach((function(n){return n.addEventListener("click",(function(e){e.preventDefault(),u({href:f(n)?n.href:null})}))}))},h={isDebug:!!(null!==(t=null===(e=window.simplePDF)||void 0===e?void 0:e.isDebug)&&void 0!==t?t:"true"===(null===(i=document.currentScript)||void 0===i?void 0:i.getAttribute("debug"))),companyIdentifier:null!==(d=null!==(l=null===(o=window.simplePDF)||void 0===o?void 0:o.companyIdentifier)&&void 0!==l?l:null===(r=document.currentScript)||void 0===r?void 0:r.getAttribute("companyIdentifier"))&&void 0!==d?d:"embed",disableInit:null!==(s=null===(c=window.simplePDF)||void 0===c?void 0:c.disableInit)&&void 0!==s&&s,attachOnClick:v,openEditor:u,closeEditor:p};!function(){var n;if(!0!==(null===(n=window.simplePDF)||void 0===n?void 0:n.disableInit)){var e=a();v({elements:e})}}(),window.simplePDF=h}));