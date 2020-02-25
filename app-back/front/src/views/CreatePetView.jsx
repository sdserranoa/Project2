import React from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import View from '../components/layouts/View';
import MainViewContent from '../components/layouts/MainViewContent';
import styled from 'styled-components';


class CreatePetView extends React.Component {
    render() {
        return (
            <View>
                <NavigationBar />
                    <MainViewContent>
                        <h1>PetSociety</h1>
                    </MainViewContent>
                <Footer />
            </View>
        );
    }
}

export default CreatePetView;