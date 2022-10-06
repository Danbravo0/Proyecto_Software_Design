import {React, useState } from 'react'
import ReactDOM from 'react-dom';
import { Form } from 'react-formio';
//Use state permite cambiar una variable

export const  Formioreservation = () => {


    return (
        <div className = "form-box">
          <Form src="https://zzzeqquaxnnhddq.form.io/reservas" onSubmit={console.log} style = "" />
        </div>

      )
}