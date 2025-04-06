export function calculateTax(price: number, rate: number = 0.1): number {
    return price * rate;
}