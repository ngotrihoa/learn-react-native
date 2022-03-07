import { TYPE_ACTION } from './const';

const initialState = {
  gender: '',
  birthDay: {
    day: '',
    month: '',
    year: '',
  },
  countries: [
    {
      id: 1,
      icon: 'flag-checkered',
      name: 'Viet Nam',
      selected: false,
    },
    {
      id: 2,
      icon: 'flag-checkered',
      name: 'Lao',
      selected: false,
    },
    {
      id: 3,
      icon: 'flag-checkered',
      name: 'Cambodia',
      selected: false,
    },
    {
      id: 4,
      icon: 'flag-checkered',
      name: 'Chinese',
      selected: false,
    },
    {
      id: 5,
      icon: 'flag-checkered',
      name: 'Japan',
      selected: false,
    },
    {
      id: 6,
      icon: 'flag-checkered',
      name: 'Korea',
      selected: false,
    },
    {
      id: 7,
      icon: 'flag-checkered',
      name: 'Philippines',
      selected: false,
    },
    {
      id: 8,
      icon: 'flag-checkered',
      name: 'American',
      selected: false,
    },
    {
      id: 9,
      icon: 'flag-checkered',
      name: 'France',
      selected: false,
    },
    {
      id: 10,
      icon: 'flag-checkered',
      name: 'Rusia',
      selected: false,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_ACTION.SELECTED_COUNTRY:
      state.countries.map((item) => {
        if (item.id !== action.payload) return item;
        return (item.selected = true);
      });
      return { ...state };

    case TYPE_ACTION.UNSELECTED_COUNTRY:
      state.countries.map((item) => {
        if (item.id !== action.payload) return item;
        return (item.selected = false);
      });
      return { ...state };

    case TYPE_ACTION.SET_GENDER:
      return { ...state, gender: action.payload };

    case TYPE_ACTION.SET_DAY_OF_BIRTH:
      state.birthDay.day = action.payload;
      return { ...state };

    case TYPE_ACTION.SET_MONTH_OF_BIRTH:
      state.birthDay.month = action.payload;
      return { ...state };

    case TYPE_ACTION.SET_YEAR_OF_BIRTH:
      state.birthDay.year = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export { initialState };
export default reducer;
