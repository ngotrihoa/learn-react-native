import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

const HeaderTitleIcon = ({ name }) => {
  return (
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'white',
      }}
    >
      <FontAwesome5 name={name} size={24} color='white' />
    </View>
  );
};

export default HeaderTitleIcon;
