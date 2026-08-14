interface PaymentInformation {
  isPayed: boolean;
  totalPrice: number;
}

interface Reservation {
  customerInformation: string;
  paymentInformation: PaymentInformation;
  checkIn: Date;
  checkOut: Date;
  pricePerDay: number;
}

function getDays(checkIn: Date, checkOut: Date): number {
  const oneDay = 1000 * 60 * 60 * 24;
  const diff = checkOut.getTime() - checkIn.getTime();
  return diff / oneDay;
}

const checkIn1 = new Date("2025-01-10");
const checkOut1 = new Date("2025-01-12");
const pricePerDay1 = 100;

const reservation1: Reservation = {
  customerInformation: "John Doe",
  checkIn: checkIn1,
  checkOut: checkOut1,
  pricePerDay: pricePerDay1,
  paymentInformation: {
    isPayed: true,
    totalPrice: getDays(checkIn1, checkOut1) * pricePerDay1,
  },
};

const reservations: Reservation[] = [reservation1];

const checkIn2 = new Date("2025-02-01");
const checkOut2 = new Date("2025-02-05");
const pricePerDay2 = 150;

const reservation2: Reservation = {
  customerInformation: "Jane Smith",
  checkIn: checkIn2,
  checkOut: checkOut2,
  pricePerDay: pricePerDay2,
  paymentInformation: {
    isPayed: false,
    totalPrice: getDays(checkIn2, checkOut2) * pricePerDay2,
  },
};

reservations.push(reservation2);

for (const reservation of reservations) {
  console.log("Customer:", reservation.customerInformation);
  console.log("Total Price:", reservation.paymentInformation.totalPrice);
}