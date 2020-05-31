import React, { Component, useState } from 'react';
import { Image, Animated, Dimensions, StyleSheet, View } from 'react-native';
import Metrics from './Themes/Metrics';
import Colors from './Themes/Colors';
import { Title2, Body } from './Components/Typography';
import logo from './Assets/app-icon.png';
import createGroup from './Assets/team-launch.png';
import app_launch from './Assets/appointment-launch.png';
import relax from './Assets/create-group.png';

import Fonts from './Themes/Fonts';
import Button from './Components/Button';
import CircleButton from './Components/CircleButton';
import styled from 'styled-components/native';

//
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

let type = 'Meditate';
let selectedTime = 'One Minute';
let selectedIntensty = 'Slow';

const xOffset = new Animated.Value(0);
const opacityTransition = (index) => {
    return {
        opacity: xOffset.interpolate({
            inputRange: [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            outputRange: [0, 1, 0],
        }),
    };
};

const translateX = (speed, index) => {
    return {
        transform: [
            {
                translateX: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [
                        SCREEN_WIDTH * speed,
                        0,
                        -SCREEN_WIDTH * speed,
                    ],
                }),
            },
        ],
    };
};

const translateDelayX = (leftSpeed, rightSpeed, index) => {
    return {
        transform: [
            {
                translateX: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [
                        SCREEN_WIDTH * leftSpeed,
                        0,
                        -SCREEN_WIDTH * rightSpeed,
                    ],
                }),
            },
        ],
    };
};

const textLogoAnimation = (index) => {
    return {
        transform: [
            {
                translateX: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                    ],
                    outputRange: [-SCREEN_WIDTH, 0],
                }),
            },
            {
                translateY: xOffset.interpolate({
                    inputRange: [
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [0, 300],
                }),
            },
        ],
    };
};

const logoAnimation = (index) => {
    return {
        transform: [
            {
                translateX: xOffset.interpolate({
                    inputRange: [
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [0, SCREEN_WIDTH],
                }),
            },
            {
                translateY: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [
                        SCREEN_HEIGHT / 3,
                        -SCREEN_HEIGHT + SCREEN_HEIGHT * 0.975,
                        -SCREEN_HEIGHT + SCREEN_HEIGHT * 0.975,
                    ],
                }),
            },
            {
                scale: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH,
                    ],
                    outputRange: [1, 0.35, 0.35],
                }),
            },
        ],
    };
};

const Circle = ({ background, size }) => (
    <View
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: background,
            width: size,
            height: size,
            borderRadius: size / 2,
        }}
    />
);

const CustomedImage = ({
    source,
    visibility,
    width,
    height,
    alignSelf,
    contain,
}) =>
    visibility && (
        <Image
            source={source}
            resizeMode={contain || 'cover'}
            style={{
                alignSelf: alignSelf,
                width: width || '70%',
                height: height || 200,
            }}
        />
    );

const Description = (props) => (
    <View style={{ marginTop: 50 }}>
        <Animated.View style={[translateX(props.speed, props.index)]}>
            <Title2 style={styles.title}>{props.title}</Title2>
        </Animated.View>
        <Animated.View style={[translateX(props.speed - 0.2, props.index)]}>
            <Body style={styles.text}>{props.line1}</Body>
        </Animated.View>
    </View>
);

const ProgressDots = (props) => (
    <Animated.View
        style={[
            {
                flexDirection: 'row',
                alignSelf: 'center',
                position: 'absolute',
                bottom: Metrics.baseMargin * 2,
            },
        ]}>
        <Animated.View
            style={[
                translateDelayX(props.initVal1, props.initVal2, props.index),
            ]}>
            <Circle
                background={
                    props.colorIndex == 1 ? Colors.tintColor : Colors.gray
                }
                size={props.size}
            />
        </Animated.View>
        <View style={{ width: 10 }} />
        <Animated.View
            style={[
                translateDelayX(
                    props.initVal1 + 0.2,
                    props.initVal2 - 0.4,
                    props.index,
                ),
            ]}>
            <Circle
                background={
                    props.colorIndex == 2 ? Colors.tintColor : Colors.gray
                }
                size={props.size}
            />
        </Animated.View>
        <View style={{ width: 10 }} />
        <Animated.View
            style={[
                translateDelayX(
                    props.initVal1 + 0.6,
                    props.initVal2 - 0.8,
                    props.index,
                ),
            ]}>
            <Circle
                background={
                    props.colorIndex == 3 ? Colors.tintColor : Colors.gray
                }
                size={props.size}
            />
        </Animated.View>
        <View style={{ width: 10 }} />
        <Animated.View
            style={[
                translateDelayX(
                    props.initVal1 + 1,
                    props.initVal2 - 1,
                    props.index,
                ),
            ]}>
            <Circle
                background={
                    props.colorIndex == 4 ? Colors.tintColor : Colors.gray
                }
                size={props.size}
            />
        </Animated.View>
    </Animated.View>
);

