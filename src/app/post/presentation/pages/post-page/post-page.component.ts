import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModule } from '../../../post.module';
import PostEntity from '../../../domain/entities/post.entity';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { FindPostProvider } from '../../providers/find-post.provider';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [CommonModule, PostModule],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss',
  providers: [FindPostProvider],
})
export class PostPageComponent implements OnInit {
  post: PostEntity | null = null;

  constructor(
    private readonly findPostProvider: FindPostProvider,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.findPostProvider.post$.pipe(takeUntilDestroyed()).subscribe((post) => {
      this.post = post;
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.findPostProvider.findPost(parseInt(id));
  }
}
