import React from 'react';

export function About() {
    return (
        <div className = "container">
            <h1 style={{textAlign: 'center',fontWeight: 'bold',}}> Los Buenos Muchachos</h1>
            <div className="mx-auto" style={{width: "60%", marginTop:"25px"}}>
                <p>Desde 1939 creando historia y recuerdos, donde todo comenzó como una 
                simple picada y se transformó en lo que es hoy en día <strong>“Los Buenos Muchachos”</strong> 
                un lugar donde podrás comer y pasarlo bien.</p>
                <p>
                Honorando nuestra comida típica chilena y destacando con nuestras famosas parrilladas, 
                show y música folclórica. Tuvimos la necesidad de adaptarnos y seguir con nuestra trayectoria, 
                nos reinventamos con la más moderna tecnología creando platos pre-cocidos y sellados al vacío, 
                para lograr llevar ese tananhelado sabor casero a sus casas. Además ahora también te los llevamos 
                listos para disfrutar.
                </p>
            </div>
        </div>

    )
}