const Screen0 = (props) => {
    return (
        <View style={styles.scrollPage}>
            <View style={[styles.screen0]}>
                <Animated.Text
                    style={[styles.textLogo, textLogoAnimation(props.index)]}>
                    {props.text}
                </Animated.Text>
                <Animated.Text
                    style={[
                        styles.textInfoLogo,
                        textLogoAnimation(props.index),
                    ]}>
                    {props.textInfo}
                </Animated.Text>
            </View>
        </View>
    );
};

const Screen1 = (props) => {
    return (
        <View style={styles.scrollPage}>
            <Animated.View style={[styles.screen]}>
                <Animated.View style={[logoAnimation(props.index)]}>
                    <CustomedImage
                        source={logo}
                        visibility={true}
                        width={358 / 2.7}
                        height={310 / 2.7}
                        alignSelf={'center'}
                    />
                </Animated.View>

                <Description
                    speed={1.2}
                    index={props.index}
                    title={'Welcome'}
                    line1={
                        'We are introducing a new way to free your soul to the sounds of the Mars'
                    }
                />
                <Animated.View style={[opacityTransition(props.index)]}>
                    <CustomedImage
                        contain={'contain'}
                        source={require('../assets/images/bg.png')}
                        visibility={true}
                        alignSelf={'center'}
                    />
                </Animated.View>
                <ProgressDots
                    colorIndex={1}
                    size={SCREEN_WIDTH * 0.01744}
                    initVal1={1}
                    initVal2={2}
                    index={props.index}
                />
            </Animated.View>
        </View>
    );
};

const Screen2 = (props) => {
    const [picked, setPicked] = useState('Meditate');

    return (
        <View style={styles.scrollPage}>
            <Animated.View style={[styles.screen]}>
                <View style={{ height: 310 / 2.7 }} />
                <Description
                    speed={1.2}
                    index={props.index}
                    title={'Relaxation Type'}
                    line1={'Our aim is to help you. Let us know your goal'}
                />
                <Animated.View
                    style={[styles.text, opacityTransition(props.index)]}>
                    <CircleView>
                        <CircleButton
                            full={picked == 'Meditate'}
                            image={require('../assets/images/meditate.png')}
                            text={'Meditate'}
                            onPress={(text: string) => {
                                type = text;
                                setPicked(text);
                            }}
                        />
                        <CircleButton
                            full={picked == 'Focus'}
                            image={require('../assets/images/focus.png')}
                            text={'Focus'}
                            onPress={(text: string) => {
                                type = text;
                                setPicked(text);
                            }}
                        />
                        <CircleButton
                            full={picked == 'Relax'}
                            image={require('../assets/images/relax.png')}
                            text={'Relax'}
                            onPress={(text: string) => {
                                type = text;
                                setPicked(text);
                            }}
                        />
                    </CircleView>
                </Animated.View>
                <ProgressDots
                    colorIndex={2}
                    size={SCREEN_WIDTH * 0.01744}
                    initVal1={1}
                    initVal2={2}
                    index={props.index}
                />
            </Animated.View>
        </View>
    );
};

const Screen3 = (props) => {
    const [intensity, setIntensity] = useState('Slow');

    return (
        <View style={styles.scrollPage}>
            <Animated.View style={[styles.screen]}>
                <View style={{ height: 310 / 2.7 }} />
                <Description
                    speed={1.2}
                    index={props.index}
                    title={'Intensity'}
                    line1={
                        'Boost or slow down your heart rate? Choose beat intensity'
                    }
                />
                <Animated.View
                    style={[styles.text, opacityTransition(props.index)]}>
                    <CircleView>
                        <CircleButton
                            full={intensity == 'Slow'}
                            image={require('../assets/images/slow.png')}
                            text={'Slow'}
                            onPress={(text: string) => {
                                selectedIntensty = text;
                                setIntensity(text);
                            }}
                        />
                        <CircleButton
                            full={intensity == 'Medium'}
                            image={require('../assets/images/medium.png')}
                            text={'Medium'}
                            onPress={(text: string) => {
                                selectedIntensty = text;
                                setIntensity(text);
                            }}
                        />
                        <CircleButton
                            full={intensity == 'Fast'}
                            image={require('../assets/images/fast.png')}
                            text={'Fast'}
                            onPress={(text: string) => {
                                selectedIntensty = text;
                                setIntensity(text);
                            }}
                        />
                    </CircleView>
                </Animated.View>
                <ProgressDots
                    colorIndex={3}
                    size={SCREEN_WIDTH * 0.01744}
                    initVal1={1}
                    initVal2={2}
                    index={props.index}
                />
            </Animated.View>
        </View>
    );
};

