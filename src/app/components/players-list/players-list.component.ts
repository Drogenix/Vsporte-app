import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Player} from "../../core/entity/player";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDragPreview, CdkDropList} from "@angular/cdk/drag-drop";
import {PitchPlayerPosition} from "../../core/entity/pitch-player-position";
import {FullnamePipe} from "../../core/pipes/fullname.pipe";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {PlayersService} from "../../core/services/players.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    NgForOf,
    CdkDrag,
    CdkDropList,
    CdkDragPreview,
    CdkDragPlaceholder,
    FullnamePipe,
    NgIf,
    AsyncPipe
  ],
  animations:[
    trigger("listFadeIn",[
      transition("* => *", [
        query(":enter",[
          style({
            opacity:0,
            transform:"scale(0.4)"
          }),
          stagger(75, [
            animate("300ms ease-in", style({
              opacity:1,
              transform:"scale(1)"
            }))
          ])
        ])
      ])
    ])
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersListComponent {

  playersService = inject(PlayersService);

  readonly players$:Observable<Player[]> = this.playersService.getAll();

  constructor() {}

  onPlayerDrop(event:CdkDragDrop<any>){
    const pitchPlayerPosition:PitchPlayerPosition = event.previousContainer.data;

    const playersList:Player[] = event.container.data;

    if(pitchPlayerPosition.player){
      playersList.splice(event.currentIndex, 0, pitchPlayerPosition.player);

      pitchPlayerPosition.player = null;
    }
  }
}
