import { Component, OnInit } from '@angular/core';

interface List {
  idList: string;
  name: string;
  cardIds: string[];
}
interface Card {
  cardId: string;
  desc: string;
}

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  lists: List[] = lists;
  cards: { [key: string]: Card } = cards;

  constructor() { }

  ngOnInit() {
  }

}

const lists: List[] = [
  {
    idList: 'list-1',
    name: '基本',
    cardIds: [
      '5777d609f79809b328c674ea',
      '5777d609f79809b328c674ec',
      '5777d609f79809b328c674ed'
    ]
  },
  {
    idList: 'list-2',
    name: '中級',
    cardIds: [
      '5777d609f79809b328c674ee',
      '5777d609f79809b328c674f5'
    ]
  },
  {
    idList: 'list-3',
    name: '上級',
    cardIds: [
      '5777d609f79809b328c674f6',
      '5777d609f79809b328c674f7'
    ]
  }
]

const cards: { [key: string]: Card } = {
  '5777d609f79809b328c674ea': {
    cardId: '5777d609f79809b328c674ea',
    desc: 'Trelloにようこそ'
  },
  '5777d609f79809b328c674ec': {
    cardId: '5777d609f79809b328c674ec',
    desc: 'これはカードです。'
  },
  '5777d609f79809b328c674ed': {
    cardId: '5777d609f79809b328c674ed',
    desc: 'Trelloにようこそ！'
  },
  '5777d609f79809b328c674ee': {
    cardId: '5777d609f79809b328c674ee',
    desc: 'Trelloにようこそ！！'
  },
  '5777d609f79809b328c674f5': {
    cardId: '5777d609f79809b328c674f5',
    desc: 'ピースサイン'
  },
  '5777d609f79809b328c674f6': {
    cardId: '5777d609f79809b328c674f6',
    desc: 'ipad買おうかな'
  },
  '5777d609f79809b328c674f7': {
    cardId: '5777d609f79809b328c674f7',
    desc: 'どうしようかな'
  }
}