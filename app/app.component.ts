import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import tabledetails from './tabledetails.json';
import tabledata from './tabledatacopy.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tabledetails: any = tabledetails;
  tabledata: any = tabledata;

  ngOnInit() {}

  topdf() {
    const doc = new jsPDF('l', 'mm', 'a1');

    doc.autoTable({
      html: '#stable',
      theme: 'grid',
      styles: { halign: 'center', fontSize: 15, cellPadding: 10 },
      margin: { top: 20, bottom: 50 }
    });

    doc.output('datauri', 'stable.pdf');
  }
}
