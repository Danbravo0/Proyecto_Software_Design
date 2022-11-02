import { createContext, useContext, ReactNode, useState } from "react";
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.ts";



type CarritoComprasContextType = {
    abrirCarrito : () => void
    cerrarCarrito : () => void
    getItemQuantity: (id: number) => number
    increaseCarritoQuantity: (id: number) => void
    decreaseCarritoQuantity: (id: number) => void
    removeFromCarrito: (id: number) => void
    
    cantidadCarrito : number
    itemsCarrito : ItemCarrito[]
}
const CarritoComprasContext = createContext({} as CarritoComprasContextType)

type ItemCarrito = {
    id: number
    cantidad: number
}


export function UsarCarritoCompras () {
    
    
    return useContext(CarritoComprasContext)
}

type CarritoComprasProviderProps = {
    children: ReactNode
}

export function CarritoComprasProvider({children}:
     CarritoComprasProviderProps) {
    
    const [isOpen,setIsOpen] = useState(false)
    const [itemsCarrito,setItemsCarrito] = useLocalStorage<ItemCarrito[]>("shopping-cart",[])

    const cantidadCarrito = itemsCarrito.reduce(
        (cantidad, item) => item.cantidad + cantidad,
        0
    )

    const abrirCarrito = () => setIsOpen(true)
    const cerrarCarrito = () => setIsOpen(true)

    function getItemQuantity(id: number) {
        return itemsCarrito.find(item => item.id === id)?.cantidad || 0 //{/*? es un if, si encuentra algo devuelve cantidad si no 0*/}
    }
    
    function increaseCarritoQuantity(id: number) {
        setItemsCarrito(currItems => {
            if (currItems.find(item => item.id===id) == null){
                return [...currItems, {id, cantidad: 1}]
            } //Si no tenemos este item en ningun lado, entonces le añadimos uno
            else{
                return currItems.map(item => {
                    if (item.id === id){
                        return {...item, cantidad: item.cantidad + 1} //Si ya tenemos el item, entonces le sumamos uno a la cantidad
                    }
                    else{
                        return item
                    }
                })
            }

        })
    }
    
    function decreaseCarritoQuantity(id: number) {
        setItemsCarrito(currItems => {
            if (currItems.find(item => item.id===id)?.cantidad === 1){
                return currItems.filter(item => item.id !== id)
            } //Nueva lista de todos nuestros items quitandole el que le restamos
            else{
                return currItems.map(item => {
                    if (item.id === id){
                        return {...item, cantidad: item.cantidad - 1} //Si ya tenemos el item, entonces le restamos uno a la cantidad
                    }
                    else{
                        return item
                    }
                })
            }

        })
    }
    
    function removeFromCarrito(id: number) {
        setItemsCarrito(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    
    
    return (

        <CarritoComprasContext.Provider value = {{getItemQuantity,
        increaseCarritoQuantity,
        decreaseCarritoQuantity,
        removeFromCarrito,
        abrirCarrito,
        cerrarCarrito,
        itemsCarrito,
        cantidadCarrito
        }}>
            {children}
        </CarritoComprasContext.Provider>
    )

} 