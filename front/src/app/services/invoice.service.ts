import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  baseUrl: string = 'http://localhost:8080/invoice';

  constructor(private http: HttpClient) { }

  getAllInv(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getInv(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }
  
  addInv(invoice:any){
    return this.http.post(this.baseUrl, invoice)
  }

}
