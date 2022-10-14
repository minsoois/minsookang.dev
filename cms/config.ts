import { CmsConfig } from 'netlify-cms-core'
import blog from './blog'

const config: CmsConfig = {
  // Backend configuration, in this case with git
  backend: {
    name: 'git-gateway',
    branch: 'main',
    squash_merges: true,
  },

  // Local backend is used during development
  local_backend: true,

  // Where to store the images
  media_folder: 'public/static/images',

  // Where to link the images
  public_folder: '/static/images',

  collections: [blog],
}

export default config
