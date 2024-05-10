const os = require("os");

const userSystemInfo = (req, res) => {
    
    const randomDelay = Math.floor(Math.random() * 5000);

    setTimeout(() => {
        const systemInfo = {
            cpuModel: os.cpus()[0].model,
            cpuSpeed: os.cpus()[0].speed,
            numberCores: os.cpus().length,
            cpuArchitecture: os.arch(),
            platform: os.platform(),
            release: os.release(),
            type: os.type(),
            hostname: os.hostname(),
            totalMemory: os.totalmem(),
            freeMemory: os.freemem(),
            uptime: os.uptime()
        }

        res.writeHead(200, { "Content-Type": 'application/json' });
        res.end(JSON.stringify(systemInfo));
    }, randomDelay)
};

module.exports = { userSystemInfo };