import classes from "./Card.module.css";

function Card(props) {
  //We will use this class as a wrapper to make an element a 'card'
  return (
    <div className={classes.card}>
      {/*props.children represents what is passed between the tags of this component */}
      {props.children}
    </div>
  );
}

export default Card;
