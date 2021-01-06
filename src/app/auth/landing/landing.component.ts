import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  links = [
    { title: 'One', url: '/home' },
    { title: 'Two', url: '/painel' }
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
}
