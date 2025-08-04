import Section from "./Section";
import SectionSvg from "../assets/svg/SectionSvg";

const Donate = () => {
  return (
    <Section id="donate" className="pt-8 lg:pt-16 relative">
      <div className="container relative z-2">
        <div className="max-w-[940px] mx-auto mb-6 lg:mb-12 text-center ite">
          <h2 className="h2 mb-4 lg:mb-6">Support Our Mission</h2>
          <p className="body-2 text-n-3">
            Your contribution helps us empower more individuals through education and community building.
          </p>
        </div>
            <div className="relative w-full" style={{ height: '55vh', width: '50vh' }}>
              <iframe 
                title='Donation form powered by Zeffy' 
                style={{
                  position: 'absolute',
                    top: 0,
                    left: 435,
                  width: '100%',
                  height: '100%'
                }} 
                src='https://www.zeffy.com/embed/donation-form/fund-the-dream'
                allowpaymentrequest
                allowTransparency="true"
              />
            </div>
      </div>

      <div className="hidden absolute -top-[5.5rem] left-[18.5rem] w-[11rem] h-[11rem] lg:block">
        <SectionSvg />
      </div>
    </Section>
  );
};

export default Donate;
