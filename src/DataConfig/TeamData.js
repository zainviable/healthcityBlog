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
import member17C from "../assets/img/clinical/cristina.jpeg";
import member18C from "../assets/img/clinical/alina.jpeg";
import member19C from "../assets/img/clinical/deborah.jpg";
import member20C from "../assets/img/clinical/ellen.jpg";
import member21C from "../assets/img/clinical/federica.jpg";
import member22C from "../assets/img/clinical/katali.jpg";
import member23C from "../assets/img/clinical/layton.jpeg";
import member24C from "../assets/img/clinical/iiaria.jpg";
import member25C from "../assets/img/clinical/manminder.jpeg";
import member26C from "../assets/img/clinical/raffaella.png";
import member27C from "../assets/img/clinical/shuja.jpeg";

import cvOfSelemo from "../assets/cv/Dr_Francis_Selemo.pdf";
import cvOfHollenbeck from "../assets/cv/Danelle_Devi_Hollenbeck.pdf";
import cvOfMIREA from "../assets/cv/DANIEL_MIREA.pdf";
import cvOfBbira from "../assets/cv/Edward_Bbira.pdf";
import cvOfVandy from "../assets/cv/Mr_Raymond_Vandy.pdf";
import cvOfTierney from "../assets/cv/Ms_Emma_Tierney.pdf";
import cvOfCristina from "../assets/cv/Cristina_Sutac.pdf";
import cvOfAlina from "../assets/cv/Dr_Alina_Luben.pdf";
import cvOfDeborah from "../assets/cv/Deborah_Hill.pdf";
import cvOfEllen from "../assets/cv/Ellen_Wheller.pdf";
import cvOfFederica from "../assets/cv/Federica_Zammuto.pdf";
import cvOfKatali from "../assets/cv/Helen_Katali.pdf";
import cvOfLayton from "../assets/cv/Helen_Layton.pdf";
import cvOfIlaria from "../assets/cv/Giovanelli_Ilaria.pdf";
import cvOfManminder from "../assets/cv/Manminder_Hewey.pdf";
import cvOfRaffaella from "../assets/cv/Raffaella_Lodigiani.pdf";
import cvOfShuja from "../assets/cv/Shuja_Hoda.pdf";

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
    detail:
      "My approach as a therapist is to work collaboratively with you, seeking to understand, to explore and reflect on whatever is difficult in your life. I bring warmth and openness to my work with very different clients. Deciding to engage in therapy can be a challenging but very rewarding process, undertaken for many different reasons, and I respect the courage it takes to talk about what is painful. I have over 10 years experience working as a therapist working with a range of client groups in the National Health Service (NHS), schools, adult forensics, adoption and youth offending services. I am experienced in carrying out assessments and delivering short-term and long-term support in key evidence based modalities; Art Psychotherapy, Systemic Family Practice, Cognitive Behaviour Therapy (CBT), Parent Training, Children Accelerated Trauma Treatment (CATT), and clinical supervision. I offer individual, family, group sessions, face-to-face and online. Last year over 89% of my clients reported progress and reliable change in their goals for therapy using the Goal Based Outcomes Monitoring form (GBOM).",
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
    detail:
      "A male, a therapist in Health City, cognitive behavioural therapist, psychodynamic Counsellor and  behavioural couple therapy  practitioner-trainee. Has plus 3 years experience in counselling and psychotherapy in the UK. I have been working in the Care sector since September 1995. I have worked in a variety of settings including The Elderly, People with Learning Disabilities, People suffering from Mental Health and Substance Abuse problems and with Refugees. I have enhanced my career by successfully completing various training courses which I have listed below. I am a strong supporter of promoting the rights of people I meet by treating them with empathy and on an individual basis. I completed a BSc Hons Degree in Psychodynamic Counselling and Cognitive Behaviour Therapy. I also completed a Foundation Degree Short term Psychodynamic Counselling and Cognitive Behaviour Therapy and I have successfully gained accreditation status with the British Association of Counsellors and Psychotherapists.",
    cv: cvOfVandy,
  },
  {
    id: 15,
    imgUrl: member15C,
    name: "Ms Emma Tierney MBACP",
    designation:
      "Counsellor, Supervisor, CBT Practitioner. Mindfulness Practitioner and Therapeutic Imagery Practitioner - Senior therapist in Health City",
    detail:
      "A qualified and accredited integrative therapist, with over 12 years’ experience.  Having a background in the charitable and statutory sector, I have worked within the field of mental health, criminal justice, local authority and bereavement.  Through my work I have helped individuals to explore issues around anxiety, panic, stress, bereavement, trauma, relationships, dissociative identity disorder amongst others.   Assessing and managing client risk is a key strength along with working with a diverse client group. I am personable and able to build a safe trusting space for clients.",
    cv: cvOfTierney,
  },
  {
    id: 16,
    imgUrl: member16C,
    name: "Danelle Devi-Hollenbeck",
    designation:
      "Counselling Psychologist, EMDR Trained and listed on EMDR UK and Ireland. Couple therapy trained - Senior therapist in Health City",
    detail:
      "I provide cognitive behavioural therapy (CBT), EMDR counselling, trauma counselling, and couples counselling. I have over 15 years working in the mental health and addiction field in the UK and USA. I have counselled your every day person to a few famous people seeking help in their relationships. I use EMDR along with cognitive behavioural therapy (CBT) and dialectical behavioural therapy (DBT) to help process trauma faster than regular talk therapy as EMDR uses eye movement to process the traumatic events affecting the person seeking treatment. It is a proven treatment for war veterans with PTSD and used in place of medication. In working with couples, I help you learn your love language, process the break down or issues in the relationship and help you work through any differences or infidelties you may have. I help build relationships to become stronger by focusing on how each couple came together to form a partnership in the first place and building on this to recognise each other's strengths, love, and friendship as a couple. I also work with teens and adults with anxiety, depression, ADHD, trauma, phobias, OCD, couple issues,  post traumatic stress, addiction, stress, odd, IED, anger management, and bi polar disorder. I also work with teens and adults with Asperger's who are finding it difficult to build a social network or adjust to their lives due to new events or issues taking place. I provide family therapy using the family systems method. I do work with the addiction population but only in conjunction with those who are on assisted treatment through various NHS trusts and are testing negative. As a life coach, I empower individuals to reach their goals whilst finding their purpose in life. We set standards, use solution focused techniques and work on helping each person strive for what they want in life! It IS achievable--just believe and you will receive! I have a Bsc Honors in Substance Misuse Studies from the University of West London, and Msc with Honors from Kaplan University. I am HCPC registered as a counselling psychologist. I am also FDAP registered as certified Alcohol and Drug Practitioner. I am also licensed in the State of Florida as a licensed mental health counsellor, which means I am able to provide DSM 5 diagnosis, provide treatment, and care to clients in private practice, state, and private mental health agencies. I have EMDR 1 & 2 training, EMDR Rtep and Gtep training. I have CBT certification, DBT, and SFT certification.",
    cv: cvOfHollenbeck,
  },
  {
    id: 17,
    imgUrl: member17C,
    name: "Cristina Sutac, HCPC",
    designation: "Clinical Psychologist with CBT Therapy",
    detail:
      "I'm a Clinical Psychologist with over 12 years of experience in conducting psychological assessments and formulation and developing personalized treatment plans for adults experiencing a range of mental health and/or physical health difficulties and complex care needs. I have worked in a range of settings, including within primary care, inpatient (mental ealth and physical health hospital settings), forensic mental health services and complex care settings. I have extensive experience working with adults to understand and manage a range of presenting difficulties, including anxiety, anger, depression, post-traumatic stress disorder (PTSD), physical health (chronic pain and other chronic health conditions), neurological conditions, relationship difficulties, stress and managing life transitions, self-esteem and sleep difficulties. I have also supported people with enduring mental health difficulties psychosis, bipolar, personality complexities). My approach to therapy is person-centred, emphasizing empathy, active listening, and collaboration. I believe in creating a safe and non-judgmental space where clients can explore their thoughts, emotions and behaviours. My main therapeutic approaches include Cognitive Behaviour Therapy (CBT), Trauma-Focused CBT and Dialectical Behaviour Therapy (DBT). I can offer therapy both in English and Romanian.",
    cv: cvOfCristina,
  },
  {
    id: 18,
    imgUrl: member18C,
    name: "Dr. Alina Luben",
    designation: "EMDR Practitioner and Psychiatrist with CBT Skills",
    detail:
      "I am a psychiatrist with a special interest in  talking therapies. I developed a keen interest in mind - body based therapeutic approaches and trained in EMDR and Brainspotting. My special interest is in EMDR. During my core and higher training in psychiatry I developed my psychotherapy skills further. As part of my training I completed  CBT cases under supervision in Child and Adolescent Mental Health Psychiatry working with children. Also, my CBT skills were very useful in my day to day practice throughout my working time in Psychiatry from 2009 until present. In addition, during my training I completed under supervision a one year long psychodynamic psychotherapy case and a 6 months case in Cognitive Analytical therapy.",
    cv: cvOfAlina,
  },
  {
    id: 19,
    imgUrl: member19C,
    name: "Dr. Deborah Hill, PHD",
    designation:
      "EMDR Practitioner, Relate-accredited Relationship Counsellor, Psychotherapist & Counsellor, Cognitive Behavioural Hypnotherapist",
    detail:
      "Accredited EMDR Practitioner and professional counsellor offering trauma and crisis counselling services to survivors of critical events. Adept at establishing a trust rapport with clients, helping people to cope with tragic situations as well as life-changing events such as road traffic accidents (RTAs). Specialist in PTSD, working with children, adolescents, adults, couples, families and groups. Experienced at debriefing following tragic work-related incidents, as well as major incidents.",
    cv: cvOfDeborah,
  },
  {
    id: 20,
    imgUrl: member20C,
    name: "Mrs Ellen Wheller",
    designation:
      "Counselling Psychologist, EMDR Practitioner, CBT Practitioner, Systemic Therapy Practitioner; Integrative Therapy Practitioner, Children and Families, Sensory Attachment Intervention, Therapeutic Consultant Social Worker, Animal Assisted Play Therapy Practitioner, etc",
    detail:
      "After my undergraduate degree in psychology and education, I undertook a master's degree in social work. I built upon this with my undertaking postgraduate training in integrative therapy, motivational interviewing, brief-solution-focused therapy, therapeutic life story work, Dyadic developmental practice (DDP) and sensory attachment intervention. This supported a career as a therapeutic consultant social worker, and I have over 20 years experience of working with children and families. I have specialised in the field of developmental trauma and therapeutic care planning for care experienced children. Following this I developed my portfolio to doctoral level in applied psychology combining other evidence-based approaches such as trauma-based cognitive behavioural therapy, Eye movement desensitisation and Reprocessing (EMDR) and Systemic Therapy; all of which place the person at the centre of relational practice. I have worked within the NHS Secondary CAMHS (Children and Adolescent Mental Health Services) setting for several years has enhanced my practice further developing experience with a range of complex diagnoses of anxiety, depression, self-harm, eating disorders, PTSD, and neurodiversity (of which I have developed a specialist interest in and have undertaken training in the Autism Diagnostic Observation Schedule (ADOS-2). I have worked in forensic settings in both voluntary organisations and private residential secure settings with adults as well as working in substance misuse for several years. Other areas of work have included working in the specialist area of sexual abuse for the NSPCC for several years. I am also a trainer and have experience in delivering training in attachment and trauma, motivational interviewing, sensory intervention, mindfulness, loss, sand tray, principles of DDP parenting and therapeutic life story work. This has been delivered to a variety of audiences, individuals, university students, foster carers, professionals, and residential units. The integration of a broad range of therapeutic interventions has enabled me to create bespoke packages of care, tailored to an individual needs. Recent developments have included working therapeutically with my passion for animals and I have trained in level 1 Animal Assisted Play Therapy. Other areas within my portfolio that I have developed over the years are experience in management and service development, coaching, supervision, and training. Providing opportunities to skill up a family support team with an intensive model of practice to work with families on the edge of care. This involved data analysis, report writing and developing a cost reduction tool to examine the cost-effectiveness of the grant that the team was funded with, this enabled the team to have core funding within social services.",
    cv: cvOfEllen,
  },
  {
    id: 21,
    imgUrl: member21C,
    name: "Miss Federica Zammuto",
    designation:
      "Clinical Psychologist, Counselling Psychologist, Trained CBT Practitioner, Trained Dialectical Behavioural Therapy (DBT) Practitioner, CAMHS Children and Adolescent Practitioner",
    detail:
      "I believe I am in the best profession. Being a Clinical and Counseling Psychologist enables me to develop connections with people from all walks of life; to hear their stories, identify their strengths and work on the parts of their life that they want to improve. Born and educated in Italy, I now live and work in the Uk for the NHSI am credentialed in the UK with 12 years of professional work experience. I have experience in helping clients with stress and anxiety, coping with addictions, relationship issues, & family conflicts. I am an empathetic, warm and hard-working clinician who is passionate about providing high quality psychological support. My aim is to support individuals to identify and express their inner thoughts and feelings and to gently guide them towards new ways of coping with and reducing distress. I work creatively and flexibly with people of all ages in order to draw upon their existing values, strengths and resilience.Taking the first step to seeking a more fulfilling and happier life takes courage. I am here to support you in that process.",
    cv: cvOfFederica,
  },
  {
    id: 22,
    imgUrl: member22C,
    name: "Helen Katali",
    designation:
      "BABCP Accredited CBT Therapist, Perinatal specialist practitioner and practice background in psychiatric and community nursing",
    detail:
      "I am a Fully accredited and passionate CBT Therapist. 22 years of working with complex and severe mental health cases. I am warm, empathetic and compassionate with excellent ability to form therapeutic alliances. I have successfully treated large numbers of mental health cases. I have experience working with complex cases, co-morbidity and can manage risk efficiently. I am naturally enthusiastic, optimistic and very much enjoy my role as a therapist, therefore I achieve results fast, meet deadlines. Manage cases all while providing high quality care.",
    cv: cvOfKatali,
  },
  {
    id: 23,
    imgUrl: member23C,
    name: "Dr. Helen Layton",
    designation:
      "Clinical Psychologist, CBT Practitioner, Systemic Therapy Practitioner; Psychodynamic Therapy Practitioner, Children and Families, etc",
    detail:
      "I am an experienced Clinical Psychologist who has been working in NHS mental health services for over 10 years. I am currently working in a specialist Perinatal Mental Health Service within the NHS. I have specialised in providing therapy for individuals and couples who are struggling with their feelings during pregnancy and/or parenthood. This might be changes in mood, struggles processing a previous loss, traumatic birth, unexpected feelings during parenthood and/or difficulties with bonding with your baby/babies. Although I have specialist knowledge of mood changes during parenthood, I am also used to delivering therapy for more general difficulties such as anxiety and low mood. I offer short and long term therapy and draw on a range of therapeutic models. Primarily I practice drawing on psychodynamic and systemic frameworks but I am also trained to deliver CBT should you have a preference for this.",
    cv: cvOfLayton,
  },
  {
    id: 24,
    imgUrl: member24C,
    name: "Miss Ilaria Giovanelli",
    designation:
      "Clinical Psychologist, Educational Psychologist, CBT, Children, neuropsychology, etc",
    detail:
      "My expertise is clinical neuropsychology. I have worked with a lot of different pathological conditions both in adults, older adults and children. I know several test for cognitive assessment and how to design a rehabilitation project.",
    cv: cvOfIlaria,
  },
  {
    id: 25,
    imgUrl: member25C,
    name: "Mrs Manminder Hewey",
    designation:
      "Senior Cognitive Behavioural Therapist & Trained EMDR Practitioner",
    detail:
      "Over twenty years experience working in primary and secondary care Mental Health setting within the NHS. I have acquired sound and proficient knowledge in providing evidence-based CBT, to include the third wave of interventions and EMDR. As an established and accredited CBT clinician, I bring advanced up to date knowledge and understand the importance in nurturing and developing staff. Therefore, I provide excellent quality CBT and clinical supervision for complex mental health presentations. I have a depth of knowledge in designing and facilitating group interventions. As a senior clinician also acquiring experience in providing line management, duty, and risk support for a large team, to further strengthen my leadership capabilities. Most importantly I build strong therapeutic alliances in a non-judgemental way to the clients I treat, resulting in positive outcomes.",
    cv: cvOfManminder,
  },
  {
    id: 26,
    imgUrl: member26C,
    name: "Raffaella Lodigiani, HCPC",
    designation:
      "Clinical Psychologist specialised in Cognitive Behavioural Therapy. Trained in Schema Therapy. Skilled in Acceptance Commitment Therapy and Compassion Focused Therapy",
    detail:
      "I have over 20 years experience in psychological assessment and treatment of clients.  I assess, understand and formulate a client's problem(s) as a clinical psychologist and cognitive  behavioural therapist.  I have clinical experience in different NHS settings in the United Kingdom as well as private settings.",
    cv: cvOfRaffaella,
  },
  {
    id: 27,
    imgUrl: member27C,
    name: "Mr Mohammad Shuja-Ul Hoda",
    designation:
      "Clinical Psychologist specialised in Cognitive Behavioural Therapy. Trained in Schema Therapy. Skilled in Acceptance Commitment Therapy and Compassion Focused Therapy",
    detail:
      "I have over 20 years experience in psychological assessment and treatment of clients.  I assess, understand and formulate a client's problem(s) as a clinical psychologist and cognitive  behavioural therapist.  I have clinical experience in different NHS settings in the United Kingdom as well as private settings.",
    cv: cvOfShuja,
  },
];

export { nonClinicalteamList, clinicalteamList };
