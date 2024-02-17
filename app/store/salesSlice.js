import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sales: [
    {
      id: 1,
      title: "Bristy Sell",
      changes: (
        <>
          Decrease price by 10%
          <br />
          Set compare at price to price
        </>
      ),
      applyTo: "Whole store",
      schedule: "From Sep 22 at 5:22 PM",
      status: "Active",
      created: "September 22, 2023 at 5:25 PM",
      started: "September 22, 2023 at 5:25 PM",
    },
    {
      id: 2,
      title: "Winter Sell",
      changes: (
        <>
          Increase price by 10%
          <br />
          Set compare at price to price
        </>
      ),
      applyTo: "Whole store",
      schedule: "From Sep 22 at 5:22 PM",
      status: "Scheduled",
      created: "September 22, 2023 at 5:25 PM",
      started: "September 22, 2023 at 5:25 PM",
    },
    {
      id: 3,
      title: "Summer Sell",
      changes: (
        <>
          Decrease price by 5%
          <br />
          Set compare at price to price
        </>
      ),
      applyTo: "Whole store",
      schedule: "From Sep 22 at 5:22 PM",
      status: "Completed",
      created: "September 22, 2023 at 5:25 PM",
      started: "September 22, 2023 at 5:25 PM",
    },
    {
      id: 4,
      title: "Kochu Sell",
      changes: (
        <>
          Increase price by 20%
          <br />
          Set compare at price to price
        </>
      ),
      applyTo: "Whole store",
      schedule: "From Sep 22 at 5:22 PM",
      status: "Completed",
      created: "September 22, 2023 at 5:25 PM",
      started: "September 22, 2023 at 5:25 PM",
    },
  ],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addSale(state, action) {
      state.sales.push(action.payload);
    },
  },
});

export const { addsales } = salesSlice.actions;

export default salesSlice.reducer;
