import { Component } from '@angular/core';
import { BlogPostComponent } from './blog-post/blog-post.component';
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
    <div>rest without selector</div>
  </app-blog-post>`,
  styleUrls: [],
})
export class AppComponent {}
