const whiteSparks = new mojs.Burst({
    radius: {
        0: 50,
        easing: 'elastic.out'
    },
    angle: {
        360: 0,
        easing: 'cubic.out'
    },
    left: 0,
    top: 0,
    count: 20,
    children: {
        shape: 'cross',
        points: '15',
        radius: 'rand(45,10)',
        angle: 'rand(-90,90)',
        stroke: ['white', 'grey'],
        fill: 'none',
        duration: 1000,
        delay: 'stagger(100)',
        strokeWidth: 1

    }
});


window.addEventListener('click', function (event) {
    whiteSparks
        .tune({
            x: event.pageX,
            y: event.pageY
        })
        .replay()
        .generate();

});
