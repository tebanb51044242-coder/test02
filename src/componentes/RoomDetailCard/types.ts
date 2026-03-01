export interface RoomItem {
  name: string;
  category: string;
  status: "OK" | "Falla";
  lastPM: string;
}

export interface RoomDetail {
  roomName: string;
  floor: string;
  qr: string;
  status: string;
  items: RoomItem[];
}