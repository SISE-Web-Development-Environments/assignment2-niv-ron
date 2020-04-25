$("#in2").click(
    $(document).keypress(function (event) {
        var key = (event.keyCode ? event.keyCode : event.which);
        var ch = String.fromCharCode(key)
        $('#p1').attr('placeholder', ch);
        $('#p1').html(ch);
    })
);

function setKeyCode(event,obj) {
    let key = event.keyCode;

    // alert("You choose for " + event.code);
    $('#in'+obj).attr("placeholder", "key");
    $('#p'+obj).html("" + event.code);

}