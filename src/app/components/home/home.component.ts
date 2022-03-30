import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SolariComponent } from '../proyectos/solari/solari.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  codObra = '';
  home = true;
  //obras
  solari=false;
  constructor( private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  renderObra() {
    switch (this.codObra) {
      case '':
        this.openSnackBar('Ingrese un codigo de seguimiento');
        break;
      case 'BE000001':
        this.home= false;
        this.solari=true;

        break;
      default:
        this.openSnackBar('El codigo no existe');
        break;
    }
  }

  openSnackBar(message: string) {
    let action = 'X';
    let config: MatSnackBar;
    this._snackBar.open(message, action,{duration: 3000,horizontalPosition:'center',verticalPosition:'top'});
  }
}
