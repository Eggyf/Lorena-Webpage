import React from 'react';

interface CartItem {
  id: number;
  name: string;
  qty: number;
  price: number;
}

interface CartDropdownProps {
  cartItems: CartItem[];
  removeItem: (id: number) => void;
  onComprar: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems, removeItem, onComprar }) => {
  return (
    <div className="cart-dropdown position-absolute bg-white border rounded shadow p-3" style={{ top: '100%', right: 0, width: 300, zIndex: 1000 }}>
      <h6>Carrito</h6>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="list-unstyled mb-0">
          {cartItems.map(item => (
            <li key={item.id} className="d-flex justify-content-between align-items-center mb-2">
              <div>{item.name} x{item.qty} <span className="text-muted">${item.price * item.qty}</span></div>
              <button className="btn btn-sm btn-danger ms-2" onClick={() => removeItem(item.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button className="btn btn-primary w-100 mt-3" onClick={onComprar}>Comprar</button>
      )}
    </div>
  );
};

export default CartDropdown;
