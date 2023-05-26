import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges  {
  title = 'front';
  quantity : any = 12
  price: any = 100
  item_name : any = "Lemon Cream"
  item_desc: any = "Creamy lemon filled scones"
  total : any  = 0

  //person
  full_name : any = "";
  email : any = "";
  address_line_1 : any = "" 
  address_line_2: any = ""
  province : any = ""
  tel : any = ""

  itemsCount = 1;
  items : any[] = [{quantity:0,price:0,item_name:'',item_desc:''}]
  randy = 0;
  constructor(){
    this.randy = Math.floor(Math.random() * (9999 - 100 + 1)) + 100;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.total = 0;
      
      for (let index = 0; index < this.items.length; index++) {
        console.log(this.items[index].item_name)
        this.total += (this.items[index].price*this.items[index].quantity);
      }
    }, 500);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  

  addItem():void {
    this.items.push({quantity:0,price:0,item_name:'',item_desc:''})
  }

  removeItem(i:any):void {
    this.items.splice(i, 1);
  }
  
  generatePDF() {
    const element = document.getElementById('final');
    const preview = document.getElementById('preview');

    preview?.classList.add("hidden")
    element?.classList.remove("hidden")

    setTimeout(() => {
      if(element != null) {
        html2canvas(element).then((canvas) => {
          const pdf = new jsPDF({unit:'px',orientation:'p',format:[document.body.clientWidth,document.body.clientHeight]});
          const imageData = canvas.toDataURL('image/png');
          const imgProps = pdf.getImageProperties(imageData);
          const width = pdf.internal.pageSize.getWidth();
          const height = (imgProps.height * width) / imgProps.width;
          pdf.addImage(imageData, 'PNG', 0, 0, width, height);
          pdf.save('invoice '+this.full_name+'.pdf');
        });
       }
      
    }, 1000);
  }



  increase(i:any){
    this.items[i].quantity++;
  }

  decrease(i:any){
    if(this.items[i].quantity > 0){
      this.items[i].quantity--;
    }else{
      this.items[i].quantity = 0;
    }
  }
  


}
