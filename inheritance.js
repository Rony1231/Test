var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    /**
     *
     */
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.calculation = function () {
        if (this.age < 21) {
            return true;
        }
        else {
            return false;
        }
    };
    return Human;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    /**
     *
     */
    function Students(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Students.prototype.tostring = function () {
        if (this.calculation) {
            console.log('${this.name} is student');
        }
        else {
            console.log('${this.name} is not student');
        }
    };
    return Students;
}(Human));
var students = new Students('Rahul', 22);
students.tostring();
