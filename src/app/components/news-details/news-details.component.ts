import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  currentNews = null;
  message = '';

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getNews(this.route.snapshot.paramMap.get('id'));
  }

  getNews(id) {
    this.newsService.get(id)
      .subscribe(
        data => {
          this.currentNews = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateNews() {
    this.newsService.update(this.currentNews)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The news are updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteNews() {
    this.newsService.delete(this.currentNews.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/news']);
        },
        error => {
          console.log(error);
        });
  }
}
