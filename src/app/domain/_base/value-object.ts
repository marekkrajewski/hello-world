import { equals } from 'ramda';
import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';

type ValueObjectProps = Record<string, any>;

export abstract class ValueObject<ValueObjectPropsT extends ValueObjectProps> {
  protected constructor(protected readonly props: ValueObjectPropsT) {}

  equals(valueObject: this): boolean {
    return (
      valueObject instanceof ValueObject &&
      equals(this.props, valueObject.props)
    );
  }
}

export const valueObjectMock: OnlyPublicProperties<ValueObject<any>> = {
  equals: () => true,
};
