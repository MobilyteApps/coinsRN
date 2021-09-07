import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, TouchableOpacityBase, TextInput, SafeAreaView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../actions/actions.js'

class Timer extends React.Component {
    constructor() {
        super()
    }

    loginSuccess = () => {
        const { alertText, applyAlert, LoginSuccess, response, email, password, setEmail, setPassword } = this.props
        const data = {
            email: email,
            password: password
        }
         LoginSuccess(data)
        console.log(JSON.stringify(data))
        this.props.navigation.navigate('Home')
    }

    render() {
        const { alertText, applyAlert, LoginSuccess, response, email, password, setEmail, setPassword } = this.props
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <TextInput
                        keyboardType='email-address'
                        selectionColor='grey'
                        placeholder="Email"
                        style={styles.textField}
                        onChangeText={(text) => setEmail(text)}>
                    </TextInput>
                    <TextInput
                        keyboardType='default'
                        placeholder='Password'
                        selectionColor='grey'
                        style={[styles.textField, { marginTop: 10 }]}
                        onChangeText={(text) => setPassword(text)}>
                    </TextInput>
                    <TouchableOpacity onPress={() => this.loginSuccess()} style={styles.submit}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 15, marginTop: 13 }}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    const { alertText, applyAlert, LoginSuccess, response, email, password, setEmail, setPassword } = state
    return {
        alertText, applyAlert, LoginSuccess, response, email, password, setEmail, setPassword
    };
}

function mapDispatchToProps(dispatch) {
    return {
        applyAlert: bindActionCreators(actionCreators.applyAlert, dispatch),
        LoginSuccess: bindActionCreators(actionCreators.LoginSuccess, dispatch),
        setEmail: bindActionCreators(actionCreators.setEmail, dispatch),
        setPassword: bindActionCreators(actionCreators.setPassword, dispatch)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textField: {
        width: '85%',
        height: 45,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black'
    },
    submit: {
        width: '85%',
        height: 45,
        backgroundColor: 'black',
        borderRadius: 30,
        marginTop: 10
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)