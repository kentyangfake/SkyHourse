import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import TotalSpent from "views/admin/default/components/TotalSpent";
import Card from "../../../components/card";
import RadialChart from "./components/radialChart";

import Widget from "components/widget/Widget";

const Dashboard = () => {
  return (
    <div>
      <div className="my-5 flex w-full flex-col flex-wrap md:flex-row">
        {/* 主pannel */}
        <Card extra="flex items-center rounded-[20px] pt-5 pl-5 lg:pt-7 lg:pl-7">
          <div className="grid grid-cols-2 gap-y-7">
            <div className="h-50 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                電池狀態
              </p>
              <h4 className="text-xl font-black text-green-500">正常</h4>
            </div>

            <div className="h-50 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                電池溫度
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                20 ℃
              </h4>
            </div>

            <div className="flex flex-col">
              <p className="font-dm text-sm font-medium text-gray-600">
                總電池電量 SOC
              </p>
              <RadialChart value={[67]} />
            </div>

            <div className="flex flex-col">
              <p className="font-dm text-sm font-medium text-gray-600">
                電池 SOH
              </p>
              <RadialChart value={[92]} />
            </div>
          </div>
        </Card>
        {/* ESS */}
        <Card extra="flex items-center rounded-[20px] py-5 pl-5 pr-9 lg:py-7 lg:pl-7 mt-5 md:mt-0 md:ml-5">
          <div className="grid w-full grid-cols-3 gap-7 md:grid-cols-1">
            <div className="h-50 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                ESS 運轉狀態
              </p>
              <h4 className="text-xl font-black text-green-500">正常 </h4>
            </div>

            <div className="h-50 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                控制器狀態
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                執行停止程序
              </h4>
            </div>

            <div className="h-50 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                執行功能
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                待命
              </h4>
            </div>
          </div>
        </Card>
      </div>
      {/* Card widget */}
      <div className="mt-12 text-base font-bold text-gray-700">
        電網即時運作曲線圖
      </div>
      <div className="mt-3 grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"場域負載功率"}
          subtitle={"5129 kW"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"台電頻率"}
          subtitle={"59.91 Hz"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"充放電功率"}
          subtitle={"0 kW"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"sReg 投標值"}
          subtitle={"1000 kW"}
        />
      </div>

      {/* Charts */}
      <TotalSpent />
    </div>
  );
};

export default Dashboard;
