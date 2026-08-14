const reservation: {
  customerInformation: string;
  paymentInformation: string;
  checkIn: Date;
  checkOut: Date;
} = {
  customerInformation: "John Doe",
  paymentInformation: "Credit Card",
  checkIn: new Date("2025-01-10"),
  checkOut: new Date("2025-01-12"),
};

console.log(reservation);