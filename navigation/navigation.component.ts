import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasslService } from '../classl.service';
import { SeatsService } from '../seats.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public seat= [];
  public row1=[];
  public row2=[];
  public row3=[];
  public row4=[];
  public row5=[];
  public row6=[];
  public n:number;
  public k=0;
  public href: string = "";
  public fn;
  @Input() value: any;
  public classl=[["","",""]];

  constructor(private seatService : SeatsService, private classlService : ClasslService, private router: Router){
    this.classl=classlService.getclassl();  
    this.seat = seatService.getseats();
    this.n = seatService.getrows();
      this.href = this.router.url;
    this.fn=this.href.substring(this.href.lastIndexOf('/') + 1);
    var f: number = +this.fn;
    console.log(f);
    this.value=f;
    var x=3;
    x.toString();
    console.log(x);
    for(let j=0;j<this.n;j++)
    {
      this.row1[j]=this.seat[j];
    }
    for(let j=this.n;j<this.n*2;j++)
    {
      this.row2[this.k]=this.seat[j];
      this.k++;
    }
    this.k=0;
    for(let j=this.n*2;j<this.n*3;j++)
    {
      this.row3[this.k]=this.seat[j];
      this.k++;
    }
    this.k=0;
    for(let j=this.n*3;j<this.n*4;j++)
    {
      this.row4[this.k]=this.seat[j];
      this.k++;
    }
    this.k=0;
    for(let j=this.n*4;j<this.n*5;j++)
    {
      this.row5[this.k]=this.seat[j];
      this.k++;
    }
    this.k=0;
    for(let j=this.n*5;j<this.n*6;j++)
    {
      this.row6[this.k]=this.seat[j];
      this.k++;
    }




    for(let i=0;i<this.seat.length;i++)
    {
      this.classl[f][i]="nonreserve";
    }
  }
  
  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 
  
  ngOnInit(): void {
  }
  
  reserve(j,i)
  { 
    if(this.classl[j][i]!="reserve")
    {
      this.classl[j][i]="reserve";
    }
    else
    {
      this.classl[j][i]="nonreserve";
    }
  
  }
}
