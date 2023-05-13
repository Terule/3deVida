export default interface IPost {
  id?: number;
  title: string;
  content: string;
  userId: number;
  tableId: number;
  sessionDate: Date;
}
