const BannerResult = ({ status, children }) => {
  return (
    <div className={`${status} banner`}>
      {children}
    </div>
  )
}
export default BannerResult