const app = require("express")();
const http = require('http').Server(app)
const io = require("socket.io")(http);

// App setup
const PORT = 5000;


// Socket setup

io.on("connection", function (socket) {
    console.log("Made socket connection");

    socket.on("update", function (data) {
        console.log(data);
    });

    socket.on("disconnect", () => {
        io.emit("socket disconnected",);
    });


});


http.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
