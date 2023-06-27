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
  const priceWithDiscount = price * (1 - discount / 100);
  return isInstallment ? priceWithDiscount / months : priceWithDiscount;
};

const result = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});

console.log(result);
// 6250
