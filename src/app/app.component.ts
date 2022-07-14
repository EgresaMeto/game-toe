import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div
      style="text-align:center;
  color: black;  text-transform: uppercase;margin-top:1rem;"
    >
      <h1
        style="text-shadow: 2px 2px; background-color: black;
  color: white; font-size: 50px;"
      >
        Tic-Tac-Toe
      </h1>

      <nav style="margin-top: 2rem; margin-bottom: 2rem; ">
        <a
          routerLink="turn-based"
          routerLinkActive="active"
          style="width: 10rem; "
          >Two Players</a
        >
        <div style="width: 1rem; display: inline-block;"></div>
        <a routerLink="ai" routerLinkActive="active">AI</a>
      </nav>
    </div>
    <div style="margin:0 auto; max-width:300px;">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      nav a {
        display: inline-block;
        color: #000;
        background: #dbeccd;
        padding: 0.5rem 1rem;
        width: 5rem;
        text-decoration: none;
        white-space: nowrap;
      }

      nav a.active {
        background-color: #4caf50;
        color: white;
        font-weight: 500;
      }

      nav a:hover:not(.active) {
        background-color: #8cad70;
        color: white;
      }
    `,
  ],
})
export class AppComponent {}
