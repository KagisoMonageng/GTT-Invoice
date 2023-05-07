import { Component } from '@angular/core';
import { OnInit } from '@angular/core/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'front';
  quantity = 0
  price = 0
  item_name = ''
  item_desc = ''
  total = 0


  ngOnInit(): void {
    
  }



  increase(){
    this.quantity++;
  }

  decrease(){
    if(this.quantity > 0){
      this.quantity--;
    }else{
      this.quantity = 0;
    }
  }
}
