interface CustomerInformation {
  name: string;
  email: string;
}

interface PaymentInformation {
  method: string;
  amount: number;
}

interface Reservation {
  customerInformation: CustomerInformation;
  paymentInformation: PaymentInformation;
  checkIn: Date;
  checkOut: Date;
}

const reservation: Reservation = {
  customerInformation: {
    name: "John Doe",
    email: "john@email.com",
  },
  paymentInformation: {
    method: "Credit Card",
    amount: 200,
  },
  checkIn: new Date("2026-04-20"),
  checkOut: new Date("2026-04-22"),
};

console.log(reservation);