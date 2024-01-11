import { Injectable } from '@angular/core';
import {Player} from "../entity/player";
import {delay, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Player[]>{
    return this.http.get<Player[]>("assets/data/mock-players.json").pipe(
      delay(500)
    );
  }
}
