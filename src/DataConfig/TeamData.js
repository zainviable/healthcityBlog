import member1NC from "../assets/img/non-clinical/sonya.jpg";
import member2NC from "../assets/img/non-clinical/marais.jpg";
import member3NC from "../assets/img/non-clinical/cletus.jpg";
// import member4NC from "../assets/img/non-clinical/4.jpg";
import member5NC from "../assets/img/non-clinical/sian.jpg";
import member6NC from "../assets/img/non-clinical/eva.jpg";
import member7NC from "../assets/img/non-clinical/anna.jpg";
import member8NC from "../assets/img/non-clinical/blanco.jpg";
import member9NC from "../assets/img/non-clinical/selemo.jpg";
import member10NC from "../assets/img/non-clinical/naima.jpg";
import member11NC from "../assets/img/non-clinical/robert.jpg";
import member12NC from "../assets/img/non-clinical/vincent.jpg";
import member13NC from "../assets/img/non-clinical/seikegba.jpg";

import member1C from "../assets/img/clinical/edward.png";
import member2C from "../assets/img/clinical/lucy.png";
import member3C from "../assets/img/clinical/ray.jpg";
// import member4C from "../assets/img/clinical/4.jpg";
import member5C from "../assets/img/clinical/beatrice.jpg";
import member6C from "../assets/img/clinical/farida.jpg";
import member7C from "../assets/img/clinical/mark.jpg";
import member8C from "../assets/img/clinical/kay.jpg";
import member9C from "../assets/img/clinical/selemo.jpg";
import member10C from "../assets/img/clinical/lindita.jpg";
import member11C from "../assets/img/clinical/natalia.jpg";
import member12C from "../assets/img/clinical/caroline.jpg";
import member13C from "../assets/img/clinical/daniel.jpg";
import member14C from "../assets/img/clinical/vandy.png";
import member15C from "../assets/img/clinical/emma.png";
import member16C from "../assets/img/clinical/devi.png";

import cvOfSelemo from "../assets/cv/Dr_Francis_Selemo.pdf";
import cvOfHollenbeck from "../assets/cv/Danelle_Devi_Hollenbeck.pdf";
import cvOfMIREA from "../assets/cv/DANIEL_MIREA.pdf";
import cvOfBbira from "../assets/cv/Edward_Bbira.pdf";
import cvOfVandy from "../assets/cv/Mr_Raymond_Vandy.pdf";
import cvOfTierney from "../assets/cv/Ms_Emma_Tierney.pdf";

const nonClinicalteamList = [
  {
    id: 1,
    imgUrl: member1NC,
    name: "Sonya Tancheya",
    designation: "MSC, Senior Practitioner & Psychologist",
  },
  {
    id: 2,
    imgUrl: member2NC,
    name: "Dr Beverley Marais",
    designation:
      "Specialist CBT Practitioner, Eating Disorder Specialist & Counselling Psychologist",
  },
  {
    id: 3,
    imgUrl: member3NC,
    name: "MR. Cletus Osigwe",
    designation: "Accountant & Family Budgeting Trainer",
  },
  {
    id: 4,
    imgUrl: "",
    name: "Afroz Kazim Ahmed",
    designation:
      "Senior data manager at a National Health Service (NHS) in the UK",
  },
  {
    id: 5,
    imgUrl: member5NC,
    name: "Sian Jones",
    designation: "Person-to-person relationship Counsellor",
  },
  {
    id: 6,
    imgUrl: member6NC,
    name: "Eva Tinka, MBPsS",
    designation: "A Psychologist and a Partner at Health City",
  },
  {
    id: 7,
    imgUrl: member7NC,
    name: "Dr. Anna Lukusa",
    designation: "Medical Doctor & Health Trainer",
  },
  {
    id: 8,
    imgUrl: member8NC,
    name: "Teresa Blanco Martinez",
    designation: "CBT and Integrative Therapy Practitioner & Psychologist",
  },
  {
    id: 9,
    imgUrl: member9NC,
    name: "Dr. Francis Selemo",
    designation:
      "Cognitive Behavioural Psychotherapist (CBT), Chartered and HCPC regulated Clinical Psychologist",
    cv: cvOfSelemo,
  },
  {
    id: 10,
    imgUrl: member10NC,
    name: "Naima Ali",
    designation:
      "CBT Practitioner and Clinical Consultant in Somalian Mental Health",
  },
  {
    id: 11,
    imgUrl: member11NC,
    name: "Dr Robert Patton, Phd",
    designation: "Research & Development Governance Lead/Advisor",
  },
  {
    id: 12,
    imgUrl: member12NC,
    name: "Vincent Chidili",
    designation: "CBT and Integrative Therapy Practitioner & Psychologist",
  },
  {
    id: 13,
    imgUrl: member13NC,
    name: "Theresa Seikegba",
    designation: "Business Development Coordinator & Global Cookery Expert",
  },
];

