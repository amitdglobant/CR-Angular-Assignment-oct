import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CustomMaterialModule } from "./material.module";
import {
  HttpClientModule /* other http imports */
} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieFormComponent } from "./movie-form/movie-form.component";
import { MovieInformationComponent } from "./movie-information/movie-information.component";
import { FormatDatePipe } from './movie-information/format-date.pipe';
import { MovieInformationService } from "./movie-information/movie-information.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieFormComponent,
    MovieInformationComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MovieInformationService, FormatDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
