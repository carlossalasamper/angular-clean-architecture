import { Routes } from '@angular/router';
import { PostsPageComponent } from '../../post/presentation/pages/posts-page/posts-page.component';
import { PostPageComponent } from '../../post/presentation/pages/post-page/post-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PostsPageComponent,
  },
  {
    path: 'posts/:id',
    component: PostPageComponent,
  },
];
