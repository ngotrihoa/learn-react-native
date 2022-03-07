import React from 'react';
import { Text, View } from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LayoutSignup from '../../components/LayoutSignup';

const Signup = () => {
  return (
    <LayoutSignup
      optionsHeader={{
        HeaderTitle: () => (
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: 20,
            }}
          >
            Sign up
          </Text>
        ),
        HeaderRight: () => <Text>Sign in?</Text>,
      }}
    ></LayoutSignup>
  );
};

export default Signup;
