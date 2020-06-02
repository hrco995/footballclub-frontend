import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  news = {
    title: '',
    content: ''
  };
  submitted = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  saveNews() {
    const data = {
      title: this.news.title,
      content: this.news.content
    };

    this.newsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newNews() {
    this.submitted = false;
    this.news = {
      title: '',
      content: ''
    };
  }

}
