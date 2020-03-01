import React from 'react';

function PetInfoTable({pet}) {
    return (
        <form id='create-property-table' >
            {pet.name === null || pet.name === undefined || pet.name === ''?
                null
                :
                <div>
                    <h5>Nombre: {pet.name}</h5>
                </div>
            }
             {pet.race === null || pet.race === undefined || pet.race === ''?
                null
                :
                <div>
                    <h5>Raza: {pet.race}</h5>
                </div>
            }
             {pet.age === null || pet.age === undefined || pet.age < 0?
                null
                :
                <div>
                    <h5>Edad: {pet.age} años</h5>
                </div>
            }
            {pet.lovingRate === null || pet.lovingRate === undefined || pet.lovingRate === ''?
                null
                :
                <div>
                    <h5>Puntaje cariñoso: {pet.lovingRate}</h5>
                </div>
            }
            {pet.nameFosterHouse === null || pet.nameFosterHouse === undefined || pet.nameFosterHouse === ''?
                null
                :
                <div>
                    <h5>Fundación: {pet.nameFosterHouse}</h5>
                </div>
            }
            {pet.description === null || pet.description === undefined || pet.description === ''?
                null
                :
                <div>
                    <h5>Descripción: {pet.description}</h5>
                </div>
            }
        </form>

    );
}

export default PetInfoTable;

