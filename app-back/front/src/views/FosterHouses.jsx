import React from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import View from '../components/layouts/View';
import MainViewContent from '../components/layouts/MainViewContent';


class FosterHouses extends React.Component {
    render() {
        return (
            <View>
                <NavigationBar />
                    <MainViewContent>
                        <h1>Refugios</h1>
                    </MainViewContent>
                <Footer />
            </View>
        );
    }
}

export default FosterHouses;