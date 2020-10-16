import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent implements OnInit,AfterViewInit {

  @ViewChild('addbtn') addbtn:ElementRef;

  constructor(private designService: DesignService) { }
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addbtn.nativeElement,'click')
    .subscribe(res=>{
      let countVal= 'Video'+ count++;
      this.designService.print(countVal,'test')
    })
  }

  ngOnInit(): void {
  }
//append li item
  print(val){
    
    var x = document.createElement("LI");
  var t = document.createTextNode(val);
  x.appendChild(t);
  document.getElementById("elConatiner").appendChild(x);
  }

}
