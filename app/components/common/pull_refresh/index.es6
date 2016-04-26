/*
* 上拉加载，滚动刷新
*/

import WebPullToRefresh from 'common/pull_refresh/services/web_pull';

class ReactPullToRefresh extends React.Component {

  constructor(props) {
    console.log(Hammer);
    super(props);
    this.state = {
      initialized: false
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  // 下拉加载
  handleRefresh() {
    return new Promise((resolve, reject) => {
      this.props.onRefresh(resolve, reject);
    });
  }

  // 滚动到底部刷新
  scrollRefresh(evt) {
    let flag = false;
    flag = this.checkLast();
    if(flag){
      return new Promise((resolve, reject) => {
        this.props.onRefresh(resolve, reject);
      });
    } else {
      return null;
    }
  }

  // 检测最后一个元素的位置
  checkLast() {
    let $lastElement = $(this.props.lastElement).last();
    let distance = $lastElement.height();
    if (!distance) distance = 50;
    let offsetTop = $lastElement.offset().top;
    let documentHeight = document.body.clientHeight;
    let heigthDiff = documentHeight - offsetTop;
    if(heigthDiff > -distance && heigthDiff < distance && !$lastElement.hasClass("hasScroll")){
      $lastElement.addClass('hasScroll')
      return true;
    }
    return false;
  }

  init() {
    if (!this.state.initialized) {
      WebPullToRefresh().init({
        contentEl: this.refs.refresh,
        ptrEl: this.refs.ptr,
        distanceToRefresh: this.props.distanceToRefresh || undefined,
        loadingFunction: this.handleRefresh,
        resistance: this.props.resistance || undefined
      });
      this.setState({
        initialized: true
      });
    }
  }

  componentDidMount() {
    if (!this.props.disabled) {
      this.init();
    }
  }

  componentDidUpdate() {
    if (!this.props.disabled) {
      this.init();
    }
  }

  render() {
    if (this.props.disabled) {
      return (
        <div {...this.props}>
          {this.props.children}
        </div>
      );
    }
    let icon = this.props.icon || <span className="genericon genericon-next"></span>;
    let loading = this.props.loading || (
      <div className="loading">
        <span className="loading-ptr-1"></span>
        <span className="loading-ptr-2"></span>
        <span className="loading-ptr-3"></span>
      </div>
    );
    return (
      <div {...this.props} className="refresh-content" onScroll={this.scrollRefresh.bind(this)}>
        <div ref="ptr" className="ptr-element">
          {icon}
          {loading}
        </div>
        <div ref="refresh" className="refresh-view">
          {this.props.children}
        </div>
      </div>
    );
  }
}

ReactPullToRefresh.propTypes = {
  onRefresh: React.PropTypes.func.isRequired,
  icon: React.PropTypes.element,
  loading: React.PropTypes.element,
  disabled: React.PropTypes.bool,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  distanceToRefresh: React.PropTypes.number,
  resistance: React.PropTypes.number,
  lastElement: React.PropTypes.string
};

export default ReactPullToRefresh;
