import { createSlice } from '@reduxjs/toolkit';

const initialRegionState = {
  listRegion: [
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

const regionSlice = createSlice({
  name: 'region',
  initialState: initialRegionState,
  reducers: {
    handleSelected(state, { payload }) {
      state.listRegion.forEach((item) => {
        if (item.id !== payload.item.id) return state;
        item.selected = true;
        return state;
      });
    },
  },
});

export const { actions: regionActions } = regionSlice;
export default regionSlice.reducer;
