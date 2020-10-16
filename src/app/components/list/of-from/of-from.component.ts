import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMessage: any
  fpMesg:any;
  constructor(public ds : DesignService) { }

  ngOnInit(): void {
    // using of  operator
    const obs1 = of('Pavan','Jack','John');
    obs1.subscribe(res=>{
        this.ds.print(res,'listContainer')
    })

    const obs2 = of({a:'Pavan',b:'Jack',c:'John'});
    obs2.subscribe(res=>{
        this.obsMessage = res;
    })


     // using from  operator
     //from-array
     const obs3 = from(['banana','mango','apple']);
     obs3.subscribe(res=>{
         this.ds.print(res,'fromConatiner')
     })

     //from-promise
     const promise = new Promise(resolve=>{
       setTimeout(()=>{
         resolve('Promise Resolved')
       },3000)
     });
     const obs4 = from(promise);

     obs4.subscribe(res=>{
       console.log('from-promise result : ',res)
       this.fpMesg = res;
     })


     //from-string

     const obs5 = from('Welcome to rxjs tutorial');
    obs5.subscribe(res=>{
        this.ds.print(res,'fromStrConatiner')
    })

  }

}
