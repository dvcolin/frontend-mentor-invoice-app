type AddressType = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type ItemType = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type InvoiceType = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: AddressType;
  clientAddress: AddressType;
  items: ItemType[];
  total: number;
};
