import { CmsCollection } from 'netlify-cms-core'

const blog: CmsCollection = {
  name: 'blog',
  label: 'Blog',
  folder: '/data/blog',
  create: true,
  slug: '{{year}}-{{month}}-{{day}}_{{slug}}',
  fields: [
    { label: 'Title', name: 'title', widget: 'string', required: true },
    { label: 'Publish Date', name: 'date', widget: 'datetime', required: true },
    { label: 'Tags', name: 'tags', widget: 'list' },
    { label: 'Modified Date', name: 'lastmod', widget: 'datetime' },
    {
      label: 'Draft post',
      name: 'draft',
      widget: 'boolean',
      hint: 'Publish post to set to false',
      required: true,
      default: true,
    },
    { label: 'Summary', name: 'summary', widget: 'markdown' },
    { label: 'Featured Images', name: 'images', widget: 'list' },
    { label: 'Authors', name: 'authors', widget: 'list' },
    { label: 'Layout', name: 'layout', widget: 'string' },
    { label: 'CanonicalUrl', name: 'canonicalUrl', widget: 'string' },
    { label: 'Body', name: 'body', widget: 'markdown' },
  ],
}

export default blog
