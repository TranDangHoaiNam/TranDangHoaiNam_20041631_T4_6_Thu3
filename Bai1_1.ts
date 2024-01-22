// Define the superclass TaxiRide
class TaxiRide {
    constructor(
      public id: string,
      public driverName: string,
      public carNumber: string,
      public revenue: number
    ) {}
  }
  
  // Define the subclass InTownTaxiRide
  class InTownTaxiRide extends TaxiRide {
    constructor(
      id: string,
      driverName: string,
      carNumber: string,
      public routes: number,
      public kmDriven: number
    ) {
      super(id, driverName, carNumber, calculateRevenue(routes, kmDriven));
    }
  }
  
  // Define the subclass OutOfTownTaxiRide
  export class OutOfTownTaxiRide extends TaxiRide {
    constructor(
      id: string,
      driverName: string,
      carNumber: string,
      public destination: string,
      public days: number,
      public kmDriven: number
    ) {
      super(id, driverName, carNumber, calculateRevenue(days, kmDriven));
    }
  }
  
  // Chức năng tính doanh thu dựa trên tuyến đường/ngày và km đã đi
  function calculateRevenue(routesOrDays: number, kmDriven: number): number {
    // Giả sử mức giá cố định là 100.000 vnd mỗi tuyến/ngày và 10.000 Vnd mỗi km lái xe
    return routesOrDays * 100000 + kmDriven * 10000;
  }
  
  // Function to implement the main logic
  function main(): void {
    // Create two instances of InTownTaxiRide
    const ride1 = new InTownTaxiRide("15", "HongHanh", "0363728",10, 20);
    const ride2 = new InTownTaxiRide("12", "HongPhong", "036910", 15, 25);
  
    // Create two instances of OutOfTownTaxiRide
    const ride3 = new OutOfTownTaxiRide("33", "HongThang", "1230d23", "Destination1", 3, 50);
    const ride4 = new OutOfTownTaxiRide("09", "ThanhLong", "4510a01", "Destination2", 4, 60);
  
    // Put the trips in an array
    const taxiRides: TaxiRide[] = [ride1, ride2, ride3, ride4];
  
    // Output the total revenue for all taxi rides
    console.log(`Tổng doanh thu cho tất cả các chuyến xe: ${calculateTotalRevenue(taxiRides)} vnd`);
  
    // Output the total revenue for each type of taxi ride
    console.log(`Tổng doanh thu từ xe nội thành: ${calculateTotalRevenue(taxiRides.filter(ride => ride instanceof InTownTaxiRide))} vnd`);
    console.log(`Tổng doanh thu từ xe ngoại thành: ${calculateTotalRevenue(taxiRides.filter(ride => ride instanceof OutOfTownTaxiRide))} vnd`);
  }
  
  // Function to calculate total revenue
  function calculateTotalRevenue(rides: TaxiRide[]): number {
    return rides.reduce((total, ride) => total + ride.revenue, 0);
  }
  
  // Call the main function
  main();