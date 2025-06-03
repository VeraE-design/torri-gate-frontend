import { createContext, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { useEffect } from "react";
import { axiosInstance } from "../utils/axiosInstance";

export const TenantContext = createContext();

const Tenantprovider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const { token } = useAppContext();
  const [total, setTotal] = useState(0);
  const [locValue, setLocValue] = useState("");
  const [budget, setBudget] = useState("");
  const [type, setType] = useState("");

  //api call
  const fetchProperties = async () => {
    if (token) {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(
          `/property?page=${page}&location=${locValue}&budget=${budget}&type=${type}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProperties(data.properties);
        setPage(data.currentPage);
        setTotalPage(data.totalPage);
        setTotal(data.totalProperties);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [token, page, locValue, type, budget]);

  return (
    <TenantContext.Provider
      value={{
        isLoading,
        properties,
        page,
        setPage,
        totalPage,
        setLocValue,
        setType,
        setBudget,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export default Tenantprovider;
