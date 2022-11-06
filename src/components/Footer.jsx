import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
  return (
    
    <CDBFooter className="mt-5 shadow" style={{backgroundColor:"#a88f85", color: "black" }}>
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
          <p className="h5 mb-4" style={{ fontWeight: '600' }}> 
          Nuestras Redes sociales
          </p>
            <p className="my-3" style={{ width: '250px' }}>
              Sigue nuestras redes sociales y no te pierdas de ningun evento o promocion!
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn href="https://www.facebook.com/losbuenosmuchachos.cl" style={{ textDecoration: 'none' }} flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn href="https://www.google.com/maps/place/Los+Buenos+Muchachos+Cumming/@-33.4325877,-70.6735148,17z/data=!3m1!4b1!4m5!3m4!1s0x9662c5b4aa6aa7b9:0xb4621d3facdd0c7a!8m2!3d-33.4325926!4d-70.669045" style={{ textDecoration: 'none' }} flat color="dark" className="mx-3">
                <CDBIcon fab icon="google" />
              </CDBBtn>
              <CDBBtn href="https://www.instagram.com/losbuenosmuchachosresto/" style={{ textDecoration: 'none' }} flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Los Buenos Muchachos
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/"  >Inicio</CDBFooterLink>
              <CDBFooterLink href="/about">Acerca de nosotros</CDBFooterLink>
              <CDBFooterLink href="/terms">Terminos y condiciones</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Información
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/eventos">Eventos</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Comida
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/tienda">A pedido</CDBFooterLink>
              <CDBFooterLink href="/">Reserva tu mesa</CDBFooterLink>
              
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Los buenos muchachos, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};