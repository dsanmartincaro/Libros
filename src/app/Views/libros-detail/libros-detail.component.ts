import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/Services/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros-detail',
  templateUrl: './libros-detail.component.html',
  styleUrls: ['./libros-detail.component.css']
})
export class LibrosDetailComponent implements OnInit {
  userId: any;
  libro: any;
  constructor(private _librosService: LibrosService, private _activatedRoute: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.userId = this._activatedRoute.snapshot.paramMap.get("id")
    this.getLibro(this.userId);
  }
  getLibro(userId:any){
    this._librosService.getLibro(userId).subscribe((data)=>{
      //console.log(data);
      this.libro = data;
    });
  }
  Libroback() {
    this._router.navigate([""]);
  }
  
}
