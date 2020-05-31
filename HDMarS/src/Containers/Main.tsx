import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import Metrics from '../Theme/Global/Metrics';
import Colors from '../Theme/Global/Colors';
import ImageTouchable from '../Components/ImageTouchable';
import { topMessage } from '../Components/Global/TopMessage';
import { processUrl } from '../Functions/router';
import SoundPlayer from 'react-native-sound-player';
import { Title1, Title2 } from '../Components/Typography';
import colors from '../Themes/Colors';
import { Fonts } from '../Themes';

const Main = (props: any) => {
    const [images, setImages] = useState([] as any[]);
    const [texts, setTexts] = useState([] as any[]);

    useEffect(() => {
        setImages([
            [
                'https://mars.nasa.gov/system/resources/detail_files/5259_10_Martian_Mosaic-full2.jpg',
                'Martian Mosaic',
                'April 01, 2012',
                'This mosaic was made from images taken at infrared wavelengths in daytime and nighttime by the Thermal Emission Imaging System (THEMIS) on Mars Odyssey orbiter. The largest crater visible (left) is Sharonov Crater and is 100 kilometers (62 miles) wide.',
            ],
            [
                'https://mars.nasa.gov/system/resources/detail_files/5258_9_Canyon_Junction-full2.jpg',
                'Canyon Junction',
                'April 01, 2012',
                'A false-color mosaic focuses on one junction in Noctis Labyrinthus where Mars canyons meet to form a depression 4,000 meters (13,000 feet) deep.',
            ],
            [
                'https://mars.nasa.gov/system/resources/detail_files/5250_4_Small_Floral_Shaped_Volcano-full2.jpg',
                'Small Floral-Shaped Volcano',
                'April 01, 2012',
                'This is a small volcano superimposed on the flanks of a larger one of the Cerberus Tholi. \nThis smaller feature has a single vent opening, aligned along a Cerberus Fossae trough, and it has lava flows radiating away from this vent in all directions, resembling a flower. \nThese flows appear somewhat darker than their surroundings, though this might be due to roughness as much as to the flow’s relative youth. Note that there are some small impact craters superimposed on this feature, indicating that these flows are not entirely young.',
            ],
            [
                'https://mars.nasa.gov/system/resources/detail_files/5248_2_Icy_New_Impact-full2.jpg',
                'Icy New Impact',
                'April 01, 2012',
                'This crater, formed in 2008, exposes shallow, clean ice that is not uncommon in the middle-to-high latitudes on Mars. Sublimation, the process that occurs when a solid changes into a gas without an intermediary liquid stage, creates an ice-free layer on the surface that may be several feet deep, hiding the ice underneath until exposed by an impact.',
            ],
            [
                'https://mars.nasa.gov/system/resources/detail_files/5251_5_Spirit_Rover_Studies_Rock_Outcrop_at_Home_Plate-full2.jpg',
                'Spirit Rover Studies Rock Outcrop at "Home Plate"',
                'April 01, 2012',
                'NASA\'s Mars Exploration Rover Spirit acquired this false-color image on Mars during the rover\'s 746th Martian day, or sol, after using the rock abrasion tool to brush the surfaces of rock targets informally named "Stars" (left) and "Crawfords" (right). Small streaks of dust extend for several centimeters behind the small rock chips and pebbles in the dusty, red soils. Because the rover was looking southwest when this image was taken, the wind streaks indicate that the dominant wind direction was from the southeast. \nStars and Crawfords are on a rock outcrop located on top of "Home Plate." The outcrop is informally named "James "Cool Papa" Bell," after a Negro League Baseball Hall of Famer who played for both the Pittsburgh Crawfords and the Kansas City Stars. To some science team members, the two brushed spots resemble the eyes of a face, with rocks below and between the eyes as a nose and layered rocks at the bottom of the image as a mouth.',
            ],
            [
                'https://mars.nasa.gov/system/resources/detail_files/5261_7_East_Rim_of_Endeavour_Crater-full2.jpg',
                'East Rim of Endeavour Crater',
                'April 01, 2012',
                "NASA's Mars Exploration Rover Opportunity used its panoramic camera to record this eastward horizon view on the 2,407th Martian day, or sol, of the rover's work on Mars (October 31, 2010). The view is presented in false color to make differences in surface materials more visible. A portion of Endeavour Crater's eastern rim, nearly 30 kilometers (19 miles) in the distance, is visible over the Meridiani Planum.",
            ],
        ]);
    }, []);

    const handleOnNext = (image: any) => {
        props.navigation.navigate('LoadingScreen', { image });
    };

    return (
        <SafeAreaView>
            <TitleView>
                <TitleText>Select Image</TitleText>
            </TitleView>
            <MainView>
                {images.map((imageObj) => {
                    return (
                        <ImageTouchable
                            onPress={() => handleOnNext(imageObj)}
                            title={imageObj[1]}
                            date={imageObj[2]}
                            onInfo={() => topMessage('this is info text')}
                            source={{
                                uri: imageObj[0],
                            }}
                        />
                    );
                })}
            </MainView>
        </SafeAreaView>
    );
};

const MainView = styled.ScrollView`
    /* height: ${Metrics.screenHeight}px; */
    /* align-items: center; */
    /* justify-content: center; */
`;

const TitleView = styled.View`
    align-items: center;
    justify-content: center;
`;

const TitleText = styled.Text`
    padding: 10px;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: ${colors.tintColor};
    font-family: ${Fonts.type.medium};
`;

export default Main;
