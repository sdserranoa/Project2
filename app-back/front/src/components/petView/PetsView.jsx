import React, { useState, useEffect } from 'react';
// import url from '../components/api/url'
import PetView from './PetView';
import ContentLoader from '../ContentLoader';
import styled from 'styled-components';

const PetViewsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function PetsView({pets, loading, user}) {
    return (
        <PetViewsGrid>
            <ContentLoader loading={loading}>
                {pets.map(function (pet,index) {
                        return <PetView key={index} id={pet.id} pet={pet} userId={user.id} />;
                })}
            </ContentLoader>
        </PetViewsGrid>
    );
}

export default PetsView;
