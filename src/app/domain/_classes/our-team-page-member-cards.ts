import { OurTeamPageMemberCardsDto } from 'src/app/rest/types/our-team-page-member-cards-dto';
import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';
import { ValueObject, valueObjectMock } from '../_base/value-object';
import {
  OurTeamPageMemberCard,
  ourTeamPageMemberCardMock,
} from './our-team-page-member-card';

type OurTeamPageMemberCardsProps = {
  first: OurTeamPageMemberCard;
  second: OurTeamPageMemberCard;
  third: OurTeamPageMemberCard;
};

export class OurTeamPageMemberCards extends ValueObject<OurTeamPageMemberCardsProps> {
  static fromDto(dto: OurTeamPageMemberCardsDto): OurTeamPageMemberCards {
    return new OurTeamPageMemberCards({
      first: OurTeamPageMemberCard.fromDto(dto.first),
      second: OurTeamPageMemberCard.fromDto(dto.second),
      third: OurTeamPageMemberCard.fromDto(dto.third),
    });
  }

  static create(props: OurTeamPageMemberCardsProps): OurTeamPageMemberCards {
    return new OurTeamPageMemberCards(props);
  }

  get first(): OurTeamPageMemberCard {
    return this.props.first;
  }

  get second(): OurTeamPageMemberCard {
    return this.props.second;
  }

  get third(): OurTeamPageMemberCard {
    return this.props.third;
  }

  toIterable(): OurTeamPageMemberCard[] {
    return [this.first, this.second, this.third];
  }
}

export const ourTeamPageMemberCardsMock: OnlyPublicProperties<OurTeamPageMemberCards> = {
  ...valueObjectMock,
  first: ourTeamPageMemberCardMock,
  second: ourTeamPageMemberCardMock,
  third: ourTeamPageMemberCardMock,
  toIterable: () => [ourTeamPageMemberCardMock],
};
