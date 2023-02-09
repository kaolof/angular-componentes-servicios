import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges,AfterViewInit, OnDestroy{
  img: string = '';
  
  @Input('img') 
  set changeImg(newImg:string){
    this.img=newImg;
    console.log('change just img=>', this.img)
    //code
  }
  @Input() alt: string = '';
  @Output() loaded= new EventEmitter<string>();
  imageDefault='./assets/images/default.png';
  /* counter=0;
  counterFn:number | undefined; */

  constructor() {
    //before render
    //no Async
    //one time run
    console.log('constructor', 'imgValue =>', this.img)
   }

  ngOnChanges(): void {
    //before render and while
    //changes inputs -- many times
    console.log('changes', 'imgValue =>', this.img)
  }

  ngOnInit(): void {
    //before render
    //asyc - fetch si se puede
    //run one time
    console.log('init', 'imgValue =>', this.img)
/* 
    this.counterFn=window.setInterval( ()=>{
      this.counter += 1;
      console.log('run counter');
    },1000) */
  }

 ngAfterViewInit(){
  //after render
  //handler children
  console.log('ngAfterViewInit')
 }

 ngOnDestroy(){
  //delete
  console.log('ngOnDestroy');
 /*  window.clearInterval(this.counterFn); */
 }
  
  
  imgError(){
    this.img=this.imageDefault;
  }
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
