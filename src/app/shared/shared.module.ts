import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [CardComponent],
  imports: [],
  exports: [CardComponent]

  // This makes the CardComponent available for other modules to import and use. This is the equivalent of 'export * from './card/card.component';' in a regular TypeScript file.  // This is needed because other modules might want to import the CardComponent.  // In this case, it's the only component in the shared module, so it's not necessary to export it
    // If there were more components in the shared module, you
})
export class SharedModule{}
