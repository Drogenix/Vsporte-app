import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

export const listFadeInAnimation = trigger("listFadeIn",[
  transition("* => *", [
    query(":enter",[
      style({
        opacity:0,
        transform:"scale(0.4)"
      }),
      stagger(75, [
        animate("300ms ease-in", style({
          opacity:1,
          transform:"scale(1)"
        }))
      ])
    ])
  ])
]);
