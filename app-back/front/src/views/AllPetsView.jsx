import React, { useState, useEffect } from 'react';
// import url from '../components/api/url'
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import PetsView from '../components/petView/PetsView';
import { Redirect } from 'react-router-dom';
import View from '../components/layouts/View';
import { pets } from '../debugData/PetData';
import { user } from '../debugData/UserData';
import styled from 'styled-components';

const TopInfoContainer = styled.div`
    align-items: center;
    height: fit-content;
    text-align: center;
    width: 100%;
    margin: 25px 0 100px;
`;
function AllPetsView(props) {
    const [userId] = useState(props.match.params.id);

    //0-->NO   1-->inscripcion  2-->referidos
    const [redirect, setRedirect] = useState(0);

    // const [pets, setPets] = useState(pets);
    // const [user, setUser] = useState({});

    const [loadingPets, setLoadingPets] = useState(true);

    const putUserPetRelationStatusById = async (id, userPetState) => {
        // const response = await fetch(`${url}/resto-ruta`, {
        //         method: 'PUT',
        // });

        // const status = response.status;
        // if (status !== 200) {

        //     //Tratar de que se envien cuando retome conexion.
        // }
    }

    useEffect(() => {

        async function getPets() {
        }

        async function getUser() {

        }
        console.log(pets);
        console.log(user);

        getUser();
        getPets();
        setLoadingPets(false);

    }, [userId]);

    return (
        <View>

            {redirect ===0 ? null
                :
                redirect ===1? <Redirect to='/'/>
                :
                null
             }
            <NavigationBar/>

            <main>
                <TopInfoContainer>
                    <h2>Mascotas Para Adoptar</h2>
                </TopInfoContainer>
                <PetsView pets={pets} loading={loadingPets} user={user}/>

            </main>

            <Footer />
        </View>
    );
}

export default AllPetsView;
