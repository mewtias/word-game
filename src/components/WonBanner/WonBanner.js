import BannerResult from "../BannerResult"

const WonBanner = ({attempts}) => {
  return (
    <BannerResult status="happy">
        <p>
              <strong>Congratulations!</strong> Got it in{' '}
              <strong>
                  {attempts === 1 ? '1 guess' : `${attempts} guesses`}
              </strong>
              .
        </p>
    </BannerResult>
  )
}

export default WonBanner