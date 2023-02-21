import {AfterViewInit, Component} from '@angular/core';
import {Step} from "../shared/models/step";
import {AbstractLayoutComponent} from "../shared/layout/abstract-layout.component";
import {LayoutService} from "../shared/services/layout.service";

@Component({
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss'],
})
export class AProposComponent
  extends AbstractLayoutComponent
  implements AfterViewInit {
  steps: Step[] = [
    {
      number: 1,
      title: 'Etat des lieux',
      description: 'de votre situation individuelle dans sa globalité',
    },
    {
      number: 2,
      title: 'Conseil personnalisé',
      description: 'retranscrits en détails dans une fiche récapitulative : alimentation, micronutrition, etc …',
    },
    {
      number: 3,
      title: 'Fiches complémentaires',
      description: 'En fonction de vos besoins : liste de courses type, recettes, listes d’aliments, techniques de respiration, illustrations, etc …',
    },
  ];

  constructor(protected override layoutService: LayoutService) {
    super(layoutService);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.layoutService.layoutConfiguration$.next({
      ...this.layoutService.layoutConfiguration$.value,
      title: 'A propos de moi',
      backgroundImage: 'plage.jpg',
    });
  }
}
