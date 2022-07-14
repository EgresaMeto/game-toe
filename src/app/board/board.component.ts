import { Component, OnInit } from '@angular/core';
import { Piece } from '../models/piece';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  private currentPlayer = {piece: Piece.EMPTY, name: ""};
  firstPlayer: string = "Player 1";
  secondPlayer: string = "Player 2";
  gameOver: boolean = false;
  board: Piece[][] = [];
  statusMessage: string = '';
  twoPlayerLogs: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.twoPlayerLogs = [];
    this.board = [
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
      [Piece.EMPTY, Piece.EMPTY, Piece.EMPTY],
    ];
    this.currentPlayer.piece = Piece.X;
    this.currentPlayer.name = this.firstPlayer;
    this.gameOver = false;
    this.statusMessage = `Player ${this.currentPlayer.name}'s turn`;
  }

  goToMove(move: any, index: number){
    if(this.twoPlayerLogs.length - 1 === index){
      if (this.isWin()) {
        let winnerName = this.currentPlayer.piece !== Piece.O ? this.firstPlayer: this.secondPlayer;
         this.statusMessage = `Player ${winnerName} win!`;
         this.gameOver = true;
         return
       }
      this.statusMessage = `Player ${this.currentPlayer.name}'s turn`;
      this.board = move.board;
        
    } else {
      this.statusMessage = "Pause"
      this.board = move.board;
    }
  }

  getBoardValue(): Piece[][]{
    return this.board
  }

  move(row: number, col: number) {
    if( this.statusMessage === "Pause" && !this.gameOver) {
      return
    }
    if (!this.gameOver && this.board[row][col] === Piece.EMPTY) {
      this.board[row][col] = this.currentPlayer.piece;
      this.twoPlayerLogs = [...this.twoPlayerLogs, {log: `${this.currentPlayer.name} " clicked on row:" ${row} " and col: " ${col} element ${this.currentPlayer.piece}`, board: JSON.parse(JSON.stringify(this.board)) }]
      if (this.isDraw()) {
        this.statusMessage = `It's a Draw.`;
        this.gameOver = true;
      } else if (this.isWin()) {
       let winnerName = this.currentPlayer.piece !== Piece.O ? this.firstPlayer: this.secondPlayer;
        this.statusMessage = `Player ${winnerName} win!`;
        this.gameOver = true;
      } else {
        this.currentPlayer.piece = this.currentPlayer.piece === Piece.O ? Piece.X : Piece.O;
        this.currentPlayer.name = this.currentPlayer.piece === Piece.O ? this.firstPlayer : this.secondPlayer;
        this.statusMessage = `Player ${this.currentPlayer.name}'s turn`;
      }
    }
  }

  isDraw(): boolean {
    if (this.board.some((row) => row.some((c) => c === Piece.EMPTY))) {
      return false;
    }
    return !this.isWin();
  }

  isWin(): boolean {
    // horizontal
    for (const col of this.board) {
      if (col[0] == col[1] && col[0] == col[2] && col[0] != Piece.EMPTY) {
        return true;
      }
    }

    // vertical
    for (let col = 0; col < this.board[0].length; col++) {
      if (
        this.board[0][col] === this.board[1][col] &&
        this.board[0][col] === this.board[2][col] &&
        this.board[0][col] != Piece.EMPTY
      ) {
        return true;
      }
    }

    // diagonal
    if (
      (this.board[0][0] === this.board[1][1] &&
        this.board[0][0] === this.board[2][2] &&
        this.board[0][0] != Piece.EMPTY) ||
      (this.board[0][2] === this.board[1][1] &&
        this.board[0][2] === this.board[2][0] &&
        this.board[0][2] != Piece.EMPTY)
    ) {
      return true;
    }

    return false;
  }

  setFirstPlayerName(event: any){
    this.firstPlayer = event.target.value;
  }

  setSecondPlayerName(event: any){
    this.secondPlayer = event.target.value;
  }
}
