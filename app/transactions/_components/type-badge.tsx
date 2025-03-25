import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
    transaction: Transaction
}

const TransactionTypeBadge = ({transaction}: TransactionTypeBadgeProps) => {
    if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-muted font-bold text-primary hover:bg-muted">
            <CircleIcon className="mr-2 fill-primary" size={10} />
            Depósito
          </Badge>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="text-danger bg-danger/10 font-bold">
            <CircleIcon className="fill-danger mr-2" size={10} />
            Despesa
          </Badge>
        );
      }
      return (
        <Badge className="text-white bg-white/10 font-bold">
          <CircleIcon className="fill-white mr-2" size={10} />
          Investimento
        </Badge>
      );
}
 
export default TransactionTypeBadge;