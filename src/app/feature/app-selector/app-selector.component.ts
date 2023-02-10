import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category/shared/model/category';
import { CategoryService } from '../category/shared/service/category.service';
import { Provider } from '../provider/shared/model/provider';
import { ProviderService } from '../provider/shared/service/provider.service';
import { UnitMeasurement } from '../unit-measurement/shared/model/unit-measurement';
import { UnitMeasurementService } from '../unit-measurement/shared/service/unit-measurement.service';

@Component({
  selector: 'app-selector',
  templateUrl: './app-selector.component.html',
  styleUrls: ['./app-selector.component.sass']
})
export class AppSelectorComponent implements OnInit {

  optionsSelectorForm!: FormGroup

  @Output() categorySelected = new EventEmitter<Category>();
  @Output() unitMeasurementSelected = new EventEmitter<UnitMeasurement>();
  @Output() providerSelected = new EventEmitter<Provider>();

  listCategories: Category[] = [];
  listUnitMeasurements: UnitMeasurement[] = [];
  listProviders: Provider[] = [];

  category!: Category;
  unitMeasurement!: UnitMeasurement;
  provider!: Provider;

  constructor(
    private categoryService: CategoryService,
    private unitMeasureService: UnitMeasurementService,
    private providerService: ProviderService) {
    this.buildOptionsSelector();
  }

  ngOnInit(): void {
    this.categoryService.doGetList().subscribe(res => {
      this.listCategories = res
    });
    this.unitMeasureService.doGetList().subscribe(res => { this.listUnitMeasurements = res });
    this.providerService.doGetList().subscribe(res => { this.listProviders = res });
  }

  private buildOptionsSelector() {
    this.optionsSelectorForm = new FormGroup({
      Category: new FormControl('', [Validators.required]),
      UnitMeasurement: new FormControl('', [Validators.required]),
      Provider: new FormControl('', [Validators.required]),
    });
  }

  sendCategorySelected(category: Category) {
    category = this.optionsSelectorForm.get(['Category'])?.value;
    this.categorySelected.emit(category);
  }

  sendUMSelected(um: UnitMeasurement) {
    um = this.optionsSelectorForm.get(['UnitMeasurement'])?.value;
    this.unitMeasurementSelected.emit(um);
  }

  sendProviderSelected(provider: Provider) {
    provider = this.optionsSelectorForm.get(['Provider'])?.value;
    this.providerSelected.emit(provider);
  }

  get dataForm() { return this.optionsSelectorForm.controls; }

}
