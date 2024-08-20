"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type dataTable = {
  id: string
  MerchantName: string
  TransactionAmount: number
  Category: string
  TransactionDate: string
}

export const columns: ColumnDef<dataTable>[] = [
  {
    accessorKey: "TransactionDate",
    header: "TransactionDate",
  },
  {
    accessorKey: "MerchantName",
    header: "MerchantName",
  },
  {
    accessorKey: "TransactionAmount",
    header: "TransactionAmount",
  },
  {
    accessorKey: "Category",
    header: "Category",
  },

]
