import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPostsProvider } from '../../providers/get-posts.provider';
import { PostModule } from '../../../post.module';
import PostEntity from '../../../domain/entities/post.entity';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [CommonModule, PostModule, RouterLink],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.scss',
  providers: [GetPostsProvider],
})
export class PostsPageComponent implements OnInit {
  posts: PostEntity[] = [];

  constructor(private readonly getPostsProvider: GetPostsProvider) {
    this.getPostsProvider.results$
      .pipe(takeUntilDestroyed())
      .subscribe((posts) => {
        this.posts = posts;
      });
  }

  ngOnInit() {
    this.getPostsProvider.getPosts();
  }
}
