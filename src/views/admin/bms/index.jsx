import Card from "../../../components/card";
import ComplexTable from "./components/ComplexTable";
import RadialChart from "./components/radialChart";
import {
  columnsDataComplex,
  columnsDataComplex1,
  columnsDataComplex2,
  columnsDataComplex3,
} from "./variables/columnsData";
import tableDataComplex from "./variables/tableDataComplex.json";
import tableDataComplex1 from "./variables/tableDataComplex1.json";

const Bms = () => {
  return (
    <div>
      <div className="my-5 flex w-full flex-col flex-wrap md:flex-row">
        {/* 電池pannel */}
        <Card extra="flex items-center rounded-[20px] pt-5 pl-5 lg:pt-7 lg:pl-7">
          <div className="grid grid-cols-2 gap-y-7">
            <div className="h-50 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                電池櫃狀態
              </p>
              <h4 className="text-xl font-black text-green-500">正常</h4>
            </div>

            <div className="h-50 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                上下電狀態
              </p>
              <h4 className="text-xl font-black text-green-500">
                全部電池櫃上電
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
        {/* BMS */}
        <Card extra="flex items-center rounded-[20px] py-5 pl-5 pr-9 lg:py-7 lg:pl-7 mt-5 md:mt-0 md:ml-5">
          <div className="grid w-full grid-cols-3 gap-7 md:grid-cols-1">
            <div className="h-50 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                BMS 狀態
              </p>
              <h4 className="text-xl font-black text-green-500">正常 </h4>
            </div>

            <div className="h-50 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                BMS 心跳包
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                124
              </h4>
            </div>
          </div>
        </Card>
      </div>
      {/* 電芯狀態 */}
      <div className="grid w-full grid-cols-3 gap-5">
        <Card extra="flex !flex-row flex-wrap justify-between rounded-[20px] p-5 lg:p-7">
          <div className="h-50 flex w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">
              電芯電壓
            </p>
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              2800 mV
            </h4>
          </div>
          <p className="self-end font-dm text-xs font-medium text-brand-200">
            保護電壓 3800mV
          </p>
        </Card>
        <Card extra="flex !flex-row flex-wrap justify-between rounded-[20px] p-5 lg:p-7">
          <div className="h-50 flex w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">
              電芯溫度
            </p>
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              20 ℃
            </h4>
          </div>
          <p className="self-end font-dm text-xs font-medium text-brand-200">
            保護溫度 60 ℃
          </p>
        </Card>
        <Card extra="flex !flex-row flex-wrap justify-between rounded-[20px] p-5 lg:p-7">
          <div className="h-50 flex w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">電流</p>
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              149 A{" "}
            </h4>
          </div>
          <p className="self-end font-dm text-xs font-medium text-brand-200">
            過充保護 1680 A{" "}
          </p>
        </Card>
      </div>
      {/* 電池櫃 */}
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        {/* <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}

        <ComplexTable
          header={"BMS系統"}
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <ComplexTable
          header={"電池櫃一號"}
          columnsData={columnsDataComplex1}
          tableData={tableDataComplex1}
        />
        <ComplexTable
          header={"電池櫃二號"}
          columnsData={columnsDataComplex2}
          tableData={tableDataComplex1}
        />
        <ComplexTable
          header={"電池櫃三號"}
          columnsData={columnsDataComplex3}
          tableData={tableDataComplex1}
        />
      </div>
    </div>
  );
};

export default Bms;
