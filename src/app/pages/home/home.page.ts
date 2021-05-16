import { Component, OnInit } from '@angular/core';

interface Componente {
    icon: string,
    name: string;
    redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  components: Componente[] = [
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    }
  ]

}
