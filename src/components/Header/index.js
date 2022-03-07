import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import classes from './styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ options: { HeaderTitle, HeaderRight = () => null } }) => {
  const navigation = useNavigation();
  return (
    <View classes={classes.container}>
      <View style={classes.header}>
        <Ionicons
          style={classes.goBack}
          name='chevron-back-outline'
          size={24}
          color='white'
          onPress={() => navigation.goBack()}
        />
        <View style={classes.title}>{HeaderTitle ? <HeaderTitle /> : ''}</View>
        <Text style={classes.headerRight}>
          <HeaderRight />
        </Text>
      </View>
    </View>
  );
};

export default Header;
