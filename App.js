import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomHeader } from "./src/components/CustomHeader";
import { CustomDrawerContent } from "./src/navigation/CustomDrawerContent";
import {
    HomeScreen, HomeScreenDetail, SettingsScreen, SettingsScreenDetail,
    AssetManagmentScreen, BookmarksScreen, SeminarsScreen, PublicationsScreen, ServicesScreen
} from "./src/screens";
import { NotificationsScreen } from "./src/screens";
import { RegisterScreen, LoginScreen } from "./src/screens";
import { IMAGE } from "./src/constants/image";

const navOptionHandler = () => ({
    headerShown: false
})


const StackAssetManagment = createStackNavigator()

function AssetManagmentStack() {
    return(
        <StackAssetManagment.Navigator initialRouterName="AssetManagment">
            <StackAssetManagment.Screen name="AssetManagment" component={AssetManagmentScreen} options={navOptionHandler} />
        </StackAssetManagment.Navigator>
    )
}

const StackSeminar = createStackNavigator()

function SeminarStack() {
    return(
        <StackSeminar.Navigator initialRouterName="Seminars">
            <StackSeminar.Screen name="Seminars" component={SeminarsScreen} options={navOptionHandler} />
        </StackSeminar.Navigator>
    )
}

const StackHome = createStackNavigator()

function HomeStack() {
    return (
        <StackHome.Navigator initialRouterName="Insight">
            <StackHome.Screen name="Insight" component={HomeScreen} options={navOptionHandler} />
            <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
        </StackHome.Navigator>
    )
}

const StackPublications = createStackNavigator()

function PublicationsStack(){
    return(
        <StackPublications.Navigator initialRouterName="Publications">
            <StackPublications.Screen name="Publications0" component={PublicationsScreen} options={navOptionHandler} />
        </StackPublications.Navigator>
    )
}

const StackServices = createStackNavigator()

function ServicesStack(){
    return(
        <StackServices.Navigator initialRouterName="Services">
            <StackServices.Screen name="Services" component={ServicesScreen} options={navOptionHandler} />
        </StackServices.Navigator>
    )
}

/*const StackSetting = createStackNavigator()

function SettingStack() {
    return (
        <StackSetting.Navigator initialRouterName="Setting">
            <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
            <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
        </StackSetting.Navigator>
    )
}*/

const StackBookmarks = createStackNavigator()

function BookmarksStack() {
    return(
        <StackBookmarks.Navigator initialRouterName="Boookmarks">
            <StackBookmarks.Screen name="Bookmarks" component={BookmarksScreen} options={navOptionHandler} />
        </StackBookmarks.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Insight') {
                        iconName = focused
                            ? IMAGE.ICON_HOME
                            : IMAGE.ICON_HOME_BLACK
                    } else if (route.name === 'AssetManagment') {
                        iconName = focused ?
                            IMAGE.ICON_ASSETMANAGMENT
                            : IMAGE.ICON_ASSETMANAGMENT_BLACK;
                    } else if (route.name === 'Boookmarks') {
                        iconName = focused ?
                            IMAGE.ICON_BOOKMARKS
                            : IMAGE.ICON_BOOKMARKS_BLACK;
                    }else if (route.name === 'Seminars') {
                        iconName = focused ?
                            IMAGE.ICON_SEMINARS
                            : IMAGE.ICON_SEMINARS_BLACK;
                    }else if (route.name === 'Services') {
                        iconName = focused ?
                            IMAGE.ICON_PUBLICATIONS
                            : IMAGE.ICON_PUBLICATIONS_BLACK;
                    }

                    // You can return any component that you like here!
                    return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode="contain" />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',

            }}

        >
            <Tab.Screen name="AssetManagment" component={AssetManagmentStack} />
            <Tab.Screen name="Seminars" component={SeminarStack} />
            <Tab.Screen name="Insight" component={HomeStack} />
            <Tab.Screen name="Services" component={ServicesStack} />
            <Tab.Screen name="Boookmarks" component={BookmarksStack} />
{/*            <Tab.Screen name="Settings" component={SettingStack} />*/}
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
    return (
        <Drawer.Navigator initialRouteName="MenuTab"
            drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
            <Drawer.Screen name="MenuTab" component={TabNavigator} />
            <Drawer.Screen name="Insight" component={HomeScreen} />
            <Drawer.Screen name="Asset Managment" component={AssetManagmentScreen} />
            <Drawer.Screen name="Seminars" component={SeminarsScreen} />
            <Drawer.Screen name="Publications" component={PublicationsScreen} />
            {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
        </Drawer.Navigator>
    )

}

const StackApp = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackApp.Navigator initialRouterName="Login">
                <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
                <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
                <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
            </StackApp.Navigator>
        </NavigationContainer>
    );
}