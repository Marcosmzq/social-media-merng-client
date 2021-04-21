import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="w-32  bg-white p-5 rounded-full flex justify-center items-center space-x-3">
      <div className="w-5 bg-rose text-rose rounded-full animate-bounce one">
        1
      </div>
      <div className="w-5 bg-rose text-rose rounded-full animate-bounce two">
        2
      </div>
      <div className="w-5 bg-rose text-rose rounded-full animate-bounce three">
        3
      </div>

      <style jsx>{`
        .one,
        .three {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
