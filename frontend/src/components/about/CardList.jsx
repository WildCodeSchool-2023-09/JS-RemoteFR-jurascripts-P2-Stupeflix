import Card from "./Card";
import us from "./us";

function CardList() {
  return (
    <div className="container-about">
      {us.map((e) => (
        <Card
          key={e.firstName}
          firstName={e.firstName}
          lastName={e.lastName}
          picDev={e.picDev}
          picAlt={e.picAlt}
          role={e.role}
        />
      ))}
    </div>
  );
}

export default CardList;
