import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductesService } from '../../../shared/services/productes.service';
import { CategoriesService } from '../../../shared/services/categories.service';
import { Products } from '../../../shared/interfaces/products';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchPipe } from '../../../shared/pipe/search.pipe';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CarouselModule,FormsModule,SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private _ProductesService:ProductesService,private _CategoriesService:CategoriesService){}

  allProducts:Products[] = []

  errorMess:string=''

  searchName:string = ''


  sliderImages:string[]=["assets/images/que-productos-vender-en-una-tienda-virtual-o-comercio-electronico.jpg",
    "assets/images/65d3613c4916dc2d6cb58567_Best-Product-Page-Examples-From-Luxury-Stores-Blog-Covers.webp",
  ]

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000, 
    autoplayHoverPause: true, 
    items: 1 , 
    mouseDrag: true,
    touchDrag: true,
    rtl : true ,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  customoptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl : true ,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
    },
    nav: true
  }


  ngOnInit(): void {

    this._ProductesService.getAllProducts().subscribe({
      next:(res)=>{
       this.allProducts = res ;
      },
      error:(err)=>{
      this.errorMess = err.error.message 
      }
    })

    this._CategoriesService.getAllCategories().subscribe((res)=>{
      console.log(res);  
    })
  
  }


}
