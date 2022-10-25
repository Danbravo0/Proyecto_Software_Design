
const PLATA_FORMATO = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });

export function FormatoPlata(valor: number) {


    return PLATA_FORMATO.format(valor);

}
