import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //   this.activatedRoute.params.subscribe((params) => {
    //     this.countriesService
    //       .searchCountryByAlphaCode(params['id'])
    //       .subscribe((countries) => {
    //         console.log(
    //           '🚀 turbo-cl ⯈ file: country-page.component.ts:19 ⯈ CountryPageComponent ⯈ this.countriesService.searchCountryByAlphaCode ⯈ countries: ',
    //           countries
    //         );
    //       });
    //   });

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        return (this.country = country);
      });
  }
}
