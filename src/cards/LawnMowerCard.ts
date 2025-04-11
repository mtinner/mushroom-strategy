import {AbstractCard} from "./AbstractCard";
import {cards} from "../types/strategy/cards";
import {EntityRegistryEntry} from "../types/homeassistant/data/entity_registry";
import {LAWN_MOWER_COMMANDS, LawnMowerCardConfig} from "../types/lovelace-mushroom/cards/lawn-mower-card-config";

// noinspection JSUnusedGlobalSymbols Class is dynamically imported.
/**
 * LawnMower Card Class
 *
 * Used to create a card for controlling an entity of the vacuum domain.
 *
 * @class
 * @extends AbstractCard
 */
class LawnMowerCard extends AbstractCard {
  /**
   * Default configuration of the card.
   *
   * @type {LawnMowerCardConfig}
   * @private
   */
  #defaultConfig: LawnMowerCardConfig = {
    type: "custom:mushroom-vacuum-card",
    icon: undefined,
    icon_animation: true,
    commands: [...LAWN_MOWER_COMMANDS],
    tap_action: {
      action: "more-info",
    }
  };

  /**
   * Class constructor.
   *
   * @param {EntityRegistryEntry} entity The hass entity to create a card for.
   * @param {cards.LawnMowerCardOptions} [options={}] Options for the card.
   * @throws {Error} If the Helper module isn't initialized.
   */
  constructor(entity: EntityRegistryEntry, options: cards.LawnMowerCardOptions = {}) {
    super(entity);

    this.config = Object.assign(this.config, this.#defaultConfig, options);
  }
}

export {LawnMowerCard};
