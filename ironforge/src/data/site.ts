/**
 * Single source of truth for the demo content.
 * Swap these values for the real gym's details before going live.
 */

export const site = {
  name: "IRONFORGE",
  fullName: "IRONFORGE Fitness Club",
  tagline: "Train hard. Live strong.",
  address: "123 Fitness Avenue, Downtown",
  phone: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@ironforgefitness.com",
  /**
   * Web3Forms access key — decides which inbox the contact form delivers to.
   * Get a new one free at https://web3forms.com and paste it here to switch
   * the receiving address. This key is safe to expose publicly.
   */
  formAccessKey: "7f0d2973-7f7e-4674-afaa-ac9f12946cc5",
  hours: [
    { days: "Monday – Friday", time: "5:00 AM – 11:00 PM" },
    { days: "Saturday – Sunday", time: "7:00 AM – 9:00 PM" },
  ],
  /** Digits only, with country code — used to build the WhatsApp link. */
  whatsapp: "15551234567",
  whatsappMessage:
    "Hi IRONFORGE! I'd like to know more about your memberships and free trial.",
  /** Shown on the map card and used for the "Get directions" link. */
  mapQuery: "123 Fitness Avenue, Downtown",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "500+", label: "Active Members" },
  { value: "10+", label: "Expert Trainers" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Gym Access" },
] as const;

export const programs = [
  {
    slug: "strength-training",
    title: "Strength Training",
    description: "Build power, muscle, and confidence.",
    image: "/images/strength-training.webp",
    heroPosition: "center",
    alt: "Athlete gripping a loaded barbell before a deadlift on the training floor",
    meta: "Barbell · Progressive overload",
    level: "All levels",
    duration: "60 min",
    sessions: "3–4 / week",
    intro:
      "A structured barbell programme built on the lifts that carry over to everything else: squat, deadlift, press and row. You are coached on technique first, then loaded progressively so strength arrives without injury.",
    highlights: [
      "Technique screening and a starting-weight assessment in week one",
      "Written block programming — you always know the next session",
      "Calibrated plates and competition bars on every platform",
      "Re-tested benchmarks every 8 weeks so progress is measurable",
    ],
    suitedTo:
      "Beginners who want to learn the lifts properly, and experienced lifters chasing a bigger total.",
  },
  {
    slug: "functional-fitness",
    title: "Functional Fitness",
    description: "Move better. Perform better.",
    image: "/images/functional-fitness.webp",
    heroPosition: "center",
    alt: "Member training with free weights in the functional training zone",
    meta: "Mobility · Full body",
    level: "All levels",
    duration: "45 min",
    sessions: "2–4 / week",
    intro:
      "Full-body sessions that train the patterns real life uses — carrying, hinging, pushing, pulling and rotating. Expect kettlebells, sleds, ropes and bodyweight work rather than isolated machine circuits.",
    highlights: [
      "Mobility screen at intake, then targeted work on your restrictions",
      "Mixed-modality sessions that never repeat the same week twice",
      "Scaled options in every class, from first-timer to athlete",
      "Emphasis on joint health and staying pain-free long term",
    ],
    suitedTo:
      "Anyone whose job or sport demands a body that moves well, and members returning after a long break.",
  },
  {
    slug: "personal-training",
    title: "Personal Training",
    description: "One-on-one coaching built around your goals.",
    image: "/images/personal-training.webp",
    alt: "Personal trainer working a cable machine during a coaching session",
    meta: "1:1 · Fully tailored",
    /** Portrait source — bias the wide hero crop upwards. */
    heroPosition: "center 18%",
    level: "Fully tailored",
    duration: "60 min",
    sessions: "1–5 / week",
    intro:
      "Undivided attention from a coach who knows your history, your schedule and your goal. Every session is planned in advance, adjusted on the day, and logged so nothing is left to memory.",
    highlights: [
      "Full assessment: movement, strength baseline, lifestyle and nutrition",
      "A programme written for your body — never a template",
      "Session notes and progress tracking you can see any time",
      "Flexible scheduling, including early mornings and late evenings",
    ],
    suitedTo:
      "Members with a specific deadline or goal, anyone rehabbing an injury, and those who simply train better with accountability.",
  },
  {
    slug: "hiit-and-conditioning",
    title: "HIIT & Conditioning",
    description: "High-intensity workouts designed to improve endurance.",
    image: "/images/hiit-conditioning.webp",
    heroPosition: "center",
    alt: "Rows of cardio machines in the IRONFORGE conditioning studio",
    meta: "Intervals · Engine work",
    level: "Intermediate",
    duration: "40 min",
    sessions: "2–3 / week",
    intro:
      "Short, hard, precisely dosed intervals that build a bigger engine without wrecking your recovery. Work capacity is measured, not guessed — every block has a target you are chasing.",
    highlights: [
      "Bike, rower, ski-erg and sled intervals with prescribed pacing",
      "Heart-rate guided so intensity is real, not just uncomfortable",
      "Sessions capped at 40 minutes — high quality, not junk volume",
      "Programmed around your lifting so the two support each other",
    ],
    suitedTo:
      "Members who want visible conditioning gains, athletes in season, and anyone short on time.",
  },
] as const;