const clinicalteamList = [
  {
    id: 1,
    imgUrl: member1C,
    name: "Edward Bbira",
    designation:
      "Psychotherapist, Art Therapist. Iapt Cbt & Systemic Family Practice Trained",
    cv: cvOfBbira,
  },
  {
    id: 2,
    imgUrl: member2C,
    name: "Lucy Arnold",
    designation:
      "Counsellor/Psychotherapist & a Clinical Specialist Partner in Health City",
    detail:
      "Lucy is a Counsellor/Psychotherapist, and a Clinical Specialist Partner at Health City. She has +6 years working experience with clients over the short and long term covering a range of issues including anxiety, depression, bereavement, substance misuse, esteem issues, trauma, relationship /family issues. Lucy has extensive experience providing individual counselling to a diverse range of people from different backgrounds and cultures and experiences. In her way of working, Lucy tailors her approach and use of skills and techniques to your own needs, working with you with what you bring. Lucy believes the quality of the therapeutic relationship between the therapist and the client is foundational to therapeutic change. Lucy tailors her approach to client's needs, using an integrative approach - drawing from attachment theory, person centred, psychodynamic and CBT. She works holistically reflecting on the client's history and current circumstances considering all aspects of human functioning (relational, physical, emotional, cognitive and spiritual) to help clients achieve their goals. She is a fully qualified and accredited counsellor with two professional bodies. Lucy has worked in a number of counselling services, including the NHS and Mind.",
  },
  {
    id: 3,
    imgUrl: member3C,
    name: "Ray Singh",
    designation: "Senior Therapist & Coach",
  },
  {
    id: 4,
    imgUrl: "",
    name: "Dr. Yomi Adetola",
    designation:
      "Consultant Psychiatrist, Therapist, Trainer & Clinical Advisor",
  },
  {
    id: 5,
    imgUrl: member5C,
    name: "Beatrice Salice",
    designation:
      "Complementary Therapist and Clinical Consultant at Health City",
  },
  {
    id: 6,
    imgUrl: member6C,
    name: "Mrs Farida Yesmin Mezy",
    designation: "Counsellor and Psychotherapist",
  },
  {
    id: 7,
    imgUrl: member7C,
    name: "Mark Howard",
    designation:
      "Clinical Hypnotherapist and Clinical Consultant at Health City",
  },
  {
    id: 8,
    imgUrl: member8C,
    name: "Kay Savage",
    designation:
      "Complementary, Holistic & Wellbeing Therapist and Clinical Consultant at Health City",
  },
  {
    id: 9,
    imgUrl: member9C,
    name: "Dr. Francis Selemo",
    designation:
      "Cognitive Behavioural Psychotherapist (CBT), Chartered and HCPC regulated Clinical Psychologist",
    cv: cvOfSelemo,
  },
  {
    id: 10,
    imgUrl: member10C,
    name: "Lindita Nerguti",
    designation:
      "Integrative Counsellor/Psychotherapist and Clinical Consultant at Health City",
  },
  {
    id: 11,
    imgUrl: member11C,
    name: "Natalia Bailey",
    designation:
      "Integrative Counsellor/Psychotherapist and Clinical Consultant at Health City",
  },
  {
    id: 12,
    imgUrl: member12C,
    name: "Caroline Howard",
    designation:
      "Cognitive Behavioural Psychotherapist & Clinical Consultant at Health City",
  },
  {
    id: 13,
    imgUrl: member13C,
    name: "Daniel Mirea",
    designation:
      "CBT Consultant, Senior Lecturer & Senior Clinical Consultant Partner at Health City",
    cv: cvOfMIREA,
  },
  {
    id: 14,
    imgUrl: member14C,
    name: "Mr. Raymond Vandy",
    designation:
      "cognitive behavioural therapist, psychodynamic Counsellor and behavioural couple therapy practitioner-trainee - Therapist in Health City",
    cv: cvOfVandy,
  },
  {
    id: 15,
    imgUrl: member15C,
    name: "Ms Emma Tierney MBACP",
    designation:
      "Counsellor, Supervisor, CBT Practitioner. Mindfulness Practitioner and Therapeutic Imagery Practitioner - Senior therapist in Health City",
    cv: cvOfTierney,
  },
  {
    id: 16,
    imgUrl: member16C,
    name: "Danelle Devi-Hollenbeck",
    designation:
      "Counselling Psychologist, EMDR Trained and listed on EMDR UK and Ireland. Couple therapy trained - Senior therapist in Health City",
    cv: cvOfHollenbeck,
  },
];

export { nonClinicalteamList, clinicalteamList };
