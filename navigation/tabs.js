import React from 'react';
import {
    Image,
} from "react-native";
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import {Home} from '../screens';
import {COLORS,icons} from "../static";
const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <Image
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}

                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}

                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export  default  Tabs;
