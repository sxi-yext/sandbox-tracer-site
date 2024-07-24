import * as React from "react";
import { Address } from "../types/Address";

export interface BannerProps {
  name?: string;
  address?: Address;
  characterEncoding: string;
}

const zeroPad = (num, places) => String(num).padStart(places, '0')

function checkTimestamp(name) {
  let now = new Date();
  let updateTime = Date.parse(name.replace("Updated on ",""))
  let elapsedTime = (now.getTime()-updateTime)/1000
  let result = "Good"
  if (elapsedTime > 30 * 60)
    result = "Bad"
  let elapsedSecond = Math.floor(elapsedTime % 60)
  elapsedTime = Math.floor(elapsedTime / 60)
  let elapsedMinute = elapsedTime % 60
  let elapsedHour = Math.floor(elapsedTime / 60)
  let elapse = zeroPad(elapsedHour,2) + ":" + zeroPad(elapsedMinute,2) + ":" + zeroPad(elapsedSecond,2) + " Seconds ago";
  return {'elapse':elapse, 'result':result}
}

const Banner = (props: BannerProps) => {
  const { name, address, characterEncoding} = props;
  let {elapse, result} = checkTimestamp(name)
  let color = "green"
  if (result == "BAD")
    color = "red"
  return (
    <>
        <div className="absolute left-0 right-0 flex flex-col items-center">
          <div className="w-196 my-8 rounded-xl bg-amber-300 border-8 shadow-xl border-amber-600 px-4 py-2 text-center">
            <span class="entity">
                <h1 id="name" className="text-black text-3xl font-semibold">{name}</h1>
                <h1 id="elapse" style={{color: "blue", fontSize: "30px"}}>{elapse}</h1>
                <h1 class="rating" style={{color: color, fontSize: "40px"}}>{result}</h1>
                <h1 class="encoding-chars" style={{color: color, fontSize: "40px"}}>{characterEncoding}</h1>
              </span>
          </div>
        </div>        
    </>
  );
};

export default Banner;
