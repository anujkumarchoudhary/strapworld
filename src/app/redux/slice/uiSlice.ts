import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isDark: boolean;
}

const initialState: UIState = {
  isDark: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setHeaderDark: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { setHeaderDark } = uiSlice.actions;
export default uiSlice.reducer;