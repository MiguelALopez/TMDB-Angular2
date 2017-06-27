import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {MovieService} from '../../../Services/movie.service';
import {CREDENTIALS} from '../../../Static/credentials';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  providers: [MovieService]
})

export class MovieCastComponent implements OnInit {
  title = 'Cast';

  apiImg = CREDENTIALS.apiImg + 'w500_and_h500_bestv2';
  people = [];

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.updateCast();
  }

  updateCast(): void {
    this.route.params.switchMap((params: Params) => this.movieService
      .getCredits(params['id']))
      .subscribe(cast => {
        this.people = cast['cast'];
        // console.log(this.people);
      });
  }
}
