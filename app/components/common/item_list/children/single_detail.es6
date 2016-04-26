
/*
  * 单个Item中的单独项
*/

class ItemSingleDetail extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="info-detail">
        <label>{this.props.name}:</label>
        <span>{this.props.value}</span>
      </li>
    );
  }
}

export default ItemSingleDetail;
