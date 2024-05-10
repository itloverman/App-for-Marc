import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IoniconsIcons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddItemScreen() {
    const navigation = useNavigation();

    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [tabacButton, setTabacButton] = useState(1);
    const [alcoolButton, setAlcoolButton] = useState(1);
    const [selectedList, setSelectedList] = useState(-1);

    const data = [
        {
            name: 'Christianisme',
        },
        {
            name: 'Jewish',
        },
        {
            name: 'Muslim',
        },
        {
            name: 'Other',
        },
        {
            name: 'None',
        },
    ];

    const buttonBottom = [
        {
            name: 'Jamais',
        },
        {
            name: 'Parfois',
        },
        {
            name: 'Souvent',
        },
    ];

    const onPressTabc = index => {
        setTabacButton(index);
    };

    const onPressAlcool = index => {
        setAlcoolButton(index);
    };

    const onPressList = index => {
        setSelectedList(index);
    };

    const renderSlider = () => {
        return (
            <View style={styles.boxContainer}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#FFFFFF' }}>
                    Age
                </Text>

                <RangeSlider
                    min={5}
                    max={25}
                    fromValueOnChange={value => setFromValue(value)}
                    toValueOnChange={value => setToValue(value)}
                    initialFromValue={11}
                    fromKnobColor={'#FFFFFF'}
                    toKnobColor={'#FFFFFF'}
                    inRangeBarColor={'#FF9433'}
                    outOfRangeBarColor={'#2B1F23'}
                    rangeLabelsTextColor={'#FFFFFF'}
                />

                <Text style={{ fontSize: 16, fontWeight: '700', color: '#FFFFFF' }}>
                    Hauteur
                </Text>

                <RangeSlider
                    min={5}
                    max={25}
                    fromValueOnChange={value => setFromValue(value)}
                    toValueOnChange={value => setToValue(value)}
                    initialFromValue={11}
                    fromKnobColor={'#FFFFFF'}
                    toKnobColor={'#FFFFFF'}
                    inRangeBarColor={'#FF9433'}
                    outOfRangeBarColor={'#2B1F23'}
                    rangeLabelsTextColor={'#FFFFFF'}
                />
            </View>
        );
    };

    const renderTextBox = () => {
        return (
            <View style={styles.boxContainer}>
                <View style={styles.textInput}>
                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 13, fontWeight: '500', color: '#FF9433' }}>
                            Origine
                        </Text>

                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: '#FFFFFF',
                                marginTop: 4,
                            }}>
                            Scandinave
                        </Text>
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign size={20} name="caretdown" color="#FFFFFF" />
                    </View>
                </View>

                <View style={[styles.textInput, { marginTop: 20 }]}>
                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 13, fontWeight: '500', color: '#FF9433' }}>
                            Religion
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: '#FFFFFF',
                                marginTop: 4,
                            }}>
                            Taoïsme
                        </Text>
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign size={20} name="caretdown" color="#FFFFFF" />
                    </View>
                </View>

                <View style={styles.listItem}>
                    {data?.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={styles.listSub}
                                onPress={() => onPressList(index)}>
                                {(selectedList === index && (
                                    <IoniconsIcons size={25} name={'checkbox'} color="#FFFFFF" />
                                )) || (
                                    <MaterialCommunityIcons
                                        size={25}
                                        name={'checkbox-blank-outline'}
                                        color="#FFFFFF"
                                    />
                                )}
                                <Text style={styles.listText}>{item?.name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    };

    const renderRadioBox = () => {
        return (
            <View>
                <View style={styles.radioBox}>
                    <Ionicons size={20} name="radio-button-off" color="#FFFFFF" />
                    <Text style={styles.radioBoxText}>Licence</Text>
                </View>

                <View style={[styles.radioBox, { marginTop: 10 }]}>
                    <Ionicons size={20} name="radio-button-off" color="#FFFFFF" />
                    <Text style={styles.radioBoxText}>Licence</Text>
                </View>
            </View>
        );
    };

    const renderBottomButton = () => {
        return (
            <>
                <View style={styles.buttonBottom2}>
                    <Text style={styles.buttonHeader}>Tabac</Text>

                    <View style={styles.buttonMain}>
                        {buttonBottom?.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => onPressTabc(index)}
                                    style={[
                                        styles.buttonSub,
                                        {
                                            backgroundColor:
                                                index === tabacButton
                                                    ? '#FF998C'
                                                    : 'rgba(34, 32, 33, 1)',
                                        },
                                    ]}>
                                    <Text style={styles.buttonText}>{item.name}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                <View style={styles.buttonBottom}>
                    <Text style={styles.buttonHeader}>Alcool</Text>

                    <View style={styles.buttonMain}>
                        {buttonBottom?.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => onPressAlcool(index)}
                                    style={[
                                        styles.buttonSub,
                                        {
                                            backgroundColor:
                                                alcoolButton === index
                                                    ? '#FF998C'
                                                    : 'rgba(34, 32, 33, 1)',
                                        },
                                    ]}>
                                    <Text style={styles.buttonText}>{item.name}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </>
        );
    };
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#3B3941' }}>
            <LinearGradient
                colors={['#3B3941', '#374056', '#5B2F34']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}>
                <View style={styles.headerContainer}>
                    <Text style={styles.manageHeaderButton}>Cancel</Text>

                    <Text style={styles.manageHeaderButton}>Filter</Text>

                    <Text style={styles.manageHeaderButton}>Done</Text>
                </View>

                {renderSlider()}
                {renderTextBox()}
                {renderRadioBox()}
                {renderBottomButton()}
            </LinearGradient>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    manageHeaderButton: { fontSize: 16, fontWeight: '700', color: '#FF9433' },
    buttonBottom: { marginTop: 32, marginHorizontal: 16, marginBottom: 80 },
    buttonBottom2: { marginTop: 32, marginHorizontal: 16 },
    boxContainer: {
        padding: 16,
        paddingTop: 0,
        borderRadius: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginHorizontal: 20,
        marginBottom: 34,
    },
    textInput: {
        width: '100%',
        height: 68,
        backgroundColor: 'rgba(31, 18, 22, 1)',
        borderRadius: 8,
        paddingHorizontal: 15,
        borderColor: '#FF9433',
        borderWidth: 1,
        flexDirection: 'row',
    },
    listItem: {
        paddingHorizontal: 15,
        marginTop: 5,
        backgroundColor: '#141414',
        borderRadius: 8,
        paddingVertical: 20,
    },
    listSub: {
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
    },
    listText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
        paddingLeft: 14,
    },
    radioBox: {
        paddingVertical: 12,
        backgroundColor: 'rgba(48, 48, 48, 0.67)',
        borderRadius: 15,
        paddingHorizontal: 15,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    radioBoxText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
        marginLeft: 16,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
        paddingVertical: 10,
        width: 112,
        textAlign: 'center',
    },
    buttonMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 14,
    },
    buttonSub: {
        borderRadius: 8,
    },
    buttonHeader: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
