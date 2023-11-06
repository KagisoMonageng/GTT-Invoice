import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  invoices : any[] = [];

  constructor( private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getAllInv().subscribe((results :any[])=>{
      this.invoices = results;
    },(err:HttpErrorResponse) =>{
      console.log(err)
    })
  }

}
