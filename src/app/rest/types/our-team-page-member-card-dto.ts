import { ImageUrlDto } from './image-url-dto';
import { OurTeamPageMemberBlockDto } from './our-team-page-member-block-dto';

export type OurTeamPageMemberCardDto = {
  imageUrl: ImageUrlDto;
  block: OurTeamPageMemberBlockDto;
};
