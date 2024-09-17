// app/InvoiceForm.js (Updated)
'use client';
import { useState } from 'react';
import { createInvoice } from './actions';

export default function InvoiceForm({ products, users }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [userId, setUserId] = useState(users[0].id);
  const [response, setResponse] = useState(null);

  function handleProductChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions);
    setSelectedProducts(selectedOptions.map((option) => option.value));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await createInvoice({
      productIds: selectedProducts,
      userId,
    });
    setResponse(result);
  }

  return (
    <div>
      <h2>Create Invoice</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Products:</label>
          <select
            multiple
            value={selectedProducts}
            onChange={handleProductChange}
          >
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select User:</label>
          <select value={userId} onChange={(e) => setUserId(e.target.value)}>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Invoice</button>
      </form>

      {response && (
        <div>
          {response.success ? (
            <div>
              <h3>Invoice Created</h3>
              <p>Invoice ID: {response.invoice.id}</p>
              <p>User: {response.invoice.user}</p>
              <p>Products:</p>
              <ul>
                {response.invoice.products.map((product) => (
                  <li key={product.id}>
                    {product.name} - ${product.price}
                  </li>
                ))}
              </ul>
              <p>Total Amount: ${response.invoice.amount}</p>
            </div>
          ) : (
            <p>Error: {response.message}</p>
          )}
        </div>
      )}
    </div>
  );
}
