import React, { useState, useEffect } from 'react';

import PetInfoTable from './PetInfoTable';
import PhotoGrid from './PhotoGrid';
import styled from 'styled-components';

const PetCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 20px 30px 20px;
    background-color: white;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 20px var(--shadow-light-2);

`;

const PetCardPhotos = styled.div`
    object-fit: cover;
    align-items: center;
    background-color: var(--primary-light-3);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    box-shadow: 0 0 20px var(--shadow-light-2);
    width: 100%;
    height: 300px;
    justify-self: center;
    padding-top: 5px;
`;


const PetCardContent = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    padding: 10px;
`;



function PetView({pet, userId}) {

    const userPetId = pet.userPetId;
    const state = pet.state;

    console.log(pet);
    return (
      <PetCard>
           <PetCardPhotos>
                <PhotoGrid
                        petId={pet.id}
                />
                </PetCardPhotos>
           <PetCardContent>
                <PetInfoTable
                pet={pet}
                />
          </PetCardContent>
      </PetCard>

       );
}

export default PetView;

