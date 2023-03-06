function ping_function() {
    if (document.getElementById("ping")) {
        document.getElementById("ping").innerHTML = "Pong";
        document.getElementById("ping").id = "pong";
    } else {
        document.getElementById("pong").innerHTML = "Ping";
        document.getElementById("pong").id = "ping";
    }
}

const banner_links = document.querySelectorAll('[id^=banner-link-]')
for (let i = 0; i < banner_links.length; i++) {
    banner_links[i].addEventListener("mouseenter", function () {mouseenter_link(this.id)})
    banner_links[i].addEventListener("mouseleave", function () {mouseleave_link(this.id)})
    banner_links[i].addEventListener("mousedown", function () {mousedown_link(this.id)})
    banner_links[i].addEventListener("mouseup", function () {mouseup_link(this.id)})
}

function mouseenter_link(id) {
    document.getElementById(id).style.backgroundColor = "grey";
}

function mouseleave_link(id) {
    document.getElementById(id).style.backgroundColor = "black";
}

function mousedown_link(id) {
    document.getElementById(id).style.fontSize = "3em";
}

function mouseup_link(id) {
    document.getElementById(id).style.fontSize = "4em";
}