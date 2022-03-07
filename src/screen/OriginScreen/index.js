import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ScreenNavigation } from '../../common/const';
import LayoutSignup from '../../components/LayoutSignup';
import {
  handleSelectedCountry,
  handleUnselectedCountry,
} from '../../context/actions';
import { useStoreContext } from '../../context/hooks';
import { getSelectedCountries } from '../../context/selector';
import classes from './styles';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import HeaderTitleIcon from '../../components/Header/HeaderTitleIcon';

const OriginScreen = () => {
  const [state, dispatch] = useStoreContext();
  const selectedCountries = getSelectedCountries(state.countries);

  const handleSelect = (id, selected) => {
    if (selected) dispatch(handleUnselectedCountry(id));
    else dispatch(handleSelectedCountry(id));
  };
  return (
    <LayoutSignup
      next={ScreenNavigation.SIGNUP}
      optionsHeader={{
        HeaderTitle: () => <HeaderTitleIcon name='location-arrow' />,
      }}
    >
      <View style={classes.container}>
        <Text style={classes.title}>Origin:</Text>
        <View
          style={[
            selectedCountries.length > 0 && classes.listSelected,
            classes.list,
          ]}
        >
          {selectedCountries.length > 0 &&
            selectedCountries.map((item, index) => (
              <TouchableOpacity
                key={item.name + index}
                style={[classes.listItem, classes.listItemSelected]}
                onPress={() => handleSelect(item.id, item.selected)}
              >
                <FontAwesome name={item.icon} size={24} color='blue' />
                <Text style={classes.text}>{item.name}</Text>
                <EvilIcons
                  style={{ marginLeft: 10 }}
                  name='close'
                  size={18}
                  color='white'
                />
              </TouchableOpacity>
            ))}
        </View>
        <ScrollView style={classes.list}>
          {state.countries.map((item, index) => (
            <TouchableOpacity
              key={item.name + index}
              style={[classes.listItem, item.selected && classes.itemSelected]}
              onPress={() => handleSelect(item.id, item.selected)}
            >
              <FontAwesome name={item.icon} size={24} color='blue' />
              <Text style={classes.text}>{item.name}</Text>
              {item.selected && (
                <View style={{ marginLeft: 'auto' }}>
                  <AntDesign name='checkcircle' size={24} color='white' />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LayoutSignup>
  );
};

export default OriginScreen;
