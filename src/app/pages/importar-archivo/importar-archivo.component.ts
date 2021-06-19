import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-importar-archivo',
  templateUrl: './importar-archivo.component.html',
  styleUrls: ['./importar-archivo.component.css']
})
export class ImportarArchivoComponent implements OnInit {
  willDownload = false;

  constructor() { }

  ngOnInit(): void {
  }

    onFileChange(ev:any): void {
      let workBook: XLSX.WorkBook;
      let jsonData;
      const reader = new FileReader();
      const file = ev.target.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        console.log(workBook.SheetNames)
        jsonData = workBook.SheetNames.reduce((initial, name:any) => {
          console.log(initial)
           const sheet = workBook.Sheets[name];
          initial = {'name': XLSX.utils.sheet_to_json(sheet)}
           return initial;
        }, {});        
        const dataString = JSON.stringify(jsonData);
        console.log(dataString)
      }      
      reader.readAsBinaryString(file);
    }
}
