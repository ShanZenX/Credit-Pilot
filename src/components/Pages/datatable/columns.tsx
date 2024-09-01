"use client"

import { ColumnDef } from "@tanstack/react-table"

interface Transaction {
  MerchantName: string;
  TransactionAmount: number;
  Category: string;
  TransactionDate: string;
}

export const columns: ColumnDef<Transaction>[] = [
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
