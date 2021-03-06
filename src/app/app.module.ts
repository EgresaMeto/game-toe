import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';

import { environment } from '../environments/environment';
import { AiBoardComponent } from './ai-board/ai-board.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, CellComponent, AiBoardComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'turn-based', component: BoardComponent },
      { path: 'ai', component: AiBoardComponent },
      { path: '**', redirectTo: '' },
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
