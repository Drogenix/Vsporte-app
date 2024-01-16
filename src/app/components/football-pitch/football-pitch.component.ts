import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { NgForOf, NgIf } from '@angular/common';
import { FullnamePipe } from '../../core/pipes/fullname.pipe';
import { PitchLine, PitchPlayerPosition, Player } from '../../core/entity';

@Component({
  selector: 'app-football-pitch',
  standalone: true,
  imports: [CdkDropList, NgForOf, NgIf, CdkDrag, FullnamePipe],
  templateUrl: './football-pitch.component.html',
  styleUrl: './football-pitch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FootballPitchComponent {
  public readonly pitchLines: PitchLine[] = [
    {
      positions: [
        {
          player: null,
        },
        {
          player: null,
        },
        {
          player: null,
        },
      ],
    },
    {
      positions: [
        {
          player: null,
        },
        {
          player: null,
        },
        {
          player: null,
        },
        {
          player: null,
        },
      ],
    },
    {
      positions: [
        {
          player: null,
        },
        {
          player: null,
        },
        {
          player: null,
        },
      ],
    },
  ];

  public readonly goalkeeperLine: PitchLine = {
    positions: [
      {
        player: null,
      },
    ],
  };

  public get goalkeeperPosition(): PitchPlayerPosition {
    return this.goalkeeperLine.positions[0];
  }

  public onPlayerDrop(event: CdkDragDrop<any>, position: PitchPlayerPosition) {
    const playerSourceData: Player[] | PitchPlayerPosition = event.previousContainer.data;

    if (Array.isArray(playerSourceData)) {
      const droppedItemIndex = event.previousIndex;

      const droppedPlayer = playerSourceData.splice(droppedItemIndex, 1)[0];

      if (position.player) {
        playerSourceData.splice(droppedItemIndex, 0, position.player);
      }

      position.player = droppedPlayer;
    } else {
      const droppedPlayer = playerSourceData.player;

      if (!position.player) {
        position.player = droppedPlayer;

        playerSourceData.player = null;
      }

      if (position.player === droppedPlayer) return;

      this.swapPlayersPosition(
        position,
        playerSourceData as PitchPlayerPosition,
      );
    }
  }

  private swapPlayersPosition(
    currentPosition: PitchPlayerPosition,
    newPosition: PitchPlayerPosition,
  ) {
    const currentPlayer = currentPosition.player;

    currentPosition.player = newPosition.player;
    newPosition.player = currentPlayer;
  }
}
