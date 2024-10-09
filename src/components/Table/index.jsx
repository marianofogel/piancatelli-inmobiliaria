import React, { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table as BTable } from "react-bootstrap";

export default function TableComponent({ columns, data, paginado }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="p-2 block max-w-full">
      <BTable striped bordered hover responsive>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{
                    padding: "0px",
                    backgroundColor: "#343a40",
                    color: "#fff",
                    border: "3px solid #fff",
                    textAlign: "center",
                  }}
                  >
                  {header.isPlaceholder ? null : (
                    <>
                    <div
                      {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none p-2"
                        : "p-2",
                      onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                      )}
                      <span
                      style={{
                        color: header.column.getIsSorted() ? "#fff" : "#000",
                      }}
                      >
                      {{
                        asc: " ↑",
                        desc: " ↓",
                      }[header.column.getIsSorted()] ?? " ↑↓"}
                      </span>
                    </div>
                    {header.column.getCanFilter() ? (
                      <div style={{ backgroundColor: "white" }}>
                      <Filter column={header.column} />
                      </div>
                    ) : null}
                    </>
                  )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                style={{ backgroundColor: "#343a40", color: "#fff" }}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      style={{
                        width: cell.column.getSize(),
                        borderColor: "#fff",
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>
      {paginado && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className="gap-2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <button
              className="border rounded p-1"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
            <span
              className="gap-1"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </strong>
            </span>
            <span
              className="gap-1"
              style={{ display: "flex", alignItems: "center" }}
            >
              | Go to page:
              <input
                type="number"
                min="1"
                max={table.getPageCount()}
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
              />
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

function Filter({ column }) {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {};

  return filterVariant === "range" ? (
    <div>
      <div className="space-x-2" style={{ display: "flex" }}>
        <DebouncedInput
          type="number"
          value={columnFilterValue?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old) => [value, old?.[1]])
          }
          placeholder={`Min`}
        />
        <DebouncedInput
          type="number"
          value={columnFilterValue?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old) => [old?.[0], value])
          }
          placeholder={`Max`}
        />
      </div>
      <div className="h-1" />
    </div>
  ) : filterVariant === "select" ? (
    <select
      onChange={(e) => {
        if (e.target.value === "") column.setFilterValue(null);
        if (e.target.value === "true") column.setFilterValue(true);
        if (e.target.value === "false") column.setFilterValue(false);
      }}
      value={columnFilterValue?.toString()}
      className="w-100"
      style={{ border: "none" }}
    >
      <option value="">Todas</option>
      <option value={`true`}>Si</option>
      <option value={`false`}>No</option>
    </select>
  ) : (
    <DebouncedInput
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`Buscar...`}
      type="text"
      value={columnFilterValue ?? ""}
    />
  );
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      style={{ width: "100%", border:'none' }}
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
