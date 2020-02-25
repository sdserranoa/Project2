import React, { useState, useEffect } from 'react';
// import url from '../components/api/url'
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import PetView from '../components/petView/PetView';
import { Redirect } from 'react-router-dom';
import ContentLoader from '../components/ContentLoader';
import View from '../components/layouts/View';
import { pets } from '../debugData/PetData';
import { user } from '../debugData/UserData';
import styled from 'styled-components';

const PetViewsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function PetsView(props) {
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
                <h1>Hola {user.name},</h1>
                <PetViewsGrid>
                    <ContentLoader loading={loadingPets}>
                        {pets.map(function (pet,index) {
                                return <PetView key={index} id={pet.id} pet={pet} userId={user.id} />;
                        })}
                    </ContentLoader>
                </PetViewsGrid>
            </main>
            <Footer />
        </View>
    );
}

export default PetsView;
