// ASSETS
import classes from './table.module.scss';

import { getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

interface ReactTableProps<T extends object> {
 data: T[];
 columns: ColumnDef<T>[];
}

export const Table = <T extends object>({ data, columns }: ReactTableProps<T>) => {
    const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    });
    return (
        <table className={classes.table}>
               <thead className="border-b bg-gray-50">
               {table.getHeaderGroups().map((headerGroup) => (
                 <tr key={headerGroup.id}>
                   {headerGroup.headers.map((header) => (
                     <th key={header.id} className="px-6 py-4 text-sm font-medium text-gray-900">
                       {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                     </th>
                   ))}
                 </tr>
               ))}
             </thead>
             <tbody>
               {table.getRowModel().rows.map((row) => (
                 <tr key={row.id} className='border-b" bg-white'>
                   {row.getVisibleCells().map((cell) => (
                     <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900" key={cell.id}>
                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
                     </td>
                   ))}
                 </tr>
               ))}
             </tbody>
        </table>
    )
}