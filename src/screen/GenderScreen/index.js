import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ScreenNavigation } from '../../common/const';
import HeaderTitleIcon from '../../components/Header/HeaderTitleIcon';
import LayoutSignup from '../../components/LayoutSignup';
import RadioInputItem from '../../components/RadioInputItem';
import { setGender } from '../../context/actions';
import { useStoreContext } from '../../context/hooks';

const GenderScreen = () => {
  const [state, dispatch] = useStoreContext();
  const handleChecked = (value) => {
    dispatch(setGender(value));
  };

  return (
    <LayoutSignup
      next={ScreenNavigation.BIRTH_DAY}
      optionsHeader={{
        HeaderTitle: () => <HeaderTitleIcon name='transgender' />,
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '700',
          }}
        >
          Gender:
        </Text>
        <View style={{ marginTop: 20 }}>
          <ScrollView style={{ paddingHorizontal: 20 }}>
            <RadioInputItem
              title='Male'
              onPress={() => handleChecked('Male')}
              active={state.gender === 'Male'}
            />
            <RadioInputItem
              title='Female'
              onPress={() => handleChecked('Female')}
              active={state.gender === 'Female'}
            />
          </ScrollView>
        </View>
      </View>
    </LayoutSignup>
  );
};

export default GenderScreen;
