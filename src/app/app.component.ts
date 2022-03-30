import { Component, Input  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.less'],
  animations: [ slideInAnimation ]
  // template:`
  //   <h1>Hello Mr.Guo</h1>
  // `,
  // styles:['h1{font-size:30px}']
})
export class AppComponent {
  title = 'project';
  hello='哈喽';
  list=[
    {
      name:"xm",
    },
    {
      name:"xm",
    },
  ]
  path="../assets/1.png";
  cur="收到"
  look=true
  addNewItem(){
  }
  
  getAnimationData(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
  showdiv(){
    this.look = !this.look
  }
}
