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
  // Usar reduce para calcular el total en vez de map + variable externa
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div
      className="cart-dropdown position-absolute bg-white border rounded shadow p-3"
      style={{ top: '100%', right: 0, width: 300, zIndex: 1000 }}
    >
      <h6>Carrito</h6>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="list-unstyled mb-0">
          {cartItems.map(({ id, name, qty, price }) => (
            <li key={id} className="d-flex justify-content-between align-items-center mb-2">
              <div>
                {name} x{qty}{' '}
                <span className="text-muted">${(price * qty).toFixed(2)}</span>
              </div>
              <button className="btn btn-sm btn-danger ms-2" onClick={() => removeItem(id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <>
          <h6>Total: ${total.toFixed(2)}</h6>
          <button className="btn btn-primary w-100 mt-3" onClick={onComprar}>
            Comprar
          </button>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
