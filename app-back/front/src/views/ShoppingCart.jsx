import React from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import View from '../components/layouts/View';
import styled from 'styled-components';

const MainViewContent = styled.main`
    flex: 1 0 auto;
    text-align: center;
    padding-top: 20px;
`;

class ShoppingCart extends React.Component {
    render() {
        return (
            <View>
                <NavigationBar />
                    <MainViewContent>
                        <h1>ShoppingCart</h1>
                    </MainViewContent>
                <Footer />
            </View>
        );
    }
}

export default ShoppingCart;