export interface Card {
  title: string;
  subtitle: string;
  mainInformation: string;
  footerInformation: string;
}

export class InfoCard implements Card {
  title: string;
  subtitle: string;
  mainInformation: string;
  footerInformation: string;
  constructor(
    title: string,
    subtitle: string,
    mainInformation: string,
    footerInformation: string
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.mainInformation = mainInformation;
    this.footerInformation = footerInformation;
  }
}
