import { WebSocket, WebSocketServer } from "ws";

let isRed = true

const wss = new WebSocketServer({ port: 8080 })

let connectionList: WebSocket[] = []

function sendColor(ws: WebSocket){
    ws.send(isRed ? "1" : "0")
}

wss.on("connection", ws => {
    sendColor(ws)

    connectionList.push(ws)

    ws.on("message", data => {
        isRed = !isRed

        // send to all clients
        for (const connection of connectionList) {
            sendColor(connection)
        }
    })

    ws.on("close",() => {
        connectionList = connectionList.filter(w => w != ws)
        
        console.log(connectionList.length)
    })

    console.log(connectionList.length)
})