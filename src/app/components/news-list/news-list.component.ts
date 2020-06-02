import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news: any;
  currentNews = null;
  currentIndex = -1;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.retrieveNews();
  }

  retrieveNews() {
    this.newsService.getAll()
      .subscribe(
        data => {
          this.news = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveNews(news, index) {
    this.currentNews = news;
    this.currentIndex = index;
  }
}
