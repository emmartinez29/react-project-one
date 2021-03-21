
import * as React from 'react';
import { createContext, useEffect, useState } from "react";
import { getFirestore } from '../firebase';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [load, setLoad] = React.useState("CARGANDO . . .");
    const [products, setProducts] = React.useState([]);
    const [buyers, setBuyers] = React.useState([]);
    const [cart, setCart] = useState([])
    const [cart2, setCart2] = useState([])
    const [prueba, setPrueba] = useState([])
    const [total, setTotal] = useState(0)
    const [render, setRender] = useState(false)
    const [arrayCart, setArrayCart] = useState([])
    const [fireName, setFireName] = React.useState("");
    const [firePhone, setFirePhone] = React.useState("");
    const [fireMail, setFireMail] = React.useState("");
    const [fireDireccion, setFireDireccion] = React.useState("");
    const [fireCP, setFireCP] = React.useState("");
    const [fireLocalidad, setFireLocalidad] = React.useState("");
    const [fireEnvio, setFireEnvio] = React.useState(false);
    const [cartIcon, setCartIcon] = React.useState(false);
    const [dolar, getDolar] = React.useState(150)
    React.useEffect(() => {
        if(localStorage.length!==0){
            setCartIcon(true)
        }
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales').then(response => response.json()).then(commits => getDolar(parseFloat(commits[1].casa.venta))); 
        
        const bd = getFirestore();// conexion a la bd
        const itemCollection = bd.collection('producto');// guardamos la referencia
        // tomando los datos
        itemCollection.get().then((value) => {
            // console.log(value.docs.keys)
            let temp = value.docs.map(element => {
                // return {...element.data(), id:element.id}
                return {"producto": {...element.data(), id:element.id}}
            })
                
            // value.docs.map(element => {console.log(element.data())})
            // value.docs.map(element => {console.log({...element.data(), id:element.id})})
            setProducts(temp)
        })

        return () => {
            // window.location.reload(false)
            // console.log("global unmon")
     
        }
    },[]);     
    const globalTest3 = () => {
       
        setCart([])
       
    }

    const renderFunction = () =>{
        if(render === false){
            setRender(true)
        }else{
            setRender(false)
        }
    }
    const globalTest4 = () => {
       
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            cart.push(key)
        }

    }
    
    
    const globalTest = () => {
        setArrayCart([])
        let total2 = 0
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            // console.log(key[0])
            // total2 = total2 + ((key[2])*(key[3]))
            arrayCart.push(key); 

        }
     
        // setTotal(total2)
        // console.log(total2)
        // document.title = `${total}`
        // console.log(cart)
        // console.log(carrito)

    }
    const globalTest2 = () => {
        if(localStorage.length===0){
        setCart([])}
        // setCart([""])
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            // alert(i)
            // alert(key)
            // setCarritoS([...carritoS, (JSON.parse(localStorage.getItem(localStorage.key(i))))])
            // alert(key)
            // setCart([...cart, [key]])
            // alert(key)
            // setCart([...cart, [key]])
            cart.push(key)
        }
    }
    async function firstAsync() {
        let promise = new Promise((res, rej) => {
            // console.log("test")
            // res("Now it's done!")
            setTimeout(() => res("Now it's done!"), 3000)
        });
    
        // wait until the promise returns us a value
        let result = await promise; 
      
        // "Now it's done!"
        alert(result); 
        }   


    // console.log("soy el global")

    
    return <GlobalContext.Provider value={{dolar, getDolar,cartIcon, setCartIcon,fireEnvio, setFireEnvio,fireLocalidad, setFireLocalidad,fireCP, setFireCP,fireDireccion, setFireDireccion,fireMail, setFireMail,firePhone, setFirePhone,fireName, setFireName,buyers, setBuyers,render, setRender,renderFunction,cart,setCart,prueba, setPrueba, globalTest, products, setProducts,load, setLoad,globalTest2,cart2, setCart2,firstAsync,globalTest3,globalTest4,total, setTotal,arrayCart,setArrayCart}}>

        {children}
    </GlobalContext.Provider>
}