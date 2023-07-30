import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  chart: any;
  ngOnInit() : void {
    this.chart= new Chart('myChart1', {
      type: 'polarArea',
      data: {
        labels: [ 'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'],
        datasets: [{
          label: 'My First Dataset',       
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            '#7B7BF3',
            '#7B7BF3',
            '#7B7BF3',
            '#7B7BF3',
            '#7B7BF3',
          ],
          borderColor: [
            '#7B7BF3',
            '#7B7BF3',
            '#7B7BF3',
            '#7B7BF3',
            '#7B7BF3',
            '#7B7BF3',
          ],
          borderWidth: 1
        }]
      },
  
    });
  }
}
