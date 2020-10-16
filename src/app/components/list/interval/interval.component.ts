import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  videoSubscriptions : Subscription;
  message:string;
  constructor(private ds: DesignService) { }

  ngOnInit(): void {
    // this.printInterval()
    this.printTimer()
    
  }

  printTimer(){
    // const broadCastVideos = interval(1000);
    //timer(delay,interval)
    const broadCastVideos = timer(5000,1000);
    this.videoSubscriptions = broadCastVideos.subscribe(res=>{
      console.log(res);
      this.message = 'Video '+res;
      // this.ds.print(this.message,'test1');
      this.ds.print(this.message,'test2');
      if(res>=5){
        this.videoSubscriptions.unsubscribe()
      }
    })

  }



  printInterval(){
    const broadCastVideos = interval(1000);
    //timer(delay,interval)
    // const broadCastVideos = timer(5000,1000);
    this.videoSubscriptions = broadCastVideos.subscribe(res=>{
      console.log(res);
      this.message = 'Video '+res;
      this.ds.print(this.message,'test1');
      // this.ds.print(this.message,'test2');
      if(res>=5){
        this.videoSubscriptions.unsubscribe()
      }
    })
  }

  

}
