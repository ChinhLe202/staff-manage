export interface ISearch<ItemType> {
  data: ItemType[];
  searchField: keyof ItemType;
  placeholder?: string;
  onResults: (data: ItemType[]) => void;
}
