interface PaymentInformation {
  isPayed: boolean;
  totalPrice: number;
}

interface Reservation {
  customerName: string;
  checkIn: Date;
  checkOut: Date;
  pricePerDay: number;
  paymentInformation: PaymentInformation;
}

// helper function to calculate days
function calculateDays(checkIn: Date, checkOut: Date): number {
  const diff = checkOut.getTime() - checkIn.getTime();
  return diff / (1000 * 60 * 60 * 24);
}

// create reservation
const reservation1: Reservation = {
  customerName: "Alice",
  checkIn: new Date("2026-04-20"),
  checkOut: new Date("2026-04-22"),
  pricePerDay: 100,
  paymentInformation: {
    isPayed: true,
    totalPrice: 0,
  },
};

// calculate price
const days = calculateDays(reservation1.checkIn, reservation1.checkOut);
reservation1.paymentInformation.totalPrice = days * reservation1.pricePerDay;

// array
let reservations: Reservation[] = [reservation1];

// add another
const reservation2: Reservation = {
  customerName: "Bob",
  checkIn: new Date("2026-04-21"),
  checkOut: new Date("2026-04-23"),
  pricePerDay: 150,
  paymentInformation: {
    isPayed: false,
    totalPrice: 0,
  },
};

const days2 = calculateDays(reservation2.checkIn, reservation2.checkOut);
reservation2.paymentInformation.totalPrice = days2 * reservation2.pricePerDay;

reservations.push(reservation2);

// print
reservations.forEach((res) => {
  console.log(res.customerName, res.paymentInformation.totalPrice);
});