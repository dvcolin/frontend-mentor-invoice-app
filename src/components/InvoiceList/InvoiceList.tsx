import InvoiceCard from "../InvoiceCard/InvoiceCard";
import { InvoiceType } from "../../types";
import styles from "./InvoiceList.module.scss";

interface InvoiceListProps {
  data: InvoiceType[];
}

const InvoiceList = ({ data }: InvoiceListProps) => {
  return (
    <div className={styles.invoiceList}>
      {data.map((invoice) => (
        <InvoiceCard key={invoice.id} data={invoice} />
      ))}
    </div>
  );
};

export default InvoiceList;
