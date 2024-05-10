import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import FontAwesomeIcons from '@expo/vector-icons/FontAwesome6';
import FatherIcons from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { screenWidth } from '@/constants/common';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [flatListHeight, setFlatListHeight] = useState(800);

    const onPressModal = () => {
        navigation.navigate('add-item');
    }

    const renderItem = () => {
        return (
            <View>
                <Image
                    source={require('@/assets/images/demo-image.png')}
                    style={{ width: screenWidth, height: flatListHeight }}
                />

                <View style={styles.bottomBarContainer}>
                    <View style={styles.mainContainerSub}>
                        <Text style={styles.listBodyPrice}>
                            {
                                'Lorem ipsum dolor sit amet consectetur. Scelerisque nulla tincid...'
                            }
                        </Text>
                        <View style={styles.iconBottom}>
                            <FatherIcons
                                size={14}
                                name={'map-pin'}
                                color={'#FFF'}
                                style={{ marginTop: 10, marginLeft: 5 }}
                            />
                            <Text style={styles.listBodyPrice}>{'Paris'}</Text>
                        </View>
                        <Text style={styles.listBodyHeading}>{'Emily, 24'}</Text>
                    </View>
                    <View>
                        <Image
                            source={require('@/assets/images/icon-tab-1.png')}
                            style={styles.iconBottomRight}
                        />
                        <Image
                            source={require('@/assets/images/icon-message.png')}
                            style={styles.iconBottomRight2}
                        />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={['', '','', '','', '']}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                pagingEnabled={true}
                onLayout={event => {
                    const { height } = event.nativeEvent.layout;
                    setFlatListHeight(height);
                }}
            />

            <LinearGradient
                colors={['rgba(0, 0, 0, 0.72)', 'rgba(0, 0, 0, 0.05)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradientHeader}>
                <View style={styles.shadowTop}>
                    <FontAwesomeIcons
                        size={25}
                        name={'bars-staggered'}
                        color={'#FFF'}
                        style={styles.editIcon}
                        onPress={onPressModal}
                    />
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreen: { flex: 1 },
    mainContainer: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: 50,
    },
    mainContainerSub: { flex: 1, flexDirection: 'column-reverse' },
    listItemButton: {
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadowTop: { flexDirection: 'row-reverse', height: 50, marginRight: 15 },
    iconBottom: { flexDirection: 'row', alignItems: 'center' },
    bottomBarContainer: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 0,
        flexDirection: 'row',
        paddingBottom: 30,
    },
    iconBottomRight: { height: 54, width: 54, marginBottom: 18 },
    iconBottomRight2: { height: 54, width: 54 },
    listBodyHeading: {
        fontSize: 26,
        color: '#FFF',
        fontWeight: '700',
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    listBodyPrice: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '600',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    editIcon: {
        height: 25,
        width: 25,
        marginTop: 8,
    },
    gradientHeader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        paddingTop: 30,
        overflow: 'hidden',
    },
});
