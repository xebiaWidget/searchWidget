import {Component} from 'angular2/core';

@Component ({
  selector: 'client-item',
  templateUrl: 'partials/clientitem.html',
  styleUrls : ['css/app-items.css'],
  inputs: ['client']
})

export class ClientItemComponent {

}
