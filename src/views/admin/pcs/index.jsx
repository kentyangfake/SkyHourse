import Card from "../../../components/card";
const Pcs = () => {
  return (
    <div>
      <div className="my-5 flex w-full flex-col flex-wrap md:flex-row">
        {/* BMS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Card extra="flex items-center rounded-[20px] py-5 pl-5 pr-9 lg:py-7 lg:pl-7">
            <div className="grid w-full grid-cols-2 gap-7">
              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  PCS 狀態
                </p>
                <h4 className="text-xl font-black text-green-500">ON</h4>
              </div>

              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  PCS 警告
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  無
                </h4>
              </div>

              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  PCS 心跳包
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  21008
                </h4>
              </div>

              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  PCS 錯誤
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  正常
                </h4>
              </div>
            </div>
          </Card>
          <Card extra="flex rounded-[20px] p-5 lg:p-7">
            <div className="grid w-full grid-cols-2 gap-7 md:grid-cols-1">
              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Grid Active Power
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  3131 kW
                </h4>
              </div>

              <div className="h-50 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Grid Reactive Power
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  30135 kW
                </h4>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* 三個GRID */}
      <div className="mt-5 grid w-full grid-cols-3 gap-5">
        <Card extra="flex flex-grow rounded-[20px] p-5 lg:p-7">
          <div className="h-50 flex w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">
              Grid Voltage
            </p>
            <hr className="my-2 border dark:border-gray-600"></hr>
            <div className="grid grid-cols-1">
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  RS
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  17618 V
                </h4>
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  ST
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  51300 V
                </h4>
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  TR
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  60623 V
                </h4>
              </div>
            </div>
          </div>
        </Card>
        <Card extra="flex rounded-[20px] p-5 lg:p-7">
          <div className="h-50 flex w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">
              Total Current
            </p>
            <hr className="my-2 border dark:border-gray-600"></hr>
            <div className="grid grid-cols-1">
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  R
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  -26796 A
                </h4>
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  S
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  -31413 A
                </h4>
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  T
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  -32380 A
                </h4>
              </div>
            </div>
          </div>
        </Card>
        <Card extra="flex rounded-[20px] p-5 lg:p-7">
          <div className="h-50 flex w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">
              DC Voltage Bus{" "}
            </p>
            <hr className="my-2 border dark:border-gray-600"></hr>
            <div className="grid grid-cols-1">
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  1
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  64098 V
                </h4>
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  2
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  229 V
                </h4>
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  3
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  50879 V
                </h4>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Pcs;
