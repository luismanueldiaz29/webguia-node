import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html',
  styleUrls: ['./list-site.component.css']
})
export class ListSiteComponent implements OnInit {
  // site : Site;
  sites = [];
  // galleries;
  Url = 'http://localhost:3000/images/'

  constructor(
    private siteServices : SiteService
  ) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.siteServices.get().subscribe(
      (data) => {
        this.parser(data);
      },(error) => {
      console.error(error)
    });
  }

  parser(sites : Site[]){

    sites.forEach((element, index, data )=> {
      
      let id = element['id'];
      let name = element['name'];
      let description = element['description'];
      let infoInterest = element['infoInterest'];

      var galleries = element['galleries'][0];
      let nameImg = galleries['nameImg'];
      let imgPath = galleries['imgPath'];

      var site : Site = {
        id : id,
        name: name,
        description: description,
        infoInterest: infoInterest, 
        nameImg: nameImg, 
        imgPath: imgPath
      }
      // console.log(site)
      this.sites.push(site);
    });

  }

}
