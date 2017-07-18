import {Tabs} from 'ui'
import {DesignTab, SettingsTab} from './tabs'

const tabs = [{
  title: 'Settings',
  content: SettingsTab,
  className: 'fields-ico'
}, {
  title: 'Design',
  content: DesignTab,
  className: 'pallete-ico'
}]

class Settings extends React.Component {
  static propTypes = {
    $component: PropTypes.object,
    design: PropTypes.object,
    content: PropTypes.object
  }

  componentWillMount() {
    const {design, content} = this.props
    this.setState({...content, ...design})
  }

  componentWillUnmount() {
    const {$component} = this.props
    $component.save()
  }

  changeState = (state) => this.setState(state, () => this.props.$component.update({content: state}))
  changeDesign = (state) => this.setState(state, () => this.props.$component.update({design: state}))

  changeSettingsState = (state) => this.setState(state)

  generateTabProps = () => ({
    ...this.props,
    ...this.state,
    changeState: this.changeState,
    changeDesign: this.changeDesign,
    changeSettingsState: this.changeSettingsState
  })

  render() {
    return (
      <Tabs className="tabs_app tabs_map"
            tabs={tabs}
            generateTabProps={this.generateTabProps}/>
    )
  }
}

export const settings = {
  component: Settings,
  title: 'Breadcrumbs settings',
  relativeProps: ['design', 'content']
}
