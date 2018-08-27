import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './Hero';
import {HEROES } from './mock-heroes';
import { Observable, of } from '../../node_modules/rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`Hero Service: fetched hero id =${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private heroesUrl = 'api/heroes';  // URL to web api

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: Fetched Heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
    //return of(HEROES);
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
}
