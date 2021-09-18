import { Component, OnInit } from '@angular/core';
import { FolioService } from 'src/app/services/folio.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-importar-archivo',
  templateUrl: './importar-archivo.component.html',
  styleUrls: ['./importar-archivo.component.css']
})
export class ImportarArchivoComponent implements OnInit {
  public archivo: File | null = null;
  public dataString: string = "";
  public loader: boolean = false;
  public res = {
    type: "",
    message: ""
  };
  constructor(public folioService: FolioService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onFileCharge(ev: any): void {
    this.loader = true;
    let workBook: XLSX.WorkBook;
    let jsonData;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name: any) => {
        const sheet = workBook.Sheets[name];
        initial = { 'name': XLSX.utils.sheet_to_json(sheet) }
        return initial;
      }, {});
      this.dataString = JSON.stringify(jsonData);
      this.loader = false;
    }
    reader.readAsBinaryString(file);
  }

  importarArchivo() {
    this.loader = true;
    this.folioService.cargarFolios(this.dataString).subscribe(
      res => {
        this.router.navigate(['./validar-folios']);
        this.loader = false;
      },
      err => console.log(err)
    )
  }
}
