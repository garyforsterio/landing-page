(function () {
    'use strict';
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-89242477-1', 'auto');
    ga('send', 'pageview');

    //Stack
    var segments = document.getElementsByClassName('segment');

    for (var i = 0; i < segments.length; i++) {
        segments[i].onclick = toggleOpenedSegment;
    }

    function toggleOpenedSegment() {
        var caret = this.getElementsByClassName('segment__toggle')[0];
        var classString = this.className;
        var newClass;
        if (classString.indexOf('segment--open') > -1) {
            newClass = classString.replace(' segment--open', '');
            caret.innerHTML = 'menu';
        } else {
            newClass = classString.concat(' segment--open');
            caret.innerHTML = 'clear';
        }
        this.className = newClass;
    }

    //Map
    var mapToggle = document.getElementsByClassName('map__toggle')[0];
    mapToggle.onclick = function() {
        var elem = this;
        var map = document.getElementsByClassName('contact__map')[0];
        map.classList.toggle('displayNone');
        elem.classList.toggle('displayNone');

        setTimeout(function() {
            map.classList.toggle('contact__map--hidden');
        }, 500);
    }
})();
