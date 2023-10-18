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
exports.HTTPFetch = void 0;
class HTTPFetch {
    constructor() { }
    handlestackRequest({ error }) {
        const baseError = {
            ok: false,
            status: 500,
            message: 'An error has occurred, please try again'
        };
        if (error instanceof Error) {
            return Object.assign(Object.assign({}, baseError), { message: error.message });
        }
        return baseError;
    }
    getData({ url, config }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const apiResponse = yield fetch(url, Object.assign(Object.assign({}, config), { mode: 'cors', method: 'GET', cache: 'no-cache', credentials: 'same-origin', headers: {
                        'Content-Type': 'application/json'
                    } }));
                const responseJson = yield apiResponse.json();
                return {
                    data: responseJson,
                    stack: {
                        ok: true,
                        status: 200,
                        message: 'ok'
                    }
                };
            }
            catch (error) {
                return {
                    data: null,
                    stack: this.handlestackRequest({ error })
                };
            }
        });
    }
}
exports.HTTPFetch = HTTPFetch;
