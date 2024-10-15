import { Component } from '@angular/core';

@Component({
  selector: 'app-e-store',
  templateUrl: './e-store.component.html',
  styleUrls: ['./e-store.component.sass']
})
export class EStoreComponent {

  public scrollCarousel(direction:number) {
    const container:any = document.querySelector('.carousel-container');
    const scrollAmount = container.clientWidth;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
}
