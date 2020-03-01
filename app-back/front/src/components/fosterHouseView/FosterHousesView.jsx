import React from 'react';
//import { useState, useEffect } from 'react';
// import url from '../components/api/url'
import FosterHouseView from './FosterHouseView';
import ContentLoader from '../ContentLoader';
import styled from 'styled-components';

const FosterHouseViewsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function FosterHousesView({fosterHouses, loading, user}) {
    return (
        <FosterHouseViewsGrid>
            <ContentLoader loading={loading}>
                {fosterHouses.map(function (fosterHouse,index) {
                        return <FosterHouseView key={index} id={fosterHouse.id} fosterHouse={fosterHouse} userId={user.id} />;
                })}
            </ContentLoader>
        </FosterHouseViewsGrid>
    );
}

export default FosterHousesView;
