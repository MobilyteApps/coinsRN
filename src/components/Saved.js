import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, TouchableOpacityBase, TextInput, SafeAreaView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../actions/actions.js'

class Saved extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { alertText, applyAlert, LoginSuccess, response, email, password, setEmail, setPassword } = this.props
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text>{response.email}</Text>
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
        width:'100%',
        height:'80%',
        marginTop:50,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    innerView:{
      
        backgroundColor:'#000'
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Saved)