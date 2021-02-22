import { OurTeamPageMemberCardDto } from 'src/app/rest/types/our-team-page-member-card-dto';
import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';
import { ValueObject, valueObjectMock } from '../_base/value-object';
import { ImageUrl, imageUrlMock } from './image-url';
import {
  OurTeamPageMemberBlock,
  ourTeamPageMemberBlockMock,
} from './our-team-page-member-block';

type OurTeamPageMemberCardProps = {
  imageUrl: ImageUrl;
  block: OurTeamPageMemberBlock;
};

export class OurTeamPageMemberCard extends ValueObject<OurTeamPageMemberCardProps> {
  static fromDto(dto: OurTeamPageMemberCardDto): OurTeamPageMemberCard {
    return new OurTeamPageMemberCard({
      imageUrl: ImageUrl.fromDto(dto.imageUrl),
      block: OurTeamPageMemberBlock.fromDto(dto.block),
    });
  }

  static create(props: OurTeamPageMemberCardProps): OurTeamPageMemberCard {
    return new OurTeamPageMemberCard(props);
  }

  get imageUrl(): ImageUrl {
    return this.props.imageUrl;
  }

  get block(): OurTeamPageMemberBlock {
    return this.props.block;
  }
}

export const ourTeamPageMemberCardMock: OnlyPublicProperties<OurTeamPageMemberCard> = {
  ...valueObjectMock,
  imageUrl: imageUrlMock,
  block: ourTeamPageMemberBlockMock,
};
