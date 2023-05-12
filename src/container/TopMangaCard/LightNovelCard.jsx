import React from "react";
import { useGetLightNovelQuery } from "../../redux/animeApi";
import { Error, Loader } from "../../components";
import {AnimeCard} from "../../components";
import { useNavigate } from "react-router-dom";



const LightNovelCard = () => {
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetLightNovelQuery();
  const lightNovel = Array.isArray(data) ? data.slice(0, 14) : [];

  if (isFetching) return <Loader/>;

  if (error) return <Error />;

  const handleSeeMore = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/novel')
 }

  return (
    <>
      <div className="w-full mt-14 text flex flex-col items-start gap-5 px-6 relative ">
        <div className=" w-full flex items-center justify-between ">
          <h1 className="headerText">Light Novel</h1>
          <button>
            <div
              onClick={handleSeeMore}
              className="seeMore"
            >
              SEE MORE +
            </div>
          </button>
        </div>
        <div
        className="cardWrap">
          {lightNovel?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id}/>         
          ))}
        </div>
      </div>
    </>
  );
};

export default LightNovelCard;