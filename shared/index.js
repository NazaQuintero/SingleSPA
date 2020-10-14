(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dataSaver = exports.DataSaver = void 0;
    var DataSaver = /** @class */ (function () {
        function DataSaver() {
            this.data = {};
            console.log("CONSTRUCTING!!!");
        }
        return DataSaver;
    }());
    exports.DataSaver = DataSaver;
    exports.dataSaver = new DataSaver();
});
