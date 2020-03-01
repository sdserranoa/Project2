import React, { useState, useEffect } from 'react';
import url from '../api/url'
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import PetsView from '../components/petView/PetsView';
import { Redirect } from 'react-router-dom';
import View from '../components/layouts/View';
// import { pets } from '../debugData/PetData';
// import { user } from '../debugData/UserData';
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

    const [pets, setPets] = useState([]);
    const [user, setUser] = useState({});

    const [loadingPets, setLoadingPets] = useState(true);


    useEffect(() => {

        async function getPets() {
            const url1 = `${url}/all-pets`;
            fetch(url1)
                .then(res => {
                    return res.json();
                }).then(o => {
                    setPets(o);
                    setLoadingPets(false);
                })
        }

        async function getUser() {
            const url1 = `${url}/users/${userId}`;
            fetch(url1)
                .then(res => {
                    return res.json();
                }).then(o => {
                    setUser(o);
                })
        }
        getUser();
        getPets();
        addUserInfo(pets, user);

    }, [userId]);

    function addUserInfo(pets, userPetInfo) {
        for (var i = 0; i < pets.length; i++) {
            let pet = pets[i];
            pet.state = userPetInfo[pet.id].state;
            pet.userPetId = userPetInfo[pet.id].userPetId;
            pet.addedToCart = userPetInfo[pet.id].addedToCart;
            pets[i] = pet;
        }
    }
    async function getPetsFromUserId(id) {
        const url1 = `${url}/shopping-cart/${id}`;
        fetch(url1)
            .then(res => {
                return res.json();
            }).then(o => {
                return o;
            })
    }

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
                    <h2>Mascotas Para Adoptar</h2>
                </TopInfoContainer>
                <PetsView pets={pets} loading={loadingPets} user={user} />
            </main>

            <Footer />
        </View>
    );
}

export default AllPetsView;
