import InvoiceCard from "../InvoiceCard/InvoiceCard";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import { ReactComponent as NoInvoicesIllustration } from "../../assets/illustration-empty.svg";
import { InvoiceType } from "../../types";
import styles from "./InvoiceList.module.scss";

interface InvoiceListProps {
  data: InvoiceType[] | [];
}

const InvoiceList = ({ data }: InvoiceListProps) => {
  return (
    <div className={styles.invoiceList}>
      {data.length ? (
        data.map((invoice) => <InvoiceCard key={invoice.id} data={invoice} />)
      ) : (
        <div className={styles.noInvoicesBox}>
          <NoInvoicesIllustration />
          <Heading className={styles.noInvoicesHeading} as="h2">
            There is nothing here
          </Heading>
          <Text className={styles.noInvoicesText}>
            Create an invoice by clicking the
            <br />
            <strong>New</strong> button and get started
          </Text>
        </div>
      )}
    </div>
  );
};

export default InvoiceList;
