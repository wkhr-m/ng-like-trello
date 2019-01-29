import { Component, Input, OnInit } from '@angular/core';

export interface Boards {
  fav?: Board[];
  recent?: Board[];
  personal: Board[];
}

export interface Board {
  color?: string;
  img?: string;
  title: string;
  id: string;
  fav?: boolean;
}
export interface BoardHeader {
  id: string;
  title: string;
  icon: string;
}

const init: Boards = {
  personal: [
    {
      color: 'blue',
      title: 'CDKのDNDでない',
      id: 'not-cdk-dnd'
    },
    {
      color: 'green',
      title: 'CDKのDND',
      id: 'yes-cdk-dnd'
    }
  ]
}
const boardHeader: BoardHeader[] = [
  {
    id: 'fav',
    title: 'スター付きボード',
    icon: 'far fa-star',
  },
  {
    id: 'recent',
    title: '最近の表示',
    icon: 'far fa-clock',
  },
  {
    id: 'personal',
    title: 'パーソナルボード',
    icon: 'fas fa-user',
  }
]
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() boards: Boards = init;
  boardHeader: BoardHeader[] = boardHeader;
  constructor() { }

  ngOnInit() {
  }

  onFavBoard(board: Board, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (board.fav) {
      board.fav = false;
      const index = this.boards.fav.findIndex(({ id }) => id === board.id);
      if (index >= 0) {
        this.boards.fav.splice(index, 1);
      }
    } else {
      board.fav = true;
      if (!this.boards.fav) {
        this.boards.fav = [];
      }
      this.boards.fav.push(board);
    }
  }


}
