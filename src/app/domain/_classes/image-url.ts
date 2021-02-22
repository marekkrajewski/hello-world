import { ImageUrlDto } from 'src/app/rest/types/image-url-dto';
import { OnlyPublicProperties } from 'src/app/ts-utilities/only-public-properties';
import { ValueObject, valueObjectMock } from '../_base/value-object';

type ImageUrlProps = {
  w200: string;
  w400: string;
  w1080: string;
  w1920: string;
  w2560: string;
};

export class ImageUrl extends ValueObject<ImageUrlProps> {
  static fromDto(dto: ImageUrlDto): ImageUrl {
    return new ImageUrl(dto);
  }

  static create(props: ImageUrlProps): ImageUrl {
    return new ImageUrl(props);
  }

  get w200(): string {
    return this.props.w200;
  }

  get w400(): string {
    return this.props.w400;
  }

  get w1080(): string {
    return this.props.w1080;
  }

  get w1920(): string {
    return this.props.w1920;
  }

  get w2560(): string {
    return this.props.w2560;
  }
}

export const imageUrlMock: OnlyPublicProperties<ImageUrl> = {
  ...valueObjectMock,
  w200: '',
  w400: '',
  w1080: '',
  w1920: '',
  w2560: '',
};
