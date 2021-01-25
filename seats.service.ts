import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
public k=0;
public n=20;

  public seats=[];
  
alpha=['A','B','C','D','E','F'];
getseats(){
  return (this.seats);
}
getrows(){
  return this.n;
}

  constructor() {
    for(let j =0; j<6;j++)
    {
      for(let i =1;i<=this.n;i++)
      {
        this.seats[this.k]={"id":this.k,"seatnumber":i.toString()+this.alpha[j]};
        this.k++;
        
      }
    }
  }
}
