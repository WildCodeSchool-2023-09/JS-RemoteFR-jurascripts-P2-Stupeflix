import Card from "./Card";
import us from "./us";

function CardList() {
  return (
    <div>
      {us.map((e) => (
        <Card
          key={e.firstName}
          firstName={e.firstName}
          lastName={e.lastName}
          dayOfBirth={e.dayOfBirth}
          picDev={e.picDev}
          picAlt={e.picAlt}
          language={e.language}
        />
      ))}
    </div>
  );
}

export default CardList;
