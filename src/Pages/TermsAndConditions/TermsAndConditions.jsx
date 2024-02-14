import React, { useEffect, useState } from "react";
import "./TermsAndConditions.css";
import { Link as ScrollLink } from "react-scroll";

const TermsAndConditions = () => {
  const termsAndConditionsList = [
    {
      id: 1,
      title: "PAYMENTS",
      sectionId: "payments",
    },
    {
      id: 2,
      title: "PAYMENTS AND CANCELLATION POLICY",
      sectionId: "payements-and-cancellation-policy",
    },
    {
      id: 3,
      title: "WAITING ROOMS",
      sectionId: "waiting-rooms",
    },
    {
      id: 4,
      title: "REFERRAL",
      sectionId: "referral",
    },
    {
      id: 5,
      title: "SHARING INFORMATION",
      sectionId: "sharing-information",
    },
    {
      id: 6,
      title: "RISK OF HARM AND EMERGENCY SUPPORT",
      sectionId: "risk-of-harm-and-emergency-support",
    },
    {
      id: 7,
      title: "USEFUL WEBSITES",
      sectionId: "useful-website",
    },
  ];

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div>
      <section className="px-5 lg:px-24 mt-8 mb-14">
        <div className="flex flex-col lg:flex-row gap-8">
          <ul className="lg:w-1/4">
            {termsAndConditionsList?.map((item) => (
              <li
                key={item.id}
                className="my-1 font-medium hover:text-[#84c440] hover:cursor-pointer"
              >
                <ScrollLink
                  to={item.sectionId}
                  spy={true}
                  smooth={true}
                  offset={window.innerWidth >= 640 ? -330 : -220}
                  duration={500}
                  activeClass="active"
                >
                  {item.id}.0 {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="lg:w-3/4">
            {/* PAYMENTS */}
            <section id="payments">
              <div>
                <h2 className="heading">PAYMENTS</h2>
                <p className="description">
                  We offer a number of ways to help you pay for your services
                  with Health City, Twin Brian Ltd or Gratis Christi Trust:
                </p>
              </div>
              <div className="my-4">
                <h2 className="heading">1.1 Self-Funding Clients:</h2>
                <ul className="description">
                  <li>
                    <p>
                      <span className="font-medium">(a)</span> Bank transfer is
                      our preferred payment method:
                    </p>
                    <p className="my-[6px]">
                      Bank HSBC, Sort Code: 40 07 04, Account number:71828835.
                      Account name: Enaikidigha Ltd (trading as Health City).
                    </p>
                    <p>
                      Payment reference: Your initials, surname, and date you
                      received the service e.g. J.Kane23/06/16
                    </p>
                  </li>
                  <li className="my-3">
                    <span className="font-medium">(b)</span> Paying by Direct
                    Debit: Clients can set up a direct debit payment using their
                    bank.
                  </li>
                  <li>
                    <span className="font-medium">(c)</span> Paying with debit,
                    credit card, bank or making payments involving international
                    currency conversion: Clients can pay via Paypal, Go Cardless
                    or their bank. They may charge you a small fee, which is in
                    addition to the full fee you are paying. Please check with
                    your card issuer or bank before making a payment.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="heading">
                  1.2 Funding by Insurance or Organisation:
                </h2>
                <p className="description">
                  Therapy, Counselling and Wellbeing Services can be paid via
                  corporate organizations or all health insurance firms
                  including Standard Life, Cigna, AVIVA, AXA PPP, BUPA
                  International, PruHealth.
                </p>
                <p className="description mt-3">
                  <span className="font-bold">Note:</span> BUPA UK is only
                  accepted by some of our therapists. AXA PPP clients need a
                  psychiatric referral first.
                </p>
              </div>
            </section>
            {/* PAYMENTS */}

            {/* PAYMENTS AND CANCELLATION POLICY */}
            <section id="payements-and-cancellation-policy" className="my-4">
              <div>
                <h2 className="heading">
                  2.1 Payments for services are in advance:
                </h2>
                <p className="description">
                  This can be via any of the payment options offered by Health
                  City. A receipt will be emailed to you.
                </p>
              </div>
              <div className="my-4">
                <h2 className="heading">2.2 Cancellation policy:</h2>
                <ul className="description">
                  <li>
                    <span className="font-medium">(a)</span> Therapy,
                    Counselling or Wellbeing Service: Evidence is that regular
                    attendance helps with recovery, so to motivate attendance,
                    the full fee will be paid for missed or cancelled sessions
                    even with advance notice. Also, another client would have
                    benefited from the missed or cancelled session.
                  </li>
                  <li className="mt-3">
                    <span className="font-medium">(b)</span> Other Services:
                    Services booked cannot be cancelled, but must be paid in
                    full whether used or not. Money is not refundable except we
                    fail to deliver or provide an alternative when we could not
                    offer the original service promised.
                  </li>
                </ul>
              </div>
              <div className="my-4">
                <h2 className="heading">2.3 Prices/Fees:</h2>
                <ul className="description">
                  <li>
                    <span className="font-medium">(a)</span> Prices can be
                    changed anytime without notice: This shall not affect
                    Bookings previously submitted.
                  </li>
                  <li className="my-3">
                    <p>
                      {" "}
                      <span className="font-medium">(b)</span> Fees paid Online
                      during Booking cover:
                    </p>
                    <ul className="mt-[6px] ml-6">
                      <li>
                        <span className="font-medium">1.</span> Face to Face
                        appointments where the client comes to the Health City's
                        personnel at Canary Wharf UK, London Bridge UK or
                        another venue (the UK or overseas) where the Health
                        City's personnel is based.
                      </li>
                      <li>
                        <span className="font-medium">2.</span> Services
                        received Online or via Email, Phone, Text Messaging,
                        Postal Letter or Fax.
                      </li>
                      <li>
                        <span className="font-medium">3.</span> Services
                        received in English language or in a language spoken by
                        the Health City's personnel.
                      </li>
                      <li>
                        <span className="font-medium">4.</span> The client
                        doesn't mind their full identity known to our personnel.
                      </li>
                      <li>
                        <span className="font-medium">5.</span> The client wants
                        our personnel who is of a specific gender or who is
                        aware of a specific faith or culture. Note: Subject to
                        availability.
                      </li>
                      <li>
                        <span className="font-medium">6.</span> A session of any
                        service is 50 minutes. Consultation requires a double
                        session (so the client pays for 2 sessions).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      <span className="font-medium">(c)</span> Fees Paid Online
                      during Booking do not cover extra resource required by a
                      client.
                    </p>
                    <p className="my-[6px]">
                      The extra resources will incur a negotiated additional fee
                      to reflect our personnel's extra resource used by the
                      client. You should complete the Online Booking with
                      payment as normal and then contact us to negotiate the
                      cost of the extra resource. If you and us can't reach an
                      agreeable cost for the extra resource, then we will cancel
                      your booking with a full refund of the fee you paid during
                      the booking.
                    </p>
                    <div>
                      <p>The following are examples of extra resources:</p>
                      <ul className="mt-[6px] ml-6">
                        <li>
                          <span className="font-medium">1.</span> Travel
                          expenses and time away from the clinic: Face to Face
                          appointments or services where our personnel is
                          required to use a public or a private transport to
                          visit the client's home, school, office or other
                          agreed venue within London, Outside London, or
                          Overseas.
                        </li>
                        <li>
                          <span className="font-medium">2.</span> Interpreter's
                          fee: Services received in a language that requires an
                          interpreter (including sign language).
                        </li>
                        <li>
                          <span className="font-medium">3.</span> Identity
                          protection fee: The client wants their identity
                          protected from our personnel but not from our
                          organsiations.
                        </li>
                        <li>
                          <span className="font-medium">4.</span> Extra time
                          fee: Family Therapy and Exposure Behavioural
                          Programmes are likely to last more than one hour at
                          times.
                        </li>
                        <li>
                          <span className="font-medium">5.</span> Extra fee: Any
                          other preference the client wants Health City to
                          consider that may require extra resource.
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="my-4">
                <h2 className="heading">2.4 Late payments:</h2>
                <p className="description">
                  Please note that late payment fee of five percent (5%) and the
                  full VAT of the amount owed (and the late payment fee) will be
                  applied to your invoice on a weekly basis if payment is not
                  received by the due date. The ONLY time the late payment fee
                  can be waived is if you contact us before the due date to give
                  us an agreeable (to us) reason for exception and extension of
                  the due date.
                </p>
              </div>
              <div>
                <h2 className="heading">2.5 UK VAT:</h2>
                <p className="description">
                  VAT charged from 01/01/2015 for VAT chargeable services as HC
                  becomes VAT registered.
                </p>
              </div>
            </section>
            {/* PAYMENTS AND CANCELLATION POLICY */}

            {/* WAITING ROOMS */}
            <section id="waiting-rooms" className="my-4">
              <div>
                <h2 className="heading">3.0 WAITING ROOMS:</h2>
                <p className="description">
                  Please note that the waiting rooms in some of our offices or
                  clinics are closed evenings and weekends, so clients will be
                  asked to meet their Counsellors or therapists service
                  deliverer (e.g. therapist) at the exact appointment time.
                </p>
              </div>
            </section>
            {/* WAITING ROOMS */}

            {/* REFERRAL */}
            <section id="referral" className="my-4">
              <div>
                <h2 className="heading">4.0 REFERRAL</h2>
                <ul>
                  <li>
                    <span className="font-medium">4.1</span> I agreed to refer
                    myself to Health City, Twin Brain Ltd or Gratis Christi
                    trust. I agreed to be contacted for appointment, assessment
                    and service provision.
                  </li>
                  <li className="mt-3">
                    <span className="font-medium">4.2</span> I agreed that even
                    if I refused for information to be shared with my GP/Family
                    or Private Medical Doctor (we respect your decision and
                    privacy) it is my GP/Family or Private Medical Doctor (and
                    not us) who holds the medical responsibility for my
                    medications and healthcare.
                  </li>
                </ul>
              </div>
            </section>
            {/* REFERRAL */}

            {/* SHARING INFORMATION */}
            <section id="sharing-information" className="my-4">
              <div>
                <h2 className="heading">5.0 SHARING INFORMATION:</h2>
                <p>
                  I agreed for my information to be confidentially shared within
                  our organisation for the purpose of providing me a better care
                  as well as our supervision and training.
                </p>
                <p className="mt-[6px]">
                  <span className="font-bold"> GDPR:</span> We will not share
                  your personal information or data without your consent. We
                  uphold The General Data Protection Regulation (GDPR).
                </p>
              </div>
            </section>
            {/* SHARING INFORMATION */}

            {/* RISK OF HARM AND EMERGENCY SUPPORT */}
            <section id="risk-of-harm-and-emergency-support" className="my-4">
              <div>
                <h2 className="heading">
                  6.0 RISK OF HARM AND EMERGENCY SUPPORT
                </h2>
                <ul>
                  <li>
                    <span className="font-medium">6.1</span> I agreed that
                    Health City, Twin Brain Ltd or Gratis Christi Trust is not
                    an emergency service, so its email, telephone, personnel,
                    and service are not to be used in an emergency.
                  </li>
                  <li className="my-3">
                    <span className="font-medium">6.2</span> If I am in distress
                    and worried about the immediate risk of harm to myself or
                    others, I will go to or contact my nearest Accident &
                    Emergency service.
                  </li>
                  <li>
                    <span className="font-medium">6.3</span> If I am not at
                    immediate risk but in distress and like to have support and
                    advice, I will contact my GP/Family or Private Medical
                    Doctor.
                  </li>
                </ul>
                <div className="mt-3">
                  <p>People in the UK can contact:</p>
                  <ul className="list-disc ml-10">
                    <li>
                      Alcoholics Anonymous -{" "}
                      <span className="font-medium">0845 769 7555</span>
                    </li>
                    <li>
                      <a
                        href="http://www.alcoholics-anonymous.org.uk/"
                        target="_blank"
                        className="text-blue-500"
                      >
                        {" "}
                        http://www.alcoholics-anonymous.org.uk/
                      </a>
                    </li>
                    <li>
                      Carers support -{" "}
                      <span className="font-medium">0808 808 7777</span>
                    </li>
                    <li>
                      <a
                        href="http://www.carersuk.org"
                        target="_blank"
                        className="text-blue-500"
                      >
                        {" "}
                        http://www.carersuk.org
                      </a>
                    </li>
                    <li>
                      Cruse Bereavement Care -{" "}
                      <a
                        href="http://www.cruse.org.uk"
                        target="_blank"
                        className="text-blue-500"
                      >
                        {" "}
                        http://www.cruse.org.uk
                      </a>
                    </li>
                    <li>
                      Samaritans -{" "}
                      <span className="font-medium">08457 90 90 90</span>.{" "}
                      <a
                        href="http://www.samaritans.org"
                        target="_blank"
                        className="text-blue-500"
                      >
                        {" "}
                        http://www.samaritans.org
                      </a>
                    </li>
                    <li>
                      Rape Crisis England and Wales -{" "}
                      <span className="font-medium">0808 802 9999</span>.{" "}
                      <a
                        href=" http://www.rapecrisis.org.uk"
                        target="_blank"
                        className="text-blue-500"
                      >
                        {" "}
                        http://www.rapecrisis.org.uk
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="heading">
                  6.4 Are you feeling suicidal, harming yourself (e.g. pulling
                  hair, cutting etc) or being bullied, in domestic violence or
                  at risk to yourself or to another person?
                </h2>
                <p>
                  If Yes, contact and receive support from a Helpline you know
                  or from one of the organisations below.
                </p>

                <div className="mt-3">
                  <div>
                    <p>
                      <span className="font-medium">(a)</span> UK Residents:
                    </p>
                    <ul className="list-disc ml-10">
                      <li>
                        Samaritans:{" "}
                        <span className="font-medium">08457 909090</span>. (24
                        hour crisis line for people contemplating harming
                        themselves). Website:
                        <a
                          href="http://www.samaritans.org"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          http://www.samaritans.org
                        </a>
                      </li>
                      <li>
                        Saneline:{" "}
                        <span className="font-medium">
                          0300 304 7000, 07984 967 708
                        </span>{" "}
                        (practical information, crisis care and emotional
                        support). <span className="font-medium">4.30pm</span> to{" "}
                        <span className="font-medium">10.30pm</span> weekdays
                        and weekends including Bank Holidays.
                      </li>
                      <li>
                        Our GP: If you need to, contact your GP on their phone
                        number during your surgery working hours.
                      </li>
                      <li>
                        Google the Single Point of Access Crisis Helpline in
                        your Borough of residence and ask for help 24 hours
                        /seven days.
                      </li>
                      <li>
                        NHS Direct: 24 hours a day on{" "}
                        <span className="font-medium">0845 4647</span>.
                      </li>
                      <li>
                        NHS 111: 24 hours a day, 7 days a week. For urgent
                        medical problems.
                      </li>
                      <li>
                        NHS 111 British Sign Language if you are Deaf and wants
                        a phone service:
                        <ul className="list-disc ml-10">
                          <li>
                            England -{" "}
                            <span className="underline">
                              NHS 111 (BSL) interpreter service
                            </span>
                          </li>
                          <li>
                            Scotland -{" "}
                            <span className="underline">NHS 24 111</span>
                          </li>
                          <li>
                            Wales -{" "}
                            <span className="underline">NHS 111 Wales</span>
                          </li>
                          <li>
                            Northern Ireland -{" "}
                            <span className="underline">NHS 111 Northern</span>
                          </li>
                          <li>Ireland Or call 18001 111 on a textphone</li>
                        </ul>
                      </li>
                      <li>
                        Carers in Mind: If you are a carer for someone with a
                        mental health problem and feel you could do with some
                        support: telephone{" "}
                        <span className="font-medium">020 8940 7384</span>,
                        Email:{" "}
                        <span className="font-medium">carers@rbmind.org</span>
                      </li>
                      <li>
                        999 Emergency: If you have or feel you are suicidal or
                        about to harm yourself, or harm someone else, phone 999
                      </li>
                      <li>
                        Accident and Emergency (A & E) Unit: You can go to A & E
                        department nearest to your location. If you call 999,
                        the call hander shall tell you the nearest A & E that
                        will assist you.
                      </li>
                      <li>
                        Homeless,{" "}
                        <span className="font-medium">0808 800 4444</span>.{" "}
                        <a
                          href="homeless.org.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          homeless.org.uk
                        </a>
                      </li>
                      <li>
                        MIND, <span className="font-medium">0300 123 3393</span>
                        .{" "}
                        <a
                          href=" mind.org.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          mind.org.uk
                        </a>
                      </li>
                      <li>
                        CHILDLINE,{" "}
                        <span className="font-medium">0800 1111</span>.{" "}
                        <a
                          href="childline.org.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          childline.org.uk
                        </a>
                      </li>
                      <li>
                        Alcoholics Anonymous -{" "}
                        <span className="font-medium">0845 769 7555</span>.
                        Website:
                        <a
                          href="http://www.alcoholics-anonymous.org.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          http://www.alcoholics-anonymous.org.uk
                        </a>
                      </li>
                      <li>
                        Carers support -{" "}
                        <span className="font-medium">0808 808 7777</span>.
                        Website:
                        <a
                          href="http://www.carersuk.org"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          http://www.carersuk.org
                        </a>
                      </li>
                      <li>
                        No Panic - Helpline{" "}
                        <span className="font-medium">0808 808 0545</span>.
                        Support for people who experience panic attacks, and
                        those with phobias, obsessive-compulsive disorder,
                        general anxiety disorder and who are withdrawing from
                        tranquillisers. (10 am-10 pm every day). Email:{" "}
                        <span className="font-medium">ceo@nopanic.org.uk</span>,
                        web:{" "}
                        <a
                          href="nopanic.org.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          nopanic.org.uk
                        </a>
                      </li>
                      <li>
                        Citizens Advice Bureau -{" "}
                        <span className="font-medium">01392 425 517</span>.
                        Website:
                        <a
                          href="http://www.citizensadvice.org.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          http://www.citizensadvice.org.uk
                        </a>
                      </li>
                      <li>
                        Bereavement Care - Website:
                        <a
                          href="http://www.cruse.org.u"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          http://www.cruse.org.u
                        </a>
                      </li>
                      <li>
                        Rape Crisis England and Wales.
                        <span className="font-medium">0808 802 9999</span>.
                        Website:
                        <a
                          href="http://www.rapecrisis.org.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          http://www.rapecrisis.org.uk
                        </a>
                      </li>
                      <li>
                        Bristol Crisis Service For Women (BCSW) - Helpline{" "}
                        <span className="font-medium">0117 925 1119</span>.
                        National helpline for women in distress, especially
                        women who self-harm. Open Friday and Saturday evenings 9
                        pm to 12.30 am and Sundays 6pm to 9pm.
                      </li>
                      <li>
                        Support Line -{" "}
                        <span className="font-medium">0208 554 9004</span>. A
                        confidential helpline providing emotional support to
                        individuals of any age on any Support line also has a
                        data base of local services. Ring for helpline opening
                        hours. You can also e-mail on
                        <a
                          href="infor@supportline.org.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          infor@supportline.org.uk
                        </a>
                        .
                      </li>
                      <li>
                        42nd Street - Helpline{" "}
                        <span className="font-medium">0161 832 0170</span>. A
                        mental health service in Manchester for young people
                        aged 14 - 25. Their helpline offers support and advice,
                        particularly around suicide and self injury. Open
                        weekdays from 12.30 pm to 4.30 pm.
                        <a
                          href="www.fortysecondstreet.org.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          www.fortysecondstreet.org.uk
                        </a>
                      </li>
                      <li>
                        Nightline (for University students) National
                        organization of NightLine student helplines in
                        Universities across the Visit the website to find out if
                        your Uni has one.
                        <a
                          href="www.nightline.ac.uk"
                          target="_blank"
                          className="text-blue-500"
                        >
                          {" "}
                          www.nightline.ac.uk
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p>
                      <span className="font-medium">(b)</span>
                      Overseas residents: Contact your friends, family members,
                      next of kin, and your local Accident and Emergencies in
                      your country
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* RISK OF HARM AND EMERGENCY SUPPORT */}

            {/* USEFUL WEBSITES */}
            <section id="useful-website">
              <h2 className="heading">7.0 USEFUL WEBSITES</h2>
              <p>
                Health City and its associated organisations are not responsible
                and reliable for the contents of external websites.
              </p>
              <p className="my-2">
                {" "}
                <a
                  href="http://moodgym.anu.edu.au"
                  target="_blank"
                  className="text-blue-500"
                >
                  {" "}
                  http://moodgym.anu.edu.au
                </a>{" "}
                - Free online self-help course.
              </p>
              <p className="my-2">
                {" "}
                <a
                  href="www.cci.health.wa.gov.au"
                  target="_blank"
                  className="text-blue-500"
                >
                  {" "}
                  www.cci.health.wa.gov.au
                </a>{" "}
                - Free self-help workbooks for emotional or mental health
                problems.
              </p>
              <p className="my-2">
                {" "}
                <a
                  href="www.livinglifetothefull.com"
                  target="_blank"
                  className="text-blue-500"
                >
                  {" "}
                  www.livinglifetothefull.com
                </a>{" "}
                - Free online life skills course working.
              </p>
              <p className="my-2">
                Web:
                <a
                  href="https://landing.healthcity.org.uk"
                  target="_blank"
                  className="text-blue-500"
                >
                  {" "}
                  https://landing.healthcity.org.uk
                </a>
              </p>
              <p className="my-2">
                Tel No1: <span className="font-medium">0333 800 3006</span>
              </p>
              <p className="my-2">
                Tel No2: <span className="font-medium">0333 789 0012</span>
              </p>
              <p className="my-2">
                Opening hours:{" "}
                <span className="font-medium">Monday-Friday 8am-11pm</span>;{" "}
                <span className="font-medium">Saturday 8am-9pm</span>.
              </p>
              <p>
                <span className="font-bold">Address:</span> Health City, Twin
                Brain Ltd or Gratis Christi Trust, Davenport House, 16 Pepper
                Street, Canary Wharf, London E14 9RP, United Kingdom.
              </p>
            </section>
            {/* USEFUL WEBSITES */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
