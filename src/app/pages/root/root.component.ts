import { Component } from '@angular/core';
import {PlayersListComponent} from "../../components/players-list/players-list.component";
import {FootballPitchComponent} from "../../components/football-pitch/football-pitch.component";
import {CdkDropListGroup} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PlayersListComponent,
    FootballPitchComponent,
    CdkDropListGroup
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {
  title = 'Testovoe';
}
