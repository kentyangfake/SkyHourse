import CheckTable from "./components/CheckTable";

import ComplexTable from "./components/ComplexTable";
import DevelopmentTable from "./components/DevelopmentTable";
import {
  columnsDataCheck,
  columnsDataComplex,
  columnsDataComplex1,
  columnsDataComplex2,
  columnsDataComplex3,
  columnsDataDevelopment,
} from "./variables/columnsData";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import tableDataComplex1 from "./variables/tableDataComplex1.json";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";

const Pcs = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div>

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

export default Pcs;
