import {Helper} from "../Helper";
import {AbstractView} from "./AbstractView";
import {views} from "../types/strategy/views";
import {cards} from "../types/strategy/cards";
import {EntityRegistryEntry} from "../types/homeassistant/data/entity_registry";

// noinspection JSUnusedGlobalSymbols Class is dynamically imported.
/**
 * Lawn Mower View Class.
 *
 * Used to create a view for entities of the lawn_mower domain.
 *
 * @class LawnMowerView
 * @extends AbstractView
 */
class LawnMowerView extends AbstractView {
  /**
   * Domain of the view's entities.
   *
   * @type {string}
   * @static
   * @private
   */
  static #domain: string = "lawn_mower";

  /**
   * Default configuration of the view.
   *
   * @type {views.ViewConfig}
   * @protected
   */
  defaultConfig: views.ViewConfig = {
    id: LawnMowerView.#domain,
    title: "Lawn Mowers",
    path: "lawn-mowers",
    icon: "mdi:robot-mower",
    subview: false,
    controllerCardOptions: {
      iconOn: "mdi:robot-mower",
      iconOff: "mdi:robot-mower-outline",
      onService: "lawn_mower.start_mowing",
      offService: "lawn_mower.dock",
    },
  };

  /**
   * Get default configuration of the view's Controller card.
   *
   * @param {EntityRegistryEntry[]} [entities] relevant entities for this card
   * @param {string?} groupName can be used to define alternative domain name for card
   *
   * @return {cards.ControllerCardOptions}
   */
  viewControllerCardConfig = (entities: EntityRegistryEntry[], groupName: string = 'lawn mowers'): cards.ControllerCardOptions => ({
    title: `All ${groupName}`,
    subtitle: Helper.getCountEntityTemplate(entities, "ne", "off") + ` ${groupName} on`,
  });

  /**
   * Class constructor.
   */
  constructor() {
    super(LawnMowerView.#domain);
  }
}

export {LawnMowerView};
