import APP_NAME from './component'
import {initProps} from './props'
import {settings} from './settings'
import thumbnail from './thumbnail.svg'

export default {
  appId: 'APP_ID',
  sections: {
    'apps': {
      title: 'Built in Apps',
      priority: 10
    }
  },
  components: {
    contactForm: {
      name: 'APP_NAME',
      sectionId: 'apps',
      description: 'APP_NAME App',
      thumbnail,
      priority: 2,
      Component: APP_NAME,
      options: {
        selection: 'frame'
      },
      initProps,
      contextPanel: [['Breadcrumbs settings', {modalContent: settings}, 'settingsIco']]
    }
  }
}
