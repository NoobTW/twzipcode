"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _twzipcodeData = _interopRequireDefault(require("twzipcode-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var zipTw = (0, _twzipcodeData["default"])();
var zipEn = (0, _twzipcodeData["default"])('en');

var zip = function zip(postcode) {
  var tw = zipTw.zipcodes.find(function (x) {
    return x.id === ~~postcode;
  });
  var en = zipEn.zipcodes.find(function (x) {
    return x.id === ~~postcode;
  });
  return {
    id: postcode,
    city: tw.county,
    cityEn: en.county,
    district: tw.city,
    districtEn: en.city
  };
};

var _default = zip;
exports["default"] = _default;