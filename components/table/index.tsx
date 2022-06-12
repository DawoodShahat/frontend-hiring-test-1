/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { useRouter } from "next/router";
import { useTable, useGroupBy } from "react-table";

import { getCallsColumns } from "./data";
import { Call } from "../../types";
import Loader from "../common/Loader";

type Props = {
  data: Call[];
  loading?: boolean;
};

export default function CallsTable({ loading = false, data }: Props) {
  const router = useRouter();
  const columns = useMemo(() => getCallsColumns(), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useGroupBy);

  const onRowClick = (row) => {
    router.push(`/call/${row.original.id}`);
  };

  return (
    <div className="table-wrapper mt-3">
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="table-header-row"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th className="table-header-cell" {...column.getHeaderProps()}>
                  <div className="table-header-cell-content">
                    {column.canGroupBy ? (
                      // If the column can be grouped, let's add a toggle
                      <span {...column.getGroupByToggleProps()}>
                        {column.isGrouped ? "🛑 " : "👊 "}
                      </span>
                    ) : null}
                    {column.render("Header")}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {loading ? (
          <Loader />
        ) : (
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  onClick={() => onRowClick(row)}
                  className="table-row"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td className="table-body-cell" {...cell.getCellProps()}>
                        {cell.isGrouped ? (
                          <span>
                            {cell.render("Cell")} {row.subRows.length}
                          </span>
                        ) : (
                          cell.render("Cell")
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}
