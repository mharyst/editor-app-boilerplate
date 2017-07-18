import classNames from 'classnames'
import css from './index.scss'

export default (Component) => {
  class ContactForm extends React.Component {
    static propTypes = {
      content: PropTypes.object,
      $editor: PropTypes.object,
      $component: PropTypes.object
    }

    state = {
      previewMode: this.props.$editor.isPreviewMode()
    }

    componentWillMount() {
      const {$component} = this.props

      this.subscriptions = {
        onCreate: $component.onCreated(this.openSettings)
      }

      this.setSiteLink()
    }

    componentWillUnmount() {
      _.forEach(this.subscriptions, sub => sub && sub.unsubscribe())
      this.subscriptions = null
    }

    openSettings = () => {
      const {$component} = this.props
      $component.openSettings($component.contextPanel[0][1])
    }

    render() {
      const {$editor} = this.props
      return <div className={classNames({[css.notClickable]: $editor.isEditingMode()})}>
        <Component {...this.props} />
      </div>
    }
  }
  return ContactForm
}
