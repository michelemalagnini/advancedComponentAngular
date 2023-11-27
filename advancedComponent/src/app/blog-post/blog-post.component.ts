import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-blog-post',
  template: `<div class="blog-post">
    <h2>{{ title }}</h2>
    <p class="author">{{ author }}</p>
    <p class="date">{{ date }}</p>
    <ng-content select=".blog-post-content"></ng-content>
    <ng-content select=".blog-post-sidebar"></ng-content>
    <ng-content></ng-content>
  </div>`,
  styleUrls: [],
})
export class BlogPostComponent {
  @Input() title: string | undefined;
  @Input() author: string | undefined;
  @Input() date: string | undefined;
}
