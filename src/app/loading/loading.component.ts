import { Component, Inject, signal, Signal } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  constructor( private loadingService: LoadingService){}

  // loadingService= Inject(LoadingService); user inject or constructor

  loading = this.loadingService.loadig();

}
