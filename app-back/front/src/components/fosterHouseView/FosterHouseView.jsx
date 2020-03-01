import React, { useState, useEffect } from 'react';

import FosterHouseInfoTable from './FosterHouseInfoTable';
import PhotoGrid from './PhotoGrid';
import styled from 'styled-components';
import x_selected from '../../assets/x_selected.svg';
import x from '../../assets/x.svg';
import heart_selected from '../../assets/heart_selected.svg';
import heart from '../../assets/heart.svg';


const FosterHouseCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 20px var(--shadow-light-2);
    margin: 0px 20px 30px 20px;
    width: calc(33% - 40px);
    max-width: 700px;
    min-width: 220px;
    padding: 0 0 20px;

    @media only screen and (max-width: 1095px) {
        width: calc(50% - 40px);
    }

    @media only screen and (max-width: 725px) {
        width: 100%;
    }
`;

const FosterHouseCardPhotos = styled.div`
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


const FosterHouseCardContent = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    padding: 10px 20px;
`;

const ButtonsContainer = styled.div`
    padding: 20px 0 10px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    height: 50px;
    width: 100%;
`
const Button = styled.div`
    border:none;
    background-color: transparent;
    margin: 0px;
    height: 38px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    img{
        height:25px;
        margin: 0 auto;
    }
    :active {
        img{
            height:27px;
            margin: 0 auto;
        }
    }
    :hover {
        img{
            height:27px;
            margin: 0 auto;
        }
    }
    h6{
        margin: 0 auto 5px;
    }
`


function FosterHouseView({fosterHouse, userId}) {

    const userFosterHouseId = fosterHouse.userFosterHouseId;
    const [userFosterHouseState, setUserFosterHouseState] = useState(fosterHouse.state);

    const like = ()=>{
        setUserFosterHouseState(userFosterHouseState !== 'liked'?'liked':'');
    }
    const dislike = ()=>{
        setUserFosterHouseState(userFosterHouseState !== 'disliked'?'disliked':'');
    }
    return (
        <FosterHouseCard>
            <FosterHouseCardPhotos>
                    <PhotoGrid
                            fosterHouseId={fosterHouse.id}
                    />
                </FosterHouseCardPhotos>
                <ButtonsContainer>
                    {userFosterHouseState === 'disliked'?
                        <Button onClick={dislike}>
                            <img src={x_selected} alt='disliked'/>
                            <h6>Podría ser mejor</h6>
                        </Button>
                        :
                        <Button onClick={dislike}>
                            <img src={x} alt='dislike'/>
                            <h6>Podría ser mejor</h6>
                        </Button>
                    }
                    {userFosterHouseState === 'liked'?
                        <Button onClick={like}>
                            <img src={heart_selected} alt='liked'/>
                            <h6>Me Gusta</h6>
                        </Button>
                        :
                        <Button onClick={like}>
                            <img src={heart} alt='like'/>
                            <h6>Me Gusta</h6>
                        </Button>
                    }
                </ButtonsContainer>
            <FosterHouseCardContent>
                    <FosterHouseInfoTable
                    fosterHouse={fosterHouse}
                    />
            </FosterHouseCardContent>
        </FosterHouseCard>

       );
}

export default FosterHouseView;

