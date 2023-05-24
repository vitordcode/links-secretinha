export const CMSIcon = ({ icon }) => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: icon
    }} />
  )
}