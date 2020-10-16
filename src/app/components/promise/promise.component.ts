import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  buyFlag:string = '';
  HP={
    brand:'HP',
    color:'Black',
    ram:'8 GB',
    hardDisk: '500 GB'
  }
  Dell={
    brand:'DELL',
    color:'Sliver',
    ram:'16 GB',
    hardDisk: '1 TB'
  }
  promiseVal:any

  constructor() { }

  ngOnInit(): void {
    

    
  }

  buyHp(){
    this.buyFlag= 'hp';
    let buyLaptop =this.buyLaptop(this.buyFlag);
    buyLaptop.then((res)=>{
      
      this.promiseVal=res;
      console.log('then',this.promiseVal);
      
    }).catch((err)=>{
      console.log('err',err)
      this.promiseVal=err;
    });
  }
  buyDell(){
    this.buyFlag= 'dell';
    let buyLaptop =this.buyLaptop(this.buyFlag);
    buyLaptop.then((res)=>{
      console.log('then',res);
      this.promiseVal=res;

    }).catch((err)=>{
      console.log('err',err)
      this.promiseVal=err;
    });
  }


  buyLaptop(data){
    let buyLaptop = new Promise((resolve,reject)=>{
      if(data==='hp'){
        return setTimeout(()=>{
          resolve(this.HP)
        },3000)
        ;
      }else{
        
        return setTimeout(()=>{
          reject(this.Dell)
        },3000)
      }
      
    })

    return buyLaptop;
  }

}
