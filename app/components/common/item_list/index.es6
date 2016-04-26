/*
  * 列表
*/
import ItemSingle from "common/item_list/children/item_single";

class ItemList extends React.Component{
  constructor(props) {
    super(props);
  }

  listScroll(evt) {
    console.log(evt);
  }

  render() {
    let items = []
    items = this.props.items;
    return (
      <ul className="item-list" onScroll={this.listScroll.bind(this)}>
      {
        items.map(function(item, i){
          return <ItemSingle key={i} item={item}/>
        })
      }
      </ul>
    );
  }

}

function mapStateToProps (state) {
  console.log(state)
  return{

  }
}

export default ItemList;
