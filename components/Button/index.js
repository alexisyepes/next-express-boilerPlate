import Link from "next/link";

class index extends React.Component {
  state = {
    color: "",
  };

  onChangeSelect = async (e) => {
    await this.setState({
      color: e.target.value,
    });
    if (this.state.color === "YELLOW") {
      alert("Yellow is COOL!!!");
    }
    console.log(this.state.color);
  };
  render() {
    return (
      <div className="color-parent">
        <select className="select-option" onChange={this.onChangeSelect}>
          <option value="RED">RED</option>
          <option value="BLUE">BLUE</option>
          <option value="YELLOW">YELLOW</option>
          <option value="BROWN">BROWN</option>
        </select>
        <div className={this.state.color}>
          {this.state.color !== "" ? (
            this.state.color
          ) : (
            <h2>Select color above...</h2>
          )}
        </div>
        <button className="button1">BUTTON #1</button>
        <div className="linkToHome">
          <Link href="/">Home</Link>
        </div>
        <img className="lunapic" src="./images/163.jpg" alt="luna" />
      </div>
    );
  }
}

export default index;
