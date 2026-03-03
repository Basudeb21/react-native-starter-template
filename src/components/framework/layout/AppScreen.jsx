// src\components\framework\layout\AppScreen.jsx
import React from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../theme/useTheme';

const AppScreen = ({
    children,
    scroll = false,
    keyboard = false,
    safeArea = true,
    padding = 16,
    backgroundColor,
    statusBarStyle,
}) => {
    const { Colors, themeMode } = useTheme();

    const Wrapper = safeArea ? SafeAreaView : View;
    const Container = scroll ? ScrollView : View;

    const screenBackground = backgroundColor || Colors.BACKGROUND;

    const containerProps = scroll
        ? {
            showsVerticalScrollIndicator: false,
            contentContainerStyle: { flexGrow: 1 },
            keyboardShouldPersistTaps: 'handled',
        }
        : {};

    const content = (
        <Container
            style={[
                styles.container,
                {
                    backgroundColor: screenBackground,
                    padding,
                },
            ]}
            {...containerProps}
        >
            {children}
        </Container>
    );

    return (
        <Wrapper style={[styles.safeArea, { backgroundColor: screenBackground }]}>
            <StatusBar
                translucent={false}
                backgroundColor={screenBackground}
                barStyle={
                    statusBarStyle ??
                    (themeMode === 'dark' ? 'light-content' : 'dark-content')
                }
            />

            {keyboard ? (
                <KeyboardAvoidingView
                    style={styles.flex}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    {content}
                </KeyboardAvoidingView>
            ) : (
                content
            )}
        </Wrapper>
    );
};

export default AppScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    flex: {
        flex: 1,
    },
});