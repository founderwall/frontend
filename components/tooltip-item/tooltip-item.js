import { PureComponent } from "react";
import { Tooltip } from "reactstrap";

export default class TooltipItem extends PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    const id = props.title
      ? props.title.toLocaleLowerCase().replace(/[^a-z0-9]/g, "")
      : "";

    this.state = {
      id: `tooltip-${id}`,
      tooltipOpen: false,
      ready: false
    };
  }

  componentDidMount() {
    this.setState({
      ready: true
    });
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    if (!this.state.ready) {
      if (!this.props.children) {
        return null;
      }
      return this.props.children;
    }

    return (
      <span>
        <span id={this.state.id}>{this.props.children}</span>
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target={this.state.id}
          toggle={this.toggle}
        >
          {this.props.title}
        </Tooltip>
      </span>
    );
  }
}
