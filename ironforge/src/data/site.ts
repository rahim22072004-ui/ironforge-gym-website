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
  hours: [
    { days: "Monday – Friday", time: "5:00 AM – 11:00 PM" },
    { days: "Saturday – Sunday", time: "7:00 AM – 9:00 PM" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
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
    title: "Strength Training",
    description: "Build power, muscle, and confidence.",
    image: "/images/strength-training.webp",
    alt: "Athlete gripping a loaded barbell before a deadlift on the training floor",
    meta: "Barbell · Progressive overload",
  },
  {
    title: "Functional Fitness",
    description: "Move better. Perform better.",
    image: "/images/functional-fitness.webp",
    alt: "Member training with free weights in the functional training zone",
    meta: "Mobility · Full body",
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching built around your goals.",
    image: "/images/personal-training.webp",
    alt: "Personal trainer working a cable machine during a coaching session",
    meta: "1:1 · Fully tailored",
  },
  {
    title: "HIIT & Conditioning",
    description:
      "High-intensity workouts designed to improve endurance.",
    image: "/images/hiit-conditioning.webp",
    alt: "Rows of cardio machines in the IRONFORGE conditioning studio",
    meta: "Intervals · Engine work",
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
