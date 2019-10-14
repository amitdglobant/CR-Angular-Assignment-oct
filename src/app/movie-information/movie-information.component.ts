import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../movie";
import { MovieInformationService } from "./movie-information.service";
// import {Observable, of} from "rxjs";
// import 'rxjs/add/observable/of';

@Component({
  selector: "app-movie-information",
  templateUrl: "./movie-information.component.html",
  styleUrls: ["./movie-information.component.css"],
  providers: [MovieInformationService]
})
export class MovieInformationComponent implements OnInit {
  private movie: Movie;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieInformationService: MovieInformationService
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      setTimeout(() => {
        this.movie = this._movieInformationService.getMovieById(
          params["id"]
        )[0];
      }, 1000);
    // Observable.of(true)
    // .delay(1000)
    // .do(() => {
    //   this.movie = this._movieInformationService.getMovieById(
    //     params["id"]
    //   )[0];
    // });
    });
  }
}
