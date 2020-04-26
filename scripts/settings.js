$(document).ready(function () {
    setKeys();
});

var keys = {
    key_up: 38, key_Down: 40, key_Left: 37, key_right: 39,
    setDefualt: function () { this.key_up = 38, this.key_Down = 40, this.key_Left = 37, this.key_right = 39 },
    changeKeys: function (up, down, left, right) { this.key_up = up, this.key_Down = down, this.key_Left = left, this.key_right = right }
}


function setKeys() {
    document.getElementById("setkeyleft").addEventListener('keydown', function (event) {
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('../images/keys/" + event.key + ".png')";
        // this.value = event.key;
    });


    document.getElementById("setkeyright").addEventListener('keydown', function (event) {
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('../images/keys/" + event.key + ".png')";
        // this.value = event.key;
    });

    document.getElementById("setkeyup").addEventListener('keydown', function (event) {
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('../images/keys/" + event.key + ".png')";
        // this.value = event.key;
    });

    document.getElementById("setkeydown").addEventListener('keydown', function (event) {
        if (!event.metaKey)
            event.preventDefault();
        this.style.backgroundImage = "url('../images/keys/" + event.key + ".png')";
        // this.value = event.key;
    });


}