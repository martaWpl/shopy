import { Injectable } from '@angular/core';
import {Observable, pipe, Subject} from "rxjs";
import {distinctUntilChanged, map, scan, shareReplay} from "rxjs/operators";
import {get, isEqual} from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class Action {
  constructor(type: string, payload?: any){}
}

export const reducer = () => {
  scan<any>((state, action) => {
    let next: any;
    switch(action.type) {
      case 'GET_PRODUCT':
        next = get(state, action.payload, null);
        break;
      case 'ADD_PRODUCT':
        next = {...state, ...action.payload };
        break;
      default:
        next = state;
        break;
    }

    return next;
  }, {})
};

export class Store {
  state: Observable<any>;
  actions$: Subject<Action> = new Subject();

  constructor() {
    // this.actions$.pipe(
    //   reducer(),
    //   shareReplay(1)
    // );
  }

  dispatch(action: Action){
    this.actions$.next(action);
  }

  select(path: string){
    //return this.state.slice(path);
  }
}

export const slice = (path) => {
  pipe(
    map(state => get(state, path, null))  ,
    distinctUntilChanged(isEqual)
  )
};
