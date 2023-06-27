interface TotalPriceProps {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: TotalPriceProps) => {
  // Your code here...
};

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
// 6250
