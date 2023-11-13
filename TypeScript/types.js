"use strict";
const serverConfig = {
    protocol: "https",
    port: 3001,
    role: "admin",
};
const startServer = (protocol, port) => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return "Server started";
};
startServer(serverConfig.protocol, serverConfig.port);
