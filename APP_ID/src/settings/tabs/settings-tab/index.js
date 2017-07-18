export class SettingsTab extends React.Component {
  static propTypes = {
    changeSettingsState: PropTypes.func,
    changeContent: PropTypes.func,
    $editor: PropTypes.object
  }

  render() {
    return (
      <div>Settings content</div>
    )
  }
}
