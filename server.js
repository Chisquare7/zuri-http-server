const http = require("http");
const { userSystemInfo } = require("./userSystemInfo");

const PORT = 3000


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "OPTIONS, GET");
    res.setHeader('Access-Control-Allow-Headers', "Content-Type");

    if (req.method === "GET" && req.url === "/system-info") {
        try {
            userSystemInfo(req, res);
        } catch (error) {
            console.error("Error getting user system info:", error);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error")
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("User system information not found");
    }
    
});


server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});