import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  sourceSub: Subscription;

  users= [
    {name:'Pavan',skill:'Angular'},
    {name:'Jack',skill:'Java'},
    {name:'John',skill:'Python'},
  ]
  constructor() { }

  ngOnInit(): void {

    //Ex. -01
    const source = interval(1000);
    const sourceSub = source.pipe(
      take(10),
      toArray()
    );
    sourceSub.subscribe(res=>{
      console.log('using interval and toarray operator :',res)
    })


    //Ex. 02
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res=>{
      console.log('Using from and toarray operator :',res)
    })


    //Ex. 03
    const source3 = of('Pavan','Jack','John');
    source3.pipe(toArray()).subscribe(res=>{
      console.log('Using of and toarray operator :',res)
    })



  }



}
