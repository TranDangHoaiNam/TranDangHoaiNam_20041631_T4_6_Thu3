"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutOfTownTaxiRide = void 0;
// Define the superclass TaxiRide
var TaxiRide = /** @class */ (function () {
    function TaxiRide(id, driverName, carNumber, revenue) {
        this.id = id;
        this.driverName = driverName;
        this.carNumber = carNumber;
        this.revenue = revenue;
    }
    return TaxiRide;
}());
// Define the subclass InTownTaxiRide
var InTownTaxiRide = /** @class */ (function (_super) {
    __extends(InTownTaxiRide, _super);
    function InTownTaxiRide(id, driverName, carNumber, routes, kmDriven) {
        var _this = _super.call(this, id, driverName, carNumber, calculateRevenue(routes, kmDriven)) || this;
        _this.routes = routes;
        _this.kmDriven = kmDriven;
        return _this;
    }
    return InTownTaxiRide;
}(TaxiRide));
// Define the subclass OutOfTownTaxiRide
var OutOfTownTaxiRide = /** @class */ (function (_super) {
    __extends(OutOfTownTaxiRide, _super);
    function OutOfTownTaxiRide(id, driverName, carNumber, destination, days, kmDriven) {
        var _this = _super.call(this, id, driverName, carNumber, calculateRevenue(days, kmDriven)) || this;
        _this.destination = destination;
        _this.days = days;
        _this.kmDriven = kmDriven;
        return _this;
    }
    return OutOfTownTaxiRide;
}(TaxiRide));
exports.OutOfTownTaxiRide = OutOfTownTaxiRide;
// Chức năng tính doanh thu dựa trên tuyến đường/ngày và km đã đi
function calculateRevenue(routesOrDays, kmDriven) {
    // Giả sử mức giá cố định là 100.000 vnd mỗi tuyến/ngày và 10.000 Vnd mỗi km lái xe
    return routesOrDays * 100000 + kmDriven * 10000;
}
// Function to implement the main logic
function main() {
    // Create two instances of InTownTaxiRide
    var ride1 = new InTownTaxiRide("15", "HongHanh", "0363728", 10, 20);
    var ride2 = new InTownTaxiRide("12", "HongPhong", "036910", 15, 25);
    // Create two instances of OutOfTownTaxiRide
    var ride3 = new OutOfTownTaxiRide("33", "HongThang", "1230d23", "Destination1", 3, 50);
    var ride4 = new OutOfTownTaxiRide("09", "ThanhLong", "4510a01", "Destination2", 4, 60);
    // Put the trips in an array
    var taxiRides = [ride1, ride2, ride3, ride4];
    // Output the total revenue for all taxi rides
    console.log("T\u1ED5ng doanh thu cho t\u1EA5t c\u1EA3 c\u00E1c chuy\u1EBFn xe: ".concat(calculateTotalRevenue(taxiRides), " vnd"));
    // Output the total revenue for each type of taxi ride
    console.log("T\u1ED5ng doanh thu t\u1EEB xe n\u1ED9i th\u00E0nh: ".concat(calculateTotalRevenue(taxiRides.filter(function (ride) { return ride instanceof InTownTaxiRide; })), " vnd"));
    console.log("T\u1ED5ng doanh thu t\u1EEB xe ngo\u1EA1i th\u00E0nh: ".concat(calculateTotalRevenue(taxiRides.filter(function (ride) { return ride instanceof OutOfTownTaxiRide; })), " vnd"));
}
// Function to calculate total revenue
function calculateTotalRevenue(rides) {
    return rides.reduce(function (total, ride) { return total + ride.revenue; }, 0);
}
// Call the main function
main();
