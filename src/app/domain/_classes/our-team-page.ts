import { OurTeamPageDto } from 'src/app/rest/types/our-team-page-dto';
import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';
import { Entity } from '../_base/entity';
import { valueObjectMock } from '../_base/value-object';
import {
  OurTeamPageAttributes,
  ourTeamPageAttributesMock,
} from './our-team-page-attributes';

type OurTeamPageProps = {
  id: string;
  type: string;
  attributes: OurTeamPageAttributes;
};

export class OurTeamPage extends Entity<OurTeamPageProps> {
  static fromDto(dto: OurTeamPageDto): OurTeamPage {
    return new OurTeamPage({
      id: dto.id,
      type: dto.type,
      attributes: OurTeamPageAttributes.fromDto(dto.attributes),
    });
  }

  static create(props: OurTeamPageProps): OurTeamPage {
    return new OurTeamPage(props);
  }

  get id(): string {
    return this.props.id;
  }

  get type(): string {
    return this.props.type;
  }

  get attributes(): OurTeamPageAttributes {
    return this.props.attributes;
  }
}

export const ourTeamPageMock: OnlyPublicProperties<OurTeamPage> = {
  ...valueObjectMock,
  id: '',
  type: '',
  attributes: ourTeamPageAttributesMock,
};
