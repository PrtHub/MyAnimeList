import HeroCard from "./HeroCard.jsx";
import { Vinland, YN, DS, OP, JJKS, Musho, VE, CSM, Hyouka, Demon } from "../assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="text-center mt-2 sm:rounded-lg"
      >
        <SwiperSlide>
          <HeroCard
            img={OP}
            title="One Piece"
            data="TV-Series | 1999 - "
            story="The series focuses on Monkey D. Luffy—a young man made of rubber after unintentionally eating a Devil Fruit—who sets off on a journey from the East Blue Sea to find the deceased King of the Pirates Gol D. Roger's ultimate treasure known as the 'One Piece', and takeover his prior title."
            url={
              <Link
                to="https://www.netflix.com/title/80107103"
                className="bg-[#563bfa] px-4 py-2 rounded mt-2 "
              >
                Watch
              </Link>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            img={JJKS}
            title="Jujutsu Kaisan"
            data="TV-Series | 2019 - "
            story="Yuji Itadori, a kind-hearted teenager, joins his school's Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He hears about a cursed talisman - the finger of Sukuna, a demon - and its being targeted by other cursed beings."
            url={
              <Link to="https://www.netflix.com/in/title/81278456" className='bg-[#563bfa] px-4 py-2 rounded mt-2'>Watch</Link>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            img={CSM}
            title="Chainsaw Man"
            data="TV-Series | 2022 - "
            story="Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws."
            url={
              <Link to="https://www.crunchyroll.com/series/GVDHX8QNW/chainsaw-man" className='bg-[#563bfa] px-4 py-2 rounded mt-2'>Watch</Link>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            img={Hyouka}
            title="Hyouka"
            data="TV-Series | 2012 - "
            story="Hyouka centers on Oreki Hotarou and his life in the Classic Literature Club. His mundane world is flipped upside down as they begin to solve various mysteries. Hyouka centers on Oreki Hotarou and his life in the Classic Literature Club. His mundane world is flipped upside down as they begin to solve various mysteries."
            url={
              <Link to="https://www.crunchyroll.com/series/G6P585256/hyouka" className='bg-[#563bfa] px-4 py-2 rounded mt-2'>Watch</Link>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            img={Vinland}
            title="Vinland Saga"
            data="TV-Series | 2019 - "
            story="The story combines a dramatization of King Cnut the Great's historical rise to power with a revenge plot centered on the historical explorer Thorfinn, the son of a murdered ex-warrior who serves under a group of mercenaries responsible for the deed."
            url={
              <Link to="https://www.netflix.com/title/81249833" className='bg-[#563bfa] px-4 py-2 rounded mt-2'>Watch</Link>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            img={YN}
            title="Your Name"
            data="Movie | 2016"
            story="Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person."
            url={
              <Link to="https://www.amazon.com/Your-Name-Makoto-Shinkai/dp/B078SNJK8G" className='bg-[#563bfa] px-4 py-2 rounded mt-2'>Watch</Link>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            img={Musho}
            title="Mushoku Tensei"
            data="TV-Series | 2022 - "
            story="Mushoku Tensei is a Japanese anime series based on the light novel series of the same title. It follows jobless and hopeless man who dies after having a sad and reclusive life and reincarnates in a fantasy world while keeping his memories, determined to enjoy his new life without regrets under the name Rudeus Greyrat."
            url={
              <Link to="https://www.youtube.com/watch?v=mKS67U6ZEWM&list=PLwLSw1_eDZl01_ftoIT3birJWkpxFZkEl&index=2" className='bg-[#563bfa] px-4 py-2 rounded mt-2'>Watch</Link>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            img={VE}
            title="Violet Evergarden"
            data="Movie | 2018 "
            story="In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people. After four long years of conflict, The Great War has finally come to an end."
            url={
              <Link to="https://www.netflix.com/title/80182123" className='bg-[#563bfa] px-4 py-2 rounded mt-2'>Watch</Link>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            img={Demon}
            title="Demon Slayer"
            data="TV-Series | 2019 - "
            story="Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."
            url={
              <Link to="https://demonslayer-anime.com/" className='bg-[#563bfa] px-4 py-2 rounded mt-2'>Watch</Link>
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
