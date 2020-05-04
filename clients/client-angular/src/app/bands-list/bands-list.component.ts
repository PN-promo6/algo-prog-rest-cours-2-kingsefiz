import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data-service/data.service";

@Component({
  selector: "app-bands-list",
  templateUrl: "./bands-list.component.html",
  styleUrls: ["./bands-list.component.css"],
})
export class BandsListComponent implements OnInit {
  constructor(private dataService: DataService) {}
  bands: any;
  isCollapsed: boolean = true;

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.dataService.fetchBands().subscribe(
      (res) => {
        this.bands = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
