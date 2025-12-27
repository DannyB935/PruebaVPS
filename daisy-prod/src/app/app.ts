import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './services/clima.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('daisy-prod');
  private configSer = inject(ConfigService);

  public hacerLlamada() {
    this.configSer.getClimas().subscribe({
      next: (data) => {
        console.log('Climas: ', data);
      },
      error: (err) => {
        console.log('Error: ', err);
      },
    });
  }
}
