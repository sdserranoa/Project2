import React from 'react';

function FosterHouseInfoTable({fosterHouse}) {
    return (
        <form id='create-property-table' >
            {fosterHouse.name === null || fosterHouse.name === undefined || fosterHouse.name === ''?
                null
                :
                <div>
                    <h5>Nombre: {fosterHouse.name}</h5>
                </div>
            }
            
             {fosterHouse.address === null || fosterHouse.address === undefined || fosterHouse.address === ''?
                null
                :
                <div>
                    <h5>Dirección: {fosterHouse.address}</h5>
                </div>
            }
             {fosterHouse.capacity === null || fosterHouse.capacity === undefined || fosterHouse.age < 0?
                null
                :
                <div>
                    <h5>Capacidad: {fosterHouse.capacity} mascotas</h5>
                </div>
            }
            {fosterHouse.description === null || fosterHouse.description === undefined || fosterHouse.description === ''?
                null
                :
                <div>
                    <h5>Descripción: {fosterHouse.description}</h5>
                </div>
            }
        </form>

    );
}

export default FosterHouseInfoTable;