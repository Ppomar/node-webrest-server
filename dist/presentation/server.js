"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    app = (0, express_1.default)();
    async start() {
        // Public folder
        this.app.use(express_1.default.static('public'));
        this.app.get('/{*path}', (req, res) => {
            console.log(req.url);
            res.send('Hola mundo');
        });
        this.app.listen(5173, () => {
            console.log(`Server running on port: ${5173}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map