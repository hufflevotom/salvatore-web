import { Component, OnInit } from '@angular/core';
import { FolioService } from 'src/app/services/folio.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-importar-archivo',
  templateUrl: './importar-archivo.component.html',
  styleUrls: ['./importar-archivo.component.css']
})
export class ImportarArchivoComponent implements OnInit {
  willDownload = false;

  constructor(public folioService: FolioService) { }

  ngOnInit(): void {
  }

  onFileCharge(ev: any): void {
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
      const dataString = JSON.stringify(jsonData);
      console.log(dataString);
      this.folioService.cargarFolios(dataString).subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
    }
    reader.readAsBinaryString(file);
  }
}
