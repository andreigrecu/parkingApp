import React from 'react';
import { Button} from 'react-native';

const Login = ({navigation} : {navigation: any}) => {

    const handleCreateAccount2 = () => {
        // Handle create account button press
        navigation.navigate('Home')
        console.log('Create Account button pressed!');
    };
    return (
        <Button
            title="Go to Welcome Page"
            onPress={handleCreateAccount2}
        />
    );
};

export default Login;