import * as React from "react";
import { Address } from "../types/Address";
import Cta from "./Cta";

export interface BannerProps {
  name?: string;
  address?: Address;
}


const Banner = (props: BannerProps) => {
  const { name, address } = props;

  return (
    <>
        <div className="absolute left-0 right-0 flex flex-col items-center">
          <div className="w-196 my-8 rounded-xl bg-amber-500 border-8 shadow-xl border-amber-600 px-4 py-2 text-center">
            <div>
              <h1 className="text-white text-3xl font-semibold">{name}</h1>
              <h1>{address}</h1>
            </div>
          </div>
        </div>
        <script src="/src/assets/js/script.js"></script>
    </>
  );
};

export default Banner;
