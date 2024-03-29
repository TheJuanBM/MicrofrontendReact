"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const PROCESS = process.env;
exports.ENV = {
    PORT: PROCESS.PORT,
    CORS_ALLOW: PROCESS.PORT,
    API_URL_HARRY_POTTER: PROCESS.API_URL_HARRY_POTTER,
    API_URL_RICK_AND_MORTY: PROCESS.API_URL_RICK_AND_MORTY,
    IMAGE_HARRY_POTTER_PLACEHOLDER: PROCESS.IMAGE_HARRY_POTTER_PLACEHOLDER
};
