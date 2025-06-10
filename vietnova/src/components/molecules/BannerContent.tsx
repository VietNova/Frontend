const BannerContent = () => (
    <div className='mx-auto max-w-md text-center'>
      {/* Tiêu đề chính */}
      <h1 className='text-5xl leading-tight font-extrabold text-black'>
        Benefits of <br /> regular exercise
      </h1>
  
      {/* Dòng kẻ + tiêu đề phụ */}
      <div className='mt-4 flex items-center justify-center'>
        <div className='mr-2 h-[2px] w-12 bg-gray-400'></div>
        <p className='text-lg font-semibold text-pink-500'>What we Do</p>
      </div>
  
      {/* Nội dung mô tả */}
      <p className='mt-3 text-base text-gray-600'>
        At our comunity, you can experience the best level of customer service.
      </p>
  
      {/* Nút bấm */}
      <button className='mt-5 rounded-md bg-blue-600 px-6 py-2 text-lg font-medium text-white hover:bg-blue-700'>
        Join now
      </button>
    </div>
  );
  
  export default BannerContent;