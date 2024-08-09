import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ProductLine, Products, TInvoice } from '../model/InitialData';
import { style } from '@angular/animations';
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
  products: ProductLine = new ProductLine();
  
  onClick() {
    const titleName = this.invoice.invoiceTitle || "Invoice Generator"
    pdfMake.createPdf({
      info: {
        title: `${titleName}`,
      },
      content: [
        { text: "", style: "container" },
        {
          columns: [
            [{
              text: `${this.invoice.companyName}`,
              color: "#555",
              fontSize: 20,
              bold: true,
              style: "commonStyle"
            },
            {
              text: `${this.invoice.name}`,
              marginTop: 4,
              style: "commonStyle",
            }, {
              text: `${this.invoice.companyAddress}`,
              style: "commonStyle",
              marginTop: 4
            }, {
              text: `${this.invoice.companyAddress2}`,
              marginTop: 4,
              style: "commonStyle"
            }], {
              text: `${this.invoice.title}`,
              color: "#555",
              fontSize: 40,
              alignment: "right",
              bold: true,

            }],
        },
        { text: "", margin: 14 }, {
          columns: [
            [{
              text: `${this.invoice.billTo}`,
              color: "#555",
              fontSize: 15,
              bold: true,
              marginTop: 4,
              style: "commonStyle"
            },
            {
              text: `${this.invoice.clientName}`,
              marginTop: 4,
              style: "commonStyle",
            }, {
              text: `${this.invoice.clientAddress}`,
              style: "commonStyle",
              marginTop: 4
            }, {
              text: `${this.invoice.clientAddress2}`,
              marginTop: 4,
              style: "commonStyle"
            }],

            {
              columns: [[{
                text: `${this.invoice.invoiceTitleLabel}`,
                style: "commonStyle",
                bold: true,
                fontSize: 15,
                marginTop: 6
              }, {
                text: `${this.invoice.invoiceDateLabel}`,
                style: "commonStyle",
                marginTop: 6
              }],
              [{
                text: `${this.invoice.invoiceTitle}`,
                marginTop: 4,
                style: "commonStyle"
              },
              {
                text: `${this.invoice.invoiceDate}`,
                marginTop: 6,
                style: "commonStyle"
              }]]
            }
          ]
        }, { text: "", margin: 14 },
        {

          table: {
            headerRows: 1,
            widths: [250, '16%', '16%', '16%'],
            body: [
              [{ text: `${this.invoice.productLineDescription}`, style: "commonStyle", bold: true },
              { text: `${this.invoice.productLineQuantity}`, alignment: "right", style: "commonStyle", bold: true },
              { text: `${this.invoice.productLineQuantityRate}`, alignment: "right", style: "commonStyle", bold: true },
              { text: `${this.invoice.productLineQuantityAmount}`, alignment: "right", style: "commonStyle", bold: true, }

              ],
              [{ text: 'fixed-width cells have exactly the specified width', color: '#555', style: "commonStyle", width: "40%", },
              { text: '2', alignment: "right", color: '#555', style: "commonStyle" },
              { text: '40.00', alignment: "right", color: '#555', style: "commonStyle" },
              { text: '80.00', alignment: "right", color: '#555', style: "commonStyle" }],
              [{ text: 'fixed-width cells have exactly the specified width', color: '#555', style: "commonStyle", width: "40%", },
              { text: '2', alignment: "right", color: '#555', style: "commonStyle" },
              { text: '40.00', alignment: "right", color: '#555', style: "commonStyle" },
              { text: '80.00', alignment: "right", color: '#555', style: "commonStyle" }]
            ]
          }
        },
        {
          columns: [
            [{ text: "", background: "#ddd", }],
            {
              columns: [
                [{
                  text: `${this.invoice.subTotalLabel}`,
                  alignment: "left",
                  marginTop: 20,
                  style: "commonStyle"
                }, {
                  text: `${this.invoice.taxLabel}`,
                  alignment: "left",
                  marginTop: 8,
                  style: "commonStyle"
                }, {
                  text: `${this.invoice.totalLabel}`,
                  alignment: "left",
                  marginTop: 8,
                  style: "commonStyle"
                },
                ], [{
                  text: "400.00",
                  alignment: "right",
                  marginTop: 20,
                  style: "commonStyle"
                },
                {
                  text: "40.00",
                  marginTop: 8,
                  alignment: "right",
                  style: "commonStyle",

                },
                {
                  columns: [{
                    text: "$",
                    marginTop: 8,
                    alignment: "right",
                    style: "commonStyle",

                  }, {
                    text: "440.00",
                    marginTop: 8,
                    alignment: "right",
                    style: "commonStyle",

                  }]
                }
                ]]
            },
          ],
        },
        [{
          text: `${this.invoice.notesLabel}`,
          marginTop: 25,
          style: "commonStyle",
          bold: true
        }, {
          text: `${this.invoice.notes}`,
          marginTop: 8,
          style: "commonStyle"
        }],
        [{
          text: `${this.invoice.termLabel}`,
          marginTop: 25,
          style: "commonStyle",
          bold: true
        }, {
          text: `${this.invoice.term}`,
          marginTop: 8,
          style: "commonStyle"
        },]

      ],
      styles: {
        container: {
          margin: 0,
        },
        commonStyle: {
          color: "#555",
          fontSize: 15,

        },
        header: {
          fontSize: 22,
          bold: true
        },
        width50: {

        }
      }
    }).open();


  }
}
