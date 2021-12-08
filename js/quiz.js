$('.next').on('click', function (e) {


    $(this).parent().removeClass('on');
    $(this).parent().next().addClass('on');
    showVictimBtn($(this).parent().next());
});

$('.last').on('click', function (e) {
    $(this).parent().removeClass('on');
    $(this).parent().prev().addClass('on');
    showVictimBtn($(this).parent().prev());
});

$('.top').on('click', function (e) {
    $('section').removeClass('on');
    $('#top').addClass('on');
});

function showVictimBtn(ele) {
    if (ele.hasClass('question')) {
        $('.victim-btn').show();
    } else {
        $('.victim-btn').hide();
    }
}
//Victim Picker 9000
var ppl = ['Daniel', 'Emily', 'Lexi', 'Ole', 'Tord'];
var last = '';
var next = '';

$('.victim-btn').on('click', function (e) {

    $('.victim-btn').attr("disabled", "disabled");

    next = ppl[Math.floor(Math.random() * ppl.length)];

    if (next == last) {
        var index = ppl.indexOf(next);
        index++;
        if (index >= ppl.length) { index = 0; }
        next = ppl[index];
    }

    $('.victim-name').text(next).addClass('show');

    last = next;

    var timeoutID = setTimeout(function (e) {
        $('.victim-name').removeClass('show');
        $('.victim-btn').removeAttr("disabled");
    }, 2000)

});

document.getElementById('vid1').addEventListener('loadedmetadata', function () {
    this.currentTime = 179.8;
}, false);