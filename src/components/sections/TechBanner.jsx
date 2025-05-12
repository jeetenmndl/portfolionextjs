import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee"
import Image from "next/image";
import { CoolMode } from "../magicui/cool-mode";

const reviews = [
   {
    name: "Next",
    img: "https://simpleicons.org/icons/nextdotjs.svg",
    color: "#ffffff"
  },
  {
    name: "React",
    img: "https://simpleicons.org/icons/react.svg",
    color: "#61DAFB"
  },
   {
    name: "MongoDB",
    img: "https://simpleicons.org/icons/mongodb.svg",
    color: "#47A248"
  },
  {
    name: "Node",
    img: "https://simpleicons.org/icons/nodedotjs.svg",
    color: "#8CC84B"
  }, {
    name: "Git",
    img: "https://simpleicons.org/icons/git.svg",
    color: "#F05032"
  }, 
  
  
  {
    name: "Github",
    img: "https://simpleicons.org/icons/github.svg",
    color: "#ffffff"
  },{
    name: "Tailwind",
    img: "https://simpleicons.org/icons/tailwindcss.svg",
    color: "#06B6D4"
  },
  {
    name: "Html",
    img: "https://simpleicons.org/icons/html5.svg",
    color: "#E34F26"
  },
  {
    name: "Css",
    img: "https://simpleicons.org/icons/css.svg",
    color: "#1572B6"
  },
  {
    name: "Javascript",
    img: "https://simpleicons.org/icons/javascript.svg",
    color: "#F7DF1E"
  },
  {
    name: "Typescript",
    img: "https://simpleicons.org/icons/typescript.svg",
    color: "#007ACC"
  },
  
  {
    name: "Figma",
    img: "https://simpleicons.org/icons/figma.svg",
    color: "#F24E1E"
  },
  {
    name: "Vercel",
    img: "https://simpleicons.org/icons/vercel.svg",
    color: "#ffffff"
  },
  {
    name: "Postman",
    img: "https://simpleicons.org/icons/postman.svg",
    color: "#FF6C37"
  },
  {
    name: "Express",
    img: "https://simpleicons.org/icons/express.svg",
    color: "#ffffff"
  },
  {
    name: "Bootstrap",
    img: "https://simpleicons.org/icons/bootstrap.svg",
    color: "#563D7C"
  },
  {
    name: "MySQL",
    img: "https://simpleicons.org/icons/mysql.svg",   
    color: "#4479A1"
  },
  {
    name: "Slack",
    img: "https://simpleicons.org/icons/slack.svg", 
    color: "#4A154B"
  },
  {
    name: "C",
    img: "https://simpleicons.org/icons/c.svg",
    color: "#A8B9CC"
  },
  {
    name: "Python",
    img: "https://simpleicons.org/icons/python.svg",
    color: "#3776AB"
  },
]

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  color
}) => {
  return (

    <CoolMode>
    
    <figure
      className={cn(
        "relative w-24 h-24 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2 my-2 grid place-items-center",``,
        // light styles
        ` bg-white/60 hover:bg-gray-400/50 `,
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      style={{
        backgroundColor: color,
      }}
    >
      <Image src={img} alt={name} width={30} height={30} className={"h-12 w-12 "+`bg-[${color}]`} />
    </figure>
    </CoolMode>
  );
};

export default function TechBanner() {
  return (
    <div className=" border-x border-gray-800 relative flex w-full flex-col items-center justify-center overflow-hidden pb-10">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
    </div>
  );
}
