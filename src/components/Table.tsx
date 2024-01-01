import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  createSolidTable,
} from "@tanstack/solid-table";
import { For } from "solid-js";

type TableProps<TData> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  data: TData[];
};

export function Table<TData>({ columns, data} : TableProps<TData>) {
  const table = createSolidTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return  (
  <div class="p-2">
    <table>
      <thead>
          <For each={table.getHeaderGroups()}>
            {headerGroup => (
              <tr>
                <For each={headerGroup.headers}>
                  {header => (
                    <th class="bg-neutral-100 dark:bg-neutral-800 px-2 py-2 text-left 2xl:(px-4 py-4)">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody>
          <For each={table.getRowModel().rows}>
            {row => (
              <tr>
                <For each={row.getVisibleCells()}>
                  {cell => (
                    <td class="border-b border-gray-200 px-3- py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
    </table>
  </div>
  );
}