import { createSlice } from "@reduxjs/toolkit";
const SearchSlice = createSlice({
  name: "searchTerm",
  initialState: {
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
    }
  },
});

export const { setSearchTerm } =
SearchSlice.actions;
export default SearchSlice.reducer;
