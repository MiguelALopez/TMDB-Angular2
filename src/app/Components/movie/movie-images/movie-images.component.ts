import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {MovieService} from '../../../Services/movie.service';
import {CREDENTIALS} from '../../../Static/credentials';

@Component({
  selector: 'app-movie-images',
  templateUrl: './movie-images.component.html',
  providers: [MovieService]
})

export class MovieImagesComponent implements OnInit {
  title = 'Images';

  apiImg = CREDENTIALS.apiImg + 'w500';
  apiImgOrig = CREDENTIALS.apiImg + 'original';
  posters =[];
  backdrops = [];

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.updateImages();
  }

  updateImages(): void {
    this.route.params.switchMap((params: Params) => this.movieService
      .getImages(params['id']))
      .subscribe(images => {
        this.posters = images['posters'];
        this.backdrops = images['backdrops'];
        console.log(images);
      });
  }
}
