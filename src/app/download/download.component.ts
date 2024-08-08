import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Products, TInvoice } from '../model/InitialData';
// import { Products, TInvoice, } from '../model/DataType';
// import { initialInvoice } from '../model/InitialData';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {

  invoice: TInvoice = new TInvoice();
  productsList: Products[] = [];

  onClick() {


    let docDefinition = {
      content: [
        { text: "", style: "container" },
        {
          columns: [
            [{
              text: `${this.invoice.companyName}`,
              color: "#555",
              fontSize: 25,
              bold: true,
              margin: 4,
              style: "commonStyle"
            },
            {
              text: `${this.invoice.name}`,
              margin: 4,
              style: "commonStyle",
            }, {
              text: `${this.invoice.companyAddress}`,
              style: "commonStyle",
              margin: 4
            }, {
              text: `${this.invoice.companyAddress2}`,
              margin: 4,
              style: "commonStyle"
            }], {
              text: `${this.invoice.title}`,
              color: "#555",
              fontSize: 40,
              bold: true,

            }],
        }, { text: "", margin: 14 }, {
          columns: [
            [{
              text: `${this.invoice.billTo}`,
              color: "#555",
              fontSize: 20,
              bold: true,
              margin: 4,
              style: "commonStyle"
            },
            {
              text: `${this.invoice.clientName}`,
              margin: 4,
              style: "commonStyle",
            }, {
              text: `${this.invoice.clientAddress}`,
              style: "commonStyle",
              margin: 4
            }, {
              text: `${this.invoice.clientAddress2}`,
              margin: 4,
              style: "commonStyle"
            }], {
              columns: [
                [{
                  text: `${this.invoice.invoiceTitleLabel}`,
                  style: "commonStyle",
                  bold: true,
                  fontSize: 20,
                  margin: 4
                }, {
                  text: `${this.invoice.invoiceDateLabel}`,
                  margin: 4,
                  fonSize: 18,
                  style: "commonStyle"
                }], {
                  columns: [[{
                    text: `${this.invoice.invoiceTitle}`,
                    style: "commonStyle",

                    margin: 6
                  }, {
                    text: `${this.invoice.invoiceDate}`,
                    margin: 6,
                    color: "#555",
                    fontSize: 15,

                  }]]
                }
              ]
            }

          ]
        }],
      styles: {
        container: {
          margin: 0,
          padding: 0,
        },
        commonStyle: {
          color: "#555",
          fontSize: 15,

        },
        header: {
          fontSize: 22,
          bold: true
        },
        firstSection: {

        }
      }

    };


    pdfMake.createPdf(docDefinition).print();


  }
}
