import { InvoiceType } from "../../types";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import styles from "./InvoiceCard.module.scss";
import { formatDate, formatCurrency } from "../../util";

interface InvoiceCardProps {
  data: InvoiceType;
}

const InvoiceCard = ({ data }: InvoiceCardProps) => {
  const { id, clientName, paymentDue, total, status } = data;
  const formattedDate = formatDate(paymentDue);
  const formattedTotal = formatCurrency(total);
  const statusText = status.charAt(0).toUpperCase() + status.slice(1);
  return (
    <div className={styles.invoiceCard}>
      <Heading as="h3" variant="small">
        <span className={styles.accentText}>#</span>
        {id}
      </Heading>
      <Text className={styles.clientText}>{clientName}</Text>
      <div>
        <Text>
          Due <span className={styles.accentText}>{formattedDate}</span>
        </Text>
        <Text className={styles.totalText}>{formattedTotal}</Text>
      </div>
      <div className={`${styles.statusBox} ${styles[`statusBox--${status}`]}`}>
        <span
          className={`${styles.statusIcon} ${styles[`statusIcon--${status}`]}`}
        />
        <span>{statusText}</span>
      </div>
    </div>
  );
};

export default InvoiceCard;
