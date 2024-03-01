import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  searchByRegion(term: string) {
    this.countryService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
