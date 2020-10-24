import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // isActive = true;
  // isRed = true;
  // divClicked = () => console.log("div is clicked.");
  // btnClicked = (event: any) => {
  //   event.stopPropagation();
  //   console.log("button is clicked.");
  // };
  // toggleColor = () => (this.isRed = !this.isRed);
  // setColor = () => (this.isRed ? "red" : "blue");

  // Event Filtering
  onKeyUp = (event: any) => {
    if (event.keyCode === 13) {
      console.log("send message");
    }
  };

  onEnterPressed = (event: any) => {
    console.log(event.target.value);
  };
}
