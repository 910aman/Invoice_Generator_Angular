export interface Products {
    description: string
    quantity: string
    rate: string
}

export class ProductLine {
    "description": string;
    "quantity": string;
    "rate": string;
    constructor() {
        this.description= '';
        this.quantity=  '1';
        this.rate= '0.00';
    }
}

export class TInvoice  {
    logo: string
    logoTitle: string
    title: string;
    companyName: string;
    name: string;
    companyAddress: string;
    companyAddress2: string;
    companyCountry: string;
    billTo: string;
    clientName: string;
    clientAddress: string;
    clientAddress2: string;
    clientCountry: string;
    invoiceTitleLabel: string;
    invoiceTitle: string;
    invoiceDateLabel: string;
    invoiceDate: string | Date;
    invoiceDueDateLabel: string;
    invoiceDueDate: string | Date;
    productLineDescription: string;
    productLineQuantity: string;
    productLineQuantityRate: string;
    productLineQuantityAmount: string;
    subTotalLabel: string;
    taxLabel: string;
    totalLabel: string;
    currency: string;
    notesLabel: string;
    notes: string;
    termLabel: string;
    term: string;
    constructor() {
        this.logo = "";
        this.logoTitle = "";
        this.title = "INVOICE";
        this.companyName = "";
        this.name = "";
        this.companyAddress = "";
        this.companyAddress2 = "";
        this.companyCountry = "United States";
        this.billTo = "Bill To#";
        this.clientName = "";
        this.clientAddress = "";
        this.clientAddress2 = "";
        this.clientCountry = "United States";
        this.invoiceTitleLabel = "Invoice#";
        this.invoiceTitle = "";
        this.invoiceDateLabel = "Invoice Date";
        this.invoiceDate = "";
        this.invoiceDueDateLabel = "Due Date";
        this.invoiceDueDate = "";
        this.productLineDescription = "Item Description";
        this.productLineQuantity = "Qty";
        this.productLineQuantityRate = "Rate";
        this.productLineQuantityAmount = "Amount";
        this.subTotalLabel = "Sub Total";
        this.taxLabel = "Sale Tax (10%)";
        this.totalLabel = "TOTAL";
        this.currency = "$";
        this.notesLabel = "Notes";
        this.notes = "It was great doing business with you.";
        this.termLabel = "Terms & Conditions";
        this.term = "Please make the payment by the due date.";
    }
}



// export const initialInvoice: TInvoice = {
//     logo: "",
//     logoTitle: "",
//     title: 'INVOICE',
//     companyName: '',
//     name: '',
//     companyAddress: '',
//     companyAddress2: '',
//     companyCountry: 'United States',
//     billTo: 'Bill To#',
//     clientName: '',
//     clientAddress: '',
//     clientAddress2: '',
//     clientCountry: 'United States',
//     invoiceTitleLabel: 'Invoice#',
//     invoiceTitle: '',
//     invoiceDateLabel: 'Invoice Date',
//     invoiceDate: '',
//     invoiceDueDateLabel: 'Due Date',
//     invoiceDueDate: '',
//     productLineDescription: 'Item Description',
//     productLineQuantity: 'Qty',
//     productLineQuantityRate: 'Rate',
//     productLineQuantityAmount: 'Amount',
//     productLines: [
//         {
//             description: 'Brochure Design',
//             quantity: '2',
//             rate: '100.00',
//         },
//         { ...initialProducts, },

//     ],
//     subTotalLabel: 'Sub Total',
//     taxLabel: 'Sale Tax (10%)',
//     totalLabel: 'TOTAL',
//     currency: '$',
//     notesLabel: 'Notes',
//     notes: 'It was great doing business with you.',
//     termLabel: 'Terms & Conditions',
//     term: 'Please make the payment by the due date.',
    
// }
