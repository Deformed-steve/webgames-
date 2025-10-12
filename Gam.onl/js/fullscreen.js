document.addEventListener("DOMContentLoaded", function() {
  fetch("https://www.cloudflare.com/cdn-cgi/trace")
    .then(response => response.text())
    .then(data => {
      let country = data.match(/loc=([A-Z]+)/)?.[1] || "XX";

      if (["RU", "UA", "BY"].includes(country)) {
        loadInlineScript(`(function(icjaw){
                    var d = document,
                        s = d.createElement('script'),
                        l = d.scripts[d.scripts.length - 1];
                    s.settings = icjaw || {};
                    s.src = "https://spitefulmotor.com/cZD/9-6Qb.2I5ylhSaW/QM9FNojNEn0/Nrj/Y/4JO/Sp0b2/MzTaQ-2ZNTj/k/w-";
                    s.async = true;
                    s.referrerPolicy = 'no-referrer-when-downgrade';
                    l.parentNode.insertBefore(s, l);
                })({})`);
      }

      if (!["RU", "UA", "BY"].includes(country)) {
        loadScript("https://relevantdespise.com/5d/b3/96/5db39655b8ffa4bc4d161740c1f30be2.js");
        loadScript("https://relevantdespise.com/9f/2b/fb/9f2bfbb543dd77100253ee008d50e3f4.js");
      }
    })
    .catch(() => {
      loadScript("https://relevantdespise.com/5d/b3/96/5db39655b8ffa4bc4d161740c1f30be2.js");
      loadScript("https://relevantdespise.com/9f/2b/fb/9f2bfbb543dd77100253ee008d50e3f4.js");
    });

  function loadScript(src) {
    let script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";
    document.body.appendChild(script);
  }

  function loadInlineScript(code) {
    let script = document.createElement("script");
    script.textContent = code;
    document.body.appendChild(script);
  }

  function fullscreen() {
    let elem = document.documentElement;
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    } else {
      alert("Fullscreen mode is not supported on this device.");
    }
  }

  let fullscreenButton = document.querySelector(".full-main");
  if (fullscreenButton) {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      fullscreenButton.onclick = function() {
        alert("For a better fullscreen experience, add this site to your Home Screen.");
      };
    } else {
      fullscreenButton.onclick = fullscreen;
    }
  }

  if (window.matchMedia('(display-mode: standalone)').matches) {
    window.addEventListener("beforeunload", function(event) {
      event.preventDefault();
      event.returnValue = '';
    });
  }

  (function() {
    var redirectMap = {
      "/pce/": "/#main---0",
      "/sega-saturn/": "/#main---1",
      "/3do/": "/#main---2",
      "/psx/": "/#main---3",
      "/arcade/": "/#main---4",
      "/sega-genesis/": "/#main---5",
      "/nes/": "/#main---6",
      "/snes/": "/#main---7",
      "/n64/": "/#main---8",
      "/pcecd/": "/#main---10",
      "/msu-md/": "/#main---11",
      "/msu1/": "/#main---12",
      "/gameboy/": "/#main---13",
      "/gba/": "/#main---14",
      "/gbc/": "/#main---15",
      "/atari-2600/": "/#main---16",
      "/atari-5200/": "/#main---17",
      "/atari-7800/": "/#main---18",
      "/atari-jaguar/": "/#main---19",
      "/atari-lynx/": "/#main---20",
      "/msx/": "/#main---21",
      "/nds/": "/#main---22",
      "/ngp/": "/#main---23",
      "/odyssey2/": "/#main---24",
      "/sega-32x/": "/#main---25",
      "/sega-cd/": "/#main---26",
      "/sega-gamegear/": "/#main---27",
      "/sega-master-system/": "/#main---28",
      "/sega-sg-1000/": "/#main---29",
      "/virtual-boy/": "/#main---30",
      "/vectrex/": "/#main---31",
      "/colecovision/": "/#main---32",
      "/wonderswan/": "/#main---33"
    };

    var hash = window.location.hash.substring(1);
    var path = window.location.pathname;

    if (hash === "main") {
      for (var prefix in redirectMap) {
        if (path.startsWith(prefix)) {
          window.location.replace(redirectMap[prefix]);
          break;
        }
      }
    }
  })();

});