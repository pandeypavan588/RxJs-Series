import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {
  data1:any;
  data2:any;
  data3:any;
  constructor() { }

  ngOnInit(): void {
  }

  getData1(){
    this.data1='Fetching data......';
    this.getPromiseData().then((res)=>{
      console.log(res)
      this.data1= JSON.stringify(res);
    })
  }

  async getData2(){
    this.data2='Fetching data......';
    let res= await this.getPromiseData()
    this.data2 = JSON.stringify(res);

  }
//Fetching data from api using promise
  getData3(){
    this.data3='Fetching data......';
    this.getDataFromApi().then((res)=>{
      console.log('response :',res)
      this.data3= JSON.stringify(res);
    })
  }

  async getData4(){
    this.data3='Fetching data......';
    
    let res = await this.getDataFromApi()
    this.data3= JSON.stringify(res);
  }
  

 
  getPromiseData(){
    let dell={
      brand:"hp",
      ram:"1TB"
    }
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(dell)
      }, 3000);
    })
  }


  getDataFromApi(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    
  }

}
