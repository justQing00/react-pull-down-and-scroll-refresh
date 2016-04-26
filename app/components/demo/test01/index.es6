
import ReactPullToRefresh from 'common/pull_refresh';
import ItemList from 'common/item_list';

let count = 1;
let Index = React.createClass({

  getInitialState() {
    return {
      items: []
    };
  },

  handleRefresh(resolve, reject) {
    let self = this;
    setTimeout(function () {
      self.addItem() ? resolve() : reject();
    }, 500);
  },

  componentDidMount() {
    this.addItem();
  },

  addItem() {
    let length = 10;
    for (let i = 0; i< length; i++){
      this.state.items.push({
        img: "http://image1.admaimai.com/uploadfiles/9%2825%29.jpg",
        values: [
          {name: "编号", value: count},
          {name: "类别", value: "鞋类"},
          {name: "持续时间", value: "100天"},
          {name: "创建日期", value: "2016-01-02"},
          {name: "更新日期", value: "2016-04-02"},
          {name: "状态", value: "已结束"}
        ]
      });
      count = count + 1;
    }
    this.setState({
      items: this.state.items
    });
    return true;
  },

  render() {

    let itemsData = this.state.items;
    return (
      <ReactPullToRefresh onRefresh={this.handleRefresh} lastElement=".list-li">
        <div>
          <ItemList items={itemsData}/>
        </div>
      </ReactPullToRefresh>
    );
  }
});

export default Index
