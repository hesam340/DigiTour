export type TDate = {
  miladiMonth: number;
  shamsiBefore: string;
  shamsiAfter: string;
}[];

export type Tvehicles = {
  id: number;
  en_name: string;
  fa_name: string;
  icon: string;
}[];

export type TSupport = {
  id: number;
  title: string;
  description: string;
  image: string;
}[];

export type TSlider = {
  id: number;
  src: string;
}[];

type THeaderFooter = {
  id: number;
  icon: string;
  fill: string;
  stroke: string;
  title: string;
  href: string;
};

export type TProfileSidebar = THeaderFooter[];

export type TMenuOptions = Omit<THeaderFooter, "stroke" | "fill">[];

export type TFooterTitles = Omit<THeaderFooter, "icon" | "fill" | "stroke">[];

export type TFooterImages = Array<Omit<THeaderFooter, "icon" | "fill" | "stroke" | "title"> & {src:string,alt:string}>
