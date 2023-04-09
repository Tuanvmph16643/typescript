import { IProduct } from "../models";

type Props = {
  data: IProduct;
};

const ProDetail = ({ data }: Props) => {
  return (
    <div className="row block">
      <h2 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        {data.name}
      </h2>

      <div className="row m-10 ">
        <div className="col-6">
          <img
            alt="Art"
            src={data.images?.[0].base_url}
            className="h-full w-full object-cover sm:h-full lg:h-full"
          />
        </div>
        <div className="col-6">
          <p className="mt-2 max-w-sm text-gray-700">{data.name}</p>
        </div>
      </div>
      <div className="row m-10">
        <div className="col-6">
          <div className="row m-5-10">
            <div className="col-3">
              <img
                src={data.images?.[1].base_url}
                alt="art"
                className=" object-cover sm:h-20 lg:h-40"
              />
            </div>
            <div className="col-3">
              <img
                src={data.images?.[0].base_url}
                alt="art"
                className=" object-cover sm:h-20 lg:h-40"
              />
            </div>
            <div className="col-3">
              <img
                src={data.images?.[1].base_url}
                alt="art"
                className=" object-cover sm:h-20 lg:h-40"
              />
            </div>
            <div className="col-3">
              <img
                src={data.images?.[0].base_url}
                alt="art"
                className=" object-cover sm:h-20 lg:h-40"
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <button className="btn bg-red-600 text-white hover:bg-red-800 py-6 font-bold px-20 rounded m-10">
            Mua ngay
          </button>
        </div>
        <div className="col-3 flex">
          <button className="flex justify-center items-center">
            <svg
            className="w-10 h-10 p-2 m-2 dark:text-gray-950 border-solid border-2 border-red-500 rounded-md "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <div className="row">
        <b className=" text-center text-lg">Đặc điểm nổi bật</b>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8"></div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="row gap-5">
        <div className="col-1"></div>
        <div
          className="col-10"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default ProDetail;
