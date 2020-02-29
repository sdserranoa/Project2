import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import View from '../components/layouts/View';
import MainViewContent from '../components/layouts/MainViewContent';
import CreatePetForm from '../components/forms/CreatePetForm';
import url from '../api/url'

function CreatePetView() {
    const [pet, setPet] = useState({
        name: '',
        race: '',
        age: '',
        lovingRate: '',
        description: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const createPet = async () => {
        console.log(pet);
        setLoading(true);

        // const response = await fetch(url + '/pet', {
        //     ...fetchConfig,
        //     method: 'POST',
        //     body: JSON.stringify({ ...pet }),
        // });

        // const status = response.status;
        // if (status === 500) {
        //     setErrorMessage('Fallo la Base de datos');
            setLoading(false);
        // } else if (status === 200) {
            setRedirect(true);
        // }
    }

    return (
        <View>
            {redirect ? <Redirect to='/all-pets' /> : null}
            <NavigationBar />
                <MainViewContent>
                    <h1>Agregar Una Mascota</h1>
                    <CreatePetForm setPet={setPet} createPet={createPet} loading={loading} />
                    <p className='error-message'>{errorMessage}</p>
                </MainViewContent>
            <Footer />
        </View>
    );
}


export default CreatePetView;