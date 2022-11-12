import { 
    View, 
    Text,  
    Platform,
    Keyboard,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
} from "react-native";
import IconLock from 'react-native-vector-icons/FontAwesome';
import IconPers from 'react-native-vector-icons/MaterialIcons';
import IconEye from 'react-native-vector-icons/MaterialCommunityIcons';

export const Login = ({ navigation }) => {
    // const permission = () => {
    //     if(placeholder.value > 2) {
    //         () => {navigation.navigate('MainPage')}
    //     }
    // }

    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                 <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                >
                    <View>
                        <Text style={styles.welcome}>Welcome Back !</Text>
                        <Text style={styles.enterDetails}>Enter your profile details</Text>
                        <View style={styles.loginContainer}>
                            <IconPers name={'person'} size={22} style={styles.iconPerson}/>
                            {/* ↓↓↓ ცალკე reusable კომპონენტად აღარ შევქმენი რადგან მხოლოდ 2 ინფუთი იყო საჭირო ↓↓↓ */}
                            <TextInput style={styles.username}  
                                placeholder = { "Username" } 
                                placeholderTextColor= "#8F9093"
                            />
                            <IconLock name={'lock'} size={20} style={styles.iconLock}/>
                            <TouchableOpacity style={styles.iconEye}>
                                <IconEye name={'eye'} size={20} color={'#8F9093'} />
                            </TouchableOpacity>
                            <TextInput style={styles.password}  
                                placeholder = { "Password" }
                                secureTextEntry={true}
                                placeholderTextColor= "#8F9093"
                            />
                            <TouchableOpacity style={styles.forgotPassword}>
                                <Text style={{color: '#65C296' }}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.signInButton} onPress={() => {navigation.navigate('MainPage')}}>
                                <Text style={styles.signInButtonText}>Sign in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.createAcc}>
                                <Text>Don't have account? Create now →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: 40
    },
    welcome: {
        marginTop: 185,
        marginLeft: 24,
        fontSize: 48,
        fontWeight: 'bold',
        width: 215,
        color: '#111315',
        lineHeight: 72,
    },
    enterDetails: {
        marginTop: 8,
        marginLeft: 24,
        color: '#8F9093',
    },
    loginContainer: {
        marginHorizontal: 24,
        marginTop: 139,
    },
    username: {
        backgroundColor: '#F3F3F3',
        height: 56,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E6E6E7',
        borderRadius: 6,
        paddingLeft: 55,
    },
    password: {
        backgroundColor: '#F3F3F3',
        height: 56,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E6E6E7',
        borderRadius: 6,
        paddingLeft: 55,
    },
    forgotPassword: {
        marginTop: 16,
        maxWidth: 116,
        color: '#65C296'
    },
    signInButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#65C296',
        color: '#FFF',
        borderRadius: 48,
        marginTop: 32,
        height: 72,
    },
    signInButtonText: {
        color: '#FFF',
        fontSize: 16
    },
    createAcc: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24,
        marginHorizontal: 58,
    },
    iconPerson: {
        color:'#8F9093',
        position: 'absolute',
        top: 15,
        left: 18,
        zIndex: 1,
    },
    iconLock: {
        color:'#8F9093',
        position: 'absolute',
        top: 90,
        left: 24,
        zIndex: 1,
    },
    iconEye: {
        position: 'absolute',
        top: 90,
        right: 20,
        zIndex: 1,
    }

})