import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList} from "@angular/cdk/drag-drop";
import {NgForOf, NgIf} from "@angular/common";
import {PitchLine} from "../../core/entity/pitch-line";
import {PitchPlayerPosition} from "../../core/entity/pitch-player-position";

@Component({
  selector: 'app-football-pitch',
  standalone: true,
  imports: [
    CdkDropList,
    NgForOf,
    NgIf,
    CdkDrag
  ],
  templateUrl: './football-pitch.component.html',
  styleUrl: './football-pitch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FootballPitchComponent {

  readonly pitchLines:PitchLine[] = [
    {
      positions:[
        {
          index:0
        },
        {
          index:1
        },
        {
          index:2
        }
      ]
    },
    {
      positions:[
        {
          index:3
        },
        {
          index:4
        },
        {
          index:5
        }
      ]
    },
    {
      positions:[
        {
          index:6
        },
        {
          index:7
        },
        {
          index:8
        },
        {
          index:9
        }
      ]
    },
    {
      positions:[
        {
          index:10
        }
      ]
    }
  ]

  onPlayerDrop(event: CdkDragDrop<any>, position:PitchPlayerPosition){
    const playerSourceData = event.previousContainer.data;

    if(Array.isArray(playerSourceData)){
      const droppedItemIndex = event.previousIndex;

      const droppedPlayer = playerSourceData.splice(droppedItemIndex,1)[0];

      if(position.player){
        playerSourceData.splice(droppedItemIndex, 0, position.player);
      }

      position.player = droppedPlayer;
    }
    else{
      const droppedPlayer = playerSourceData.player;

      if(!position.player){
        position.player = droppedPlayer;

        playerSourceData.player = undefined;
      }

      if(position.player === droppedPlayer) return;

      this.reversePlayersPosition(position, playerSourceData as PitchPlayerPosition)
    }
  }

  private reversePlayersPosition(currentPosition:PitchPlayerPosition, newPosition:PitchPlayerPosition){
    const currentPlayer = currentPosition.player;
    const newPlayer = newPosition.player;

    currentPosition.player = newPlayer;
    newPosition.player = currentPlayer;
  }
}
