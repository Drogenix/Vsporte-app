import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDragPreview,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { PitchPlayerPosition, Player } from '../../core/entity';
import { FullnamePipe } from '../../core/pipes/fullname.pipe';
import { PlayersService } from '../../core/services/players.service';
import { Observable } from 'rxjs';
import { listFadeInAnimation } from '../../core/animations/list-fade-in.animation';

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
    AsyncPipe,
  ],
  animations: [listFadeInAnimation],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersListComponent {
  private playersService = inject(PlayersService);

  public readonly players$: Observable<Player[]> = this.playersService.getAll();

  constructor() {}

  public onPlayerDrop(event: CdkDragDrop<any>) {
    if (this.isPlayerFromList(event)) return;

    const pitchPlayerPosition: PitchPlayerPosition =
      event.previousContainer.data;

    const droppedPlayer = pitchPlayerPosition.player;

    if(droppedPlayer){
      const playersList: Player[] = event.container.data;

      playersList.splice(event.currentIndex, 0, droppedPlayer);

      pitchPlayerPosition.player = null;
    }
  }

  private isPlayerFromList(event: CdkDragDrop<any>): boolean {
    return event.previousContainer === event.container;
  }
}
