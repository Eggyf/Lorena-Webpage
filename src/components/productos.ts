export interface Producto {
    image: string;
    name: string;
    description: string;
    price: string;
    currency?: string;
}

const productos: Producto[] = [
    {
        image: "https://via.placeholder.com/300x180.png?text=Pulsera+de+Cuero",
        name: "Pulsera de Cuero",
        description: "Elegante pulsera hecha a mano con auténtico cuero marrón.",
        price: "24.99",
        currency: "$"
    },
    {
        image: "https://via.placeholder.com/300x180.png?text=Collar+de+Plata",
        name: "Collar de Plata",
        description: "Collar de plata 925 con dije en forma de luna.",
        price: "49.90",
        currency: "$"
    },
    {
        image: "https://via.placeholder.com/300x180.png?text=Anillo+de+Oro",
        name: "Anillo de Oro",
        description: "Anillo de oro amarillo 18k clásico y elegante.",
        price: "189.00",
        currency: "$"
    },
    {
        image: "https://via.placeholder.com/300x180.png?text=Pendientes+Perla",
        name: "Pendientes con Perla",
        description: "Pendientes delicados de plata con perlas blancas naturales.",
        price: "29.50",
        currency: "$"
    }
];

export default productos;