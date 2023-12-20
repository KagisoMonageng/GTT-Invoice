import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  query : string = ''
  invoices : any[] =[]
  message : string = '';

  constructor( private invServ : InvoiceService ,private http: HttpClient) { }

  ngOnInit(): void {
    this.invServ.getAllInv().subscribe((results:any[])=>{

      this.invoices = results

    },(err: HttpErrorResponse)=>{
      this.message = err.error.message
    })
  }

  

}
