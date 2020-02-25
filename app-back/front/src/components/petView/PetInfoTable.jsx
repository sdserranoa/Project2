import React from 'react';

function PetInfoTable({pet}) {
    return (
        <form id='create-property-table' >
            {pet.name === null || pet.name === undefined || pet.name === ''?
                null
                :
                <div>
                    <div id='room-image'></div>
                    <h5>Nombre {pet.name}</h5>
                </div>
            }
        </form>

    );
}

export default PetInfoTable;

