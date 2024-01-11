import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList} from "@angular/cdk/drag-drop";
import {NgForOf, NgIf} from "@angular/common";
import {PitchLine} from "../../core/entity/pitch-line";
import {PitchPlayerPosition} from "../../core/entity/pitch-player-position";
import {Player} from "../../core/entity/player";
import {FullnamePipe} from "../../core/pipes/fullname.pipe";

@Component({
  selector: 'app-football-pitch',
  standalone: true,
  imports: [
    CdkDropList,
    NgForOf,
    NgIf,
    CdkDrag,
    FullnamePipe
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
          player:null
        },
        {
          player:null
        },
        {
          player:null
        }
      ]
    },
    {
      positions:[
        {
          player:null
        },
        {
          player:null
        },
        {
          player:null
        },
        {
          player:null
        }
      ]
    },
    {
      positions:[
        {
          player:null
        },
        {
          player:null
        },
        {
          player:null
        }
      ]
    }
  ]

  readonly goalkeeperLine:PitchLine = {
    positions:[
      {
        player:null
      }
    ]
  }

  get goalkeeperPosition():PitchPlayerPosition{
    return this.goalkeeperLine.positions[0];
  }

  onPlayerDrop(event: CdkDragDrop<any>, position:PitchPlayerPosition){
    const playerSourceData:Player[] | PitchPlayerPosition = event.previousContainer.data;

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

        playerSourceData.player = null;
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
