import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor() { }
  //Append List item to ul
  print(val, elementId){
    let el = document.createElement('li');
    el.innerText = val;
    console.log(elementId)
    console.log(document.getElementById(elementId))
    document.getElementById(elementId).appendChild(el);
  }
}
