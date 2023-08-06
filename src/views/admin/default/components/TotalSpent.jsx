import Card from "components/card";
import LineChart from "components/charts/LineChart";
import { MdOutlineCalendarToday } from "react-icons/md";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";

const TotalSpent = () => {
  return (
    <Card extra="!p-[20px] mt-5 h-[450px] text-center">
      <div className="flex flex-col md:!flex-row md:justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">2023-8-6</span>
        </button>
        <div className="flex gap-3 md:gap-5">
          <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
            <span className="text-sm font-medium text-gray-600">15 min</span>
          </button>
          <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
            <span className="text-sm font-medium text-gray-600">30 min</span>
          </button>
          <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
            <span className="text-sm font-medium text-gray-600">1 hr</span>
          </button>
          <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
            <span className="text-sm font-medium text-gray-600">3 hr</span>
          </button>
          <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
            <span className="text-sm font-medium text-gray-600">6 hr</span>
          </button>
          <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
            <span className="text-sm font-medium text-gray-600">9 hr</span>
          </button>
          <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
            <span className="text-sm font-medium text-gray-600">12 hr</span>
          </button>
        </div>
      </div>

      <div className="flex h-full w-full sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex h-full w-full flex-col">
          <div className="h-full w-full">
            <LineChart
              options={lineChartOptionsTotalSpent}
              series={lineChartDataTotalSpent}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TotalSpent;
