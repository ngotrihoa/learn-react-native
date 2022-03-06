import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state) => state.region;

const listRegionSelector = createSelector(
  selectSelf,
  (state) => state.listRegion
);

export { listRegionSelector };
