import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';

type EntityPropsPartial = {
  id: number | string;
};

export abstract class Entity<EntityPropsT extends EntityPropsPartial> {
  protected constructor(protected readonly props: EntityPropsT) {}

  equals(entity: this): boolean {
    return entity instanceof Entity && this.props.id === entity.props.id;
  }
}

export const entitytMock: OnlyPublicProperties<Entity<any>> = {
  equals: () => true,
};
