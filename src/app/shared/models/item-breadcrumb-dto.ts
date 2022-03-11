export class ItemBreadCrumbDto {
  label: string;
  url: string;
  current?: boolean;

  constructor(
    label?: string,
    url?: string,
    current?: boolean
    ) {
    this.label = (label) ? label : '';
    this.url = (url) ? url : '';
    this.current = (current) ? current : false;
  }
}
  