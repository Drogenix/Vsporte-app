import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Player} from "../../core/entity/player";
import {NgForOf} from "@angular/common";
import {CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDragPreview, CdkDropList} from "@angular/cdk/drag-drop";
import {PitchPlayerPosition} from "../../core/entity/pitch-player-position";
import {FullnamePipe} from "../../core/pipes/fullname.pipe";

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    NgForOf,
    CdkDrag,
    CdkDropList,
    CdkDragPreview,
    CdkDragPlaceholder,
    FullnamePipe
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersListComponent {

  readonly players:Player[] = [
    {
      imageUrl: "https://cdn.forbes.ru/forbes-static/new/2022/11/GettyImages-1358485714-copy-637dd00986080.jpg",
      number: 7,
      firstName: "Криштиану",
      lastName: "Роналду"
    },
    {
      imageUrl: "https://sportyakutia.ru/images/1fotoposel/1posel2020/aug21/6276723.jpg",
      number: 30,
      firstName: "Лионель",
      lastName: "Месси"
    },
    {
      imageUrl: "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/98/1b/f81294fde5726a25fe914b9fcba97fc85e7785479297f142360402.jpg",
      number: 9,
      firstName: "Луис",
      lastName: "Суарез"
    },
    {
      imageUrl: "https://cdnn1.img.sputnik-georgia.com/img/24069/05/240690529_0:0:1455:2000_600x0_80_0_1_8959c6d2be7b3ddc99aa09cfbb720ae9.jpg",
      number: 8,
      firstName: "Зинедин",
      lastName: "Зидан"
    },
    {
      imageUrl: "https://ss.sport-express.ru/userfiles/materials/44/447272/large.jpg",
      number: 6,
      firstName: "Андрес",
      lastName: "Иньеста"
    },
    {
      imageUrl: "https://allsportinfo.ru/files/maradona.jpg",
      number: 10,
      firstName: "Диего",
      lastName: "Марадона"
    },
    {
      imageUrl: "https://sportsheroes.ru/wp-content/uploads/2019/02/Napadajushhij-sbornoj-Brazilii-Ronaldo-na-chempionate-mira-2002-1024x683.jpg",
      number: 11,
      firstName: "Роналдо",
      lastName: ""
    },
    {
      imageUrl: "https://news.store.rambler.ru/img/a9b6c1f7f0e836061a2492971d03a0d0?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen",
      number: 3,
      firstName: "Паоло",
      lastName: "Мальдини"
    },
    {
      imageUrl: "https://photobooth.cdn.sports.ru/preset/post/c/aa/8d3add19846888993212ecdb413a4.jpeg",
      number: 5,
      firstName: "Франц",
      lastName: "Беккенбауэр"
    },
    {
      imageUrl: "https://img.championat.com/i/m/n/1642541630461042575.jpg",
      number: 2,
      firstName: "Кафу",
      lastName: ""
    },
    {
      imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/9400491/pub_6412d2285dabd819c37bbdd3_6412d2c0bd997e7b7d6669d9/scale_1200",
      number: 6,
      firstName: "Роберто",
      lastName: "Карлос"
    },
    {
      imageUrl: "https://assets.gq.ru/photos/5d9f55631baddb000850e58e/master/w_1600%2Cc_limit/01.jpg",
      number: 1,
      firstName: "Лев",
      lastName: "Яшин"
    },
    {
      imageUrl: "https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/6f/a9/9834a603e41779a276be2eda3e7ac985550c759e93e68646800294.jpg",
      number: 23,
      firstName: "",
      lastName: "Роналдиньо"
    },
    {
      imageUrl: "https://i.bigenc.ru/resizer/resize?sign=SMDZWk_NV8jdxiZ1x1eh6w&filename=vault/b4c49bbfdaf5a27c227076618687cdc7.webp&width=1200",
      number: 8,
      firstName: "Йохан",
      lastName: "Кройф"
    }
  ]

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
