import React, { useEffect, useState } from "react";
import styles from "./Mytable.module.css";
import PropTypes from "prop-types";

const MyTable = ({ columns, dataSource }) => {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    setTableData(dataSource);
  }, [dataSource]);

  return (
    <>
      <div className={`${styles.tableWrapper} table-responsive`}>
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              {columns &&
                columns.map((column) => (
                  <React.Fragment key={column.key}>
                    <th>{column.header}</th>
                  </React.Fragment>
                ))}
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData.map((row) => (
                <tr key={row.id}>
                  {columns.map((column) => (
                    <td key={column.key} className={styles.cell}>
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

MyTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
    }).isRequired
  ),
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MyTable;
