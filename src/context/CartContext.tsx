"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { StaticImageData } from "next/image";

export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    imageSrc?: StaticImageData | string;
    label?: string;
}

interface CartContextType {
    items: CartItem[];
    isDrawerOpen: boolean;
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    toggleDrawer: () => void;
    openDrawer: () => void;
    closeDrawer: () => void;
    cartTotal: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const addToCart = (newItem: Omit<CartItem, "quantity">) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === newItem.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...newItem, quantity: 1 }];
        });
        setIsDrawerOpen(true);
    };

    const removeFromCart = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    const cartTotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const itemCount = items.reduce(
        (count, item) => count + item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                items,
                isDrawerOpen,
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleDrawer,
                openDrawer,
                closeDrawer,
                cartTotal,
                itemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