export const trainers = [
  {
    name: "Alex Carter",
    role: "Strength & Conditioning Coach",
    image: "/images/trainer-alex-carter.webp",
    alt: "Alex Carter, strength and conditioning coach, resting between sets",
    focus: "Powerlifting · Hypertrophy",
    years: "12 yrs",
  },
  {
    name: "Maya Brooks",
    role: "Personal Trainer",
    image: "/images/trainer-maya-brooks.webp",
    alt: "Maya Brooks, personal trainer, standing on the gym floor",
    focus: "Fat loss · Habit coaching",
    years: "8 yrs",
  },
  {
    name: "Sofia Reyes",
    role: "Performance Coach",
    image: "/images/trainer-sofia-reyes.webp",
    alt: "Sofia Reyes, performance coach, training on a cable machine",
    focus: "Athletic performance · Conditioning",
    years: "9 yrs",
  },
] as const;

export const features = [
  {
    number: "01",
    title: "Expert Coaching",
    description:
      "Certified coaches who correct your technique, track your numbers and adjust the plan every single block.",
  },
  {
    number: "02",
    title: "Premium Equipment",
    description:
      "Calibrated plates, competition bars, plate-loaded machines and a full conditioning floor — all maintained daily.",
  },
  {
    number: "03",
    title: "Personalized Programs",
    description:
      "Your program is written around your goals, schedule and history — never copied from a generic template.",
  },
  {
    number: "04",
    title: "Supportive Community",
    description:
      "A floor where people spot each other, celebrate PRs and show up together at 5 AM on a Tuesday.",
  },
  {
    number: "05",
    title: "Results-Driven Training",
    description:
      "Quarterly assessments, measurable benchmarks and honest feedback so progress is proven, not guessed.",
  },
  {
    number: "06",
    title: "24/7 Access",
    description:
      "Secure member entry around the clock, so your training fits your life instead of the other way around.",
  },
] as const;

export const gallery = [
  {
    src: "/images/facility-premium-interior.webp",
    alt: "Premium gym interior with polished floors and ambient lighting",
    caption: "Premium Interior",
    span: "lg:col-span-2 lg:row-span-2",
    ratio: "aspect-[4/3] lg:aspect-auto",
  },
  {
    src: "/images/facility-cardio-zone.webp",
    alt: "Cardio zone lined with treadmills and cross-trainers",
    caption: "Cardio Zone",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/facility-weight-training.webp",
    alt: "Weight training area with a loaded olympic barbell",
    caption: "Weight Training",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/facility-free-weights.webp",
    alt: "Dumbbell racks and free weights beside floor-to-ceiling windows",
    caption: "Free Weights",
    span: "lg:col-span-2",
    ratio: "aspect-[4/3] lg:aspect-[2/1]",
  },
  {
    src: "/images/facility-functional-area.webp",
    alt: "Functional training area with cable machines and open floor space",
    caption: "Functional Area",
    span: "lg:col-span-2",
    ratio: "aspect-[4/3] lg:aspect-[2/1]",
  },
  {
    src: "/images/facility-training-equipment.webp",
    alt: "Members using benches and training equipment on the main floor",
    caption: "Training Equipment",
    span: "lg:col-span-2",
    ratio: "aspect-[4/3] lg:aspect-[2/1]",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Joining IRONFORGE completely changed the way I train. I feel stronger, more confident, and more disciplined.",
    name: "Marcus R.",
    detail: "Member · 14 months",
    result: "+45 kg",
    resultLabel: "Deadlift PR",
  },
  {
    quote:
      "The coaching is the difference. Someone actually watches my technique, adjusts my program and keeps me honest.",
    name: "Priya N.",
    detail: "Member · 9 months",
    result: "-11 kg",
    resultLabel: "Body weight",
  },
  {
    quote:
      "I came in with zero gym experience. Eight months later I train five days a week and genuinely look forward to it.",
    name: "Daniel S.",
    detail: "Member · 8 months",
    result: "5×",
    resultLabel: "Sessions / week",
  },
] as const;

