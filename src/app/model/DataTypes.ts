export interface Products {
    description: string
    quantity: string
    rate: string
}


export const initialProducts: Products = {
    description: '',
    quantity: '1',
    rate: '0.00',
}

export class Invoice {
    "logo": string
    "logoTitle": string
    "title": string;
    "companyName": string;
    "name": string;
    "companyAddress": string;
    "companyAddress2": string;
    "companyCountry": string;
    "billTo": string;
    "clientName": string;
    "clientAddress": string;
    "clientAddress2": string;
    "clientCountry": string;
    "invoiceTitleLabel": string;
    "invoiceTitle": string;
    "invoiceDateLabel": string;
    "invoiceDate": string | Date;
    "invoiceDueDateLabel": string;
    "invoiceDueDate": string | Date;
    "productLineDescription": string;
    "productLineQuantity": string;
    "productLineQuantityRate": string;
    "productLineQuantityAmount": string;
    "productLines": Products[];
    "subTotalLabel": string;
    "taxLabel": string;
    "totalLabel": string;
    "currency": string;
    "notesLabel": string;
    "notes": string;
    "termLabel": string;
    "term": string;
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
        productLines: [
            {
                description: "Brochure Design",
                quantity: "2",
                rate: "100.00",
            },
            { ...initialProducts }
        ];
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