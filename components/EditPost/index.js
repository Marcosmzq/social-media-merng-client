import Head from "next/head";

const EditPost = ({ activeEditPost, setActiveEditPost }) => {
  const handleEdit = () => {
    setActiveEditPost(!activeEditPost);
  };
  return (
    <>
      <Head>
        {/*FONTAWESOME CDN*/}
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <button
        onClick={handleEdit}
        className="p-2 w-full border border-rose bg-whiteFade rounded focus:outline-none font-title font-extrabold text-1xl text-center text-rose hover:bg-rose hover:text-white"
      >
        <span>
          <i className="fas fa-edit"></i>
        </span>{" "}
        {activeEditPost ? "Cancel" : ""}
      </button>
    </>
  );
};
export default EditPost;
