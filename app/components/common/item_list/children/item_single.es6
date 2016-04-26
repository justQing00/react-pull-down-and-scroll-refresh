/*
  * 单个Item
*/

import ItemSingleDetail from "common/item_list/children/single_detail";

class ItemSingle extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    let values = [];
    values = this.props.item.values;
    return (
      <li className="list-li">
        <div className="img-content">
          <img src={this.props.item.img}/>
        </div>
        <div className="info-content">
          <ul>
          {
            values.map(function(info, i){
              return <ItemSingleDetail key={i} name={info.name} value={info.value}/>
            })
          }
          </ul>
        </div>
      </li>
    );
  }
}

export default ItemSingle;
