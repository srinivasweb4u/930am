var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 200;
var y = 600;
var z = x + y;
console.log(z);
var fatherC = /** @class */ (function () {
    function fatherC() {
        this.fname = 'Swamy';
        this.assets = 10000;
        this.srname = "Malyala";
        this.age = 65;
    }
    return fatherC;
}());
// memory constructor
var studentC = /** @class */ (function (_super) {
    __extends(studentC, _super);
    function studentC() {
        var _this = _super.call(this) || this;
        _this.address = function () {
            console.log('dilshuknager , Hyderbad');
        };
        _this.destails = function () {
            console.log(_this);
        };
        _this.name = "srinivas";
        _this.email = "srinivas.itinfogroup@gmail.com";
        _this.phone = 9704522221;
        _this.password = "welcome";
        _this.username = "srinivasweb4u";
        return _this;
    }
    return studentC;
}(fatherC));
var obj = new studentC();
console.log(obj);
