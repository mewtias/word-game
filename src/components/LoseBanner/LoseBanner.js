import BannerResult from "../BannerResult"

const LoseBanner = ({answer}) => {
  return (
    <BannerResult status="bad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </BannerResult>
  )
}

export default LoseBanner