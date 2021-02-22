import { OurTeamPageMemberBlockDto } from 'src/app/rest/types/our-team-page-member-block-dto';
import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';
import { ValueObject, valueObjectMock } from '../_base/value-object';

type OurTeamPageMemberBlockProps = {
  title: string;
  description: string;
  link: string;
  text: string;
};

export class OurTeamPageMemberBlock extends ValueObject<OurTeamPageMemberBlockProps> {
  static fromDto(dto: OurTeamPageMemberBlockDto): OurTeamPageMemberBlock {
    return new OurTeamPageMemberBlock(dto);
  }

  static create(props: OurTeamPageMemberBlockProps): OurTeamPageMemberBlock {
    return new OurTeamPageMemberBlock(props);
  }

  get title(): string {
    return this.props.title;
  }

  get description(): string {
    return this.props.description;
  }

  get link(): string {
    return this.props.link;
  }

  get text(): string {
    return this.props.text;
  }
}

export const ourTeamPageMemberBlockMock: OnlyPublicProperties<OurTeamPageMemberBlock> = {
  ...valueObjectMock,
  title: '',
  description: '',
  link: '',
  text: '',
};
