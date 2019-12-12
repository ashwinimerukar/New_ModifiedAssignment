
import { Component, OnInit } from '@angular/core';

interface IScore{
  name:string;
  value:number;
}
@Component({
  selector: 'app-child',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class  review implements OnInit {

  constructor() { }
  ngOnInit() {  
  }
  title = 'FEEDBACK PORTAL';
  public scorearray:IScore[]=[];
  view: any[] = [ 500, 400];

 // options for the chart
 showXAxis = true;
 showYAxis = true;
 gradient = false;
 showLegend = true;
 showXAxisLabel = true;
 xAxisLabel = 'Top Score Items';
 showYAxisLabel = true;
 yAxisLabel = 'Score Point';
 timeline = true;
 colorScheme = {
   domain: ['pink', '#87CEFA', '#FA8072', '#FF7F50']
 };

 showLabels = true;
 
public data= { 
  "price": "₹ 1,799.00",
  "latestReviewDate": "2018-10-21T00:00:00.000Z", 
  "domain": "amazon.in", 
  "imageUrl": "https://m.media-amazon.com/images/I/61tGayYkbaL._AC_US60_SCLZZZZZZZ__.jpg",
  "name": "Bluetooth Speakers", 
  "title": "JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)", 
  "category": "Bluetooth Speakers", 
  "productId": "ABCD1234", 
  "createdAt": "2018-08-31T09:36:08.448Z", 
  "reviewCount": 3013,
  "topScores": [ { "topic": "Sound Quality", "score": 4.6 },
                 { "topic": "Bass", "score": 4.2 },
                 { "topic": "Design and Build", "score": 4.2 }, 
                 { "topic": "Battery Backup", "score": 4.2 }
            ] 
               };

public scoredata =this.data.topScores.forEach(element => {
 this.scorearray.push({
     name:element.topic,
     value:element.score,
 })
});


}