import { CreatePlanCard } from "../componentes/CreatePlanCard/CreatePlanCard";

export const CreatePlanPage = () => {
  return (
    <div style={{ padding: 24 }}>
      <CreatePlanCard
        data={{
          name: "",
          description: "",
          active: true,
          priceBase: 99,
          currency: "USD",
          cycle: "Fijo",
          periodicity: "Mensual",
          userLimit: 4,
          prorate: true,
          discountDuration: 3,
          discountPercent: 15,
          enrollmentFee: 50,
          centers: "Todos los centros",
          facilities: "Gimnasio, Piscina, Sauna, Clases grupales",
          sameSchedule: true,
          schedule: [
            { day: "Lun", enabled: true, start: "00:00", end: "00:00" },
            { day: "Mar", enabled: true, start: "00:00", end: "00:00" },
            { day: "Mié", enabled: true, start: "00:00", end: "00:00" },
            { day: "Jue", enabled: true, start: "00:00", end: "00:00" },
            { day: "Vie", enabled: true, start: "00:00", end: "00:00" },
            { day: "Sáb", enabled: true, start: "00:00", end: "00:00" },
            { day: "Dom", enabled: true, start: "00:00", end: "00:00" },
          ],
          trainingPlan: true,
          nutritionPlan: false,
          guestInvites: 2,
          centerAccesses: 4,
          events: [
            { code: "AD", name: "Spinning", quantity: 2 },
            { code: "SP", name: "Entrenamiento", quantity: 1 },
            { code: "ES", name: "Tenis", quantity: 0 },
          ],
          internalNotes: "",
        }}
      />
    </div>
  );
};