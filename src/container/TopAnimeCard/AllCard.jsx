import React from "react";
import { useGetAllAnimeQuery } from "../../redux/animeApi";
import { Error, Loader } from "../../components";
import {AnimeCard} from "../../components";
import { useNavigate } from "react-router-dom";



const AllCard = () => {
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetAllAnimeQuery();
  const AllAnime = Array.isArray(data) ? data.slice(0, 14) : [];


  if (isFetching) return <Loader />;

  if (error) return <Error />;

  const handleSeeMore = (e) => {
     e.preventDefault();
     window.scrollTo(0, 0);
     navigate('/all-anime')
  }

  return (
    <>
      <div className="w-full mt-14 text flex flex-col items-start gap-5 px-6 relative ">
        <section className=" w-full flex items-center justify-between ">
          <h1 className="headerText">Top Anime</h1>
          <button>
            <div
              onClick={handleSeeMore}
              className="seeMore"
            >
              SEE MORE +
            </div>
          </button>
        </section>
        <section
        className="cardWrap">
          {AllAnime?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id}/>         
          ))}
        </section>
      </div>
    </>
  );
};

export default AllCard;