(function () {
    var $ring = $('#ring');
    var $sun = $('#sun');
    var winWidth;
    var winHeight;
    var ringSize = {};
    var ringRadius;
    var sunSize = {};
    var sunRadius;


    function calculateRingSize () {
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;

        ringRadius = winWidth > winHeight ? winHeight : winWidth;
        sunRadius = winWidth > winHeight ? winHeight : winWidth;

        ringRadius = ringRadius / 100 * 60;

        if (window.matchMedia('only screen and (max-width: 600px)').matches) {
            $ring.addClass('mobile');
            ringSize = {
                width: ringRadius + 10,
                height: ringRadius,
                marginTop: - ringRadius / 2,
                marginLeft: - (ringRadius + 10) / 2
            };
             $sun.addClass('mobile');
            sunSize = {
                width: ringRadius + 10,
                height: ringRadius,
                marginTop: - ringRadius / 2,
                marginLeft: - (ringRadius + 10) / 2
            };
        } else {
            $ring.removeClass('mobile');
            ringSize = {
                width: ringRadius + 40,
                height: ringRadius,
                marginTop: - ringRadius / 2,
                marginLeft: - (ringRadius + 40) / 2
            };
            $sun.removeClass('mobile');
            sunSize = {
                width: ringRadius + 40,
                height: ringRadius,
                marginTop: - ringRadius / 2,
                marginLeft: - (ringRadius + 40) / 2
            };
        }

        $ring.css(ringSize);
        $sun.css(ringSize);
    }

    calculateRingSize();

    setTimeout(function () {
        calculateRingSize();
    }, 300);

    $(window).on('resize', function () {
        calculateRingSize();
    });
})();
