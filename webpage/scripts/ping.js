function ping_function() {
    if (document.getElementById("ping")) {
        document.getElementById("ping").innerHTML = "Pong";
        document.getElementById("ping").id = "pong";
    } else {
        document.getElementById("pong").innerHTML = "Ping";
        document.getElementById("pong").id = "ping";
    }
}