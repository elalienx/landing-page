// Project files
import iResume from "interfaces/iResume";
import "styles/components/ItemResume.sass";

// Interface
interface iProps {
  item: iResume;
}

export default function ItemProject({ item }: iProps) {
  const { period, title, institution, city_and_country } = item;

  return (
    <article className="item-resume">
      <span className="period">{period}</span>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="institution">{institution}</p>
        <p className="city-and-country">{city_and_country}</p>
      </div>
    </article>
  );
}
