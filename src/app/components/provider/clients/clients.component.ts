import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/provider/client';
import { LocalService } from 'src/app/services/local.service';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  isEditing: boolean;
  clients: Client[] = [];
  displayedColumns = ['id', 'firstName', 'lastName', 'gender', 'email', 'dob', 'instagramUsername', 'telegramUsername', 'phoneNumber', 'actions'];
  dataSource = new MatTableDataSource<Client>([]);

  constructor(
    private localStorage: LocalService,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    const clintsString = this.localStorage.getData('provider-clients');
    if (clintsString) this.clients = JSON.parse(clintsString);
    this.dataSource.data = this.clients;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      //  data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      result.id = this.clients.length;
      this.clients.push(result);
      this.localStorage.saveData('provider-clients', JSON.stringify(this.clients));
      this.dataSource.data = this.clients;
    });
  }


  remove(index: number) {
    this.clients.splice(index, 1);
    this.localStorage.saveData('provider-clients', JSON.stringify(this.clients));
    this.dataSource.data = this.clients;
  }

  edit(index: number) {
    // this.form.setValue(this.clients[index]);
    this.isEditing = true;

  }


}
