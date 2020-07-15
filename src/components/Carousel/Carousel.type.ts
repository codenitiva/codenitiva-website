type CarouselItemDataType = {
  title: string;
  description: string;
  image: any;
}

export type CarouselProps = {
  data: CarouselItemDataType[];
};

export enum CarouselButton {
  Prev = 0,
  Next = 1,
};
