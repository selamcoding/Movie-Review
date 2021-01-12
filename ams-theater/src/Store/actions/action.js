import Axios from "axios";

export const Actions = () => {
  return {
    type: "mov",
    data: [],
  };
};
export const newData = (result) => {
  return {
    type: "mov",
    data: result,
  };
};

export const GetDatafromServer = () => {
  return (dispatch) => {
    Axios.get("/all").then((result) => {
      console.log("from Get ", result.data);
      dispatch(newData(result.data));
    });
  };
};
