import classNames from 'classnames'
import {Title, PresetItem, ScrollBar} from 'ui'
import presets from '../../../presets'


export class DesignTab extends React.Component {
  static propTypes = {
    preset: PropTypes.string,
    changeDesign: PropTypes.func,
    $component: PropTypes.object
  }

  handleSelectPreset = (preset) => {
    this.props.changeDesign({preset})
  }

  render() {
    const {preset: selectedPreset} = this.props
    return <div>
        <ScrollBar autoHeight autoHeightMax={'484px'} innerStyle={{padding: '10px 15px'}}>
          <Title
            title="General designs"
            subtitle="Please select one of the listed designs below"
          />
          {_.map(presets, (preset) => (
              <PresetItem
                  className={classNames({active: selectedPreset === preset}, 'lg')}
                  backgroundImage={require(`../../../presets/${preset}/thumbnail.png`)}
                  onClick={() => this.handleSelectPreset(preset)}
                  key={preset}
              />
          ))}
        </ScrollBar>
      </div>
  }
}
