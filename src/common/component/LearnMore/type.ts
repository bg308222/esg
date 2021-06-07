export interface ILearnMoreButton {
  onClick?: () => void;
  style?: React.CSSProperties;
}

export enum ContentType {
  title = 0,
  text = 1,
  image = 2,
}

interface ITextType {
  type: ContentType.text;
  text: string;
}

interface IImageType {
  type: ContentType.image;
  url: string;
  subTitle?: string;
}

interface ITitleType {
  type: ContentType.title;
  text: string;
}

type Content = ITextType | IImageType | ITitleType;

export interface ILearnMoreContent {
  title: string;
  content: Content[];
  isMobile: boolean;
  onCancel?: () => void;
}
