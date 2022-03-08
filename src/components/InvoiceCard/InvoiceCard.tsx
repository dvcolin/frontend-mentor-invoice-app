import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import { ReactComponent as RightArrow } from "../../assets/icon-arrow-right.svg";
import styles from "./InvoiceCard.module.scss";
import { formatDate, formatCurrency } from "../../util";
import { InvoiceType } from "../../types";

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
      <Text className={styles.dateTextTablet}>
        Due <span className={styles.accentText}>{formattedDate}</span>
      </Text>
      <Text className={styles.clientText}>{clientName}</Text>

      <div className={styles.dateAndTotalMobile}>
        <Text>
          Due <span className={styles.accentText}>{formattedDate}</span>
        </Text>
        <Text className={styles.totalText}>{formattedTotal}</Text>
      </div>

      <Text className={`${styles.totalText} ${styles.totalTextTablet}`}>
        {formattedTotal}
      </Text>

      <div className={`${styles.statusBox} ${styles[`statusBox--${status}`]}`}>
        <span
          className={`${styles.statusIcon} ${styles[`statusIcon--${status}`]}`}
        />
        <span>{statusText}</span>
      </div>
      <div className={styles.iconBox}>
        <RightArrow />
      </div>
    </div>
  );
};

export default InvoiceCard;
