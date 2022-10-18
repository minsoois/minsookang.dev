import Script from 'next/script'

const AdminPage = () => {
  const onLoad = () => {
    if (typeof window === 'undefined') return

    // custom netlify cms
    location.href = '/admin/index.html'
  }

  return (
    <>
      <Script
        src="https://unpkg.com/netlify-cms@^2.10.192/dist/netlify-cms.js"
        onLoad={onLoad}
      ></Script>
    </>
  )
}

export default AdminPage
