import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MovieFormComponent } from "./movie-form.component";

describe("HomeComponent", () => {
  let component: MovieFormComponent;
  let fixture: ComponentFixture<MovieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create Movie-Form-Component", () => {
    expect(component).toBeTruthy();
  });
  it("should create Movie-Form-Component", () => {
    expect(component).toBeTruthy();
  });
});
