var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// without generics ...
function identity(arg) {
    return arg;
}
// loosing our information ... 
console.log(typeof (100)); // any
console.log(typeof ("hello")); //any 
var demo = function (obj) {
    var id = 1;
    return __assign(__assign({}, obj), { id: id });
};
var user = demo({
    name: 'John Doe',
    age: 27
});
;
var response = {
    statusCode: 200,
    statusMessage: "success",
    data: {
        something: "ccc"
    }
};
