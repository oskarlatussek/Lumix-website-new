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
                src="https://lh3.googleusercontent.com/a/ACg8ocKLDhkloQJgGG2TQaeA-Am1y3uEv5pzTTkgRs1QmEaB=s40-c-rp-mo-br100"
              />
            </div>

            <div className="testimonialName w-full">
              <h4>Holger Reif</h4>

              <div className="rating flex xl:flex-row flex-col w-max">
                <div className="flex flex-row">

                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                </div>
                <span className="testimonalTime">a week ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
          <b>Positiv: </b>Preis-Leistungs-Verhältnis, Professionalität, Reaktionsschnelligkeit bei Anfragen<br></br><br></br>
          Nach einem Jahr Suche waren wir froh Lumix Solar gefunden zu haben, die sich unserer relativ kleinen Anlage angenommen haben (3,7 kWp mit Batterie).Das Angebot kam wie abgesprochen zeitnah zu marktgängigen Konditionen. Terminabsprachen haben gut funktioniert. Alle Beteiligten arbeiteten professionell, engagiert und zuverlässig. Alles funktioniert. Empfehlenswert!
          </div>
        </SwiperSlide>
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

              <div className="rating flex xl:flex-row flex-col w-max">
                <div className="flex flex-row">

                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                </div>
                <span className="testimonalTime">2 months ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
         <b>Positiv:</b> Preis-Leistungs-Verhältnis, Professionalität, Pünktlichkeit, Qualität, Reaktionsschnelligkeit bei Anfragen
         <br></br><br></br>
         Sowohl die Ausarbeitung des Angebotes und auch der Aufbau hat super geklappt und war sehr professionell. Auch spätere Fragen zur Anlage oder im Kontext von Förderungsnachweisen wurden schnellst möglich erledigt. Wir können Lumix Solar absolut weiterempfehlen.

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

              <div className="rating flex xl:flex-row flex-col w-max flex w-max">
              <div className="flex flex-row">
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                </div>
              <span className="testimonalTime">1 month ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
<b>Positiv: </b>Preis-Leistungs-Verhältnis, Professionalität, Pünktlichkeit, Qualität, Reaktionsschnelligkeit bei Anfragen<br></br><br></br>
Ich kann die gesamte Mannschaft dieses Teams wie auch die Umsetzung des gesamten Projektes nur hochgradig loben.<br></br>
Schnell, kompetent, freundlich und immer ansprechbar.<br></br>
Keine Kritikpunkte
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

              <div className="rating flex xl:flex-row flex-col w-max flex w-max">
              <div className="flex flex-row">
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                </div> 
                <span className="testimonalTime">2 months ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
            <b>Positiv: </b>Preis-Leistungs-Verhältnis, Professionalität, Pünktlichkeit, Qualität, Reaktionsschnelligkeit bei Anfragen<br></br>
            <br></br>
            Volle Sterne für dieses Unternehmen!! Mega kompetent, sauber, schnell und transparent… weiter so.
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-6 testimonialSlide rounded-xl">
          <div className="name-icon flex gap-3">
            <div className="testimonialIcon">
              <img
                className="max-w-[45px]"
                src="https://lh3.googleusercontent.com/a/ACg8ocKhaSnQJdZud9myJNer8UzOufyTCBnxR0BhuuyaFh-0=s40-c-rp-mo-br100"
              />
            </div>

            <div className="testimonialName w-full">
              <h4>Dome</h4>

              <div className="rating flex xl:flex-row flex-col w-max flex w-max">
              <div className="flex flex-row">
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                </div> 
                <span className="testimonalTime">3 months ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
            <b>Positiv: </b>Preis-Leistungs-Verhältnis<br></br>
            <br></br>
            Preis Leistung top, bei Fragen hat sich lumix immer Zeit genommen und Geduld bewiesen. Weiter so dann klappt es mit der Energie Wende :-)..
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-6 testimonialSlide rounded-xl">
          <div className="name-icon flex gap-3">
            <div className="testimonialIcon">
              <img
                className="max-w-[45px]"
                src="https://lh3.googleusercontent.com/a/ACg8ocJj1FCqsMivHRV1vbF5au5z24dLe-cNB1JIjkPz4AtQ=s40-c-rp-mo-br100"
              />
            </div>

            <div className="testimonialName w-full">
              <h4>Dieter Haun</h4>

              <div className="rating flex xl:flex-row flex-col w-max flex w-max">
              <div className="flex flex-row">
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                </div> 
                <span className="testimonalTime">3 months ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
            <b>Positiv: </b>Professionalität, Pünktlichkeit, Reaktionsschnelligkeit bei Anfragen<br></br>
            <br></br>
            Super tolle Beratung durch Herrn Prokop, professionell, schnell und ehrlich. Er hat sich riesige Mühe gemacht, leider ist meine Dachhälfte (Doppelhaus) so stark nördlich ausgerichtet, dass eine Anlage nicht wirtschaftlich wäre. Trotzdem ein klasse Beratungsgespräch per Teams, in dem er mir alles genau erklärt hat, wie und was er berechnet, auch wenn ihm schon klar sein musste, dass es nicht klappt. Große Empfehlung meinerseits und wenn ich irgendwann doch nochmal eine Südseite hätte, kommen wir bestimmt ins Geschäft.  :o)
            </div>
       
        </SwiperSlide>
        <SwiperSlide className="p-6 testimonialSlide rounded-xl">
          <div className="name-icon flex gap-3">
            <div className="testimonialIcon">
              <img
                className="max-w-[45px]"
                src="https://lh3.googleusercontent.com/a/ACg8ocJAGHXpCMN_tzAXMQcvNvzdYLtFaNb3ll2mcuAPTp93=s40-c-rp-mo-br100"
              />
            </div>

            <div className="testimonialName w-full">
              <h4>Stephan Muehlhause</h4>

              <div className="rating flex xl:flex-row flex-col w-max flex w-max">
              <div className="flex flex-row">
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                <img className="w-4	" src="./Graphiken/star.svg" alt="" />
                </div> 
                <span className="testimonalTime">4 months ago</span>
              </div>
            </div>
            <div className="glogo w-full flex items-start		 justify-end	">
              <img className="w-6" src="./Graphiken/google.png" />
            </div>
          </div>
          <div className="testimonialText  my-3">
            <b>Positiv: </b>Preis-Leistungs-Verhältnis, Professionalität, Pünktlichkeit, Qualität, Reaktionsschnelligkeit bei Anfragen<br></br>
            <br></br>
            10 *, wenn es denn so viele gäbe.
Angefangen von der Top - Beratung bis zur pünktlichen, reibungslosen Montage und Inbetriebnahme. Immer erreichbar. So was‘ gibt es heutzutage in GER eigentlich nicht mehr - dachte ich .
</div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default GoogleReviewsCarousel
