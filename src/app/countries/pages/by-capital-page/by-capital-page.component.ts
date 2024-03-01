import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  searchByCapital(term: string) {
    this.countryService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
