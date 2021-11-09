import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosService } from 'src/app/Services/libros.service';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent implements OnInit {

  constructor(private _librosService: LibrosService, private _router:Router) { }
 libros:Array<any> = [];
  ngOnInit(): void {
    this.getFruits();
  }
  getFruits() {
    this._librosService.getAllLibros().subscribe((libro) => {
      //console.log(users);
      this.libros = libro;
    });
  }
  LibroDetail(userId: string) {
    this._router.navigate(["detail/" + userId]);
  }

}
