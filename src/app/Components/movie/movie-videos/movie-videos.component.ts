import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {MovieService} from '../../../Services/movie.service';
import {CREDENTIALS} from '../../../Static/credentials';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  providers: [MovieService]
})

export class MovieVideosComponent implements OnInit {

  apiVideo = CREDENTIALS.apiVideo;
  videos = [];

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.updateVideos();
  }

  updateVideos(): void {
    this.route.params.switchMap((params: Params) => this.movieService
      .getVideos(params['id']))
      .subscribe(videos => {
        this.videos = videos['results'];
        console.log(this.videos);
      });
  }

  getUrl(key: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiVideo + key);
  }
}
