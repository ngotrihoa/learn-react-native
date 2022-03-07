import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import Footer from '../Footer';
import Header from '../Header';
import classes from './styles';

const LayoutSignup = ({ children, next, optionsHeader }) => {
  return (
    <View style={classes.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#93338b', '#ff5a7c']}>
        <Header options={optionsHeader} />
        <View style={classes.body}>{children}</View>
        <Footer next={next} />
      </LinearGradient>
    </View>
  );
};

export default LayoutSignup;
