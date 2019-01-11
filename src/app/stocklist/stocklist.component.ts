import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/hero.service';
@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  stockList:any=[];
  stockdata:any=[];
  chartdata:any=[];
  querydata = {
    symbol:"",
    date:""
  };
  listactive:boolean=false;
  constructor(private _hero:HeroService) { }

  ngOnInit() {
    // this.getStockList();
    this.listactive=false;
  }
  public mode(){
    this.listactive=false;
  }
  public getStockList(){
    this.listactive=true;
    this.stockList = this._hero.getList().subscribe(res=>{
      this.stockList = res["data"];
    },err=>{
      // Will handle later
      console.log(err);
    },()=>{
      console.log(this.stockList.length);
      
    })
  }
  public getdetail(){
    
    
    this._hero.getDetail(this.querydata).subscribe(res=>{
      this.stockdata = res["data"];
      this.chartdata = {
        chart: { 
          "theme": "fusion",
          "drawcrossline": "1",
          "caption":this.querydata.symbol
        },
        data: [
          {value: this.stockdata[0].open,label:"OPEN"},
          {value: this.stockdata[0].close,label:"CLOSE"},
          {value: this.stockdata[0].low,label:"LOW"},
          {value: this.stockdata[0].high,label:"HIGH"}
        ]
      };
    },err=>{
      console.log(err);
    },()=>{
      console.log("Comppleted");
    })
  }

}
