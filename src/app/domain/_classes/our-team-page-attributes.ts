import { OurTeamPageAttributesDto } from 'src/app/rest/types/our-team-page-attributes-dto';
import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';
import { ValueObject, valueObjectMock } from '../_base/value-object';
import {
  OurTeamPageMemberCards,
  ourTeamPageMemberCardsMock,
} from './our-team-page-member-cards';

type OurTeamPageAttributesProps = {
  title: string;
  memberCards: OurTeamPageMemberCards;
};

export class OurTeamPageAttributes extends ValueObject<OurTeamPageAttributesProps> {
  static fromDto(dto: OurTeamPageAttributesDto): OurTeamPageAttributes {
    return new OurTeamPageAttributes({
      title: dto.title,
      memberCards: OurTeamPageMemberCards.fromDto(dto.memberCards),
    });
  }

  static create(props: OurTeamPageAttributesProps): OurTeamPageAttributes {
    return new OurTeamPageAttributes(props);
  }

  get title(): string {
    return this.props.title;
  }

  get memberCards(): OurTeamPageMemberCards {
    return this.props.memberCards;
  }
}

export const ourTeamPageAttributesMock: OnlyPublicProperties<OurTeamPageAttributes> = {
  ...valueObjectMock,
  title: '',
  memberCards: ourTeamPageMemberCardsMock,
};
