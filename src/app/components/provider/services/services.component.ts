import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ProviderService, ServiceType } from 'src/app/models/provider/service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  isEditing: boolean;
  services: ProviderService[] = [];
  form: FormGroup;
  serviceTypes = ['Единоразово', 'Абонемент', 'Групповое']

  displayedColumns: string[] = ['id', 'title', 'duration', 'type', 'classesQuantity', 'groupSize', 'price', 'actions'];
  dataSource = new MatTableDataSource<ProviderService>([]);
  constructor(
    private fb: FormBuilder,
    private localStorage: LocalService
  ) { }

  ngOnInit() {
    this.services = JSON.parse(this.localStorage.getData('provider-services') ?? '');
    this.dataSource.data = this.services;
    this.form = this.fb.group({
      id: 0,
      title: '',
      duration: '',
      price: '',
      type: '',
      classesQuantity: '',
      groupSize: '',
    })
  }

  onSubmit() {
    if (this.isEditing) {
      const index = this.services.findIndex((service) => service.id === this.form.value.id)
      this.services.splice(index, 1, this.form.value);
      this.isEditing = false;
    } else {
      this.form.controls['id'].setValue(this.services.length + 1);
      this.services.push(this.form.value);
    }
    this.localStorage.saveData('provider-services', JSON.stringify(this.services));
    this.dataSource.data = this.services;
    this.form.reset();
  }

  remove(id: number) {
    const index = this.services.findIndex((service) => service.id === id);
    this.services.splice(index, 1);
    this.localStorage.saveData('provider-services', JSON.stringify(this.services));
    this.dataSource.data = this.services;
  }

  edit(index: number) {
    this.form.setValue(this.services[index]);
    this.isEditing = true;
  }
}
