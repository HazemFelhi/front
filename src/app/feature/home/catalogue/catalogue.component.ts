import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  categories: any[] = [
    {
      "title": "Tout",
    },
    {
      "title": "IaaS",
    },
    {
      "title": "PaaS",
    },
    {
      "title": "SaaS",
    },
    {
      "title": "Backup",
    }
  ];

  services: any[] = [
    { name: 'Monitoring', imageUrl:'assets/monitoring.png',   category: 'IaaS',  description: 'Surveiller les performances' },
    { name: 'Virtual Machine ', imageUrl:'assets/vm.png', category: 'PaaS', description: 'Exécuter des charges de travail diverses' },
    { name: 'Kubernetes', imageUrl:'assets/kubernetes.png',  category: 'SaaS',  description: 'Orchestration de conteneurs' },
    { name: 'Network Lab', imageUrl:'assets/nl.png',  category: 'SaaS',  description: 'Environnement virtuel réseau' },
    { name: 'Openstack Project', imageUrl:'assets/monitoring.png', category: 'Backup',  description: 'Créer et gérer des infrastructures' },
    
    
  ];
  isConsulted = false;
  allCat:any;
  allSer:any;
  cat:any;
  constructor() { }
  getAllCategory() {
    this.allCat = this.categories;
    console.log(this.allCat);
  }
  
  getAllService() {
    this.allSer = this.services;
    this.cat = this.services;
  }

  filterData(cat: any) {
    if (cat.title === "Tout") {
      this.allSer = this.cat;
    } else {
      this.allSer = this.cat.filter((data: any) => {
        return data.category === cat.title;
      });
    }
  }
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllService();
  }

}
