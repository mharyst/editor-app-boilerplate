import classNames from 'classnames'

class Component extends React.Component {
  static propTypes = {
    content: PropTypes.object,
    design: PropTypes.object
  }

  render() {
    const {design: {preset}} = this.props
    this.presetCss = require(`./presets/${preset}/index.scss`)

    return (
      <div className={classNames(this.presetCss.breadcrumbs)}>
        Home – Product
      </div>
    )
  }
}

export default Component
