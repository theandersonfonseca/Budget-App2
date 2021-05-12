export default function convertToMoney(amount: number) {
  return amount.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}