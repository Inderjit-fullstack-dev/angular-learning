import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isActive = true;
  isRed = true;

  divClicked = () => console.log("div is clicked.");
  btnClicked = (event) => {
    event.stopPropagation();
    console.log("button is clicked.");
  };

  toggleColor = () => (this.isRed = !this.isRed);

  // method for setting up the color.
  setColor = () => (this.isRed ? "red" : "blue");
}
