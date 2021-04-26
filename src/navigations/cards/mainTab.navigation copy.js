<Navigator
        initialRouteName="Following"
        activeColor={colors.purple}
        inactiveColor={colors.white}
        barStyle={{ backgroundColor: colors.primary }}
        >
            <Screen
                name="Following"
                component={Following}
                options={{
                tabBarIcon: ({ size, focused }) => {
                    return (
                    <Ionicons 
                        name="md-heart"
                        size={22}
                        color={focused ? colors.purple : colors.white}
                    />
                    );
                },
                }}
            />
            <Screen
                name="Discover"
                component={Discover}
                options={{
                tabBarIcon: ({ size, focused }) => {
                    return (
                    <MaterialCommunityIcons
                        name="compass-outline"
                        size={22}
                        color={focused ? colors.purple : colors.white}
                    />
                    );
                },
                }}
            />
            <Screen
                name="Browse"
                component={Browse}
                options={{
                tabBarIcon: ({ size, focused }) => {
                    return (
                        <Ionicons
                            name="md-browsers"
                            size={22}
                            color={focused ? colors.purple : colors.white}
                        />
                    );
                },
                }}
            />
        </Navigator>