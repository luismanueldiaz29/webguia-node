import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';
import { UpdateService } from 'src/app/services/update.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit, OnDestroy {

  private subcriptionSite : Subscription = new Subscription();

  imageUrl = "../../../assets/default-image.png";
  fileToUpload: any;
  images;
  files;
  successfulMessage = '';
  site;
  sitePost;

  constructor(
    private siteService : SiteService,
    private uploadService : UpdateService,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.subcriptionSite.unsubscribe();
  }

  init(){
    this.site = {name:"", description: "", infoInterest: "", nameImg:"", imgPath:""}
  }

  handleFileInput(event) {
    // Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }

    if (event.target.files.length > 0) {
      //upload image
      const file = event.target.files[0];
      this.images = file;

      //show image preview
      this.files = event.target.files;
      this.fileToUpload = this.files.item(0);
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  post(){
    // console.log(this.sitePost)
    this.subcriptionSite.add(
      this.siteService.post(this.sitePost).subscribe(
        siteRes => {
          console.log(siteRes);
        }, error => {
          console.log(error);
        }
      )
    );
  }
  onSubmit() {
    this.sitePost = this.site;
    this.postUpload();
  }

  postUpload(){
    const formData: FormData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>('http://localhost:3000/api/upload', formData).subscribe(
      data => {
        this.sitePost.imgPath = data.path;
        this.sitePost.nameImg = data.filename;
        this.post();
      }, error => {
        console.log(error)
      }
    );
  }

}
