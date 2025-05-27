import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-reader',
  templateUrl: './query-reader.component.html',
  styleUrls: ['./query-reader.component.css']
})
export class QueryReaderComponent implements OnInit {
  queryValue: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.queryValue = params.get('value');
    });
  }
}
