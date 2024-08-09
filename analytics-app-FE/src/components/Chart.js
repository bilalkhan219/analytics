import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Chart() {
  return (
    <BarChart
      series={[
        { data: [60, 40, 55, 60], label: 'All', id: 'allId', stack: 'stack3'},
        { data: [35, 44, 24, 34], label: 'Home', id: 'homeId', stack: 'stack1'},
        { data: [20, 25, 30, 25], label: 'Contact', id: 'contactId', stack: 'stack2'},
      ]}
      height={290}
      xAxis={[{ data: ["Jan", "Feb", "Mar", "Apr"], scaleType: "band" }]}
      yAxis={[{label: "Page views"}]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
