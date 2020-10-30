import * as React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../../redux/themeActions';
import { lightTheme, darkTheme } from '../../constants/Themes';

export const ConfigScreen = ({navigation}) => {

    const theme = useSelector(state => state.themeReducer.theme);
    const dispatch = useDispatch();

    return(
        <ThemeProvider theme={theme}>
            <StatusBar barStyle={theme.status_bar_style} />
            <Container>

                <TextContainer>
                
                    <Text>Welcome to DesingIntoCode</Text>
                
                </TextContainer>

                {theme.mode === "light" ? (
                    <Button onPress={() => dispatch(switchTheme(darkTheme))}>
                        <ButtonText>Change to Dark Theme</ButtonText>
                    </Button>
                ) : (
                    <Button onPress={() => dispatch(switchTheme(lightTheme))}>
                        <ButtonText>Change to Light Theme</ButtonText>
                    </Button>
                )}
                
                <Button onPress={() => navigation.navigate('Home')}>
                    <ButtonText>Return to Home</ButtonText>
                </Button>
            
            </Container>
        </ThemeProvider>
    );
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.primary_background_color};
`;

const TextContainer = styled.View`
    border: 1px solid ${(props) => props.theme.primary_text_color};
    padding: 16px;
    border-radius: 6px;
`;

const Text = styled.Text`
    color: ${(props) => props.theme.primary_text_color};
    font-size: 24px;
    font-weight: 600;
`;

const Button = styled.TouchableOpacity`
    margin: 32px 0;
    background-color: ${(props) => props.theme.primary_button_color};
    padding: 16px 32px;
    border-radius: 6px;
`;

const ButtonText = styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: ${(props) => props.theme.primary_button_text_color};
`;