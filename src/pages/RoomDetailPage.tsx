import { RoomDetailCard } from "../componentes/RoomDetailCard/RoomDetailCard";

export const RoomDetailPage = () => {
  return (
    <div style={{ padding: 24 }}>
      <RoomDetailCard
        data={{
          roomName: "Sala Fitness",
          floor: "1",
          qr: "S-001",
          status: "En revisión",
          items: [
            {
              name: "Cinta 03",
              category: "Fitness Machines",
              status: "Falla",
              lastPM: "12/09/2025",
            },
            {
              name: "Aire 02",
              category: "HVAC",
              status: "OK",
              lastPM: "12/09/2025",
            },
          ],
        }}
      />
    </div>
  );
};