import { useState, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import InvoiceList from "../../components/InvoiceList/InvoiceList";
import { InvoiceType } from "../../types";
import data from "../../data/data.json";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [invoices, setInvoices] = useState<InvoiceType[] | []>([]);

  useEffect(() => {
    setTimeout(() => {
      setInvoices(data);
    }, 2000);
  }, []);
  return (
    <>
      <div className={styles.header}>
        <div>
          <Heading as="h1">Invoices</Heading>
          <Text className={styles.headerInfoText}>
            {invoices.length ? `${invoices.length} invoices` : "No invoices"}
          </Text>
        </div>
        <div className={styles.headerActionsBox}>
          <Button variant="1">New</Button>
        </div>
      </div>
      <InvoiceList data={invoices} />
    </>
  );
};

export default HomePage;
