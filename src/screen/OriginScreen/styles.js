import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  list: {
    marginTop: 20,
  },
  listSelected: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomColor: '#ffffff50',
    borderBottomWidth: 2,
  },
  listItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ffffff40',
    borderRadius: 20,
    marginBottom: 10,
  },
  itemSelected: {
    backgroundColor: '#ffffff50',
    borderColor: 'white',
  },
  listItemSelected: {
    backgroundColor: '#ffffff20',
    borderColor: 'transparent',
    marginLeft: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
