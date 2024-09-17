// app/actions.js (Updated)
import { products, users } from './api/data';

export async function createInvoice({ productIds, userId }) {
  const selectedProducts = products.filter((product) =>
    productIds.includes(product.id)
  );
  const user = users.find((u) => u.id === userId);

  if (!selectedProducts.length || !user) {
    return { success: false, message: 'Invalid product selection or user' };
  }

  const totalAmount = selectedProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );

  // Simulate invoice creation (e.g., save to a database)
  const invoice = {
    id: 'inv123',
    user: user.name,
    products: selectedProducts,
    amount: totalAmount,
  };

  return { success: true, invoice };
}
