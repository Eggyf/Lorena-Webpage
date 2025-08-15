export interface Producto {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;       // cambió a number
    currency?: string;
    qty: number;
}

export interface CartItem {
    id: number;
    name: string;
    qty: number;
    price: number;
    // otros campos que uses...
}

// Los precios en number, no en string
const productos: Producto[] = [
    {
        id: 1,
        image: "https://via.placeholder.com/300x180.png?text=Pulsera+de+Cuero",
        name: "Pulsera de Cuero",
        description: "Elegante pulsera hecha a mano con auténtico cuero marrón.",
        price: 24.99,
        currency: "$",
        qty: 1
    },
    {
        id: 2,
        image: "https://via.placeholder.com/300x180.png?text=Collar+de+Plata",
        name: "Collar de Plata",
        description: "Collar de plata 925 con dije en forma de luna.",
        price: 49.90,
        currency: "$",
        qty: 1
    },
    {
        id: 3,
        image: "https://via.placeholder.com/300x180.png?text=Anillo+de+Oro",
        name: "Anillo de Oro",
        description: "Anillo de oro amarillo 18k clásico y elegante.",
        price: 189.00,
        currency: "$",
        qty: 1
    },
    {
        id: 4,
        image: "https://via.placeholder.com/300x180.png?text=Pendientes+Perla",
        name: "Pendientes con Perla",
        description: "Pendientes delicados de plata con perlas blancas naturales.",
        price: 29.50,
        currency: "$",
        qty: 1
    }
];

export default productos;
