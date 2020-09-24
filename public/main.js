import config from './config.js'

import chapter_03 from './03_theremin.js'

// const title = document.createElement('h1')
// title.innerHTML = 'webaudio examples'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  // app.append(title)
  // app.append(toc())
  app.append(chapter_03())
})
