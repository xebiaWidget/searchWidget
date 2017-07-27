import {Component} from 'angular2/core';
import {Client} from './client';
import {ClientItemComponent} from './client-item.component';
import {ArtistDetailsComponent} from './artist-details.component';
import {SearchPipe} from './search-pipe';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html', 
  directives: [ClientItemComponent],
  pipes : [SearchPipe],
 styleUrls: ['css/app.css']
})

export class AppComponent {
  clients = CLIENTS;
  currentArtist: Client;

  showArtist(item) {
    console.log(item)
    this.currentArtist = item;
  }
}

var CLIENTS: Client[] = [
 {
    "clientName" : "Ann Liebmann",
    "phone" : "27-61-433-544",
    "email" : "ann.liebmann@test.com",
    "policyNo" : "0013983997 | 0013656887"
  },  {
    "clientName" : "Ann Summer",
    "phone" : "27-61-422-549",
    "email" : "ann.summer@test.com",
    "policyNo" : "0013999887 | 0013987111"
  },
  {
    "clientName" : "Ann Samuel",
    "phone" : "27-61-411-547",
    "email" : "ann.samuel@test.com",
    "policyNo" : "0013676887 | 0013987222"
  },
    {
    "clientName" : "Mohd Sahil",
    "phone" : "27-61-411-656",
    "email" : "mohd.sahil@test.com",
    "policyNo" : "0013673333 | 0013983334"
  }
]
