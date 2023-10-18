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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRickAndMortyCharacters = exports.getHarryPotterCharacters = void 0;
const config_1 = require("../config");
const HTTPFetch_1 = require("../services/HTTPFetch");
const serviceHTTP = new HTTPFetch_1.HTTPFetch();
function getHarryPotterCharacters(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield serviceHTTP.getData({
            url: config_1.ENV.API_URL_HARRY_POTTER
        });
        if (!response.stack.ok || !response.data)
            return response;
        const dataFormatted = response.data.map(item => ({
            id: item.id,
            name: item.name,
            image: item.image.length ? item.image : config_1.ENV.IMAGE_HARRY_POTTER_PLACEHOLDER
        }));
        return res.send(dataFormatted);
    });
}
exports.getHarryPotterCharacters = getHarryPotterCharacters;
function getRickAndMortyCharacters(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield serviceHTTP.getData({
            url: config_1.ENV.API_URL_RICK_AND_MORTY
        });
        if (!response.stack.ok || !response.data)
            return response;
        const dataFormatted = response.data.results.map(item => ({
            id: item.id,
            name: item.name,
            image: item.image
        }));
        return res.send(dataFormatted);
    });
}
exports.getRickAndMortyCharacters = getRickAndMortyCharacters;
