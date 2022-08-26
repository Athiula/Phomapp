import { Component, OnInit } from '@angular/core';
import {PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  photos = [];
  constructor(private photoService: PhotoService) {}

  ngOnInit(){
    this.photos = this.photoService.getPhotos();
    console.log(this.photos);
  }

  newPhoto(){
    this.photoService.takePhoto();
  }
}
