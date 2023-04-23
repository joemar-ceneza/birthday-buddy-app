import "../css/Person.scss";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";

export default function Person(props) {
  return (
    <>
      {props.people.map((person) => {
        return (
          <article className="person" key={uuidv4()} id={uuidv4()}>
            <img src={person.img} alt={person.alt} />
            <div className="person-info">
              <div className="name">
                <h4>{person.name}</h4>
              </div>
              <div className="old">
                <p>{person.age}</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}
