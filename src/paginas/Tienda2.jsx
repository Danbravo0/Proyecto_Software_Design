import { Col, Row } from "react-bootstrap"
import { useState } from "react";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
// import { Item } from "../components/Item"
// import storeItems from "../data/items.json"

// var llamada = async() => {
//     const api_call = await fetch(`https://zzzeqquaxnnhddq.form.io/items/submission`);
//     return api_call.json();
//     }

export const Tienda = () => {
    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('https://zzzeqquaxnnhddq.form.io/items/submission'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response,"response")
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson,"myjson");
          setData(myJson)
        });
    }


    useEffect(()=>{
      getData()
      
    },[])

    
    return (
      <div className="App">
       {
         data && data.length>0 && data.map((item)=><p>{item.about}</p>)
       }
      </div>
    );
  }
