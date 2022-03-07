import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { ScreenNavigation } from '../../common/const';
import HeaderTitleIcon from '../../components/Header/HeaderTitleIcon';
import LayoutSignup from '../../components/LayoutSignup';
import {
  setDayOfBirth,
  setMonthOfBirth,
  setYearOfBirth,
} from '../../context/actions';
import { useStoreContext } from '../../context/hooks';
import classes from './styles';

const BirthDayScreen = () => {
  const [state, dispatch] = useStoreContext();
  const handleKeyPressDay = (value) => {
    if (value > 31) return;
    dispatch(setDayOfBirth(value));
  };
  const handleKeyPressMonth = (value) => {
    if (value > 12) return;
    dispatch(setMonthOfBirth(value));
  };
  const handleKeyPressYear = (value) => {
    if (value > new Date().getFullYear()) return;
    dispatch(setYearOfBirth(value));
  };

  return (
    <LayoutSignup
      next={ScreenNavigation.ORIGIN}
      optionsHeader={{
        HeaderTitle: () => <HeaderTitleIcon name='birthday-cake' />,
      }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={{ marginTop: 20 }}>
          <Text style={classes.title}>Birth day:</Text>
          <View style={classes.content} keyboardShouldPersistTaps='handled'>
            <TextInput
              keyboardType='numeric'
              placeholder='DD'
              onChangeText={handleKeyPressDay}
              value={state.birthDay.day}
              style={classes.input}
            />
            <Text style={{ color: '#fff' }}>/</Text>
            <TextInput
              keyboardType='numeric'
              placeholder='MM'
              style={classes.input}
              value={state.birthDay.month}
              onChangeText={handleKeyPressMonth}
            />
            <Text style={{ color: '#fff' }}>/</Text>
            <TextInput
              value={state.birthDay.year}
              keyboardType='numeric'
              placeholder='YY'
              style={classes.input}
              onChangeText={handleKeyPressYear}
            />
          </View>
        </View>
      </ScrollView>
    </LayoutSignup>
  );
};

export default BirthDayScreen;