export const pricing = [
  {
    name: "Starter",
    price: "29",
    period: "/ month",
    summary: "Everything you need to build the habit.",
    features: ["Gym Access", "Basic Equipment", "Locker Access"],
    featured: false,
  },
  {
    name: "Popular",
    price: "49",
    period: "/ month",
    summary: "Our most chosen plan — training with structure.",
    features: [
      "Unlimited Gym Access",
      "Group Classes",
      "Locker Access",
      "Fitness Assessment",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "89",
    period: "/ month",
    summary: "Full coaching, built entirely around you.",
    features: [
      "Unlimited Access",
      "Personal Training",
      "Custom Workout Plan",
      "Nutrition Guidance",
      "Priority Support",
    ],
    featured: false,
  },
] as const;

export const scheduleDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export type ScheduleDay = (typeof scheduleDays)[number];

/** Demo timetable — replace with the club's real class schedule. */
export const schedule: Record<
  ScheduleDay,
  { time: string; name: string; coach: string; duration: string; intensity: "Low" | "Moderate" | "High" }[]
> = {
  Monday: [
    { time: "06:00", name: "Strength — Lower Body", coach: "Alex Carter", duration: "60 min", intensity: "High" },
    { time: "12:30", name: "Express HIIT", coach: "Sofia Reyes", duration: "40 min", intensity: "High" },
    { time: "18:00", name: "Functional Fitness", coach: "Maya Brooks", duration: "45 min", intensity: "Moderate" },
    { time: "19:30", name: "Mobility & Recovery", coach: "Maya Brooks", duration: "45 min", intensity: "Low" },
  ],
  Tuesday: [
    { time: "06:00", name: "Conditioning — Engine", coach: "Sofia Reyes", duration: "40 min", intensity: "High" },
    { time: "17:00", name: "Strength — Upper Body", coach: "Alex Carter", duration: "60 min", intensity: "High" },
    { time: "19:00", name: "Beginners Barbell", coach: "Alex Carter", duration: "60 min", intensity: "Moderate" },
  ],
  Wednesday: [
    { time: "06:00", name: "Functional Fitness", coach: "Maya Brooks", duration: "45 min", intensity: "Moderate" },
    { time: "12:30", name: "Express HIIT", coach: "Sofia Reyes", duration: "40 min", intensity: "High" },
    { time: "18:00", name: "Strength — Full Body", coach: "Alex Carter", duration: "60 min", intensity: "High" },
  ],
  Thursday: [
    { time: "06:00", name: "Conditioning — Intervals", coach: "Sofia Reyes", duration: "40 min", intensity: "High" },
    { time: "17:30", name: "Functional Fitness", coach: "Maya Brooks", duration: "45 min", intensity: "Moderate" },
    { time: "19:00", name: "Mobility & Recovery", coach: "Maya Brooks", duration: "45 min", intensity: "Low" },
  ],
  Friday: [
    { time: "06:00", name: "Strength — Lower Body", coach: "Alex Carter", duration: "60 min", intensity: "High" },
    { time: "12:30", name: "Lunch Express", coach: "Sofia Reyes", duration: "30 min", intensity: "Moderate" },
    { time: "18:00", name: "Friday Finisher", coach: "Sofia Reyes", duration: "45 min", intensity: "High" },
  ],
  Saturday: [
    { time: "08:00", name: "Weekend Strength", coach: "Alex Carter", duration: "75 min", intensity: "High" },
    { time: "10:00", name: "Functional Fitness", coach: "Maya Brooks", duration: "45 min", intensity: "Moderate" },
    { time: "11:30", name: "Open Gym Coaching", coach: "Rotating coach", duration: "90 min", intensity: "Low" },
  ],
  Sunday: [
    { time: "09:00", name: "Mobility & Recovery", coach: "Maya Brooks", duration: "45 min", intensity: "Low" },
    { time: "10:30", name: "Conditioning — Engine", coach: "Sofia Reyes", duration: "40 min", intensity: "High" },
  ],
};

export const faqs = [
  {
    question: "Do I need to sign a long contract?",
    answer:
      "No. Every IRONFORGE membership is month to month — you can switch plans or cancel any time from your member account, and there is no joining fee.",
  },
  {
    question: "Is the free trial really free?",
    answer:
      "Yes. Your first session includes a facility tour, a movement assessment with a coach and a full workout. No card details, no obligation to join afterwards.",
  },
  {
    question: "I have never trained before. Will I be out of my depth?",
    answer:
      "Not at all — roughly half of our new members start with no gym experience. Every programme has scaled options, and your first session is spent learning the movements rather than chasing numbers.",
  },
  {
    question: "Are classes included in my membership?",
    answer:
      "Group classes are included on the Popular and Elite plans. Starter members can attend classes as a paid add-on, or upgrade at any time.",
  },
  {
    question: "What are the opening hours?",
    answer:
      "Staffed hours are 5:00 AM – 11:00 PM Monday to Friday and 7:00 AM – 9:00 PM at weekends. Members get secure 24/7 access with their key fob outside those hours.",
  },
  {
    question: "Do you have showers, lockers and parking?",
    answer:
      "Yes — changing rooms with showers and day lockers are included with every plan, and there is free on-site parking for members.",
  },
  {
    question: "Can I freeze my membership if I travel?",
    answer:
      "You can freeze any plan for up to three months a year at no cost. Just let the front desk know before your next billing date.",
  },
  {
    question: "Do you offer personal training on top of a membership?",
    answer:
      "Personal training is included in the Elite plan and can be added to any other plan as single sessions or discounted blocks of five or ten.",
  },
] as const;