const Screen4 = (props) => {
    const [time, setTime] = useState('One Minute');

    return (
        <View style={styles.scrollPage}>
            <Animated.View style={[styles.screen]}>
                <View style={{ height: 310 / 2.7 }} />
                <Description
                    speed={1.2}
                    index={props.index}
                    title={'Duration'}
                    line1={'How long are you planning to stay with us?'}
                />
                <Animated.View
                    style={[styles.text, opacityTransition(props.index)]}>
                    <CircleView>
                        <CircleButton
                            full={time == 'One Minute'}
                            image={require('../assets/images/onemin.png')}
                            text={'One Minute'}
                            onPress={(text: string) => {
                                selectedTime = text;
                                setTime(text);
                            }}
                        />
                        <CircleButton
                            full={time == 'Five Minutes'}
                            image={require('../assets/images/fivemin.png')}
                            text={'Five Minutes'}
                            onPress={(text: string) => {
                                selectedTime = text;
                                setTime(text);
                            }}
                        />
                        <CircleButton
                            full={time == 'Seven Minutes'}
                            image={require('../assets/images/sevenmin.png')}
                            text={'Seven Minutes'}
                            onPress={(text: string) => {
                                selectedTime = text;
                                setTime(text);
                            }}
                        />
                    </CircleView>
                </Animated.View>

                <Button mt={Metrics.space.xl} onPress={props.onPress}>
                    {' '}
                    Get Started!
                </Button>

                <ProgressDots
                    colorIndex={3}
                    size={SCREEN_WIDTH * 0.01744}
                    initVal1={1}
                    initVal2={2}
                    index={props.index}
                />
            </Animated.View>
        </View>
    );
};

class GetStartedHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolleable: false,
        };
    }

    componentWillMount() {}

    componentDidMount() {
        // Start counting when the page is loaded
        setTimeout(() => {
            // Add your logic for the transition
            this.ScrollViewRef.getNode().scrollTo({
                x: SCREEN_WIDTH * 1,
                animated: true,
            });
            this.setState({ scrolleable: true });
        }, 1000); //4000
    }

    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View>
                <Animated.ScrollView
                    ref={(ScrollView) => (this.ScrollViewRef = ScrollView)}
                    scrollEnabled={this.state.scrolleable}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                        { useNativeDriver: true },
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    style={styles.scrollView}>
                    <Screen0
                        text="HDMarS"
                        textInfo={'Team OutOfBounds 3.0 \nOn Behalf of NASA'}
                        index={0}
                    />
                    <Screen1
                        lottieSource={require('./Assets/Animations/work.json')}
                        index={1}
                    />
                    <Screen2
                        lottieSource={require('./Assets/Animations/chill-sky.json')}
                        index={2}
                    />
                    <Screen3
                        lottieSource={require('./Assets/Animations/notification-state-off.json')}
                        index={3}
                    />
                    <Screen4
                        onPress={() =>
                            this.props.navigation.navigate('Main', {
                                type,
                                intensity: selectedIntensty,
                                time: selectedTime,
                            })
                        }
                        lottieSource={require('./Assets/Animations/notification-state-off.json')}
                        index={4}
                    />
                </Animated.ScrollView>
            </View>
        );
    }
}

const CircleView = styled.View`
    height: ${SCREEN_HEIGHT / 3.5};
    align-items: center;
    /* background-color: red; */
    flex-direction: row;
    margin-left: -10px;
`;

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'row',
        //backgroundColor: Colors.strongRed,
    },
    scrollPage: {
        width: SCREEN_WIDTH,
        marginTop: 15,
        flex: 1,
    },

    screen0: {
        height: SCREEN_HEIGHT - SCREEN_HEIGHT * 0.039,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 25,
        margin: 20,
        //backgroundColor: Colors.strongRed,
    },

    screen: {
        height: SCREEN_HEIGHT - SCREEN_HEIGHT * 0.039,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 25,
        margin: 20,
        position: 'relative',
        //backgroundColor: Colors.lightRed,
    },

    textLogo: {
        fontFamily: Fonts.type.medium,
        color: Colors.tintColor,
        alignItems: 'center',
        fontSize: Fonts.size.title1,
        fontWeight: 'bold',
        marginBottom: SCREEN_HEIGHT - SCREEN_HEIGHT * 0.99,
    },

    textInfoLogo: {
        fontFamily: Fonts.type.light,
        color: Colors.darkGray,
        alignItems: 'center',
        marginBottom: 30,
        textAlign: 'center',
    },

    title: {
        color: Colors.tintColor,
        fontWeight: '600',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 20,
    },

    text: {
        fontFamily: Fonts.type.base,
        color: Colors.darkGray,
        alignSelf: 'center',
        fontSize: SCREEN_WIDTH * 0.04665,
        textAlign: 'center',
        width: '80%',
    },
});
export default GetStartedHandler;
