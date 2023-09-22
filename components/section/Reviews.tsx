import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const GoogleReviewsCarousel = () => {
  // Define breakpoints and their configurations
  const breakpoints = {
    541: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }

  return (
    <div className="outerTestimonial  flex items-center w-full justify-center pb-20 px-2 sm:px-5">
      <Swiper
        className="px-12	"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={breakpoints} 
      >
        <SwiperSlide className="p-6 testimonialSlide rounded-xl">
          <div className="name-icon flex gap-3">
            <div className="testimonialIcon">
              <img
                className="max-w-[45px]"
                src="https://lh3.googleusercontent.com/a/ACg8ocIf_pxNgpVvDVFQ4AcUU_FwIXkQC_BJoFhcD8NHsXJD=w90-h90-p-rp-mo-br100"
              />
            </div>

            <div className="testimonialName w-full">
              <h4>Markus Lehr</h4>

              <div className="rating flex w-max">
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <span className="testimonalTime">2 months ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
            Both the preparation of the offer and the construction worked great
            and was very professional. Subsequent questions about the investment
            or in the context of proof of funding were also dealt with as
            quickly as possible. We can absolutely recommend Lumix Solar.
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-6 testimonialSlide rounded-xl">
          <div className="name-icon flex gap-3">
            <div className="testimonialIcon">
              <img
                className="max-w-[45px]"
                src="https://lh3.googleusercontent.com/a-/ALV-UjVo_8OUtZ5S74avbaWAv_4elcSK31bzXP0c6kNatrI2wQ=s40-c-rp-mo-br100"
              />
            </div>

            <div className="testimonialName w-full">
              <h4>Thomas Müller</h4>

              <div className="rating flex w-max">
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <span className="testimonalTime">2 months ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
            Investments are made in occupational safety here. PPE Training /
            Instruction according to DGUV R 112-198 & -199. stay safe
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-6 testimonialSlide rounded-xl">
          <div className="name-icon flex gap-3">
            <div className="testimonialIcon">
              <img
                className="max-w-[45px]"
                src="https://lh3.googleusercontent.com/a/ACg8ocKb2ZUyVP7DvYvcM0Odp4ofAExbmcAFpn21mWMsdQsZ=s40-c-rp-mo-br100"
              />
            </div>

            <div className="testimonialName w-full">
              <h4>Kay Lauer</h4>

              <div className="rating flex w-max">
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <span className="testimonalTime">2 months ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
            I can only highly praise the entire team of this team as well as the
            implementation of the entire project. Fast, competent, friendly and
            always approachable. No criticisms
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-6 testimonialSlide rounded-xl">
          <div className="name-icon flex gap-3">
            <div className="testimonialIcon">
              <img
                className="max-w-[45px]"
                src="https://lh3.googleusercontent.com/a/ACg8ocI5BzTbZTcz8zXcGOiGWRXNWHHO2LORFzK-9FeDW2rO=s40-c-rp-mo-br100"
              />
            </div>

            <div className="testimonialName w-full">
              <h4>Orkan Haksal</h4>

              <div className="rating flex w-max">
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <span className="testimonalTime">2 months ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
            <b>Positive:</b>Professionalism, Punctuality, Quality,
            Responsiveness, Value<br></br>
            <br></br>
            Full stars for this company!! Super competent, clean, fast and
            transparent... keep it up.
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default GoogleReviewsCarousel
