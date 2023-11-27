import { Component } from '@angular/core';
import { BlogPostComponent } from './blog-post/blog-post.component';

interface Product {
  productName: string;
  available: boolean;
}
@Component({
  selector: 'app-root',
  template: ` <app-blog-post
    title="Angular advanced component"
    author="J.R. Lansdale"
    date="01/11/202221"
  >
    <div class="blog-post-content">
      <p>
        Siamo in texas è un venerdi sera e l'Orbit è stipato di gente che
        sgomita per pop corn e Coca-cola, pregustando la Grande notte Horro
      </p>
    </div>
    <div class="blog-post-sidebar">
      <h2>blog posts</h2>
      <ul>
        <li>uno</li>
        <li>due</li>
        <li>tre</li>
        <li>quattro</li>
      </ul>
    </div>
    <hr />
    <div>
      <ul>
        <!-- in this case we create 5 span element the dom do not care about false or true -->
        <span *ngFor="let p of products"
          ><li *ngIf="p.available">{{ p.productName }}</li></span
        >
      </ul>
    </div>
    <div>
      <ul>
        <!-- in this case we create only the true element 3 element -->
        <ng-container *ngFor="let p of products"
          ><li *ngIf="p.available">{{ p.productName }}</li></ng-container
        >
      </ul>
    </div>
  </app-blog-post>`,
  styleUrls: [],
})
export class AppComponent {
  products: Product[] = [
    { productName: 'Pencil', available: true },
    { productName: 'Book', available: false },
    { productName: 'Notebook', available: true },
    { productName: 'Eraser', available: false },
    { productName: 'School Bag', available: true },
  ];
}
