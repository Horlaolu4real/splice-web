import image from "@/component/image/icon (2).svg";
import pic from "@/component/assest/priyna.png";
import source from "../../../public/resource.jpg";
import source1 from "../../../public/resource-two.jpg";
import { StaticImageData } from "next/image";
import one from "@/component/image/section/first.jpg";
import two from "@/component/image/section/second.jpg";
import three from "@/component/image/section/third.jpg";
import four from "@/component/image/section/four.jpg";
import five from "@/component/image/section/five.jpg";
import six from "@/component/image/section/six.jpg";

export interface Product {
  icon: StaticImageData | string;
  txt: string;
  user: StaticImageData | string;
  doctor: string;
  ceo: string;
}
export interface Resource {
  img: StaticImageData | string;
  txt: string;
  para: string;
}
export interface Listing {
  image: StaticImageData | string;
  description: string;
  txt: string;
}

// export interface Product {
//   icon: StaticImageData | string;
//   txt: string;
//   user: StaticImageData | string;
//   doctor: string;
//   ceo: string;
// }

export const buisness: Product[] = [
  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },
  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },
];

export const categories: Product[] = [
  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },
  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },

  {
    icon: image,
    txt: "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    user: pic,
    doctor: "Dr. Priya Sharma",
    ceo: "CEO, Chanel",
  },
];

export const resource: Resource[] = [
  {
    img: source,
    txt: "From Favour to Founder: How Layo Ogunbanwo Turned a Simple Act of Support Into a Platform Powering Africa’s Beauty Industry",
    para: "What started as helping a friend during the 2020 lockdown evolved into Splice — a purpose-built software now trusted by 100+ businesses serving 30,000+ clients across Nigeria.",
  },
  {
    img: source1,
    txt: "From Favour to Founder: How Layo Ogunbanwo Turned a Simple Act of Support Into a Platform Powering Africa’s Beauty Industry",
    para: "What started as helping a friend during the 2020 lockdown evolved into Splice — a purpose-built software now trusted by 100+ businesses serving 30,000+ clients across Nigeria.",
  },
];

export const listing: Listing[] = [
  {
    image: one,
    description:
      "What the Beauty Industry Really Needs: Lessons from Building Splice With Over 200 African Business Owners",
    txt: "Disjointed systems, pen-and-paper booking, missed opportunities — discover the real challenges beauty professionals face, and how Splice is solving them from the ground up.",
  },
  {
    image: two,
    description:
      "The Rise of Creative Business Tools in Africa: Why Splice Is Redefining Salon and Spa Management",
    txt: "Generic software wasn’t built for Nigeria’s booming beauty scene. Splice bridges the gap between ambition and the tools needed to run a smooth, modern business.",
  },
  {
    image: three,
    description:
      "What the Beauty Industry Really Needs: Lessons from Building Splice With Over 200 African Business Owners",
    txt: "Layo Ogunbanwo’s product playbook — how her global experience shaped a platform that listens, adapts, and empowers African entrepreneurs every step of the way.",
  },
  {
    image: four,
    description:
      "What 500 Beauty Customers Taught Us: Key Insights From the 2024 Beyond Beauty Report",
    txt: " From rewards to referrals, discover what keeps Nigerian customers coming back — and how Splice is helping business owners use those insights to grow smarter.",
  },
  {
    image: five,
    description:
      "What the Beauty Industry Really Needs: Lessons from Building Splice With Over 200 African Business Owners",
    txt: "Disjointed systems, pen-and-paper booking, missed opportunities — discover the real challenges beauty professionals face, and how Splice is solving them from the ground up.",
  },
  {
    image: six,
    description:
      "The Rise of Creative Business Tools in Africa: Why Splice Is Redefining Salon and Spa Management",
    txt: "Generic software wasn’t built for Nigeria’s booming beauty scene. Splice bridges the gap between ambition and the tools needed to run a smooth, modern business.",
  },
];
