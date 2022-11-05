const PLATA_FORMATO = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });


export function FormatoPlata(valor: number) {


    return PLATA_FORMATO.format(valor);

}

export function unfCLPtounfUSD(valor: number){

    const usd=(valor/926).toFixed(2)

    return usd
}