import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent], // Declare all non-standalone components, directives... that are used in different components
    exports: [CardComponent] // Exporting the specific components (CardComponent) to make it available to other modules
})

export class SharedModule {}