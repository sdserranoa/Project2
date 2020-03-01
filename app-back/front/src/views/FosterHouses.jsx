import React, { useState, useEffect } from 'react';
import url from '../api/url'
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import FosterHousesView from '../components/fosterHouseView/FosterHousesView';
import { Redirect } from 'react-router-dom';
import View from '../components/layouts/View';
import { fosterHouses } from '../debugData/FosterHouseData';
import { user } from '../debugData/UserData';
import styled from 'styled-components';



const TopInfoContainer = styled.div`
    align-items: center;
    height: fit-content;
    text-align: center;
    width: 100%;
    margin: 25px 0 100px;
`;
function AllFosterHousesView(props) {

    const [userId] = useState(props.match.params.id);

    //0-->NO   1-->inscripcion  2-->referidos
    const [redirect, setRedirect] = useState(0);

    const [fosterHouses, setFosterHouses] = useState([]);
    const [user, setUser] = useState({});


    const [loadingFosterHouses, setLoadingFosterHouses] = useState(true);

    const putUserFosterHouseRelationStatusById = async (id, userPetState) => {
        // const response = await fetch(`${url}/resto-ruta`, {
        //         method: 'PUT',
        // });

        // const status = response.status;
        // if (status !== 200) {

        //     //Tratar de que se envien cuando retome conexion.
        // }
    }

    useEffect(() => {

        async function getFosterHouses() {
            const url1 = `${url}/foster-houses`;
            fetch(url1)
              .then(res => {
                return res.json();
              }).then(o => {
                    setFosterHouses(o);
                    setLoadingFosterHouses(false);
              })
        }

        async function getUser() {

        }
        //console.log(fosterHouses);
        //console.log(user);

        getUser();
        getFosterHouses();
        setLoadingFosterHouses(false);

    }, [userId]);

    return (
        <View>

            {redirect === 0 ? null
                :
                redirect === 1 ? <Redirect to='/' />
                    :
                    null
            }
            <NavigationBar />

            <main>
                <TopInfoContainer>
                    <h2>Refugios asociados</h2>
                </TopInfoContainer>
                <FosterHousesView fosterHouses={fosterHouses} loading={loadingFosterHouses} user={user} />

            </main>

            <Footer />
        </View>

    );
}

export default AllFosterHousesView;