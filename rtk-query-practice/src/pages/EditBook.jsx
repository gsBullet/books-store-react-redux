import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../features/api/apiSlice";
import EditBookCard from "../components/EditBookCard";
import Loader from "../components/loader/Loader";

const EditBook = () => {
  const { id } = useParams();
  const { data: book, isError, isLoading } = useGetBookQuery(id);

  let content = null;

  if (isLoading) {
    content = Loader();
  }

  if (!isLoading && isError) {
    content = Error({ message: "There is an occur!!!", icon: "error" });
  }
  if (!isLoading && !isError && book.id === 0) {
    content = Error({ message: "There is an occur!!!", icon: "error" });
  }
  if (!isLoading && !isError && book.id) {
    content = <EditBookCard book={book} />;
  }

  return <div className="container">{content}</div>;
};

export default EditBook;
