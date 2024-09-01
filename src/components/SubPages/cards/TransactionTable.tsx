import { columns } from "@/components/Pages/datatable/columns";
import { DataTable } from "@/components/Pages/datatable/Datatable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';

interface Transaction {
  MerchantName: string;
  TransactionAmount: number;
  Category: string;
  TransactionDate: string;
}

interface CardData {
  id: string;
  CardHolderName: string;
  CardType: string;
  CardNumber: string;
  CreditLimit: string; 
  BankName: string;
  ValidUpto: string;
  BillingCycleStart: string;
  BillingCycleEnd: string;
  cvv: string;
  cardColor: string;
  transactions: Transaction[];
}
export default function TransactionTable() {

  const cardData = useOutletContext<CardData>();
  
console.log(cardData,"card data from  table ")
  return (
    <>
      <div className="flex justify-between p-5">
        <h1 className="font-bold text-2xl"> Card Statement</h1>
        <Button>
          <Link to={"add-transaction"}>Add Statement</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={cardData.transactions} />
    </>
  );
}
