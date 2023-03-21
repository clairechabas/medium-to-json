"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rss_to_json_1 = require("rss-to-json");
const PORT = process.env.PORT || 8081;
const app = (0, express_1.default)();
app.get('/', (req, res) => res.send('Hey there 👋'));
app.get('/api/medium-posts/:username', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getFeed = () => __awaiter(void 0, void 0, void 0, function* () {
        let rss = yield (0, rss_to_json_1.parse)(`https://medium.com/feed/@${req.params.username}`);
        return JSON.stringify(rss, null, 3);
    });
    const json = yield getFeed();
    const posts = JSON.parse(json).items;
    res.send({ posts });
}));
app.listen(PORT, () => console.log(`🚀 Listening on port ${PORT}`));
//# sourceMappingURL=index.js.map