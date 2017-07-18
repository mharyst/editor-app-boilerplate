import Breadcrumbs from './component'
import {initProps} from './props'
import {settings} from './settings'
import thumbnail from './thumbnail.svg'

export default {
  appId: 'breadcrumbs',
  sections: {
    'apps': {
      title: 'Built in Apps',
      priority: 10
    }
  },
  components: {
    contactForm: {
      name: 'Breadcrumbs',
      sectionId: 'apps',
      description: 'Breadcrumbs App',
      thumbnail,
      priority: 2,
      Component: Breadcrumbs,
      options: {
        selection: 'frame'
      },
      initProps,
      contextPanel: [['Breadcrumbs settings', {modalContent: settings}, 'settingsIco']]
    }
  }
}
