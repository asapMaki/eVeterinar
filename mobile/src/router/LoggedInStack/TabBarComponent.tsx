import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

let TabBar = ({state, descriptors, navigation}) => (
  <View style={{flexDirection: 'row'}}>
    {state.routes.map((route, index) => {
      const {options} = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityStates={isFocused ? ['selected'] : []}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{flex: 1, backgroundColor: '#f8f8f8', alignItems: 'center', paddingVertical: 12}}>
          <MaterialIcon size={24} color={isFocused ? '#6D9773' : '#939393'} name={label.toLowerCase()} />
        </TouchableOpacity>
      );
    })}
  </View>
);

export default TabBar;
