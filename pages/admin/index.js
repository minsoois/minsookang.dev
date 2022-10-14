import dynamic from 'next/dynamic'
import config from '../../cms/config'
import Script from 'next/script'

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({ config })
    }),
  {
    ssr: false,
    loading: () => <h1>Loading</h1>,
  }
)

const AdminPage = () => {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <CMS />
    </>
  )
}

export default AdminPage
