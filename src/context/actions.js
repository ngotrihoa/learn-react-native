import { TYPE_ACTION } from './const';

export const handleSelectedCountry = (payload) => {
  return {
    type: TYPE_ACTION.SELECTED_COUNTRY,
    payload,
  };
};
export const handleUnselectedCountry = (payload) => {
  return {
    type: TYPE_ACTION.UNSELECTED_COUNTRY,
    payload,
  };
};

export const setGender = (payload) => {
  return {
    type: TYPE_ACTION.SET_GENDER,
    payload,
  };
};

export const setDayOfBirth = (payload) => {
  return {
    type: TYPE_ACTION.SET_DAY_OF_BIRTH,
    payload,
  };
};
export const setMonthOfBirth = (payload) => {
  return {
    type: TYPE_ACTION.SET_MONTH_OF_BIRTH,
    payload,
  };
};
export const setYearOfBirth = (payload) => {
  return {
    type: TYPE_ACTION.SET_YEAR_OF_BIRTH,
    payload,
  };
};
