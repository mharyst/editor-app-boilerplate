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
      <div className={classNames(this.presetCss.APP_ID)}>
        Component content
      </div>
    )
  }
}

export default Component
