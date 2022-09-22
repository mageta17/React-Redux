function Ninjas(props) {
    console.log(props)

    return (
      <div className="ninja">
        <div>Name: { props.name }</div>
        <div>Age: { props.age }</div>
        <div>Belt: { props.belt }</div>
      </div>
    );
}
  
export default Ninjas;